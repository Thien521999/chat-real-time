// libs
import { Avatar, Typography } from "antd";
import React from "react";
// others
import "./style.scss";

const Message = ({ text, displayName, createdAt, photoURL }) => {
    return (
        <div className="message-wrapper">
            <div>
                <Avatar size="small" src={photoURL} >A</Avatar>
                <Typography.Text className="author">{displayName}</Typography.Text>
                <Typography.Text className="date">{createdAt}</Typography.Text>
            </div>
            <div>
                <Typography.Text className="content">{text}</Typography.Text>
            </div>
        </div>
    )
}

export default Message
