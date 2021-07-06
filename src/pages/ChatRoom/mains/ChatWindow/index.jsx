// libs
import React from 'react';
// components
import HeaderChatWindow from "../../components/HeaderChatWindow";
import ContentChat from "../../components/ContentChat";

// others
import "./style.scss";

const ChatWindow = () => {
    return (
        <div className="chat-window-wrapper">
            <HeaderChatWindow />
            <ContentChat />
        </div>
    )
}

export default ChatWindow;
