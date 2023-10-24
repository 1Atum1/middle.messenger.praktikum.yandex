export class EventBus {
    private listeners: Record<string, unknown>;
    constructor() {
        this.listeners = {};
    }

    on(event: string | number, callback: unknown) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string | number, callback: unknown) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener: unknown) => listener !== callback
        );
    }

    emit(event: string, ...args: unknown[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener: unknown): void {
            listener(...args);
        });
    }
}
