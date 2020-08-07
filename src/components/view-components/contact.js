import React from "react";
import {FacebookProvider, CustomChat, Page} from 'react-facebook';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./view_components.scss";

const contact = () => {
    return (
        <div className='mt-3 text-center'>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        聯絡我們
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <h4><a href="https://tinyurl.com/yxfts37u">士林本部FB連結</a> 或者撥打 <a href="tel:02-2881-2731">02-2881-2731(專人服務講解)</a></h4>
                            <FacebookProvider appId="289722292454716">
                                <Page
                                    href="https://www.facebook.com/%E6%98%8E%E9%9F%B3%E5%A5%A7%E7%A6%8F%E6%96%87%E7%90%86%E8%A3%9C%E7%BF%92%E7%8F%AD-%E5%9C%8B%E5%B0%8F-%E5%9C%8B%E4%B8%AD-%E9%AB%98%E4%B8%AD-878709845569596/"
                                    tabs="messages" width="500" height="1000"/>
                            </FacebookProvider>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        交通資訊
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <h2>交通資訊</h2>
                            <p>地址：台北市士林區大北路109號 </p>
                            <div className="google-map-code">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.669329593569!2d121.52290365807562!3d25.0903949959865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aebaeaf92b4d%3A0x7fa129ad8007e514!2zMTEx5Y-w5YyX5biC5aOr5p6X5Y2A5aSn5YyX6LevMTA56Jmf!5e0!3m2!1szh-TW!2stw!4v1526264649347"
                                    width="360" height="270" frameBorder="0" style={{border: 0}} allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"></iframe>
                            </div>
                            <p> 捷運站：淡水信義線「士林站」，捷運2號出口出站後後往右走，於大西路左轉，直行至大北路右轉抵達。</p>
                            <p>公車站:
                                <span>士林分局站</span>:小15、小15區、小16、小17、小19、市民小巴1
                                <span>公教住宅站</span>:41、529、683、紅30、303、303區、紅9
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        營業時間
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <h2>營業時間</h2>
                            <p>週一至週日:10：00~20：00</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}
export default contact;