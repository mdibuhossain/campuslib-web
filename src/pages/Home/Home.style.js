import styled from '@emotion/styled'


export const Banner = styled.section`
    height: 100vh;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    filter: contrast(0.95);
    &:before{
        content: "${(props) => props.title}";
        color: #bfff00;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
        position: absolute;
        inset: 0 0 0 0;
        background: rgba(16, 22, 50,.6);
    }
`