import styled from "styled-components";

export const AboutMeDiv = styled.div`
  h2 {
    text-align: center;
    font-size: 3em;
    color: grey;
    font-style: Roboto;
  }
  .AboutSection {
    width: 85vw;
    height: auto;
    border: 2px rgb(201, 23, 136) solid;
    display: flex;
    flex-direction: column;
    margin: 1em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    border-radius: 45px;
  }

  img {
    margin: 1em;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 100%;
  }

  h4 {
    color: #ebe6e6;
  }

  .textDiv {
    display: flex;
    height: 90%;
    flex-direction: column;
    /* border: 2px green solid; */
    width: 75vw;
    margin: 1em;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  @media only screen and (min-width: 868px) {
    .AboutSection {
      flex-direction: row;
      width: vw;
      justify-content: space-between;
      height: 60vh;
    }
    img {
      width: 35%;
      margin: 1em;
    }
    .textDiv {
      display: flex;
      height: fit-content;
      flex-direction: column;
      text-align: left;
      margin: 1em;
      /* border: 2px blue dotted; */
      margin-top: auto;
      margin-bottom: auto;
      padding: 0.1em;
      font-size: 0.78em;
    }
    .textDiv h4 {
      display: inline-block;
      /* border: green solid; */
      font-size: ;
    }
  }
`;

export const ContactStyledButton = styled.button`
   {
    color: white;
    background-color: rgb(201, 23, 136);
    width: 50%;
    padding: 0.5em;
    font-size: large;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  }
  :hover {
    background-color: rgba(16, 16, 17, 1);

    color: rgb(201, 23, 136);
    border: 2px grey dotted;
  }
  @media only screen and (min-width: 868px) {
  }
`;
