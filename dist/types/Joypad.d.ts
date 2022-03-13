/// <reference types="w3c-gamepad" />
import { JoypadEvent } from "./Events";
import { JoypadSettings } from "./JoypadSettings";
import { Key } from "./Key";
import { VibrationOptions } from "./VibrationOptions";
export declare type Joypad = {
    loopStarted: boolean;
    instances: Gamepad.Gamepad[];
    buttonEvents: {
        joypad: Key[][];
    };
    settings: JoypadSettings;
    remove: (index: number) => void;
    on: (event: JoypadEvent, callback: () => void) => {
        unsubscribe: () => void;
    };
    vibrate: (gamepadInstance: Gamepad.Gamepad, options: VibrationOptions) => () => void;
    set: (settings: JoypadSettings) => void;
    trigger: (event: JoypadEvent, data: any) => void;
};
