import React, { useEffect, useState } from "react"
import Filter from "../../Filter/Filter"

const ListCard = (props) => {
 

    return(
            <div>    
            <p className="title">Álbum: {props.list.name}, {props.list.year}</p>
            <table>
                <tr>
                <th className="row-number">N</th>
                <th className="row-title">Faixa</th>
                <th className="row-duration">Duração</th>
                </tr>
                {props.list.tracks.map((track) => {
                    return <tr key={track.id}>
                        <th>{track.number}</th>
                        <th className="row-title">{track.title}</th>
                        <th className="row-duration">{(track.duration / 60).toFixed(2)}</th>
                    </tr>
                })}
            </table>
            </div>
            
    )
}
export default ListCard