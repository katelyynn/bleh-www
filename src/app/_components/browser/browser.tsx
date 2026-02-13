"use client";

import { browserName, isIOS } from "react-device-detect";
import styles from "./browser.module.css";
import { ComponentPropsWithoutRef, useState } from "react";

export function BrowserListHelper() {
    const [selectedBrowser, setSelectedBrowser] = useState("");

    let browsers = [
        "chrome",
        "firefox",
        "safari"
    ];

    const chrome_browsers = [
        "Chrome",
        "Opera",
        "Yandex",
        "Chromium",
        "Edge"
    ];
    const firefox_browsers = [
        "Firefox"
    ];
    const safari_browsers = [
        "Safari",
        "Mobile Safari"
    ];

    const unsupported_browsers = [
        "IE",
        "Internet Explorer",
        "MIUI Browser",
        "Samsung Browser"
    ];

    const browser = browserName;
    let standardised_browser = "";

    const chrome = isChrome(browser);
    const firefox = isFirefox(browser);
    const safari = isSafari(browser);

    if (chrome) {
        standardised_browser = "chrome";
    } else if (firefox) {
        standardised_browser = "firefox";
    } else if (safari) {
        standardised_browser = "safari";
    }

    // any browser on iOS except for safari does not support extensions
    const unsupported = unsupported_browsers.includes(browser) || (!safari && isIOS);

    if (standardised_browser) {
        browsers = browsers.filter(b => b != standardised_browser);

        return (
            <>
                <div className={styles.list}>
                    <Browser browser={standardised_browser} onClick={() => setSelectedBrowser(standardised_browser)} />
                </div>
                <p className={styles.browser_tip}>
                    It looks like you’re using {browser}, which is {standardised_browser}-like.
                </p>
                <div className={styles.list}>
                    {browsers.map((b, i) => <Browser browser={b} key={i} onClick={() => setSelectedBrowser(b)} />)}
                </div>
                <p className={styles.browser_tip}>
                    You have chosen {selectedBrowser}
                </p>
            </>
        )
    }

    return (
        <>
            <div className={styles.list}>
                {browsers.map((b, i) => <Browser browser={b} key={i} onClick={() => setSelectedBrowser(b)} />)}
            </div>
            <p className={styles.browser_tip}>
                You have chosen {selectedBrowser}
            </p>
        </>
    )

    interface BrowserProps {
        browser: string
    }

    function isFirefox(browser: string) {
        return firefox_browsers.includes(browser);
    }

    function isChrome(browser: string) {
        return chrome_browsers.includes(browser);
    }

    function isSafari(browser: string) {
        return safari_browsers.includes(browser);
    }
}

type BrowserProps = {
    browser: string
} & ComponentPropsWithoutRef<"button">;

function Browser({
    browser,
    ...props
}: BrowserProps) {
    return (
        <button className={styles.browser} {...props}>
            <img src={`/${browser}.svg`} alt={browser} />
            {browser.charAt(0).toUpperCase() + browser.slice(1)}
        </button>
    )
}
