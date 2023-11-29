import { TextField } from "@mui/material"
import styled from "styled-components"

const Inputcustom = styled(TextField)`
  input[type="color" i] {
    borderradius: none;
    -webkit-border-radius: 0px;
  }
  & input {
    width: 100%;
    padding: 7px 5px;
    &:focus.MuiFilledInput-root {
      border: 1px solid #172945;
    }
  }
  .MuiFilledInput-root {
    border-radius: 7px;
    background-color: #f8fafc;
    padding: 2px 14px;
    outline: none;
    border: 1px solid #cfcfcf;
    &:hover {
      border: 1px solid #172945;
    }
    &:focus {
      border: 1px solid #172945;
    }
    &:before {
      display: none;
    }
    &:after {
      display: none;
    }
  }
  label {
    position: relative;
    transform: none;
    fontsize: 17px;
    fontweight: 600;
    color: #172945;
  }
`

export default Inputcustom
