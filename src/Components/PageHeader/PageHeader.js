import React from "react";
import "./PageHeader.css"

const PageHeader = ({title,link1,link2,icon}) =>{

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <div className="navbar-title"><h2>{title}<i className={icon}></i></h2></div>
                    <div className="navbar-links">
                        <ul>
                            <li>
                                <a href="#browser">{link1}</a>
                            </li>
                            <li>
                                <a href="#favs">{link2}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader        