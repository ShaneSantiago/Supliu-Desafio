import React from "react"
import logo from "../../assets/logo.png"
import { ContainerHeader } from "./Styled"
import { useNavigate } from "react-router-dom"


const Header = () => {

    const navigate = useNavigate()

    const goToPainel = () => {
        navigate("/painel")
    }

    const goToDiscography = () => {
        navigate("/")
    }
    return(
        <ContainerHeader>
            <img src={logo} onClick={goToPainel}/>
            <h2 onClick={goToDiscography}>Discografia</h2>
        </ContainerHeader>
    )
}
export default Header