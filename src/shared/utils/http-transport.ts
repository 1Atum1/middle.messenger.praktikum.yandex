const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
};

export interface Options {
    headers: unknown;
    data: unknown;
    timeout: number;
    method: string;
    tries: number;
}

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: Record<string, unknown>) {
    // Можно делать трансформацию GET-параметров в отдельной функции
    let result = '';
    const arrToStr = (arr: unknown) => {
        let result = '';
        (arr as Array<unknown>).forEach((v, index) => {
            result += `${v}${index === (arr as Array<unknown>).length - 1 ? '' : ','}`
        })
        return result;
    };
    if (!data) {
        return '';
    }
    Object.keys(data).forEach((key: string, index: number) => {
        if (index === 0) {
            result += '?'
        }
        result += `${key}=${Array.isArray(data[key]) ? arrToStr(data[key]) : String(data[key])}${index === Object.keys(data).length - 1 ? '' : '&'}`;
    });


    console.log(result);
    return result;
}

export class HTTPTransport {
    get = (url: string, options: Options = {} as Options) => {
        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    put = (url: string, options: Options = {} as Options) => {

        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    post = (url: string, options: Options = {} as Options) => {

        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    delete = (url: string, options: Options = {} as Options) => {

        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url: string, options: Options, timeout: number = 5000) => {
        const {method, data} = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, method === METHODS.GET ? url + queryStringify(data) : url);


            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
            setTimeout(() => {
              reject("Some error")
            }, timeout)
        })
    };
}



const transport = new HTTPTransport();

export function fetchWithRetry(url: string, options = {} as Options) {

    const {tries = 1} = options;

    function onError(err: Error): unknown {
        const triesLeft = tries - 1;
        if (!triesLeft) {
            throw err;
        }

        return fetchWithRetry(url, {...options, tries: triesLeft})
    }

    return transport.request(url, options as Options).catch(onError)
}
