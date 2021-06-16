
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop:-25,
    marginLeft:-25,
    marginRight:-25,
    marginBottom:15,
    padding: theme.spacing(2),
  },  
  contain: {
    backgroundImage:'url(${background.png)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '100%',
    margin: '0.8%',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
