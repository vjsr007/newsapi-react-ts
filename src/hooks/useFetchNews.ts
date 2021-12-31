import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"
import { Everything, Request } from "../models/Everything"
import { Source } from "../models/Source"
import { Sources } from "../models/Sources"
import { changeNews, getSources } from "../services/newsService"
import { getRange } from "../shared/utils"

const initialFilterState: Request = {
    page: 1,
    sortBy: '',
    language: '',
    pageSize: 10,
    q: '*',
    sources: '',
    domains: '',
    from: '',
    to: ''
}

const useFetchNews = (initFilters?: Request) => {
    const [articles, setArticles] = useState<Everything>({} as Everything)
    const [error, setError] = useState<string | undefined>(undefined)
    const [filters, setFilters] = useState<Request>(initFilters || initialFilterState)
    const [sources, setSources] = useState<Source[]>([])
    const [tempFilters, setTempfilters] = useState<Request>(filters)

    const handleArticleError = (message: string): void => {
        setError(message)
    }

    useEffect(() => {
        getSources().then((data: Sources) => setSources(data.sources))
    }, [])

    useEffect(() => {
        handleChangeNews()
    }, [filters])

    const updateFilters = () => {
        setFilters({ ...filters, ...tempFilters })
    }

    const changePage = ({ page }: Request) => {
        if (page !== filters.page) {
            const newState = { ...filters, page }
            setFilters(newState)
            setTempfilters(newState)
        }
    }

    const changeTopic: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setTempfilters({ ...tempFilters, q: event.target.value })
    }

    const changeSources = (selectedOptions: string[]) => {
        setTempfilters({ ...tempFilters, sources: selectedOptions.map(option => option).join(',') })
    }

    const changeSortBy = (selectedOptions: string[]) => {
        setTempfilters({ ...tempFilters, sortBy: selectedOptions[0] })
    }

    const changeLanguage = (selectedOptions: string[]) => {
        setTempfilters({ ...tempFilters, language: selectedOptions[0] })
    }

    const changeDate = (selectedOptions: string[]) => {
        setTempfilters({ ...tempFilters, ...getRange(selectedOptions[0]) })
    }

    const handleChangeNews = async () => {
        setArticles({} as Everything)
        handleArticleError('')
        try {
            const response = await changeNews(filters)
            setArticles(response)
        } catch (error: any) {
            handleArticleError(error.message)
        }
    }

    return {
        articles,
        sources,
        changePage,
        changeTopic,
        changeSources,
        changeSortBy,
        changeLanguage,
        changeDate,
        updateFilters,
        error
    }
}

export default useFetchNews