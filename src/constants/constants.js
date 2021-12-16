import { API_URL, API_KEY } from '../config/config'

export const NEWS_ENDPOINT = `${API_URL}everything?{{QUERY_SEARCH}}&apiKey=${API_KEY}`

export const SOURCES_ENDPOINT = `${API_URL}top-headlines/sources?apiKey=${API_KEY}`

export const dates = [
  { id: 'day', name: 'Last day' },
  { id: 'week', name: 'Last week' },
  { id: 'month', name: 'Last month' },
]

export const lans = [
  { id: 'ar', name: 'ar' },
  { id: 'de', name: 'de' },
  { id: 'en', name: 'en' },
  { id: 'es', name: 'es' },
  { id: 'fr', name: 'fr' },
  { id: 'he', name: 'he' },
  { id: 'it', name: 'it' },
  { id: 'nl', name: 'nl' },
  { id: 'no', name: 'no' },
  { id: 'pt', name: 'pt' },
  { id: 'ru', name: 'ru' },
  { id: 'se', name: 'se' },
  { id: 'ud', name: 'ud' },
  { id: 'zh', name: 'zh' },
]

export const sort = [
  { id: 'relevancy', name: 'Relevancy' },
  { id: 'popularity', name: 'Popularity' },
  { id: 'publishedAt', name: 'PublishedAt' },
]
