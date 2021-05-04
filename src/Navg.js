import React from "react";
import {Link, Route, Router} from "react-router-dom"
import {Navbar} from "react-bootstrap"
import Home from "./Home";

export default function Navg() {
  return (
    <div>

    <Navbar bg="dark" expand="md">
    <Link to="/">GIF_SPA</Link>
    </Navbar>
    </div>
  )
};

