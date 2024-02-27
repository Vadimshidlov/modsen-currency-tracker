// export type ObserverFunctionType = (value: string) => void;
export type ObserverFunctionType = () => void;

class ChartObservable {
    private observers: ObserverFunctionType[];

    constructor() {
        this.observers = [];
    }

    subscribe(func: ObserverFunctionType) {
        this.observers.push(func);

        console.log(this.observers[0], `this.observers`);
    }

    unSubscribe(func: ObserverFunctionType) {
        this.observers = this.observers.filter((observer) => observer !== func);
    }

    notify(isBuilding: string) {
        if (isBuilding === "Building")
            this.observers.forEach((observer) => {
                observer();
            });
    }

    /* notify(value: string) {
        this.observers.forEach((observer) => {
            observer(value);
        });
    } */
}

export default new ChartObservable();
