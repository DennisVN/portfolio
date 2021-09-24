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
                        <Card.Title>React Pokédex</Card.Title>
                        <Card.Text>
                            Pokédex app in React, not your average tutorial dex.
                            First page created by the amazing Jonathan, Pokédex page by me .
                            Used PokéAPI for this project.  
                        </Card.Text>
                        <Button variant="dark" href="https://pokedex-dennis-jonathan.netlify.app/">Check it out !</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
