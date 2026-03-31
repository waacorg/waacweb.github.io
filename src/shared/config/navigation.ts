import { Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  href: string
}

export interface FooterLinkGroup {
  title: string
  links: NavItem[]
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
}

export const primaryNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Events", href: "/events" },
  { title: "News", href: "/news" },
  { title: "Academicians", href: "/academicians" },
  { title: "Collaboration", href: "/collaboration" },
  { title: "Charter", href: "/charter" },
  { title: "About", href: "/about" },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Academy",
    links: [
      { title: "About Mission", href: "/about" },
      { title: "Academicians", href: "/academicians" },
      { title: "Official Charter", href: "/charter" },
      { title: "International Collaboration", href: "/collaboration" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "News & Updates", href: "/news" },
      { title: "Upcoming Events", href: "/events" },
      { title: "Evaluation Standards", href: "/cooperation/items/DIKWP-Standardization.html" },
      { title: "Contact Support", href: "mailto:contact@waac.ac" },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Email", href: "mailto:contact@waac.ac", icon: Mail },
]

