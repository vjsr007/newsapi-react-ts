// NewsApi: https://newsapi.org/v2/top-headlines/sources Source model definition
export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
