// libs
import React from 'react';
import { Avatar, Button, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// others
import "./style.scss";

const UserInfo = () => {
    return (
        <div className="user-info-wrapper">
            <div className="">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <Typography.Text className="username">
                    Thien
                </Typography.Text>
            </div>
            <Button type="primary">Đăng xuất</Button>
        </div>
    )
}

export default UserInfo
