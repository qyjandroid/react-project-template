import React from 'react';
import Resolutions from '@/common/Resolution';

interface IResolutionComProps {
  WIDTH?: number;
}

export default class ResolutionCom extends React.Component<IResolutionComProps> {
  componentDidMount(): void {
    this.resize();
    window.onresize = this.resize;
  }

  resize = (): void => {
    //获取设计稿的尺寸
    const design = Resolutions.getDesign();
    const html = document.documentElement;
    const getHtmlFs = () => parseFloat(window.getComputedStyle(html, null)['font-size']);
    const getScreenWidth = () => {
      let htmlWidth = 0;
      try {
        const htmlElement = document.documentElement;
        htmlWidth = Math.max(
          htmlElement.offsetWidth || 0,
          htmlElement.clientWidth || 0,
          htmlElement.getBoundingClientRect().width || 0,
        );
        // 读取失败，其他方式读取
        if (!htmlWidth || htmlWidth <= 0) {
          if (window.orientation == 180 || window.orientation == 0) {
            //竖屏
            htmlWidth =
              window.innerWidth ||
              (window.screen && window.screen.width) ||
              (window.screen && window.screen.availWidth) ||
              0;
          } else if (window.orientation == 90 || window.orientation == -90) {
            //横屏
            htmlWidth =
              window.innerHeight ||
              (window.screen && window.screen.height) ||
              (window.screen && window.screen.availHeight) ||
              0;
          }
        }
      } catch (e) {
        console.log('获取屏幕宽度出错');
      }
      return htmlWidth | 0;
    };
    const WIDTH = this.props.WIDTH || design.WIDTH,
      //第一次进来没有设置过html标签font-size的时候
      screenWidth = getScreenWidth(),
      htmlFs = getHtmlFs(),
      mediaFs = (design.RATIO / WIDTH) * screenWidth; //获取页面宽度  设备宽度/fontSize=设计稿（750）/100=7.5;

    html.style.fontSize = `${mediaFs}px`; //根据页面大小算出font-size

    //以下是特殊处理 试过一台htc下的某个浏览器设置字体大小后再获取font-size会比所设的值会相对变小 所以设置大一点让它font-size的结果是想设的结果

    if (htmlFs !== mediaFs && Math.abs(htmlFs - mediaFs) > 2) {
      html.style.fontSize = '100px';
      html.style.fontSize = `${(100 / getHtmlFs()) * mediaFs}px`;
    }
  };

  render(): React.ReactNode {
    return this.props.children;
  }
}
