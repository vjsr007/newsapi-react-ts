// NewsApi: https://newsapi.org/v2/top-headlines/sources Sources response model definition
import { Source } from './Source';

export interface Sources {
    status: string;
    sources: Source[];
}
