import Link from "next/link"
import { footerLinkGroups, socialLinks } from "@/shared/config/navigation"
import { siteConfig } from "@/shared/config/site"

export function Footer() {
  return (
    <footer className="bg-slate-900 py-20 text-slate-400">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="mb-8 inline-block text-2xl font-bold tracking-widest text-white transition-colors hover:text-blue-400"
            >
              {siteConfig.name}
            </Link>
            <p className="mb-8 max-w-sm leading-relaxed text-slate-500">
              The World Academy for Artificial Consciousness (WAAC) is the global authority on the
              scientific study and ethical governance of conscious AI systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 transition-all hover:bg-white hover:text-slate-900"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                {group.title}
              </h3>
              <ul className="space-y-4 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-blue-400">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-12 md:flex-row">
          <p className="text-xs text-slate-600">
            Copyright {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
