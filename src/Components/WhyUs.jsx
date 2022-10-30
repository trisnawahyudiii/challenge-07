import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const icon_complete = 'images/icons/icon_complete.png';
const icon_price = 'images/icons/icon_price.png';
const icon_24hrs = 'images/icons/icon_24hrs.png';
const icon_professional = 'images/icons/icon_professional.png';

const WhyUs = () => {
    return (
        <Container fluid="md" id="why-us" className="my-5">
            <div>
                <h2>Why Us?</h2>
                <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>

            <Row className="justify-content-between">
                <Col md={3} xs={12} className="mycard">
                    <div className="card-body">
                        <Image src={icon_complete} alt="thumb-up-icon" className="mb-3" />
                        <h5 className="card-title mb-3 text-bold">Mobil Lengkap</h5>
                        <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                </Col>

                <Col md={3} xs={12} className="mycard">
                    <div className="card-body">
                        <Image src={icon_price} alt="price-icon" className="mb-3" />
                        <h5 className="card-title mb-3 text-bold">Harga Murah</h5>
                        <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                </Col>

                <Col md={3} xs={12} className="mycard">
                    <div className="card-body">
                        <Image src={icon_24hrs} alt="time-icon" className="mb-3" />
                        <h5 className="card-title mb-3 text-bold">Layanan 24 Jam</h5>
                        <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                </Col>

                <Col md={3} xs={12} className="mycard">
                    <div className="card-body">
                        <Image src={icon_professional} alt="profesional-icon" className="mb-3" />
                        <h5 className="card-title mb-3 text-bold">Sopir Profesional</h5>
                        <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WhyUs;
