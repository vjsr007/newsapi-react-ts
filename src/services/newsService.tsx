import { get } from '../Api'
const { NEWS_ENDPOINT, SOURCES_ENDPOINT } = require('../constants/constants')

type getNewsParams = {
  query: string,
}

export const getNews = ({ query }: getNewsParams) => {
  const url = NEWS_ENDPOINT.replace('{{QUERY_SEARCH}}', query)
  return get({ url })
}

export const getSources = () => {
  const url = SOURCES_ENDPOINT
  return get({ url })
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
  page = 1,
  q = '*',
  sources = '',
  sortBy = '',
  language = '',
  to = null,
  from = null,
}) => {
  const query = `q=${q}&page=${page}&sources=${sources}&sortBy=${sortBy}&language=${language}${getRange(
    { to, from }
  )}`
  return getNews({ query } as getNewsParams)
}
