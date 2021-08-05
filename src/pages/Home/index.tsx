

import Page from "@/components/Page";
import { UPDATE_USER_ID } from "@/store/actions/user";
import connect from "@/store/connect";
import React from "react";
import CPng from "@/assets//images/02.png";

import "./index.scss";

interface IHomeProps {
    userId: number;
    updateId: (id: number) => void;
}

@connect({ userId: "user.userId" }, { updateId: UPDATE_USER_ID })
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
                <h1>Hello, World!{userId} </h1>
                <div className="bg1"></div>
                <img className="img1" src={CPng} ></img>
            </div>
        );
    }
}

export default Home;