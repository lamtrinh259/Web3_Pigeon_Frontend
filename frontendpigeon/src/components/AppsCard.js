import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from "react-router-dom";
// import ParticipateProject from './ParticipateProject';


export default function AppsCard(props) {

    const navigate = useNavigate();
    const navigate_App = () => {
        navigate(`/Apps/${props.navigate}`);
      }


    return (
        <>  
            <div className='dashboardListing' >
                <Card onClick={navigate_App} style={{ width: '20rem', borderRadius: '2rem' }}>
                    {/* <Card.Img src="https://picsum.photos/seed/picsum/400/300" alt="Card image" /> */}
                    {/* <Card.ImgOverlay> */}

                    <Card.Body>
                        <Card.Title>{props.Title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                        <Card.Text>
                            <Badge pill bg="dark">
                                {/* {x.maxAmt} ETH */}
                            </Badge>{' '}
                        </Card.Text>
                        {/* <Button onClick={() => { setModal(x) }}>Participate</Button> */}
                    </Card.Body>
                    {/* </Card.ImgOverlay> */}
                </Card>
            </div>

        </>

    )
}
