// NewsApi: https://newsapi.org/v2/everything Everything response model definition
import { Article } from './Article';

export interface Everything {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Request {
    q: string;
    sources: string;
    domains: string;
    from: string;
    to: string;
    language: string;
    sortBy: string;
    pageSize: number;
    page: number;
}