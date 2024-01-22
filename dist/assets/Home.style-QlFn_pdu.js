import{o as e,t as i}from"./index-wJGs2Dyv.js";const n=window.location.origin,o=e.section`
    height: calc(100vh - 64px); ${""}
    background-image: url(${t=>n+`/assets/images/${t.src}.webp`});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    -webkit-filter: contrast(0.9);
    -moz-filter: contrast(0.9);
    -ms-filter:contrast(0.9);
    -o-filter:contrast(0.9);
    filter: contrast(0.9);
    font-family: 'Secular One', sans-serif;
    &:after{
        content: "${t=>i[t.title]||t.title}";
        color: #bfff00;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: min(7vh, 8vw);
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border: 2px solid white;
        padding: 0.75em 1.75em;
        -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.75) 30%, #000 50%, rgba(0,0,0,.75) 70%);
        -webkit-mask-size: 200%;
        animation: shine 1.85s linear infinite;
        @keyframes shine {
            from { -webkit-mask-position: 150%; }
            to { -webkit-mask-position: -50%; }
        }
    }
    &:before{
        content: "";
        position: absolute;
        inset: 0 0 0 0;
        background: rgba(16, 22, 50,.7);
    }
`;export{o as B};
