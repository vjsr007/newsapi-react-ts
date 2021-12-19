import Api from '../Api'
import { Request } from '../models/Everything'
import RequestNewsBuilder from './RequestNewsBuilder'
const { NEWS_ENDPOINT, SOURCES_ENDPOINT } = require('../constants/constants')

type getNewsParams = {
  query: string,
}

const api = Api.getInstance()

export const getNews = (params: getNewsParams): Promise<any> => {
  const { query } = params
  const url = NEWS_ENDPOINT.replace('{{QUERY_SEARCH}}', query)
  return api.get(url)
}

export const getSources = (): Promise<any> => {
  const url = SOURCES_ENDPOINT
  return api.get(url)
}

export const changeNews = (request: Request) : Promise<any> => {
  const { page, q, sources, sortBy, language, to, from } = request
  const query = new RequestNewsBuilder()
    .setQuery(q)
    .setPage(page)
    .setSources(sources)
    .setSortBy(sortBy)
    .setLanguage(language)
    .setTo(to)
    .setFrom(from)
    .build()

  return getNews({ query } as getNewsParams)
}
