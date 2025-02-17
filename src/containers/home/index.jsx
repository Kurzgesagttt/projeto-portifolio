import React from "react";
import './style.scss';
import { Animate } from 'react-simple-animate';
import { useNavigate } from "react-router-dom";
import { animate } from "@tsparticles/engine";

const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate("/contact");
    }

    return (
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>Olá, eu sou o Lucas
                    <br />
                    Desenvolvedor Back end.
                </h1>
            </div>
            <Animate play
                duration={2.2}
                delay={2.2}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
            >
                <div className="home_contact-me">
                    <button onClick={handleNavigateToContactMePage}> Hire me</button>
                </div>
            </Animate>


        </section>
    )
}

export default Home;