// NewsApi: https://newsapi.org/v2/everything Create a Builder pattern in Typescript for request news from NewsApi.org

class RequestNewsBuilder {
    private query: string = '*'
    private page: number = 1
    private sources: string = ''
    private sortBy: string = ''
    private language: string = ''
    private to: string | null = null
    private from: string | null = null

    public constructor() { }

    public setQuery(query: string) {
        this.query = query
        return this
    }

    public setPage(page: number) {
        this.page = page
        return this
    }

    public setSources(sources: string) {
        this.sources = sources
        return this
    }

    public setSortBy(sortBy: string) {
        this.sortBy = sortBy
        return this
    }

    public setLanguage(language: string) {
        this.language = language
        return this
    }

    public setTo(to: string | null) {
        this.to = to
        return this
    }

    public setFrom(from: string | null) {
        this.from = from
        return this
    }

    public build() {
        return `q=${this.query}&page=${this.page}&sources=${this.sources}&sortBy=${this.sortBy}&language=${this.language}${this.to ? `&to=${this.to}` : ''}${this.from ? `&from=${this.from}` : ''}`
    }
}

export default RequestNewsBuilder
