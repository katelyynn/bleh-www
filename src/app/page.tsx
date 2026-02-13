import { IconBadgesFilled, IconBlocks, IconBrandDiscordFilled, IconBrush, IconClearFormatting, IconDisc, IconDownload, IconDroplet, IconHeart, IconHeartFilled, IconLabel, IconLanguage, IconLanguageHiragana, IconLayout2, IconLayout2Filled, IconMessage2, IconMusicPlus, IconProgressCheck, IconUsersGroup } from "@tabler/icons-react";
import { Brand } from "./_components/brand/brand";
import { Card, Content, SideLeft, SideRight } from "./_components/content/content";
import { Feature, FeatureIcon, FeatureList } from "./_components/feature/feature";
import { Hero } from "./_components/hero/hero";
import { Section } from "./_components/section/section";
import { Button, ButtonRow } from "./_components/button/button";
import { BrowserButton } from "./_components/button/browser_button";
import { Image } from "./_components/image/image";
import { Slides } from "./_components/slides/slides";
import { InstallWizard } from "./_components/wizard/wizard";

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
                                <InstallWizard>
                                    <Button primary>
                                        <IconDownload size={18} />
                                        <BrowserButton />
                                    </Button>
                                </InstallWizard>
                                <Button link="https://katelyn.moe/sponsor" primary colourful sponsor>
                                    <IconHeartFilled size={18} />
                                    Sponsor
                                </Button>
                                <Button link="https://discord.gg/xU9KxGQpVw" primary colourful discord>
                                    <IconBrandDiscordFilled size={18} />
                                    Discord
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
                            <Slides images={[
                                {
                                    src: '/appearance.webp',
                                    alt: 'Customisable themes and accent colours'
                                },
                                {
                                    src: '/library.webp',
                                    alt: 'Explore your library in detail'
                                },
                                {
                                    src: '/playback_settings.webp',
                                    alt: 'Detect tags from music titles, correct capitalisations easily'
                                },
                                {
                                    src: '/profile_2.webp',
                                    alt: 'Example profile view'
                                },
                                {
                                    src: '/gallery.webp',
                                    alt: 'Browse galleries, expand and bookmark images'
                                },
                                {
                                    src: '/album.webp',
                                    alt: 'Go all out customising with accent colours and vibrancy (if you choose)'
                                }
                            ]} />
                        </Content>
                    </SideLeft>
                    <SideRight>
                        <Content>
                            <FeatureList>
                                <Feature icon={IconDroplet} title="Choose your style">
                                    Enjoy a range of five themes from the <em>brightest to the darkest</em>.<br />Find the <em>colour that suits you best</em> from a wide range of presets, seasonal events, and a customiser to fine-tune.
                                </Feature>
                                <Feature icon={IconBlocks} title="Built from experience">
                                    Every page has been restructured based on <em>my own experiences</em> using Last.fm through the years, so hopefully it’ll feel better for you too.
                                </Feature>
                                <Feature icon={IconProgressCheck} title="Frequently updated">
                                    The update checker helps you have a <em>bug-free and feature-full</em> time.<br />Changelogs are included to keep you in the loop on what’s happening.
                                </Feature>
                                <Feature icon={IconLanguage} title="In-built translations">
                                    The whole of bleh is built to support <em>community-contributed translations</em>, matching every language Last.fm provides as an option.
                                </Feature>
                            </FeatureList>
                        </Content>
                    </SideRight>
                </Content>
            </Section>
            <Section>
                <Card>
                    <Content column={false} outer>
                        <SideLeft>
                            <Content>
                                <FeatureIcon icon={IconDisc} large />
                                <h2>Reduce visual clutter</h2>
                                <p>Guest features and song tags are <em>automatically detected and treated</em> to let you focus on the actual music.<br />The <em>capitalisation of titles</em> can also be corrected via community contributions with bleh’s own system.</p>
                            </Content>
                        </SideLeft>
                        <SideRight span>
                            <Content>
                                <Image src={'/tracks.webp'} alt="Reduce visual clutter" shrink />
                            </Content>
                        </SideRight>
                    </Content>
                </Card>
            </Section>
            <Section>
                <Card>
                    <Content column={false} outer>
                        <SideLeft span>
                            <Content>
                                <Image src={'/banner_2.webp'} alt="Make your profile feel home" shrink round />
                            </Content>
                        </SideLeft>
                        <SideRight>
                            <Content>
                                <FeatureIcon icon={IconBrush} large />
                                <h2>Make your profile feel home</h2>
                                <p>Apply a <em>banner image of your choosing</em> across the top of your profile visible to any other bleh users.<br />Additionally, customise your <em>display name, profile accent colour, badges</em>, and more by sponsoring the project.</p>
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
                                <FeatureIcon icon={IconMessage2} large />
                                <h2>Keep the conversation going</h2>
                                <p>Express yourself with native <em>Markdown integration</em> in shoutboxes and profile descriptions, including <em>images, line breaks, timestamps, text formatting</em> etc.<br />Additionally, see <em>shoutbox previews</em> return on music pages to get a snippet of what’s being discussed at the moment.</p>
                            </Content>
                        </SideLeft>
                        <SideRight span>
                            <Content>
                                <Image src={'/express.webp'} alt="Keep the conversation going" shrink />
                            </Content>
                        </SideRight>
                    </Content>
                </Card>
            </Section>
            <Section>
                <Card>
                    <Content column={false} outer>
                        <SideLeft span>
                            <Content>
                                <Image src={'/collage.webp'} alt="Collage your music" shrink round />
                            </Content>
                        </SideLeft>
                        <SideRight>
                            <Content>
                                <FeatureIcon icon={IconLayout2Filled} large />
                                <h2>Collage your music</h2>
                                <p>Say goodbye to requiring external tools for <em>making album collages</em>, bleh has it covered. You can generate with preset timestamps (for now) for <em>artists, albums, and even tracks</em>.<br />You can even pick <em>a specific size</em> in width and height you’re after.</p>
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
                                <FeatureIcon icon={IconUsersGroup} large />
                                <h2>Stay connected</h2>
                                <p>Add people as <em>close friends</em> to keep updated on their recent listening.<br />Select one as a special <em>‘starred friend’</em> to view their scrobbles alongside yours everywhere.</p>
                            </Content>
                        </SideLeft>
                        <SideRight span>
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
                        <SideLeft span>
                            <Content>
                                <Image src={'/scrobble.webp'} alt="Scrobble on the go" shrink round />
                            </Content>
                        </SideLeft>
                        <SideRight>
                            <Content>
                                <FeatureIcon icon={IconMusicPlus} large />
                                <h2>Scrobble on the go</h2>
                                <p>Connect your account to <em>scrobble on-site</em>, no externals required.<br />Additionally, navigate to someones page and hit <em>‘copy’ to clone the scrobble</em> with no extra typing required.</p>
                            </Content>
                        </SideRight>
                    </Content>
                </Card>
            </Section>
            <Section alternate>
                <Content column={false} outer>
                    <SideLeft span>
                        <Content>
                            <h2>Sponsors get rewards</h2>
                            <FeatureList>
                                <Feature icon={IconLabel} title="Present yourself">
                                    Choose a <em>custom display name</em> to take place of your username on your profile. Your username will be displayed beneath with an @ for clarity.
                                </Feature>
                                <Feature icon={IconClearFormatting} title="Styled with flair">
                                    Choose from a selection of <em>custom fonts and font styles</em> for your display name. Can be toggled off per-user for accessibility.
                                </Feature>
                                <Feature icon={IconDroplet} title="Painted in colour">
                                    Apply a custom accent colour <em>visible to everyone</em> who visits your profile. This overrides anyone’s personal accent colour setting.
                                </Feature>
                                <Feature icon={IconBadgesFilled} title="Rep a badge">
                                    Choose a <em>custom badge</em> to show on your avatar when sponsoring monthly. You can choose the icon, colour, and text.
                                </Feature>
                            </FeatureList>
                        </Content>
                    </SideLeft>
                    <SideRight>
                        <Content>
                            <Image src={'/sponsor.webp'} alt="Sponsors get rewards" shrink round />
                        </Content>
                    </SideRight>
                </Content>
            </Section>
            <Section>
                <Content outer>
                    <Brand />
                    <h2>Peaked your interest?</h2>
                    <ButtonRow>
                        <InstallWizard>
                            <Button primary>
                                <IconDownload size={18} />
                                <BrowserButton />
                            </Button>
                        </InstallWizard>
                        <Button link="https://katelyn.moe/sponsor" primary colourful sponsor>
                            <IconHeartFilled size={18} />
                            Sponsor
                        </Button>
                        <Button link="https://discord.gg/xU9KxGQpVw" primary colourful discord>
                            <IconBrandDiscordFilled size={18} />
                            Discord
                        </Button>
                    </ButtonRow>
                </Content>
            </Section>
        </>
    )
}
