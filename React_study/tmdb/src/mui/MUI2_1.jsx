import './MUI2_1.css'
import Button from '@mui/material/Button'

// 클래스 네임으로 작성
function MUI2_1() {
   return (
      <div>
         <Button className="btn1" variant="text">
            Text
         </Button>
         <Button className="btn2" variant="contained">
            버튼
         </Button>
         <Button className="btn3" variant="outlined">
            버튼
         </Button>
      </div>
   )
}
export default MUI2_1
