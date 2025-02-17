import React from "react";
import './style.scss';
import { useNavigate } from "react-router-dom";

const Home=()=>{
    //todo
    const handleNavigateToContactMePage= ()=>{

    }

    return(
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>Olá, eu sou o Lucas
                    <br />
                    Desenvolvedor Back end.
                </h1>
            </div>
            <div className="home_contact-me">
                <button onClick={handleNavigateToContactMePage}> Hire me</button>
            </div>
        </section>
    )
}

export default Home;