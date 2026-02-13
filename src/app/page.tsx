import { IconBlocks, IconDownload, IconDroplet, IconHeart, IconMessage2, IconProgressCheck, IconUsersGroup } from "@tabler/icons-react";
import { Brand } from "./_components/brand/brand";
import { Card, Content, SideLeft, SideRight } from "./_components/content/content";
import { Feature, FeatureIcon, FeatureList } from "./_components/feature/feature";
import { Hero } from "./_components/hero/hero";
import { Section } from "./_components/section/section";
import { Button, ButtonRow } from "./_components/button/button";
import { BrowserButton } from "./_components/button/browser_button";
import { Image } from "./_components/image/image";

export default function Home() {
    return (
        <>
            <Hero>
                <Content column={false} outer>
                    <SideLeft>
                        <Content>
                            <Brand />
                            <h1 className="brand">Music stats<br />viewed from<br />a new lens</h1>
                            <h3 style={{maxWidth: 400}}>A fresh coat of paint for Last.fm bringing you closer to the music that defines you</h3>
                            <ButtonRow>
                                <BrowserButton />
                                <Button link="https://katelyn.moe/sponsor" primary colourful sponsor>
                                    <IconHeart size={18} />
                                    Become a sponsor
                                </Button>
                            </ButtonRow>
                        </Content>
                    </SideLeft>
                    <SideRight span>
                        <Content>
                            <div className="banner">
                                <img src={"/banner.webp"} alt="banner" />
                            </div>
                        </Content>
                    </SideRight>
                </Content>
            </Hero>
            <Section alternate>
                <Content column={false} outer>
                    <SideLeft span>
                        <Content>
                            <Image src={'/themes.webp'} alt="Theming" />
                        </Content>
                    </SideLeft>
                    <SideRight>
                        <Content>
                            <FeatureList>
                                <Feature icon={IconDroplet} title="Choose your style">
                                    Enjoy a range of five themes from the brightest to the darkest.<br />Find the colour that suits you best from a wide range of presets, seasonal events, and a customiser to fine-tune.
                                </Feature>
                                <Feature icon={IconBlocks} title="Built from experience">
                                    Every page has been restructured based on my own experiences using Last.fm through the years, so hopefully it’ll feel better for you too.
                                </Feature>
                                <Feature icon={IconProgressCheck} title="Frequently updated">
                                    The update checker helps you have a bug-free and feature-full time.<br />Changelogs are included to keep you in the loop on what’s happening.
                                </Feature>
                            </FeatureList>
                        </Content>
                    </SideRight>
                </Content>
            </Section>
            <Section>
                <Card>
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
                                <Image src={'/close_friends.webp'} alt="Stay connected" shrink />
                            </Content>
                        </SideRight>
                    </Content>
                </Card>
            </Section>
            <Section>
                <Card>
                    <Content column={false} outer>
                        <SideLeft>
                            <Content>
                                <Image src={'/express.webp'} alt="Keep the conversation going" shrink />
                            </Content>
                        </SideLeft>
                        <SideRight span>
                            <Content>
                                <FeatureIcon icon={IconMessage2} large />
                                <h2>Keep the conversation going</h2>
                                <p>Express yourself with native <em>Markdown integration</em> in shoutboxes and profile descriptions, including <em>images, line breaks, timestamps, text formatting</em> etc.<br />Additionally, see <em>shoutbox previews</em> return on music pages to get a snippet of what’s being discussed at the moment.</p>
                            </Content>
                        </SideRight>
                    </Content>
                </Card>
            </Section>
            <Section alternate>
                <Content column={false} outer>
                    <SideLeft span>
                        <Content>
                            <p>image goes here</p>
                        </Content>
                    </SideLeft>
                    <SideRight>
                        <Content>
                            <h2>Sponsors get rewards</h2>
                            <FeatureList>
                                <Feature icon={IconDroplet} title="Choose your style">
                                    Enjoy a range of five themes from the brightest to the darkest.<br />Find the colour that suits you best from a wide range of presets, seasonal events, and a customiser to fine-tune.
                                </Feature>
                                <Feature icon={IconBlocks} title="Built from experience">
                                    Every page has been restructured based on my own experiences using Last.fm through the years, so hopefully it’ll feel better for you too.
                                </Feature>
                                <Feature icon={IconProgressCheck} title="Frequently updated">
                                    The update checker helps you have a bug-free and feature-full time.<br />Changelogs are included to keep you in the loop on what’s happening.
                                </Feature>
                            </FeatureList>
                        </Content>
                    </SideRight>
                </Content>
            </Section>
        </>
    )
}
