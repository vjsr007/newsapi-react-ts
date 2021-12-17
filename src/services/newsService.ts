import Api from '../Api'
import { Request } from '../models/Everything'
const { NEWS_ENDPOINT, SOURCES_ENDPOINT } = require('../constants/constants')

type getNewsParams = {
  query: string,
}

const api = Api.getInstance()

export const getNews = ({ query }: getNewsParams) => {
  const url = NEWS_ENDPOINT.replace('{{QUERY_SEARCH}}', query)
  return api.get(url)
}

export const getSources = () => {
  const url = SOURCES_ENDPOINT
  return api.get(url)
}

type getRangeParams = {
  to: string | null,
  from: string | null,
}

const getRange = ({ to, from }: getRangeParams) => {
  if (!to || !from) return ''
  return `&from=${from}&to=${to}`
}

export const changeNews = ({
  page,
  q,
  sources,
  sortBy,
  language,
  to,
  from,
}: Request) => {
  const query = `q=${q}&page=${page}&sources=${sources}&sortBy=${sortBy}&language=${language}${getRange(
    { to, from }
  )}`
  return getNews({ query } as getNewsParams)
}
