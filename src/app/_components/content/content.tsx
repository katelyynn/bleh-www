import styles from "./content.module.css";
import React from "react";

interface ContentProps {
    column?: boolean,
    children: React.ReactNode
}

export function Content({
    column = true,
    children
}: ContentProps) {
    return (
        <section className={`${styles.content} ${column ? styles.col : ''}`}>
            {children}
        </section>
    )
}
