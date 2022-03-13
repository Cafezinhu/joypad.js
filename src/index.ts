// Entry point

import './events';
import joypad from './joypad';
import { hasGamepadApiSupport } from './helpers';
import { VibrationOptions } from './types/VibrationOptions';
import { JoypadEvent } from './types/Events';
import { Key } from './types/Key';
import { Joypad } from './types/Joypad';

export {joypad, Joypad, JoypadEvent, Key, VibrationOptions, hasGamepadApiSupport};