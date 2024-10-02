'use client'
import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

// export const revalidate = 0;

const SearchBar = () => {
    const [searchResultsList, setSearchResultsList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchParams = useSearchParams();
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        let params = new URLSearchParams(searchParams)

        if (!searchTerm) {
            params.delete('query')
            router.push(`${pathname}?${params.toString()}`)
            setSearchResultsList([])
            return
        }

        params.set('query', searchTerm)
        router.push(`${pathname}?${params.toString()}`)

        const timer = setTimeout(async () => {
            const apiCall = await fetch(`http://localhost:3000/api/search?query=${searchTerm}`, { method: "GET" })
            const searchResults = await apiCall.json()

            setSearchResultsList(searchResults.products)
        }, 1000);

        return () => {
            clearTimeout(timer);
            console.log('cleared');
        };

    }, [searchTerm]);

    if(pathname == '/login') return  

    return (
        <>
            <div className="search-bar">
                <form>
                    <input type="text" name="searchTerm" onChange={e => setSearchTerm(e.target.value)} placeholder="Enter product title"/>
                </form>
            </div>

            {(searchResultsList && searchResultsList.length > 0) && (
                <div className="searchResultsList">
                    {searchResultsList.map(searchResult => {
                        const { id, title } = searchResult
                        return <p key={id} className="searchResultItem">
                            {title}
                        </p>
                    })}
                </div>
            )}
        </>
    )
}

export default SearchBar