import React from "react";

import ReactTooltip from "react-tooltip";
import { Card, Col, CardImg, Row } from 'reactstrap';

function CoreSelect() {
    return (
        <div id='select-cards-container'>
            <h2>Core Select</h2>
            <h3>What core workout did you complete?</h3>
            <div id='select-cards'>

                <Row>
                <div>
                    <Col>
                        <Card className="select-card" data-tip data-for="deadlifts">
                        <ReactTooltip id="deadlifts" place="top" effect="solid">
                                deadlifts
                        </ReactTooltip>
                            <CardImg src='https://crossfitendurancespfld.files.wordpress.com/2012/09/bear.jpg?w=474' height='400px' />
                        </Card>
                    </Col>
                </div>
                
                <div>
                    <Col>
                        <Card className="select-card" data-tip data-for="squats">
                        <ReactTooltip id="squats" place="top" effect="solid">
                                squats
                        </ReactTooltip>
                            <CardImg src='https://media.istockphoto.com/vectors/strong-monkey-athlete-vector-id500933586?k=20&m=500933586&s=612x612&w=0&h=cFsecQMvytjQzhs7Kw1UhnwSC7WO77aRzPOLMiG3rAI=' height='400px' />
                        </Card>
                    </Col>
                </div>
                </Row>

                <Row>
                <div>
                    <Col>
                        <Card className="select-card" data-tip data-for="shoulders">
                        <ReactTooltip id="shoulders" place="top" effect="solid">
                                shoulder press
                        </ReactTooltip>
                            <CardImg src='https://www.creativefabrica.com/wp-content/uploads/2020/08/12/1597217674/Weightlifting-Bear-580x386.jpg' height='400px' />
                        </Card>
                    </Col>
                </div>

                <div>
                    <Col>
                        <Card className="select-card" data-tip data-for="bench">
                        <ReactTooltip id="bench" place="top" effect="solid">
                                bench press
                        </ReactTooltip>
                            <CardImg src='https://media.istockphoto.com/photos/jack-russell-lying-on-back-with-raised-paws-with-barbell-picture-id160839479?k=20&m=160839479&s=612x612&w=0&h=xeINCWkvFSbHA0T8TldaTggNjwZMB9fgmTQJTh-FZo8=' height='400px' />
                        </Card>
                    </Col>
                </div>
                </Row>

            </div>
        </div>
    )
}

export default CoreSelect;