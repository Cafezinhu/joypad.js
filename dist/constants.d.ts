declare const EVENTS: {
    CONNECT: {
        NATIVE: string;
        ALIAS: string;
    };
    DISCONNECT: {
        NATIVE: string;
        ALIAS: string;
    };
    BUTTON_PRESS: {
        NATIVE: any;
        ALIAS: string;
    };
    AXIS_MOVEMENT: {
        NATIVE: any;
        ALIAS: string;
    };
};
declare const STICKS: {
    LEFT: {
        NAME: string;
        AXES: {
            X: number;
            Y: number;
        };
    };
    RIGHT: {
        NAME: string;
        AXES: {
            X: number;
            Y: number;
        };
    };
};
declare const DIRECTIONS: {
    LEFT: string;
    RIGHT: string;
    TOP: string;
    BOTTOM: string;
};
declare const BUTTON_MAPPING: {
    button_0: number;
    button_1: number;
    button_2: number;
    button_3: number;
    button_4: number;
    button_5: number;
    button_6: number;
    button_7: number;
    button_8: number;
    button_9: number;
    button_10: number;
    button_11: number;
    button_12: number;
    button_13: number;
    button_14: number;
    button_15: number;
    button_16: number;
    button_17: number;
};
declare const AXIS_MOVEMENT_THRESHOLD = 0.8;
export { EVENTS, STICKS, DIRECTIONS, BUTTON_MAPPING, AXIS_MOVEMENT_THRESHOLD };
