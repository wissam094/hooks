import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Card} from 'react-bootstrap';



const MovieCard = (props) => {
    console.log(props)
    return <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img width="200px" heigh="200px" variant="top" src={props.img} />
                    <Card.Body>
                    <Card.Title>{props.titre}</Card.Title>
                        <ReactStars
                            count={5}
                            value={props.rate}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        
                    </Card.Body>
                </Card>
           </div>
}
export default MovieCard;