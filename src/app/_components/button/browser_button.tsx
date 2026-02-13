"use client";

import { browserName } from "react-device-detect";

export function BrowserButton() {
    let browser = browserName;

    if (browser == 'Edge Chromium') browser = 'Edge';

    return (
        <span>{browser != "none" ? `Install for ${browser}` : 'Install now'}</span>
    )
}
