export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface City {
    id: number;
    name: string;
    region_id: number;
    created_at: string;
    updated_at: string;
}

export interface Region {
    id: number;
    region: string;
    created_at: string;
    updated_at: string;
    cities: City[];
}

export interface Category {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface FilterTypes {
    search: string;
    category: string;
    region: string;
    type: string;
}

export interface Company {
    id: number;
    name: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    logo: string;
    website: string;
    created_at: string;
    updated_at: string;
    announcements: Announcement[];
}

export interface Announcement {
    id: number;
    author_id: number;
    category_id: number;
    company_id: number;
    region_id: number;
    title: string;
    description: string;
    employment_type: string;
    end_date: string;
    salary: string;
    status: string;
    vacancy_type: string;
    created_at: string;
    updated_at: string;
    company: Company;
}

interface PricingOption {
    id: number;
    pricing_plan_id: number;
    plan: PricingPlan;
    min_vacancies?: number;
    max_vacancies?: number;
    price: string;
    created_at: string;
    updated_at: string;
}

// Pricing Plan Interface
interface PricingPlan {
    id: number;
    name: string;
    description: string;
    is_vip: number;
    base_duration_days: string;
    created_at: string;
    updated_at: string;
    options: PricingOption[];
}

export interface Faqs {
    question: string;
    answer: string;
    id: number;
    created_at: string;
    updated_at: string;
}

export interface Abouts {
    headerText: string;
    middleText: string;
    footerText: string;
    founder: string;
    co_founder: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    categories: Category[];
    regions: Region[];
    announcement: Announcement;
    company: Company;
    pricing: PricingPlan[];
    forWhat: string;
    faqs: Faqs[];
    abouts: Abouts[];
};
