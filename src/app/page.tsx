import { IconDroplet, IconUsersGroup } from "@tabler/icons-react";
import { Brand } from "./_components/brand/brand";
import { Content, SideLeft, SideRight } from "./_components/content/content";
import { Feature, FeatureIcon, FeatureList } from "./_components/feature/feature";
import { Hero } from "./_components/hero/hero";
import { Section } from "./_components/section/section";

export default function Home() {
    return (
        <>
            <Hero>
                <Content column={false} outer>
                    <SideLeft>
                        <Content>
                            <Brand />
                            <h1 className="brand">Music stats<br />viewed from<br />a new lens</h1>
                            <h3>A fresh coat of paint for Last.fm bringing you closer to the music that defines you</h3>
                        </Content>
                    </SideLeft>
                    <SideRight span>
                        <Content>
                            <p>image goes here</p>
                        </Content>
                    </SideRight>
                </Content>
            </Hero>
            <Section alternate>
                <Content column={false} outer>
                    <SideLeft span>
                        <Content>
                            <p>image goes here</p>
                        </Content>
                    </SideLeft>
                    <SideRight>
                        <Content>
                            <h2>What’s in it for me?</h2>
                            <p>sdvdfbfdb</p>
                            <FeatureList>
                                <Feature icon={IconDroplet} title="Choose your style">
                                    Enjoy a range of five themes from the brightest to the darkest.<br />Find the colour that suits you best from a wide range of presets, seasonal events, and a customiser to fine-tune.
                                </Feature>
                                <Feature icon={IconDroplet} title="Choose your style">
                                    Enjoy a range of five themes from the brightest to the darkest.<br />Find the colour that suits you best from a wide range of presets, seasonal events, and a customiser to fine-tune.
                                </Feature>
                                <Feature icon={IconDroplet} title="Choose your style">
                                    Enjoy a range of five themes from the brightest to the darkest.<br />Find the colour that suits you best from a wide range of presets, seasonal events, and a customiser to fine-tune.
                                </Feature>
                                <Feature icon={IconDroplet} title="Choose your style">
                                    Enjoy a range of five themes from the brightest to the darkest.<br />Find the colour that suits you best from a wide range of presets, seasonal events, and a customiser to fine-tune.
                                </Feature>
                            </FeatureList>
                        </Content>
                    </SideRight>
                </Content>
            </Section>
            <Section>
                <Content column={false} outer>
                    <SideLeft span>
                        <Content>
                            <FeatureIcon icon={IconUsersGroup} large />
                            <h2>Stay connected</h2>
                            <p>Add people as <em>close friends</em> to keep updated on their recent listening.<br />Select one as a special <em>‘starred friend’</em> to view their scrobbles alongside yours everywhere.</p>
                        </Content>
                    </SideLeft>
                    <SideRight>
                        <Content>
                            <p>thing</p>
                        </Content>
                    </SideRight>
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
