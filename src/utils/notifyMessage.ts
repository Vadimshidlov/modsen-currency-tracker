import { toast } from "react-toastify";

export const addDateMessage = () => {
    toast.success("Hello! You need to choose date and currency for building chart", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

export const successChartBuildMessage = () => {
    toast.success("🦄 Successful chart building!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};

// ChartObservable.subscribe(successChartBuildMessage);
