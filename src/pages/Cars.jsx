import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import NavbarComponent from '../Components/NavbarComponent';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import CarCard from '../Components/CarCard';
import FilterForm from '../Components/FilterForm';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [filteredCar, setFilteredCar] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
            .then((response) => response.json())
            .then((data) => {
                console.table(data);
                const newData = populateCars(data);
                setCars(newData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const populateCars = (cars) => {
        return cars.map((car) => {
            const isPositive = getRandomInt(0, 1) === 1;
            const timeAt = new Date();
            const mutator = getRandomInt(1000000, 100000000);
            const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));

            return {
                ...car,
                availableAt,
            };
        });
    };

    const filterCar = (dateTime, capacity) => {
        const result = cars.filter((car) => car.capacity >= capacity && car.availableAt <= dateTime);
        console.log(result);
        setFilteredCar(result);
    };

    return (
        // test
        <>
            <NavbarComponent />
            <Hero showButton={true} />
            <FilterForm onSubmit={filterCar} />
            <Container fluid="md">
                <Row className="car-card-container">{filteredCar.length === 0 ? 'kontol' : filteredCar.map((car) => <CarCard key={car.id} data={car} />)}</Row>
            </Container>
            <Footer />
        </>
    );
};

export default Cars;
