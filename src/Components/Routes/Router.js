import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../Header/Header"
import CreateAlbum from "../Pages/Create/Create"
import Home from "../Pages/Home/Home"
import Painel from "../Pages/Painel/Painel"

const Router = () => {
    return(
        
            <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>

                <Route exact path="/create" element={<CreateAlbum />}>
                </Route>

                <Route exact path="/painel" element={<Painel />}>
                </Route>
            </Routes>
        
    )
}
export default Router