import { teal } from '@material-ui/core/colors';
import { hexToRgb, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(0,150,127)',
  },
  erase: {
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(255,32,62)',
  },
  
}));