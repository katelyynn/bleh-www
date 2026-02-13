"use client";

import { Dialog } from "radix-ui";
import React, { useState } from "react";
import styles from "./wizard.module.css";
import { Button, ButtonRow } from "../button/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { BrowserListHelper } from "../browser/browser";

interface InstallWizardProps {
    children: React.ReactNode
}

export function InstallWizard({
    children
}: InstallWizardProps) {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: 'Pick your browser',
            body:
                <>
                    <p>If you aren’t sure, go with Chrome - it’s a safe bet.</p>
                    <BrowserListHelper />
                </>
        },
        {
            title: 'Choose an extension manager',
            body:
                <>
                    <p>Pick a userscript manager that will handle loading bleh for you.</p>
                </>
        },
        {
            title: 'Almost there',
            body:
                <>
                    <p>Once you have the extension from before installed, click below to install bleh.</p>
                </>
        }
    ]

    return (
        <Dialog.Root onOpenChange={(open) => {
            if (!open) setStep(0);
        }}>
            <Dialog.Trigger asChild>{children}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay}>
                    <Dialog.Content className={styles.wizard}>
                        <WizardStep step={step} />
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )

    interface WizardStepProps {
        step: number
    }

    function WizardStep({
        step
    }: WizardStepProps) {
        if (!steps[step]) return (
            <>
                <p>step {step}</p>
            </>
        );

        let prev = step - 1;
        let next = step + 1;

        if (prev < 0) prev = 0;
        if (next > steps.length - 1) next = steps.length - 1;

        const content = steps[step];

        return (
            <>
                <Dialog.Title className={styles.title}>
                    {content.title}
                </Dialog.Title>
                <div className={styles.content}>
                    {content.body}
                </div>
                <WizardStepFooter prev={prev} next={next} />
            </>
        )
    }

    interface WizardStepFooterProps {
        prev: number,
        next: number
    }

    function WizardStepFooter({
        prev,
        next
    }: WizardStepFooterProps) {
        return (
            <div className={styles.footer}>
                <Button onClick={() => setStep(prev)}>
                    <IconChevronLeft size={14} />
                    Back
                </Button>
                <Button primary onClick={() => setStep(next)}>
                    Next
                    <IconChevronRight size={14} />
                </Button>
            </div>
        )
    }
}
