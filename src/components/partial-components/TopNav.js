import React, {useContext} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {AppContext} from "../../AppContext";
import {useState,useEffect} from 'react';
import './TopNav.scss';

const TopNav = () => {
    const context = useContext(AppContext);
    const [device, setDevice] = useState("PC");
    const handleRWD = () => {
        if (window.innerWidth > 768)
            setDevice("PC");
        else
            setDevice("mobile");
    }
    useEffect(()=>{
        window.addEventListener('resize',handleRWD);
        handleRWD();
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    if(device == "PC"){
        return (
            <div className="main-color">
                <Navbar>
                    <Col/>
                    <Col xs={9}>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Navbar.Brand href="/home">民音奧福文理補習班</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Link to="/about" className="nav-link" bsPrefix>關於我們</Link>
                                <Link to="/admission-list" className="nav-link" bsPrefix>榮譽榜單</Link>
                                <Link to="/news" className="nav-link" bsPrefix>最新消息</Link>
                                <Link to="/course" className="nav-link" bsPrefix>課程規劃</Link>
                                <Link to="/contact-us" className="nav-link" bsPrefix>聯絡我們</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col/>
                </Navbar>
            </div>
        )
    }else {
        return (
            <div className="main-color">
                <Navbar collapseOnSelectv  expand="lg" >
                    <Link to="/home" class="navbar-brand">民音奧福文理補習班</Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/about" className="nav-link" bsPrefix>關於我們</Link>
                            <Link to="/admission-list" className="nav-link" bsPrefix>榮譽榜單</Link>
                            <Link to="/news" className="nav-link" bsPrefix>最新消息</Link>
                            <Link to="/course" className="nav-link" bsPrefix>課程規劃</Link>
                            <Link to="/contact-us" className="nav-link" bsPrefix>聯絡我們</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default TopNav;