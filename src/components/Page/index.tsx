import * as React from "react";
import "./index.scss";
import BaseComponent from '@/components/BaseComponent';
import { RouteComponentProps } from "react-router-dom";




/**
 * 
 * 页面基础组件
 * @class Page
 * @extends {BaseComponent<IPage>}
 */
class Page<P = {} & RouteComponentProps, S = {}> extends BaseComponent<P, S> {
    constructor(props) {
        super(props);
    }


    render() {
        return <div></div>
    }
}

export default Page;
