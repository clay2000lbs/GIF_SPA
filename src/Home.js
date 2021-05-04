import React from "react"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import GifCard  from "./GifCard"
import SearchBar from "./SearchBar"

export default function Home() {
    return (
        <Container>
            <SearchBar />
            <Row>
                <GifCard></GifCard>
                <GifCard></GifCard>
                <GifCard></GifCard>
            </Row>
        </Container>
    )
};
