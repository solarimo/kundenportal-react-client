import { Checkbox, withStyles } from "@material-ui/core"

const styles = () => ({
  root: {
    '&$checked': {
      color: '#fdc300'
    }
  },
  checked: {}
});


export const YellowCheckBox = withStyles(styles)(Checkbox);