import * as React from "react";
import "./index.scss";
import BaseComponent from '@/components/BaseComponent';

interface IPage {

}
/**
 * 
 * 页面基础组件
 * @class Page
 * @extends {BaseComponent<IPage>}
 */
class Page extends BaseComponent<IPage> {
    constructor(props: IPage) {
        super(props);
    }


    render() {
        return <div></div>
    }
}

export default Page;
