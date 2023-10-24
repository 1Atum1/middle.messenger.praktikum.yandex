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
}

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: unknown) {
    // Можно делать трансформацию GET-параметров в отдельной функции
    let result = '';
    const arrToStr = (arr: string[]) => {
        let result = '';
        arr.forEach((v, index) => {
            result += `${v}${index === arr.length - 1 ? '' : ','}`
        })
        return result;
    };
    if (!data) {
        return '';
    }
    Object.keys(data).forEach((key, index) => {
        if (index === 0) {
            result += '?'
        }
        result += `${key}=${Array.isArray((data as any)[key]) ? arrToStr((data as any)[key]) : String((data as any)[key])}${index === Object.keys(data).length - 1 ? '' : '&'}`;
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
    request = (url: string, options: any, timeout: number = 5000) => {
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
                xhr.send(data);
            }
            setTimeout(() => {
              reject("Some error")
            }, timeout)
        })
    };
}



const transport = new HTTPTransport();

// @ts-ignore
export function fetchWithRetry(url: string, options = {}) {
    // @ts-ignore
    const {tries = 1} = options;
    // @ts-ignore
    function onError(err: any) {
        const triesLeft = tries - 1;
        if (!triesLeft) {
            throw err;
        }

        return fetchWithRetry(url, {...options, tries: triesLeft})
    }

    return transport.request(url, options).catch(onError)
}
