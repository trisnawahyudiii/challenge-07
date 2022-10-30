import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <Container fluid="md" id="faq-section">
            <Row>
                {/* text */}
                <Col md={6} xs={12}>
                    <h2>Frequently Asked Question</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Col>

                {/* Accourdion */}
                <Col md={6} xs={12}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Faq;
