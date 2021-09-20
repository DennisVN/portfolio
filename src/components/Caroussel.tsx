import React from 'react';
import { Carousel } from 'react-bootstrap';
import testimage from '../images/testimage.jpg';

export default function Caroussel() {
    return (
        <>
        <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={testimage}
                alt="React Pokédex"
                />
                <Carousel.Caption>
                    <h5>React Pokédex</h5>
                    <p>Netlify Page / GitHub Page</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={testimage}
                alt="Laravel Todo App"
                />
                <Carousel.Caption>
                <h5>Laravel Todo App</h5>
                <p>Netlify Page / GitHub Page</p>
                </Carousel.Caption>s
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={testimage}
                alt="Flappy Bert"
                />
                <Carousel.Caption>
                <h5>Flappy Bert</h5>
                <p>Netlify Page/ GitHub Page</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}
