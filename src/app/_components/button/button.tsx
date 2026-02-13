"use client";

import styles from "./button.module.css";
import React from "react";

interface ButtonProps {
    sponsor?: boolean,
    colourful?: boolean,
    link?: string,
    primary?: boolean,
    children: React.ReactNode
}

export function Button({
    sponsor,
    colourful,
    link,
    primary = false,
    children,
    ...props
}: ButtonProps) {
    if (link) {
        return (
            <a className={`${styles.button} ${primary ? styles.primary : ''} ${colourful ? 'colourful' : ''} ${sponsor ? styles.sponsor : ''}`} href={link} target="_blank" {...props}>
                {children}
            </a>
        )
    }

    return (
        <button className={`${styles.button} ${primary ? styles.primary : ''} ${colourful ? 'colourful' : ''} ${sponsor ? styles.sponsor : ''}`} {...props}>
            {children}
        </button>
    )
}

interface ButtonRowProps {
    children: React.ReactNode
}

export function ButtonRow({
    children
}: ButtonRowProps) {
    return (
        <div className={styles.row}>
            {children}
        </div>
    )
}
