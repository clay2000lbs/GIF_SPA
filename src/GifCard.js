import React from "react";
import {Card, Button} from "react-bootstrap"
import Parent from "./GifData"

function GifCard(props) {
  console.log(props.allGifs)

    return (
        <Card className="m-1 mt-2" style= {{ color: "#000"}}>
            <Card.Img src={props.images} />
            <Card.Body>
              <Card.Title>
                {props.title} 
             </Card.Title>
              <Card.Text>
                This is a gif rendered as mp4
              </Card.Text>
              <Button variant="primary">Copy to Clipboard</Button>
            </Card.Body>
          </Card>
    )
};

export default GifCard;