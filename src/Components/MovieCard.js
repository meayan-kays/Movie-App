import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = (props) => {
    //const [posterURL, setPosterURL] = useState("posterURl")
    //const [title, setTitle] = useState("Movie Title")
    //const [description, setDescription] = useState("This is film description")
    //const [rating, setRating] = useState("******")

    //setPosterURL = () => 1
    return (
        <div>
            <Card className="movie-card-container" >
                <CardImg className="movie-poster" src={props.posterURL} alt="{props.title}" />
                <div className="description">
                    <h5>Resume :</h5>
                    <CardText >{props.description}</CardText>
                </div>
                
                <CardBody className="movie-infos">
                    <CardTitle tag="h6">{props.title}</CardTitle>
                    <StarRatingComponent className="movie-rating" emptyStarColor={"#fff"} value={props.rating} />
                </CardBody>
            </Card>
        </div>
    )
}

export default MovieCard
