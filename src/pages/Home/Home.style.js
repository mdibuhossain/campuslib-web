import styled from '@emotion/styled'


export const Banner = styled.section`
    height: 100vh;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    filter: contrast(0.95) blur(1px);
    &:before{
        content: "";
        position: absolute;
        inset: 0 0 0 0;
        background: rgba(40, 100, 255,.25);
    }
`