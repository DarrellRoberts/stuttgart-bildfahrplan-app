"use client";

import {useContext} from "react";
import { ThemeContext } from "../../app/context/ThemeContext";
import styles from "./input.module.css"

interface InputProps {
    sbahn: string;
    setSbahn: React.Dispatch<React.SetStateAction<string>>;
  }

export default function Input({sbahn, setSbahn }: InputProps) {
const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

const themeStyles = isLightTheme ? light : dark;

//Sbahn enum values
const sbahnData = ["S3", "S4", "S5", "S6", "S1", "S2", "S60", "S11"]

// function to handle change of SBahn
const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
setSbahn(e.target.value);
} 

    return (
    <div>
        <label style={{color: themeStyles?.textColor}}>Choose an S-Bahn:</label> 
        <select value={sbahn} onChange={handleSelect} className={styles.selectCon}> 
            {sbahnData.map((line, index) => (
                <option key={index}>{line}</option>
            ))} 
        </select>
    </div>
    )
}