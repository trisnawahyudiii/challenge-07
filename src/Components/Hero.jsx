import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = (props) => {
    return (
        <div id="hero-section">
            <Row>
                {/* ini buat text */}
                <Col md={6} xs={12} className="hero-text d-flex flex-column justify-content-center">
                    <h1>Sewa & Rental Mobil Terbaik di Kawasan Bali</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <div>
                        <a href="/cars">
                            <button class="btn btn-success" hidden={props.hideButton}>
                                Mulai Sewa Mobil
                            </button>
                        </a>
                    </div>
                </Col>
                {/* ini buat image */}
                <Col md={6} xs={12} className="d-flex justify-content-end">
                    <Image src="images/img_car.png" fluid className="hero-ills" />
                </Col>
            </Row>
        </div>
    );
};

export default Hero;
