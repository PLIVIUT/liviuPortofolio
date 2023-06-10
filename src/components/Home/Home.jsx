import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <div class="container is-fluid">
            <div class="columns is-vcentered">
                <div class="column-is-half">
                    <img class="profile-img" src="https://i.imgur.com/oK6rji5.png" alt="" />
                    <p class="title is-4">Popescu Liviu Nicolae</p>
                    <p class="title is-6">Front-End Developer with React</p>
                    <p class="title is-6">Looking for a front-end developer position</p>
                    <a href="#">#css</a> <a href="#">#responsive</a> <a href="#">#react</a> <a href="#">#javascript</a>
                </div>
                <div class="column-is-half">
                    <div class="content">
                        <p class="is-size-3">If you would like to find more about me, feel free to check my LinkedIn and GitHub.</p>
                        <p class="is-size-4">I am passionate about creating engaging user experiences that are both aesthetically pleasing and functional.</p>
                        <p class="is-size-5" >With over 1 year of experience in front-end development, I have developed a deep understanding of HTML, CSS, JavaScript, and responsive design.</p>
                        <p class="is-size-5">I value collaboration and teamwork and believe that the best solutions are achieved through an open exchange of ideas and perspectives.</p>
                        <p class="is-size-5">I am always looking for ways to improve my coding skills and stay up-to-date with the latest technologies and trends in the industry.</p>
                        <p class="is-size-5">In addition to my technical skills, I am a strong communicator and enjoy working closely with clients and team members to ensure that project goals are met on time and within budget.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
