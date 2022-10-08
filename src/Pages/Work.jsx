import React from "react"
import Navbar from "../components/Navbar.jsx"
import CardWork from "../components/cardWork"
import { TabTitle } from "../utils/genfun.js"

export default function Work(){
    TabTitle('Work | Rayane Tayache')
    return(
        <div>
            <Navbar/>
            <div className="hero--work">
                <h1>Internship Experience!👔</h1>
                <p className="p1">Here you can see all the places I've worked at so far, as well as what I did there.</p>
                <p className="p2">- Each section outlines the company, the role, my tenure and a brief description of what my job entailed</p>
                <div className="container--button">
                    <a href="https://www.linkedin.com/in/rayanetayache/" target="_blank">
                        <button className="ui--button-first">LinkedIn</button>
                    </a>
                    <a href="https://drive.google.com/file/d/12AvEf71iz4kryShloDR1nG20-CJjnULS/view?usp=sharing" target="_blank">
                        <button className="ui--button-last">Resume</button>
                    </a>
                </div>
            </div>
            <CardWork/>
        </div>
    )
}