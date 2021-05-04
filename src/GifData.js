
import React, {useEffect, useState} from "react";
import axios from 'axios';
import GifCard from "./GifCard"


export default function Parent () {
    const [gifs, getGifs] = useState([]);

    const url = 'https://api.giphy.com/v1/gifs/search?api_key=dDWpacBoRZakyBhnJqXHaTxoCuS3VjHx&q=radiant&limit=6&offset=3&rating=g&lang=en';

    useEffect(() => {
        getAllGifs();

    }, []);


    const getAllGifs = () => {
        axios.get(url)
        .then((response) => {
            const allGifs = response.data.allGifs;
            getGifs(allGifs);
        })
        .catch(error => console.error(error));

    }
    return(
        <GifCard gifs={gifs}/>
    )

}


