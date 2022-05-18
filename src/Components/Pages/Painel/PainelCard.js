import React from "react"
import { ContainerList } from "./Styled"

const PainelCard = (props) => {
    return(
        <ContainerList>
            <p className="title">Álbum: {props.disc.name}</p> 
            <table>
                <tr>
                <th className="row-number">N</th>
                <th className="row-title">Faixa</th>
                <th className="row-duration">Duração</th>
                </tr>
                {props.disc.tracks.map((track) => {
                    return <tr key={track.id}>
                        <th>{track.number}</th>
                        <th className="row-title">{track.title}</th>
                        <th className="row-duration">{(track.duration / 60).toFixed(2)}</th>
                        <button onClick={() => props.deleteTrack(track.id)}>x</button>
                    </tr>
                    
                })}
                
            </table>
            <div className="button-btn">
            <button onClick={() => props.deletePlaylist(props.disc.id)}>Deletar</button>
            </div>
        </ContainerList>
    )
}
export default PainelCard