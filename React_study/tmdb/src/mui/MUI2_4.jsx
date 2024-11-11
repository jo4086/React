import Button from '@mui/material/Button'
import { styled } from '@mui/material'

const CustomButton = styled(Button)(({ theme }) => {
   console.log(theme)

   // palette : {(primary, secondary, seuccess, error, warning = { main, light, dark, contrastText}), text }
   // shadows: Array(25)
   //  text : {disabled, primary, secondary}
   return {
      backgroundColor: theme.palette.warning.light,
      textDecoration: theme.palette.text.primary,
      color: 'white',
      padding: theme.spacing(2), // 기본 spacing 단위는 8px,,, 2spacing = 16px
      '&:hover': {
         boxShadow: theme.shadows[10],
         backgroundColor: theme.palette.error.light,
         textDecoration: theme.palette.text.disabled,
      },
   }
})

function MUI2_4() {
   return <CustomButton>Styled Button</CustomButton>
}
export default MUI2_4
