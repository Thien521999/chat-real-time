// libs
import { Button, Form, Input } from "antd";
import React from "react";
import Message from "../Message";
// others
import "./style.scss";

const ContentChat = () => {
  return (
    <div className="content-chat-wrapper">
      <div className="content-chat">
        <Message
          text="text"
          photoURL={null}
          displayName="Thien"
          createdAt={1212121212}
        />
        <Message
          text="text"
          photoURL={null}
          displayName="Thien"
          createdAt={1212121212}
        />
        <Message
          text="text"
          photoURL={null}
          displayName="Thien"
          createdAt={1212121212}
        />
        <Message
          text="text"
          photoURL={null}
          displayName="Thien"
          createdAt={1212121212}
        />
      </div>

      <Form className="form-wrapper">
        <Form.Item>
          <Input
            placeholder="Nhập tin nhắn ...."
            bordered={false}
            autoComplete="off"
          />
        </Form.Item>
        <Button type="primary">Gửi</Button>
      </Form>
    </div>
  );
};

export default ContentChat;
