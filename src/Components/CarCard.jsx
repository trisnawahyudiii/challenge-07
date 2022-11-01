import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const CarAPI = (props) => {
    function rupiah(number) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    }

    const rentCost = rupiah(props.data.rentPerDay);

    console.log(props.data);
    return (
        <>
            <Col lg={4} md={4} sm={12}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.data.image} />
                    <Card.Body className="car-card-body">
                        <div>
                            <Card.Title>
                                {props.data.manufacture} {props.data.model}
                            </Card.Title>
                            <Card.Text>{rentCost} / hari</Card.Text>
                            <Card.Text>{props.data.description}</Card.Text>
                        </div>

                        <div>
                            <Card.Text>
                                <i class="bi bi-people me-2"></i> {props.data.capacity}
                            </Card.Text>
                            <Card.Text>
                                <i class="bi bi-gear me-2"></i> {props.data.transmission}
                            </Card.Text>
                            <Card.Text>
                                <i class="bi bi-calendar4 me-2"></i> {props.data.year}
                            </Card.Text>
                            <div className="d-grid grap-2">
                                <Button variant="success" className="car-card-button">
                                    Pilih Mobil
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CarAPI;
