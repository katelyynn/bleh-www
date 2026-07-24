'use client';

import React from "react";
import { Content } from "../_components/content/content";
import { Section } from "../_components/section/section";
import styles from "./page.module.css";
import { Button } from "../_components/button/button";

export default function Page() {
    const [sku, setSku] = React.useState('uwu');

    return (
        <Section>
            <Content>
                <div className={styles.main}>
                    <input className={styles.input} onChange={(e) => setSku(e.target.value || 'uwu')} placeholder="uwu" />
                    <Button primary link={`https://github.com/katelyynn/bleh/raw/${sku}/fm/bleh.user.js`}>
                        Install <i className={styles.sku}>{sku}</i>
                    </Button>
                </div>
            </Content>
        </Section>
    )
}
