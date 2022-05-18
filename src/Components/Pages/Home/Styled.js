import styled from "styled-components"
import background from "../../../assets/background.png"


export const Container = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    height: 100vh;
    
`;
export const ContainerList = styled.div`
   margin: 0 auto;
   background-color: rgba(255,255,255,0.5);
   width: 800px;
   height: 500px;

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
    width: 100vw;
}

`;
