// NewsApi: https://newsapi.org/ Article model definition
import { Source } from './Source';

export interface Article {
    source: Source;
    id: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    author: string;
}