import styles from "./image.module.css";
import React from "react";

interface ImageProps {
    shrink?: boolean,
    src: string,
    alt: string
}

export function Image({
    shrink = false,
    src,
    alt
}: ImageProps) {
    return (
        <div className={`${styles.image} ${shrink ? styles.shrink: ''}`}>
            <img src={src} alt={alt} />
        </div>
    )
}
