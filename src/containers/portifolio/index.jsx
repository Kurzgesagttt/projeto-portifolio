import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent"

const Portifolio=()=>{
    return(
        <section id="portifolio" className="portifolio">
            <PageHeaderContent
                headerText = "Portifolio"
                icon ={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}
export default Portifolio;