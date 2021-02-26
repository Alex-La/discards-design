import { TextField, withStyles } from "@material-ui/core";

export const CssTextField = withStyles({
  root: {},
})(TextField);

export const SearchTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& input": {
        fontWeight: 400,
      },
      "& fieldset": {
        borderRadius: 7,
        borderColor: "transparent",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
      },
    },
  },
})(TextField);
