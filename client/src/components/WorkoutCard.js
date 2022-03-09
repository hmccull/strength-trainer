import React from "react";

import { Card, Col, CardImg, CardBody, CardText, Button } from 'reactstrap';
import Moment from 'moment';
import FadeIn from 'react-fade-in';

function WorkoutCard({ workout, handleDelete, handleViewClick }) {

    const { id, name, duration,  active_calories, date, cores } = workout

    const formatDate = Moment(date).format('MM/DD');

    const image = () => {
        if (cores[0].name === 'deadlift') {
            return 'https://media.self.com/photos/5c085b17b0213128f1d78b4c/4:3/w_2560%2Cc_limit/woman-deadlifting-barbell.jpg'
        } else if (cores[0].name === 'squat') {
            return 'https://images.ctfassets.net/3s5io6mnxfqz/34Npc5PKLKJi6HIYvFw9XI/3e45754912cf266e7401cb8074c63239/AdobeStock_386146138_2.jpeg?fm=jpg&w=900&fl=progressive'
        } else if (cores[0].name === 'shoulder press') {
            return 'http://cdn.shopify.com/s/files/1/1283/2557/articles/Benefits_Of_Overhead_Press_1024x.jpg?v=1616476543'
        } else if (cores[0].name === 'bench') {
            return 'https://www.muscleandfitness.com/wp-content/uploads/2018/09/1109-Muscle-Fibers-bench-press.jpg?quality=86&strip=all'
        }
    }

    return (
        <div className='workout-cards'>
            <FadeIn delay={1500} transitionDuration={3000}>
                <Col>
                    <Card color='dark' inverse className="workout-card">
                        <CardImg variant='top' src={image()} width='150px' height='175px' />
                        <CardBody>
                            <h4>{name}</h4>
                            <hr />
                            <CardText>
                                {formatDate}
                                <br />
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
            </FadeIn>
        </div>
    )
}

export default WorkoutCard;