import { styled, TextField } from "@mui/material";

const FormInput = styled(TextField)(() => ({
  "& .MuiInputLabel-root": {
    color: "#a1aace",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white", // Label color when focused
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#a1aace", // Default outline color
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#a1aace", // Outline color on hover
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#a1aace", // Outline color when focused
  },
  input: {
    color: "#a1aace",
  },
}));

export default FormInput;
