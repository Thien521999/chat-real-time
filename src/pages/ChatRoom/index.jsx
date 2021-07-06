// libs
import React from 'react';
import { Row, Col } from "antd";
// components
import ChatWindow from './mains/ChatWindow';
import SideBar from './mains/SideBar';
// others
import "./style.scss";

const ChatRoom = () => {
    return (
        <div className="chat-room-wrapper">
            <Row>
                <Col span={6}><SideBar /></Col>
                <Col span={18}><ChatWindow /></Col>
            </Row>
        </div>
    )
}

export default ChatRoom
