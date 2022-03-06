import React from "react";

import { Card, Col, CardImg, CardBody, CardText, Button } from 'reactstrap';

function WorkoutCard({ workout, handleDelete, handleViewClick }) {

    const images = [
        require('../images/img1.jpg'),
        require('../images/img2.jpg'),
        require('../images/img3.jpg'),
        require('../images/img4.jpg'),
        require('../images/img5.jpg'),
        require('../images/img6.jpg'),
        require('../images/img7.jpg'),
        require('../images/img8.jpg'),
        require('../images/img9.jpg'),
        require('../images/img10.jpg'),
        require('../images/img11.jpg'),
        require('../images/img12.jpg'),
        require('../images/img13.jpg'),
        require('../images/img14.jpg'),
        require('../images/img15.jpg'),
        require('../images/img16.jpg'),
        require('../images/img17.jpg'),
        require('../images/img18.jpg'),
        require('../images/img19.jpg'),
        require('../images/img20.jpg'),
    ]

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const { id, name, duration,  active_calories, body_weight, date } = workout

    return (
        <div className='workout-cards'>
                <Col>
                    <Card color='dark' inverse className="workout-card">
                        <CardImg variant='top' src={randomImage} />
                        <CardBody>
                            <h4>{name}</h4>
                            <hr />
                            <CardText>
                                {active_calories} calories
                                <br/>
                                {duration} minutes
                            </CardText>
                            <Button 
                                id={id}
                                onClick={(e) => handleViewClick(e, workout)}
                            >View</Button>
                            <Button 
                                id={id}
                                onClick={(e) => handleDelete(e, id)}
                            >X</Button>
                        </CardBody>
                    </Card>
                </Col>
        </div>
    )
}

export default WorkoutCard;