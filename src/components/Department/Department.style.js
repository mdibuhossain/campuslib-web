import styled from "@emotion/styled";
import { tagTitle } from "../../utility/tagTitle";

const DepartmentStyle = styled.div`
  width: min(15rem, 90vw);
  height: min(15rem, 100vh);
  background-image: url(${(props) => `assets/images/${props.tag}.webp`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: yellow;
  -webkit-filter: contrast(0.9);
  -moz-filter: contrast(0.9);
  -ms-filter: contrast(0.9);
  -o-filter: contrast(0.9);
  filter: contrast(0.9);
  font-family: "Secular One", sans-serif;
  &:after {
    content: "${(props) => tagTitle[props.tag] || props.tag}";
    text-transform: uppercase;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: rgba(16, 22, 50, 0.75);
  }
  @media (max-width: 580px) {
    width: 90vw;
    height: min(8rem, 100vh);
    font-size: 75%;
  }
`;

const DepartmentCard = styled.section`
  border-radius: 30px;
  margin: 25px;
  overflow: hidden;
  transition: 0.21s ease-in;
  &:hover {
    ${'' /* box-shadow: 1px 1px 5px #707af4; */}
    transform: scale(1.05);
    transition: 0.21s ease-out;
  }
  @media(max-width: 580px){
    margin-top: 0px;
  }
`;

export { DepartmentStyle, DepartmentCard };
