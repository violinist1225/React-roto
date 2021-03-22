import React from "react"
import {Link, Switch, Route} from "react-router-dom"



export default function NavBar(){

    return(
    <div>
        <Link to exact="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        
        {/* <Switch>
            <Route path="/" render={()=> <h1>Home</h1>} />
            <Route path="/" render={()=> <h1>About</h1>} />
            <Route path="/" render={()=> <h1>Services</h1>} />
        </Switch> */}

    

    </div>
    

    )}

