import React, { useState } from "react"
import { FilterContainer } from "./styled"


const Filter = (props) => {
console.log(props.query)
    return(
        <div>
        <FilterContainer>
            <div>
            <p>Digite uma palavra chave</p>
            <input   
            value={props.query}
            onChange={props.updateQuery}
            />
            <button>Procura</button> 
            </div>
            
        </FilterContainer>
        </div>
    )
}
export default Filter