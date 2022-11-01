import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { useEffect, useState, useCallback } from 'react';

import NavbarComponent from '../Components/NavbarComponent';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import CarCard from '../Components/CarCard';
import FilterForm from '../Components/FilterForm';
import SearchNotFound from '../Components/SearchNotFound';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [filteredCar, setFilteredCar] = useState([]);
    const [searched, setSearched] = useState(false);

    const populateCars = useCallback((cars) => {
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
    }, []);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
            .then((response) => response.json())
            .then((data) => {
                const newData = populateCars(data);
                setCars(newData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [populateCars]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const filterCar = (dateTime, capacity) => {
        const result = cars.filter((car) => car.capacity >= capacity && car.availableAt <= dateTime);
        setFilteredCar(result);
        setSearched(true);
    };

    return (
        // test
        <>
            <NavbarComponent />
            <Hero hideButton={true} />
            <FilterForm onSubmit={filterCar} />
            <Container fluid="md" className="car-card-container">
                {searched ? <Row>{filteredCar.length === 0 ? <SearchNotFound /> : filteredCar.map((car) => <CarCard key={car.id} data={car} />)}</Row> : ''}
            </Container>
            <Footer />
        </>
    );
};

export default Cars;
