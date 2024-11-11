import Box from '@mui/material/Box'

// 인라인 스타일로 작성
function MUI2_3() {
   // console에서 css 확인시 <div class="MuiBox-root css-0"> hover to change</div>로 <div>가 생성되어있음
   // return <Box> hover to change</Box>  // <== 기본형태

   // 'primary.main' //
   return (
      <Box
         sx={{
            width: '100px',
            height: '100px',
            backgroundColor: 'primary.main',
            '&:hover': {
               backgroundColor: 'error.main',
            },
         }}
      >
         {' '}
         hover to change
      </Box>
   )
}
export default MUI2_3
