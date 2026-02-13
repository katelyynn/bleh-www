"use client";

import { Dialog } from "radix-ui";
import React, { useState } from "react";
import styles from "./wizard.module.css";
import { Button, ButtonRow } from "../button/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { BrowserListHelper, ExtensionList } from "../browser/browser";

interface InstallWizardProps {
    children: React.ReactNode
}

export function InstallWizard({
    children
}: InstallWizardProps) {
    const [step, setStep] = useState(0);
    const [selectedBrowser, setSelectedBrowser] = useState("");
    const [selectedExtension, setSelectedExtension] = useState("");

    const steps = [
        {
            title: 'Pick your browser',
            body:
                <>
                    <p>If you aren’t sure, go with Chrome - it’s a safe bet.</p>
                    <BrowserListHelper selectedBrowser={selectedBrowser} setSelectedBrowser={setSelectedBrowser} setStep={setStep} />
                </>,
            next: true
        },
        {
            title: 'Choose an extension manager',
            body:
                <>
                    <p>Pick a userscript manager that will handle loading bleh for you.</p>
                    <ExtensionList browser={selectedBrowser} selectedExtension={selectedExtension} setSelectedExtension={setSelectedExtension} setStep={setStep} />
                </>,
            next: true
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
        const nextDisabled = content.next || false;

        return (
            <>
                <Dialog.Title className={styles.title}>
                    {content.title}
                </Dialog.Title>
                <div className={styles.content}>
                    {content.body}
                </div>
                <WizardStepFooter step={step} prev={prev} next={next} nextDisabled={nextDisabled} />
            </>
        )
    }

    interface WizardStepFooterProps {
        step: number,
        prev: number,
        next: number,
        nextDisabled: boolean
    }

    function WizardStepFooter({
        step,
        prev,
        next,
        nextDisabled = false
    }: WizardStepFooterProps) {
        return (
            <div className={styles.footer}>
                {step == 0 ? (
                    <Dialog.Close asChild>
                        <Button onClick={() => setStep(prev)}>
                            <IconChevronLeft size={14} />
                            Back
                        </Button>
                    </Dialog.Close>
                ): (
                    <Button onClick={() => setStep(prev)}>
                        <IconChevronLeft size={14} />
                        Back
                    </Button>
                )}
                <Button primary onClick={() => setStep(next)} disabled={nextDisabled}>
                    Next
                    <IconChevronRight size={14} />
                </Button>
            </div>
        )
    }
}
