import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import { CardGroup } from 'react-bootstrap';


export default function ProjectCard() {
    return (
        <>
            <div className="cardContainer text-center">
                <Card style={{ border:'primary' }}>
                    <Card.Body>
                        <Card.Title>React Pokédex<hr/></Card.Title>
                        <Card.Text>
                            Pokédex app in React, not your average tutorial dex.
                            First page created by the amazing Jonathan, Pokédex page by me .
                            Used PokéAPI for this project.  
                        </Card.Text>
                        <Button variant="dark" href="https://pokedex-dennis-jonathan.netlify.app/" target="_blank">Deployed Here</Button><br/>
                        <Button variant="dark" href="https://github.com/DennisVN/pokedex" target="_blank">GitHub Repo</Button>
                    </Card.Body>
                </Card>
                <div className="cardContainer text-center">
                <Card style={{ border:'primary' }}>
                    <Card.Body>
                        <Card.Title>Weather App<hr/></Card.Title>
                        <Card.Text>
                        I fetched the 5 day forecast, returned it to JSON, and manipulated it with JS.
                        The user can input a city in the input field, click ENTER, and the forecast displays accordingly. 
                        </Card.Text>
                        <Button variant="dark" href="https://dennisvn.github.io/weather-app/" target="_blank">Deployed Here</Button><br/>
                        <Button variant="dark" href="https://github.com/DennisVN/weather-app" target="_blank">GitHub Repo</Button>
                    </Card.Body>
                </Card>
            </div>
            </div>
            
        </>
    )
}
