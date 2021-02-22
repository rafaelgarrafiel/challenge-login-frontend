import styled from "styled-components";

import loginImage from '../../assets/login_image.svg';


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  svg {
    flex: 1;
    background-size: cover;
    /* width: 765px;
    height: 768px;
    left: 765px;
    top: 768px; */

    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    /* transform: rotate(-180deg); */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;

    label {
      width: 72px;
      height: 14px;
      margin-top: 16px;
      margin-bottom: 8px;

      font-family: 'Montserrat';
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 48px;

      display: flex;
      align-items: center;

      color: #383E71;
    }
  }
`;

export const Welcome = styled.div`
  width: 220px;
  height: 96px;
  /* left: 877px; */
  /* top: 136px; */

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 48px;

  /* or 120% */

  color: #383E71;
  margin-bottom: 16px;
`;

export const TextLogin = styled.div`
  width: 220px;
  height: 40px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989FDB;
  margin-bottom: 96px;
`;

export const Forget = styled.div`
  margin-top: 32px;
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #989FDB;
`;


