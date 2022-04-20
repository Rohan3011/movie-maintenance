export interface Movie {
    id: number;
    title: string;
    description: string;
    language: string;
    image: string;
    date_of_release: string;
    genre?: string;
};