/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        dynamic and interactive web designs{" "}
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                      it is interesting to build a web page that interacts with the users with the help of forms for example or a web page that is dynamic and moving things !!!
                      </p>
                      <div className="btn-wrapper">
                      
                     
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Busmall project
                          
                          </h6>
                          <a  className="tg1" href="https://mamoun-kamal-alshisani.github.io/Busmall-lab/"> project link click here</a>
                          <p className="description mt-3">
                          it is a project i worked on in 201 course, and in this project you have the ability to vote for a picture a specefic number of times by clicking on the picture with few other features demonstrated in the project                        </p>
                         
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              project
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                             Busmall
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            course 201
                            </Badge>
                          </div>

                         
                         
                          
                       
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            baytalbuyut project
                          </h6>
                          <a  className="tg2" href=" https://seis-amigos.github.io/Final-b-b/"> project link click here</a>
                          <p className="description mt-3">
                          it is a course 201 final project where we the concept is about realstate and we display various of features on the project as a team work
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              project
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              bayt albuyut
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              201 finally
                            </Badge>
                          </div>
                        
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            horned-beast project
                          </h6>
                          <a  className="tg3" href=" https://keen-pasteur-d9adb9.netlify.app/"> project link click here</a>
                          <p className="description mt-3">
                           this is a project in course 301 smialar to busmall project but implemented using react
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              project
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                             horned beast
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              course 301
                            </Badge>
                          </div>
                         
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
