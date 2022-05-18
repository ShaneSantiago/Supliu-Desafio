import { TextField } from "@mui/material"
import React from "react"
import useForm from "../../Hooks/useForm"
import { createTrack } from "../../Services/request"
import { ContainerForm } from "./Styled"

const CreateTrack = () => {
    const [form, onChange, clear] = useForm({
        album_id: "",
        number: "",
        title: "",
        duration: ""
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        createTrack(form, clear)
    }

  
    return(
        <ContainerForm>
            <form onSubmit={onSubmitForm}>
                <TextField 
                name="album_id"
                type="number"
                label="ID do álbum"
                margin="normal"
                value={form.album_id}
                onChange={onChange}
                />

                <TextField 
                name="number"
                type="number"
                label="Número da faixa"
                margin="normal"
                value={form.number}
                onChange={onChange}
                />

                <TextField 
                name="title"
                type="text"
                label="Título da faixa"
                margin="normal"
                value={form.title}
                onChange={onChange}
                />

                <TextField 
                name="duration"
                type="number"
                label="Segundos da faixa"
                margin="normal"
                value={form.duration}
                onChange={onChange}
                />
                <button>Criar</button>
            </form>
        </ContainerForm>
    )
}
export default CreateTrack