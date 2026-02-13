"use client";

import { browserName } from "react-device-detect";

export function BrowserButton() {
    return (
        <span>{browserName != "none" ? `Install for ${browserName}` : 'Install now'}</span>
    )
}
