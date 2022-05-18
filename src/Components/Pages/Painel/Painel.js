import React, { useEffect, useState } from "react"
import { BASE_URL, headers } from "../../Services/url"
import PainelCard from "./PainelCard"
import axios from "axios"
import { listDiscography } from "../../Services/request"
import { AddNewPlayList } from "./Styled"
import { useNavigate } from "react-router-dom"

const Painel = () => {
    const [discography, setDiscography] = useState([])

    const navigate = useNavigate()
    const goToCreate = () => {
        navigate("/create")
    }
    

    useEffect(() => {
        listDiscography(setDiscography)
    }, [])

    const deletePlaylist = (id) =>{
        axios.delete(`${BASE_URL}/album/${id}`, headers).then(res =>{
            setDiscography()
            alert('Playlist deletada com sucesso')
            
        }).catch(error =>{
            alert(error)
        }) 
    }

    const deleteTrack = (id) =>{
        axios.delete(`${BASE_URL}/track/${id}`, headers).then(res =>{
            setDiscography()
            alert('Música deletada com sucesso')
        }).catch(error =>{
            alert(error)
        }) 
    }

    return(
        <div>
            <AddNewPlayList>
            <button onClick={goToCreate}>Nova Playlist</button>
            </AddNewPlayList>

            {discography.data?.map((disc) => {
                return <PainelCard disc={disc} deletePlaylist={deletePlaylist} deleteTrack={deleteTrack}/>
            })}
        </div>
    )
}
export default Painel