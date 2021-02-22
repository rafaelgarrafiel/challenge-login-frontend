import { createGlobalStyle } from "styled-components";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, button {
    font-family: 'Montserrat', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`
