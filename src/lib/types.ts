export type SchemaOrganization = {
    "@type": "Organization";
    name: string;
    url?: string;
};

export type SchemaOffer = {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
    availability?: string;
    url?: string;
};

export type EventType = {
    slug: string;
    name: string;
    tagline?: string;
    summary?: string;
    duration?: string;
    teamSize?: string;
    prizePool?: string;
    registrationFee?: string;
    highlight?: boolean;
    coordinator?: { name: string; role?: string; phone?: string; email?: string };
    rules?: string[];
    tracks?: string[];
    sections?: Array<{ eyebrow?: string; title: string; description?: string; items: string[] }>;
    subEvents?: Array<{
        slug: string;
        name: string;
        tagline?: string;
        summary?: string;
        duration?: string;
        teamSize?: string;
        prizePool?: string;
        registrationFee?: string;
        coordinator?: { name: string; role?: string; phone?: string; email?: string };
        rules?: string[];
        sections?: Array<{ eyebrow?: string; title: string; description?: string; items: string[] }>;
        offers?: SchemaOffer;
    }>;
    themes?: Array<{ title: string; description?: string }>;
    requirements?: string[];
    selectionProcess?: string[];
    prizes?: string[];
    toolkit?: string[];
    fieldCoordinators?: Array<{ name: string; role?: string; phone?: string; email?: string }>;
    images?: string[];
    importantDates?: string[];
    startDate?: string;
    endDate?: string;
    image?: string | string[];
    performer?: SchemaOrganization | string;
    offers?: SchemaOffer;
};

export default EventType;
