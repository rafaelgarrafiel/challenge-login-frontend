import styled, { css } from "styled-components";

interface ContainerProps {
  isError: boolean
}

export const Container = styled.div<ContainerProps>`
  input {
    width: 256px;
    height: 48px;
    /* left: 877px; */
    /* top: 353px; */
    padding: 17px;

    border: 1px solid #989FDB;
    box-sizing: border-box;
    border-radius: 8px;

    & + input {
      margin-top: 38px;
    }

    ${(props) =>
      props.isError &&
      css`
      border: 1px solid #FF377F;
      `}
  }
`;
