import React from "react"
import useForm from "../../Hooks/useForm"
import { createNewAlbum } from "../../Services/request"
import CreateTrack from "./CreateTrack"
import { ContainerForm} from "./Styled"
import TextField from '@mui/material/TextField';
import { Box, Button } from "@mui/material"

const CreateAlbum = () => {
    const [form, onChange, clear] = useForm({
        name: "",
        year: ""
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        createNewAlbum(form, clear)
    }


    return(
        <ContainerForm>
            <form onSubmit={onSubmitForm}>
                <TextField
                type="name"
                margin="normal"
                name="name"
                label="Álbum"
                value={form.name}
                onChange={onChange}
                
                />

                <TextField 
                type="number"
                margin="normal"
                name="year"
                label="Ano de lançamento"
                value={form.year}
                onChange={onChange}
                />
                <button>Criar</button>
            </form>
            <CreateTrack />
        </ContainerForm>
    )
}
export default CreateAlbum