"use client";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";

const committee = [
    { name: "Humza Ahmad", role: "Core Coordination" },
    { name: "Sriparna Das", role: "Core Coordination & Hackathon Lead" },
    { name: "Nirmalya Mandal", role: "Web & IT head" },
    { name: "Md. Ariyan Mondal", role: "Design & Media Lead" },
    { name: "Atul Raj", role: "Security & Discipline Lead" },
    { name: "Ankur Ghosh", role: "Security & Discipline Lead" },
    { name: "Khushi Mehta", role: "Sponsorship Lead" },
    { name: "Suhana Paul", role: "Sponsorship Lead" },
    { name: "Sowhardya Biswas", role: "Promotion Lead" },
    { name: "Amisa Agarwal", role: "Promotion Lead" },
    { name: "Mizan-Ur Rahman Mondal", role: "Food & Logistics Lead" }
];

function InitialsAvatar({ name }: { name: string }) {
    const parts = name.split(" ").filter(Boolean);
    const initials = parts.length === 1 ? parts[0][0] : (parts[0][0] + parts[parts.length - 1][0]);
    return (
        <div className="w-20 h-20 rounded-full bg-linear-to-br from-ember to-signal flex items-center justify-center text-white font-bold text-xl">
            {initials.toUpperCase()}
        </div>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {committee.map((member) => (
                        <div key={member.name} className="card-upside p-6 flex flex-col items-start gap-4">
                            <div className="flex items-center gap-4 w-full">
                                <InitialsAvatar name={member.name} />
                                <div>
                                    <h3 className="headline text-2xl">{member.name}</h3>
                                    <p className="text-bone/60 text-sm mt-1">{member.role}</p>
                                </div>
                            </div>
                            <div className="mt-2 w-full">
                                <p className="text-bone/50 text-sm">Contact: <span className="text-bone/70">TBD</span></p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}
