"use client";
import Link from "next/link";
import Image from "next/image";
import GlitchText from "@/components/GlitchText";

const committee = [
    { name: "Humza Ahmad", role: "Core Coordination", image: "humza_profile.jpeg", phone: "+91 8240253854", insta: "itz__hu_mz.a_a", instaLink: "https://www.instagram.com/itz__hu_mz.a_a" },
    { name: "Sriparna Das", role: "Core Coordination & Hackathon Lead", image: "sriparna_profile.jpeg", phone: "+91 8961086320", insta: "_sriparnad05", instaLink: "https://www.instagram.com/_sriparnad05" },
    { name: "Nirmalya Mandal", role: "Web & IT Lead", image: "nirmalya_profile.jpeg", phone: "+91 7001467098", insta: "__niru.exe__", instaLink: "https://www.instagram.com/__niru.exe__" },
    { name: "Md. Ariyan Mondal", role: "Design & Media Lead", image: "ariyan_profile.jpeg", phone: "+91 7082047405", insta: "ft.toxcee", instaLink: "https://www.instagram.com/ft.toxcee" },
    { name: "Jeya Maity", role: "Social Media Lead", image: "jeya_profile.jpeg", phone: "+91 08420021986", insta: "_je.me._", instaLink: "https://www.instagram.com/_je.me._" },
    { name: "Ankur Ghosh", role: "Security & Discipline Lead", image: "ankur_profile.jpeg", phone: "+91 8927735456", insta: "_.ronty._", instaLink: "https://www.instagram.com/_.ronty._" },
    { name: "Atul Raj", role: "Security & Discipline Lead", image: "atul_profile.jpeg", phone: "+91 8170800855", insta: "raj_atul_19", instaLink: "https://www.instagram.com/raj_atul_19" },
    { name: "Khushi Mehta", role: "Sponsorship Lead", image: "khushi_profile.jpeg", phone: "+91 7980844018", insta: "khushhiiiiii.16", instaLink: "https://www.instagram.com/khushhiiiiii.16" },
    { name: "Suhana Paul", role: "Sponsorship Lead", image: "suhana_profile.jpeg", phone: "+91 9330064096", insta: "____suhanaa____", instaLink: "https://www.instagram.com/____suhanaa____" },
    { name: "Sowhardya Biswas", role: "Promotion Lead", image: "sowhardya_profile.jpeg", phone: "+91 9903404844", insta: "sowhardya_biswas", instaLink: "https://www.instagram.com/sowhardya_biswas" },
    { name: "Amisa Agarwal", role: "Promotion Lead", image: "amisha_profile.jpeg", phone: "+91 7501819625", insta: "amisaagarwal_", instaLink: "https://www.instagram.com/amisaagarwal_" },
    { name: "Mizan-Ur Rahman Mondal", role: "Food & Logistics Lead", image: "mizan_profile.jpeg", phone: "+91 7003670838" }
];

function InstagramIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-signal hover:text-ember transition-colors"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37" />
            <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>
    );
}

export default function TeamsPage() {
    return (
        <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="teams-page">
            <div className="max-w-6xl mx-auto">
                <p className="eyebrow mb-4">/ Teams</p>
                <GlitchText as="h1" className="text-6xl lg:text-8xl mb-8">Organizing Committee</GlitchText>

                <p className="text-bone/70 text-lg lg:text-xl max-w-3xl leading-relaxed mb-12">
                    When the lab gets strange and the lights start to flicker, this team keeps the experiment running. Equal parts midnight tinkering and careful planning, they shepherd wild ideas to the stage with steady hands and a taste for the uncanny.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {committee.map((member) => (
                        <div key={member.name} className="card-upside overflow-hidden flex flex-col">
                            <div className="relative w-full h-80 overflow-hidden bg-ink/50">
                                <Image
                                    src={`/images/teams_auktave/${member.image}`}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                  loading={member.name === "Sriparna Das" ? "eager" : "lazy"}
                                  priority={member.name === "Sriparna Das"}
                                />
                            </div>
                            <div className="p-6 flex flex-col gap-3 grow">
                                <div>
                                    <h3 className="headline text-xl">{member.name}</h3>
                                    <p className="text-signal text-xs font-mono uppercase tracking-[0.15em] mt-2">{member.role}</p>
                                </div>
                                <div className="grow" />
                                <div className="space-y-2 border-t border-ember/10 pt-3">
                                    <p className="text-bone/70 text-sm">{member.phone}</p>
                                    {member.instaLink && (
                                        <a
                                            href={member.instaLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-bone/70 hover:text-ember transition-colors group"
                                        >
                                            <InstagramIcon />
                                            <span className="text-xs font-mono uppercase tracking-wider group-hover:text-ember">@{member.insta}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}
