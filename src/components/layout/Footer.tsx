import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-8 text-2xl font-bold text-white tracking-widest hover:text-blue-400 transition-colors">
                            WAAC
                        </Link>
                        <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                            The World Academy for Artificial Consciousness (WAAC) is the global authority on the scientific study and ethical governance of conscious AI systems.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                                { icon: <Github className="w-5 h-5" />, href: "#" },
                                { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@waac.ac" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Academy</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Mission</Link></li>
                            <li><Link href="/academicians" className="hover:text-blue-400 transition-colors">Academicians</Link></li>
                            <li><Link href="/charter" className="hover:text-blue-400 transition-colors">Official Charter</Link></li>
                            <li><Link href="/collaboration" className="hover:text-blue-400 transition-colors">International Collaboration</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/news" className="hover:text-blue-400 transition-colors">News & Updates</Link></li>
                            <li><Link href="/events" className="hover:text-blue-400 transition-colors">Upcoming Events</Link></li>
                            <li><a href="/cooperation/items/DIKWP-Standardization.html" className="hover:text-blue-400 transition-colors">Evaluation Standards</a></li>
                            <li><a href="mailto:contact@waac.ac" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} World Academy for Artificial Consciousness (WAAC). All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs text-slate-600 uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
