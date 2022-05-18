import styled from "styled-components"

export const ContainerList = styled.div`
   margin: 0 auto;
   background-color: rgba(255,255,255,0.5);
   width: 800px;

.title{
    font-size: 20px;
    margin: 5px;
}
th, tr{
    font-weight: lighter;
}
.row-number{
    padding: 5px;
}
.row-title{
    padding: 5px;
    text-align: start;
    width: 100%;
}
button{
    background-color: #00BFFF;
    color: white;
    border: none;
    margin: 5px;
    cursor: pointer;
}

`;
export const AddNewPlayList = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
button{
    background-color: #00BFFF;
    border: none;
    color: white;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
}
`;