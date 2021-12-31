import { useEffect, useState } from "react"
import { Source } from "../models/Source"
import { Sources } from "../models/Sources"
import { getSources } from "../services/newsService"

const useFetchSources = () => {    
    const [sources, setSources] = useState<Source[]>([])

    useEffect(() => {
        getSources().then((data: Sources) => setSources(data.sources))
    }, [])    

    return sources
}

export default useFetchSources