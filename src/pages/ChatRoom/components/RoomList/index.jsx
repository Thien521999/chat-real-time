// libs
import React from 'react';
import { Button, Collapse, Typography } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
// others
import "./style.scss";

const { Panel } = Collapse;

const RoomList = () => {
    return (
        <div className="room-list-wrapper">
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="Danh sách các phòng" key="1">
                    <Typography.Link>Room 1</Typography.Link>
                    <Typography.Link>Room 2</Typography.Link>
                    <Typography.Link>Room 3</Typography.Link>
                    <Button type="text" icon={<PlusSquareOutlined />} className="add-room">Thêm phòng</Button>
                </Panel>
            </Collapse>
        </div>
    )
}

export default RoomList
