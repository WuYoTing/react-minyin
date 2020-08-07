import React from "react";
import "./view_components.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const about = () => {
    return (
        <div className='mt-3'>
            <h2>關於民音</h2>
            <hr/>
            <h4>教育機構沿革</h4>
            <p>本中心在士林區經營約20幾年 風評優良為立案中心 有國小部 國中部 高中部 超熱血教學團隊 帶領孩子從懵懂的小一新鮮人
                穩紮穩打小學基礎 陪伴孩子渡過青澀的國高中時期 考取理想中的高中與大學</p>
            <hr/>
            <h4>環境簡介</h4>
            <Container className='mt-3'>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="/images/main_entrance.jpg" thumbnail/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/images/counter.jpg" thumbnail/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/images/class_room.jpg" thumbnail/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default about;