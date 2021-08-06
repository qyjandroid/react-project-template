

import Page from "@/components/Page";
import React from "react";
import connect from "@/store/connect";
import { goBack, CallHistoryMethodAction } from 'connected-react-router';
import "./index.scss";

interface IPageProps {
    router: any,
    goBack: () => CallHistoryMethodAction;
}

const mapStateToProps = {
    router: "router"
};

const mapDispatchToProps = {
    goBack: goBack
};


@connect(mapStateToProps, mapDispatchToProps)
class Page1 extends Page<IPageProps>{

    handleGoBack = () => {
        this.props.goBack();
    }
    render() {
        return (
            <div className='page1'>
                <div className="text1">Hello, Page122222! </div>
                <button onClick={this.handleGoBack}>返回界面</button>
            </div>
        );
    }
}

export default Page1;