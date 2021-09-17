import Page from '@/components/Page';
import React from 'react';
import connect from '@/store/connect';
import { goBack, CallHistoryMethodAction } from 'connected-react-router';
import './index.scss';

interface IPageProps {
  pathname: string;
  search: string;
  hash: string;
  goBack: () => CallHistoryMethodAction;
}

const mapStateToProps = {
  pathname: 'router.location.pathname',
  search: 'router.location.search',
  hash: 'router.location.hash',
};

const mapDispatchToProps = {
  goBack: goBack,
};

@connect(mapStateToProps, mapDispatchToProps)
class Page1 extends Page<IPageProps> {
  componentDidMount = () => {
    console.log('获取到的location===', this.props);
  };

  handleGoBack = () => {
    this.props.goBack();
  };

  render() {
    return (
      <div className="page1">
        <div className="text1">Hello, Page122222! </div>
        <button type="button" onClick={this.handleGoBack}>
          返回界面
        </button>
      </div>
    );
  }
}

export default Page1;
