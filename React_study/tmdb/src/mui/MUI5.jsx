import { Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {teal} from '@mui/material/colors'

const theme = createTheme({
   // 컬러코드로 작성해야 적용됌
   palette: {
      primary: {
         main: '#A9F5F2',
      },
      secondary: {
         main: '#FF0000',
      },
      seuccess: {
         main: '#000000',
      },
      error: {
         main: '#FAAC58',
      },
      warning: {
         main: '#F781F3',
      },
      info: {
         main: teal[400],
         light: teal[200],
         dark: teal[900],
         contrastText: teal[50]
      }
   },
})

function MUI5() {
   return (
      // theme라는 이름을 통해서 컬러를 바꿀 수 있음
      <ThemeProvider theme={theme}>
         <Button variant="contained" color="primary">
            #A9F5F2 청록 primary 버튼
         </Button>
         <Button variant="outlined" color="secondary">
            #FF0000 레드 outlined secondary 버튼
         </Button>
         <Button variant="outlined" color="seuccess">
            #000000 블랙 outlined seuccess 버튼
         </Button>
         <Button variant="contained" color="error">
            #FAAC58 contained error 버튼
         </Button>
         <Button variant="contained" color="warning">
            #F781F3 contained 핑크 버튼
         </Button>
         <Button variant="contained" color="info">
            info 기본 버튼
         </Button>
      </ThemeProvider>
   )
}
export default MUI5
