import styled from "styled-components";
import {  Box, TextField } from "@mui/material";

export const CustomTextField = styled(TextField)`
  padding:0;
  background-color: #f0f0f082;
  font-size: 16px;
  
  input {
    borderRadius:7px;
    padding:9.5px 14px;
  }
  .css-18iclro-MuiInputBase-root-MuiOutlinedInput-root{
    height:30px;
  } 
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding:9.5px 14px;
  }
  .css-qiwgdb {
    padding:9.5px 14px;
  }
  textarea{
    width:100%;
    height:10px;
    borderRadius:7px;
    padding:9.5px 14px;
  }
  select{
    borderRadius: 7px;
    border:1px solid red;
    padding:9.5px 14px;
  }
`;
