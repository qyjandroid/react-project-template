

import Page from "@/components/Page";
import React from "react";
import connect from "@/store/connect";
import "./index.scss";

interface IPageProps {
    router: any
}

const mapStateToProps = {
    router: "router",
}


@connect(mapStateToProps)
class Page1 extends Page<IPageProps>{
    render() {
        return (
            <div className='page1'>
                <h1>Hello, Page122222! </h1>
            </div>
        );
    }
}

export default Page1;