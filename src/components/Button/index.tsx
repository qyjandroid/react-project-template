import React from 'react';
import BaseComponent from '../BaseComponent/index';
import ButtonCheck from './ButtonCheck';
import { setTimeout, classNames, isMobile } from '@/util/index';

interface IProps {
  disabled?: boolean;
  className: string;
  statId?: number;
  clickId?: string;
  style?: any;
  onClick?: Function;
  statMap?: any;
  children?: any;
  onMouseLeave?: any;
  onMouseEnter?: any;
  delayTime?: number;
  stopPropagation?: boolean;
}
export default class Button extends BaseComponent<IProps> {
  private curTimeout: any;

  private timeout: any;

  private buttonCheck;

  private isMob;

  static defaultProps = {
    disabled: false,
  };

  state = {
    clicked: false,
  };

  constructor(props) {
    super(props);
    this.buttonCheck = new ButtonCheck(props.delayTime);
    this.isMob = isMobile();
  }

  onItemClick = (e: any) => {
    const { stopPropagation, disabled, delayTime, onClick } = this.props;
    if (stopPropagation) {
      e.nativeEvent.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
    if (!this.buttonCheck.check()) return;
    try {
      if (disabled === true) return;
      this.curTimeout = setTimeout(() => {
        this.setState({ clicked: true });
      }, 10);
      if (this.timeout) {
        this.timeout();
      }
      this.timeout = setTimeout(() => {
        this.setState({ clicked: false });
      }, delayTime || 200);
      if (onClick) {
        onClick(e);
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentWillUnmount = () => {
    if (this.curTimeout) {
      this.curTimeout();
    }
    if (this.timeout) {
      this.timeout();
    }
  };

  render() {
    const { className, style, statId, clickId, disabled, ...other } = this.props;
    const { clicked } = this.state;
    const styles = disabled || this.isMob ? style : { cursor: 'pointer', ...style };
    return (
      <div
        {...other}
        className={classNames(clicked ? 'clicked' : '', disabled ? 'disabled' : '', className)}
        style={styles}
        onClick={this.onItemClick}
      >
        {this.props.children}
      </div>
    );
  }
}
