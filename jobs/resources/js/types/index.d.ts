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
};
