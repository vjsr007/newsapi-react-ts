// NewsApi: https://newsapi.org/ ArticleItem model definition
import { Source } from './Source';

export interface ArticleItem {
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