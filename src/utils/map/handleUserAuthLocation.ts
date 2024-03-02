import { UserAuthLocationPropsType } from "@/types/types";

export const handleUserAuthLocation = ({ onSuccess, onError }: UserAuthLocationPropsType) => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const ltt = position.coords.latitude;
                const lgt = position.coords.longitude;
                onSuccess(ltt, lgt);
            },
            () => {
                onError();
            },
        );
    }
};
