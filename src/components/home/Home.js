import CompanyDescription from "./CompanyDescription";
import Menu from '../Menu';

import './Home.css';

import axios from 'axios';

import { useEffect, useState, createContext, useContext } from "react";
import { useMutation } from "react-query";
import runHoveredTextAnimationScript from "./scripts/hovered_text_animation";

const Home = () => {
    useEffect(() => {
        runHoveredTextAnimationScript();
    });

    return (
        <div className="page-local-content">
            <Menu />
            <CompanyDescription />
        </div>
    );
}

export default Home;