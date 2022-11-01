import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const FilterForm = (props) => {
    // const [tipeDriver, setTipeDriver] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [capacity, setCapacity] = useState(0);

    const handleSubmit = () => {
        const dateTime = new Date(`${date} ${time}`);
        props.onSubmit(dateTime, capacity);
    };
    return (
        <>
            <Container fluid="md" className="filter-form">
                <Form className="form-container">
                    <Row>
                        <Col xs={12} sm={6} md={3}>
                            <Form.Group>
                                <Form.Label>Tipe Driver</Form.Label>
                                <Form.Select>
                                    <option>Pilih tipe driver</option>
                                    <option value="Dengan Sopir">Dengan Sopir</option>
                                    <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Form.Group>
                                <Form.Label>Tanggal</Form.Label>
                                <Form.Control type="date" placeholder="Pilih Tanggal" onChange={(e) => setDate(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6} md={2}>
                            <Form.Group>
                                <Form.Label>Waktu Jemput/Ambil</Form.Label>
                                <Form.Control type="time" placeholder="Pilih Waktu" onChange={(e) => setTime(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6} md={2}>
                            <Form.Group>
                                <Form.Label>Jumlah Penumpang</Form.Label>
                                <Form.Control type="number" placeholder="Jumlah Penumpang" onChange={(e) => setCapacity(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6} md={2} className="btn-cari-mobil-container">
                            <Button variant="success" className="btn-cari-mobil" onClick={handleSubmit}>
                                Cari Mobil
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
};

export default FilterForm;
