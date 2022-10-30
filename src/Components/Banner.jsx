import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const Banner = () => {
    return (
        <Container fluid="md">
            <div className="cta-banner d-flex flex-column align-items-center p-5 my-5">
                <h1>Sewa Mobil di Bali Sekarang</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="/cars">
                    <button class="btn btn-success">Mulai Sewa Mobil</button>
                </a>
            </div>
        </Container>
    );
};

export default Banner;
