import React from 'react';
import BaseComponent from '../BaseComponent';
import { isContains, addEventListenerWrap } from './popUtils';
import './index.scss';
import Button from '../Button';

interface Props {
  /**
   * 按钮
   * @memberOf Props
   */
  renderBtnView: () => JSX.Element;

  /**
   *
   *
   * 弹窗内容
   * @memberOf Props
   */
  renderPopContentView: () => JSX.Element;

  /**
   *
   * 弹窗根节点范围
   * @memberOf Props
   */
  getRootDomNode?: () => HTMLElement;

  /**
   * 样式
   * @type {string}
   * @memberOf Props
   */
  className?: string;
}

interface State {
  /**
   *
   * 是否显示pop
   * @type {boolean}
   * @memberOf State
   */
  showPop: boolean;
}

/**
 *
 * 更多-下拉菜单弹窗
 * @export
 * @class TipPop
 * @extends {BaseComponent<Props, State>}
 */
export default class DropDownMenu extends BaseComponent<Props, State> {
  private domListener = null;

  private popupRef = null;

  constructor(props) {
    super(props);
    this.state = {
      showPop: false,
    };
    this.popupRef = React.createRef();
  }

  componentDidUpdate(_privProps, prevState) {
    if (!prevState.showPop && this.state.showPop) {
      //弹窗状态发生改变，从隐藏到显示，添加监听器
      this.setListener();
    } else if (prevState.showPop && !this.state.showPop) {
      ////弹窗状态发生改变，从隐藏到显示，取消监听器
      this.cancelListener();
    }
  }

  /**
   *
   *
   * 设置监听
   * @memberOf DropDownMenu
   */
  setListener = () => {
    //获取根节点
    const rootDom = this.getRootDomNode();
    //默认取消一次监听
    this.cancelListener();
    this.domListener = addEventListenerWrap(
      rootDom,
      'click',
      event => {
        const { target } = event;
        const root = this.getRootDomNode();
        const popupNode = this.getPopupDomNode();
        //判断是根节点框中的点击事件，并且不是弹窗区域，为任意点击消失区域。
        if (isContains(root, target) && !isContains(popupNode, target)) {
          console.log('直接关闭===', target, isContains(popupNode, target));
          //直接关闭
          this.hidePop();
        }
      },
      true,
    );
  };

  /**
   *
   *
   * 取消监听
   * @memberOf DropDownMenu
   */
  cancelListener = () => {
    if (this.domListener) {
      this.domListener?.remove();
      this.domListener = null;
    }
  };

  /**
   *
   * 获取pop弹窗节点
   * @returns
   *
   * @memberOf DropDownMenu
   */
  getPopupDomNode() {
    return this.popupRef.current || null;
  }

  /**
   *
   *
   * 获取默认根节点
   * @memberOf DropDownMenu
   */
  getRootDomNode = (): HTMLElement => {
    const { getRootDomNode } = this.props;
    if (getRootDomNode) {
      return getRootDomNode();
    }
    return window.document.body;
  };

  /**
   *
   *
   * 显示弹窗
   * @memberOf DropDownMenu
   */
  showPop = () => {
    const { showPop } = this.state;
    console.log('点击===', showPop);
    //这里弹窗打开，再次点击按钮，可以关闭弹窗
    if (showPop) {
      this.setState({
        showPop: false,
      });
      return;
    }

    this.setState({
      showPop: true,
    });
  };

  /**
   *
   *
   * 隐藏弹窗
   * @memberOf DropDownMenu
   */
  hidePop = () => {
    this.setState({
      showPop: false,
    });
  };

  render() {
    const { className } = this.props;
    const { showPop } = this.state;
    return (
      <div className={`tip-pop ${className}`} ref={this.popupRef}>
        <Button className="tip-pop-btn" onClick={this.showPop}>
          {this.props.renderBtnView()}
        </Button>
        {showPop ? (
          <div className="tip_pop-content">{this.props.renderPopContentView()}</div>
        ) : null}
      </div>
    );
  }
}
