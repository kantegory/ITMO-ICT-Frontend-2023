import React from "react";
import {Button, Card} from "react-bootstrap";
function Project({name , description , image , link}) {
    return (
        <Card style={{ width: '200px'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button>Github</Button>
            </Card.Body>
        </Card>
    )
}

export default Project