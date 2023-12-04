import React from "react";
import {Button, Card} from "react-bootstrap";
import store from "../../store";


function Project({name , description , image , link}) {
    const moveToGitHub = (url) => {
        window.open(url, '_blank')
    }

    const userName = store.getState().authSlice.user.name

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
                <Button onClick={() => moveToGitHub(link)}>Github</Button>
                <Card.Text>Пользователь: {userName} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project