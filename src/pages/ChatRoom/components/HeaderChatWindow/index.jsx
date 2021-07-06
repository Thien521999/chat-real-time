// libs
import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Tooltip } from 'antd';
import React from "react";
// others
import "./style.scss";

const HeaderChatWindow = () => (
    <div className="header-chat-window-wrapper">
        <div className="header-info">
            <p className="header-title">Room1</p>
            <span className="header-description">Day la phong 1</span>
        </div>
        <div className="list-room">
            <Button icon={<UserAddOutlined />} type="text">Mời</Button>
            <Avatar.Group size="small" maxCount={2}>
                <Tooltip title="A">
                    <Avatar>A</Avatar>
                </Tooltip>
                <Tooltip title="A">
                    <Avatar>B</Avatar>
                </Tooltip>
                <Tooltip title="A">
                    <Avatar>C</Avatar>
                </Tooltip>
                <Tooltip title="A">
                    <Avatar>D</Avatar>
                </Tooltip>
            </Avatar.Group>
        </div>
    </div>
)

export default HeaderChatWindow;
