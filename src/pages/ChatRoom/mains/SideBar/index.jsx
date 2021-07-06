// libs
import React from 'react'
import { Row, Col } from "antd";
// components
import UserInfo from '../../components/UserInfo';
import RoomList from '../../components/RoomList';
// others
import "./style.scss";

const SideBar = () => {
    return (
        <div className="sidebar-wrapper">
            <Row>
                <Col span={24}><UserInfo /></Col>
                <Col span={24}><RoomList /></Col>
            </Row>
        </div>
    )
}

export default SideBar
