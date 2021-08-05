

import connect from "@/store/connect";
import React from "react";
import BaseComponent from '@/components/BaseComponent';
import { push } from 'connected-react-router';

import "./index.scss";


interface IHomeChildProps {
    pathname?: string;
    search?: string;
    hash?: string;
    push?: (path: string, s?: any) => void;
}

const mapStateToProps = {
    pathname: "router.location.pathname",
    search: "router.location.search",
    hash: "router.location.hash",
}


const mapDispatchToProps = {
    push
}

@connect(mapStateToProps, mapDispatchToProps)
class HomeChild extends BaseComponent<IHomeChildProps>{
    handleGoPage = () => {
        this.props.push("/page1", { a: 1 });
    }
    render() {
        const { pathname, search, hash } = this.props;
        return (
            <div className='home-child'>
                <h1>pathname::{pathname} </h1>
                <h1>search::{search} </h1>
                <h1>hash::{hash} </h1>
                <button onClick={this.handleGoPage}>跳转page1</button>
            </div>
        );
    }
}

export default HomeChild;