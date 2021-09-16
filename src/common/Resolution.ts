import { DeviceType } from '@/types/enum';

export default class Resolution {
  static DesignScreen = {
    [DeviceType.PC]: {
      WIDTH: 845,
      RATIO: 100,
    },
    [DeviceType.MOBILE]: {
      WIDTH: 750,
      RATIO: 100,
    },
    [DeviceType.TV]: {
      WIDTH: 1920,
      RATIO: 100,
    },
  };

  /**
   * 获取设计分辨率
   */
  static getDesign(deviceType: DeviceType = DeviceType.MOBILE) {
    return Resolution.DesignScreen[deviceType];
  }
}
