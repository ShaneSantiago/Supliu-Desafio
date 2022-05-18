import React, { useEffect, useState } from "react"
import { listDiscography } from "../../Services/request"
import ListCard from "./ListCard"
import { ContainerList } from "./Styled"
import Filter from "../../Filter/Filter"



const Home = () => {
    const [discography, setDiscography] = useState([])
    const [query, setQuery] = useState("")

    const updateQuery = (e) => {
        setQuery(e.target.value)
    }


    useEffect(() => {
        listDiscography(setDiscography)
        
    }, [])


    return(  
            <ContainerList>
            <Filter query={query} updateQuery={updateQuery} />

            {discography.data?.filter(listFilter => { 
            return listFilter.name.toLowerCase().includes(query.toLowerCase()) ||
            listFilter.tracks?.find(track => track.title.toLowerCase().includes(query.toLowerCase()))
        
        })
        
            .map((list) => {
             return <div>
                 <ListCard list={list} />
                 </div>
         })
            
        }
         </ContainerList>
    )
}
export default Home