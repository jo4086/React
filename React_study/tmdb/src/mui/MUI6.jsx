import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/Button'

function MUI6() {
   return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
         <AddCircleOutlineOutlinedIcon style={{ border: '1px solid black', margin: '4px' }} />
         <AddShoppingCartIcon style={{ border: '1px solid black', margin: '4px' }} />
         <DeleteIcon style={{ border: '1px solid black', margin: '4px' }} />
         <IconButton style={{ border: '1px solid black', margin: '4px' }}>
            <AddCircleOutlineOutlinedIcon />
         </IconButton>
         <IconButton style={{ border: '1px solid black', margin: '4px' }}>
            <AddShoppingCartIcon />
         </IconButton>
         <IconButton style={{ border: '1px solid black', margin: '4px' }}>
            <DeleteIcon />
         </IconButton>
      </div>
   )
}
export default MUI6
