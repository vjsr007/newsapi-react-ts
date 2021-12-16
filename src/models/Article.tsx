// NewsApi: https://newsapi.org/ Article model definition
import { ArticleItem } from './ArticleItem';

export interface Article {
    status: string;
    totalResults: number;
    articles: ArticleItem[];
}