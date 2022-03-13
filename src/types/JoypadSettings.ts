export type JoypadSettings = {
    vibration?: {
      startDelay: number,
      duration: number,
      weakMagnitude: number,
      strongMagnitude: number
    }
    axisMovementThreshold?: number
    customButtonMapping?: () => any
  }