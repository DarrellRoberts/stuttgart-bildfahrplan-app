"use client";
import Image from "next/image"
import styles from "./loader.module.css"
import {useContext} from "react";
import { ThemeContext } from "../../app/context/ThemeContext";

export default function Loader({message}) {
const { light, dark, isLightTheme } = useContext(ThemeContext);

const themeStyles = isLightTheme ? light : dark;

    return (
        <div className={styles.trainCon}>
            <div style={{backgroundColor: themeStyles.textColor}} className={styles.trainCircle2}></div>
            <div style={{backgroundColor: themeStyles.textColor}} className={styles.trainCircle}></div>
            <Image className={styles.train} src={isLightTheme ? "/train1.svg" : "/train1DM.svg"} alt="train" width="100" height="100" />
            <h2 style={{color: themeStyles.textColor}} className={styles.loadingTitle}>{message}</h2>
        </div>
    )
}