import { TextField, withStyles } from '@material-ui/core'

const QinglinInput = withStyles({
  root: {
    '& label': {
      color: 'rgba(255, 255, 255, 0.6)',
    },
    '& label.Mui-focused': {
      color: 'rgba(255, 255, 255, 0.6)',
      borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    },
    '& .MuiInput-underline': {
      borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    },
    '& .MuiInputBase-root': {
      color: 'rgba(255, 255, 255, 1)',
    },
    '& .MuiOutlinedInput-multiline': {
      padding: '37.5px 14px 20px',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.6)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.6)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.6)',
      },
    },
  },
})(TextField)

export default QinglinInput
