import React from 'react'
import './Project.css'

const Projects = () => {
    return (
        <div class="container is-fluid">
            <section class="hero">
                <div class="hero-body">
                    <h1 class="h1-projects">Projects</h1>
                    <p class="title">
                        livBooking
                    </p>
                    <p class="subtitle">
                        A booking app made with React. An excelent way to manage your bookings using the React calendar!
                    </p>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by4">
                                <a href="https://github.com/PLIVIUT/reactBookingApp"><img src="https://i.imgur.com/Cmvwisb.png" alt="Placeholder image" /></a>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section class="hero">
                <div class="hero-body">
                    <p class="title">
                        reactNotesApp
                    </p>
                    <p class="subtitle">
                        No worries about losing your notes. This notes app let's you store all of your notes with the help of Firebase.
                    </p>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-3by3">
                                <a href="https://github.com/PLIVIUT/notesapp"><img src="https://i.imgur.com/Gq7MKzC.png" alt="Placeholder image" /></a>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section class="hero">
                <div class="hero-body">
                    <p class="title">
                        JS Ping Pong Score Keeper
                    </p>
                    <p class="subtitle">
                        Another JS fun project containing a quick but handy score keeper for a ping pong game, can be be used for up to 8 points.
                    </p>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-3by3">
                                <a href="https://github.com/PLIVIUT/PingPongScoreKeeper"><img src="https://i.imgur.com/dlgFOpt.png" alt="Placeholder image" /></a>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section class="hero">
                <div class="hero-body">
                    <p class="title">
                        JS Drum-Kit
                    </p>
                    <p class="subtitle">
                        A simple drum kit using event listeners and functions to make it work. The sound files can be changed.
                    </p>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <a href="https://github.com/PLIVIUT/JS-Drum-Kit"><img src="https://i.imgur.com/V5r97jp.png" alt="Placeholder image" /></a>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Projects