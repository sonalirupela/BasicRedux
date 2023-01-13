export const ON_START = "ACTION/ONSTART";
export const ON_STOP = "ACTION/ONSTOP";
export const ON_LAP = "ACTION/ONLAP";

export const onStartAction = (payload) => ({
    type: ON_START,
    payload: payload,
});

export const onStopAction = () => ({
    type: ON_STOP,
    payload: {},
});