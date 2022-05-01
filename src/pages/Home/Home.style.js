import styled from '@emotion/styled'


export const Banner = styled.section`
    height: 100vh;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    filter: contrast(0.9);
    -webkit-filter: contrast(0.9);
    -moz-filter: contrast(0.9);
    font-family: 'Secular One', sans-serif;
    &:after{
        content: "${(props) => props.title}";
        color: #bfff00;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: min(11vw, 5rem);
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border: 2px solid white;
        padding: 1rem 2rem;
    }
    &:before{
        content: "";
        position: absolute;
        inset: 0 0 0 0;
        background: rgba(16, 22, 50,.7);
    }
`