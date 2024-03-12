import { ObserverFunctionType } from "@/types";

class ChartObservable {
    private observers: ObserverFunctionType[];

    constructor() {
        this.observers = [];
    }

    subscribe(func: ObserverFunctionType) {
        this.observers.push(func);
    }

    unSubscribe(func: ObserverFunctionType) {
        this.observers = this.observers.filter((observer) => observer !== func);
    }

    notify(isBuilding: string) {
        if (isBuilding === "Building") {
            this.observers.forEach((observer) => {
                observer();
            });
        }
    }
}

export default new ChartObservable();
