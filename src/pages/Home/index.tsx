

import React from "react";
import Page from "@/components/Page";
import { UPDATE_USER_ID } from "@/store/actions/user";
import connect from "@/store/connect";
import CPng from "@/assets//images/02.png";
import HomeChild from "./HomeChild";
import "./index.scss";

interface IHomeProps {
    userId: number;
    updateId: (id: number) => void;
}

const mapStateToProps = {
    userId: "user.userId"
};

const mapDispatchToProps = {
    updateId: UPDATE_USER_ID
};


@connect(mapStateToProps, mapDispatchToProps)
class Home extends Page<IHomeProps>{

    componentDidMount = () => {
        setTimeout(() => {
            this.props.updateId(5);
        }, 3000)
    }
    render() {
        const { userId } = this.props;
        return (
            <div className='home'>
                <div className="text1">Hello, World!{userId} </div>
                <div className="bg1"></div>
                <img className="img1" src={CPng} ></img>
                <HomeChild></HomeChild>
            </div>
        );
    }
}

export default Home;