import "@/components/pages/TimelinePage/Loader/Loader.scss";
import { Component } from "react";

export default class Loader extends Component {
    render() {
        return (
            <div className="loader__container">
                <div className="loader__items">
                    <div className="loader-item-1" />
                    <div className="loader-item-2" />
                    <div className="loader-item-3" />
                </div>
            </div>
        );
    }
}
