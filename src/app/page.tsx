import { Brand } from "./_components/brand/brand";
import { Content } from "./_components/content/content";
import { Hero } from "./_components/hero/hero";
import { Section } from "./_components/section/section";

export default function Home() {
    return (
        <>
            <Hero>
                <Content>
                    <Brand />
                    <h1 className="brand">Music stats<br />viewed from<br />a new lens</h1>
                    <h2>A fresh coat of paint for Last.fm bringing you closer to the music that defines you</h2>
                </Content>
            </Hero>
            <Section alternate>
                <Content>
                    <h1>something</h1>
                    <p>sdvdfbfdb</p>
                </Content>
            </Section>
            <Section>
                <Content>
                    <h1>something</h1>
                    <p>sdvdfbfdb</p>
                </Content>
            </Section>
            <Section alternate>
                <Content>
                    <h1>something</h1>
                    <p>sdvdfbfdb</p>
                </Content>
            </Section>
        </>
    )
}
