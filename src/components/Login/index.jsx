// libs
import React from "react";
import { Button, Col, Row, Typography } from "antd";
import firebase, { auth } from "../../lib/firebase";
// others
import "./style.scss";

const { Title } = Typography;

const fbProvider = firebase.auth.FacebookAuthProvider();

const Login = () => {
    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider);
    };

    return (
        <div className="login-wrapper">
            <Row justify="center" style={{ height: 800 }}>
                <Col span="8">
                    <Title style={{ textAlign: "center" }} level="3">
                        Fun Chat
                    </Title>
                    <Button
                        style={{ width: "100%", marginBottom: 5 }}
                    >
                        Đăng nhập bằng Google
                    </Button>
                    <Button onClick={handleFbLogin} style={{ width: "100%" }}>
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
