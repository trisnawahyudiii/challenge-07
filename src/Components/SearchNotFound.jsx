import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
const SearchNotFound = () => {
    return (
        <>
            <Container fluid="md" className=" d-flex flex-column align-items-center justify-content-center">
                <Image src="images/404_image.png" alt="404 Not Found Image" />
                <h1>Something's wrong here...</h1>
                <p>We can't find the data you're looking for. Try again?</p>
            </Container>
        </>
    );
};

export default SearchNotFound;
