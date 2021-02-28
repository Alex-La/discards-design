import { TextField, withStyles, Switch } from "@material-ui/core";

export const CssTextField = withStyles({
  root: {
    "& label": {
      color: "#C0C0C0",
    },
    "& label.Mui-focused": {
      color: "#5B5B5B",
      fontWeight: 500,
    },
    "& label.Mui-error": {
      color: "#F44336",
    },
    "& .MuiOutlinedInput-root": {
      "& input": {
        color: "#C0C0C0",
        fontWeight: 500,
        fontSize: 12,
        height: 19,
      },
      "& input:focus": {
        color: "#000000",
        fontWeight: 500,
        fontSize: 12,
      },
      "&.Mui-error input": {
        color: "#F44336",
      },
      "& fieldset": {
        borderRadius: 5,
        borderColor: "#D4D4D4",
      },
      "&:hover fieldset": {
        borderColor: "#5B5B5B",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#5B5B5B",
      },
      "&.Mui-error fieldset": {
        borderColor: "#F44336",
      },
    },
  },
})(TextField);

export const SearchTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& input": {
        fontWeight: 400,
      },
      "& fieldset": {
        color: "#000000",
        fontWeight: 400,
        borderRadius: 7,
        borderColor: "transparent",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
})(TextField);

export const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => (
  <Switch
    focusVisibleClassName={classes.focusVisible}
    disableRipple
    classes={{
      root: classes.root,
      switchBase: classes.switchBase,
      thumb: classes.thumb,
      track: classes.track,
      checked: classes.checked,
    }}
    {...props}
  />
));
