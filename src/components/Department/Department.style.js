import styled from "@emotion/styled";
import { tagTitle } from "../../utility/tagTitle";

const Department = styled.section`
  width: min(15rem, 90vw);
  height: min(15rem, 100vh);
  background-image: url(${(props) => `assets/images/${props.tag}.webp`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  -webkit-filter: contrast(0.9);
  -moz-filter: contrast(0.9);
  -ms-filter: contrast(0.9);
  -o-filter: contrast(0.9);
  filter: contrast(0.9);
  font-family: "Secular One", sans-serif;
  transition: 0.21s ease-out;
  &:hover {
    box-shadow: 1px 1px 20px #707af4;
    transition: 0.21s ease-in-out;
  }
  &:after {
    content: "${(props) => tagTitle[props.tag]}";
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
`;

export default Department;
