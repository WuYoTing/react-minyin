import React from 'react';
import './App.css';
import './App.scss';
import {AppProvider} from "./AppContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TopNav from "./components/partial-components/TopNav";
import admission_list from "./components/view-components/admission_list";
import home from "./components/view-components/home";
import about from "./components/view-components/about";
import news from "./components/view-components/news";
import course from "./components/view-components/course";
import contact from "./components/view-components/contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <div className="view">
                    <header>
                        <TopNav/>
                    </header>

                    <main>
                        <Row>
                            <Col/>
                            <Col xs={8}>
                                <Switch>
                                    <Route path="/home" component={home}></Route>
                                    <Route path="/about" component={about}></Route>
                                    <Route path="/admission-list" component={admission_list}></Route>
                                    <Route path="/news" component={news}></Route>
                                    <Route path="/course" component={course}></Route>
                                    <Route path="/contact-us" component={contact}></Route>
                                </Switch>
                            </Col>
                            <Col/>
                        </Row>
                    </main>
                </div>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
