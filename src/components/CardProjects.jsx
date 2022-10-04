import React from "react"
import Track from "../image/Track.png"
import Ridof from "../image/Ridof.png"
import Contact from "./Contact"
import skyscrapper  from "../image/skyscrapper.jpg"
import { AiFillGithub } from "react-icons/ai"

export default function CardProjects() {
    return (
        <div>
            <div className="main-title-project">
                <h2 className="title">Personal Projects 📦</h2>
                <p className="p1">Here you can see a bunch of projects I've worked on in the past couple of years.</p>
                <p className="p2"> --Hover over the projects below to view more details, some even have demos</p>
            </div>
        <div>
            <div className="a-btn-gh">
                <a href="https://github.com/Rayane-T" ><button className="btn-gh">GitHub</button></a>
            </div>
            <div className="contain-wrapper">
                <a href="https://github.com/Rayane-T/Track">
                <div className="wrapper">
                    <div className="card">
                     <img src={Track}/> {/* "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/195/143/datas/medium.gif" */}
                        <div className="info">
                            <h1>Track</h1>
                            <p>Track is an expense tracker that enables collaboration between people when budgeting. Different peoples in a group are able to plan their expenses, and the data is automatically compiled together.</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
                </a>
                <a href="https://github.com/Rayane-T/RidOf_UI">
                <div className="wrapper">
                    <div className="card">
                        <img src={Ridof} alt="Track logo" />
                        <div className="info">
                            <h1>Educative Recycling App</h1>
                            <p>Rid Of ♻️ — an educational application aimed at simplifying the process of recycling trash in your daily life.</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
                </a>
                <a href="https://github.com/Rayane-T/Sky-scrapper-Solver">
                <div className="wrapper">
                    <div className="card">
                        <img src={skyscrapper} alt="Track logo" />
                        <div className="info">
                            <h1>Sky-Scrapper Solver</h1>
                            <p>🌆 Algorithm capable of solving the sky-scrapper game using backtracking.</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
                </a>
                    <div className="wrapper">
                        <div className="card">
                            <img src={skyscrapper} alt="Track logo" />
                            <div className="info">
                                <h1>Heading</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam provident corrupti incidunt. Velit nihil a modi, deleniti temporibus, aliquid illum consectetur et assumenda expedita tempore sed eum est dolore!</p>
                                <a href="" className="btn">ReadMore</a>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                    <div className="card">
                        <img src={Ridof} alt="Track logo" />
                        <div className="info">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam provident corrupti incidunt. Velit nihil a modi, deleniti temporibus, aliquid illum consectetur et assumenda expedita tempore sed eum est dolore!</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card">
                        <img src={Ridof} alt="Track logo" />
                        <div className="info">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam provident corrupti incidunt. Velit nihil a modi, deleniti temporibus, aliquid illum consectetur et assumenda expedita tempore sed eum est dolore!</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Contact/>
        </div>
    )
}