"use client";

import { browserName } from "react-device-detect";
import { Button } from "./button";
import { IconDownload } from "@tabler/icons-react";

export function BrowserButton() {
    return (
        <Button primary>
            <IconDownload size={18} />
            {browserName != "none" ? `Install for ${browserName}` : 'Install now'}
        </Button>
    )
}
