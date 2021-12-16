import { get } from '../Api'
import { NEWS_ENDPOINT, SOURCES_ENDPOINT } from '../constants/constants'

export const getNews = ({ query }) => {
  const url = NEWS_ENDPOINT.replace('{{QUERY_SEARCH}}', query)
  return get({ url })
}

export const getSources = () => {
  const url = SOURCES_ENDPOINT
  return get({ url })
}

const getRange = ({ to, from }) => {
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
  return getNews({ query })
}
