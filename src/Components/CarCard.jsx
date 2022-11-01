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
                    <Card.Body>
                        <Card.Title>
                            {props.data.manufacture} {props.data.model}
                        </Card.Title>
                        <Card.Text>{rentCost} / hari</Card.Text>
                        <Card.Text>{props.data.description}</Card.Text>
                        <Card.Text>{props.data.capacity}</Card.Text>
                        <Card.Text>{props.data.transmission}</Card.Text>
                        <Card.Text>{props.data.year}</Card.Text>
                        <Button variant="success">Pilih Mobil</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CarAPI;
