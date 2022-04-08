import { marked } from 'marked'
import cartoon from '~/assets/cartoon.jpeg'
import maferland from '~/assets/maferland.jpeg'
import Title from '~/components/typography/title'
import reset from '~/styles/profile.css'

import { SiInstagram as Instagram } from 'react-icons/si'
import { SiGithub as Github } from 'react-icons/si'
import { SiLinkedin as Linkedin } from 'react-icons/si'
import { SiTwitter as Twitter } from 'react-icons/si'

export function links() {
  return [{ rel: 'stylesheet', href: reset }]
}

const description = `
Hello, I'm Marc-Antoine. I'm addicted to crafting elegant solutions to a wide array of problems. I'm fascinated by TypeScript and sourdough bread.

I think that theory-crafting is very cool and I love challenging the status quo.

Work should allow your lifestyle, **not** the other way around.

I'm currently a Senior Frontend Engineer @ [Capdesk](https://www.capdesk.com/) 💻✌️
`

const socialLinks = [
  { Icon: Instagram, url: 'https://www.instagram.com/ma.ferland/' },
  { Icon: Github, url: 'https://github.com/maferland/' },
  { Icon: Linkedin, url: 'https://linkedin.com/in/marcantoineferland' },
  { Icon: Twitter, url: 'https://twitter.com/ma_ferland' },
]

export default function Index() {
  return (
    <>
      <Title>About</Title>

      <div className="flex items-center flex-1">
        <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-32 justify-evenly items-center">
          <div>
            <div className="profile-container w-64 h-64 lg:w-80 lg:h-80" style={{ backgroundImage: `url(${cartoon})` }}>
              <img className="profile-image" src={maferland} />
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-16">
            <div
              className="text-xl flex flex-col gap-4 font-light text-gray-600 leading-normal"
              dangerouslySetInnerHTML={{ __html: marked(description) }}
            />

            <div className="flex flex-row gap-16 justify-center md:justify-start">
              {socialLinks.map(({ Icon, url }) => (
                <a href={url} target="_blank">
                  <Icon size="40" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
