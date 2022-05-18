import axios from "axios"
import { BASE_URL, headers } from "./url"

export const listDiscography = (setDiscography) => {
        
    axios.get(`${BASE_URL}/album`, headers)
    .then((res) => {
        setDiscography(res.data)
        console.log(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
}
export const createNewAlbum = (form, clear) => {
       
    axios.post(`${BASE_URL}/album`, form, headers)
    .then((res) => {
        alert("Album criado com sucesso")
        clear()
    })
    .catch((error) => {
        alert(error.response.data)
    })
}

export const createTrack = (form, clear) => {
        axios.post(`${BASE_URL}/track`, form, headers)
        .then((res) => {
            alert("Música adicionada com successo")
            clear()
        })
        .catch((error) => {
            alert(error.response.data)
        })
    }
