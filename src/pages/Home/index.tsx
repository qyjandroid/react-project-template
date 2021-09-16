import React from 'react';
import Page from '@/components/Page';
import { UPDATE_USER_ID } from '@/store/actions/user';
import connect from '@/store/connect';
import CPng from '@/assets//images/02.png';
import HomeChild from './HomeChild';
import { withAppContextDecorators } from '@/common/AppContext';
import './index.scss';
import { IAppContext } from '@/types/IContext';

interface IHomeProps {
  userId: number;
  updateId: (id: number) => void;
}

interface IHomeState {
  count: number;
}

const mapStateToProps = {
  userId: 'user.userId',
};

const mapDispatchToProps = {
  updateId: UPDATE_USER_ID,
};

type HomeProps = IHomeProps & IAppContext;
//装饰器由下到上依次调用结果函数
//参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个实例成员。
@withAppContextDecorators
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Page<HomeProps, IHomeState> {
  //重要，代表这个IAppContext是默认自带的，不需要外界传入，直接注入的。
  static defaultProps: IAppContext;

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.props.updateId(5);
    }, 3000);
    console.log(this.props.test());
    this.setState({
      count: 1,
    });
  };

  render() {
    const { userId } = this.props;
    const { count } = this.state;
    console.log('this.props==', this.props);
    return (
      <div className="home">
        <div className="text1">Hello, World!{userId} </div>
        <div className="bg1">{count}</div>
        <img className="img1" src={CPng} alt="" />
        <HomeChild />
      </div>
    );
  }
}

export default Home;
