import React, { useState } from 'react'
import { Button, Box } from '@mui/material'

function MUI7() {
   const [color, setColor] = useState('primary')
   const [text, setText] = useState('primary')
   const handleClick = () => {
      setColor((prevColor) => (prevColor === 'primary' ? 'secondary' : prevColor === 'secondary' ? 'error' : prevColor === 'error' ? 'seuccess' : prevColor === 'seuccess' ? 'warning' : prevColor === 'warning' ? 'info' : 'primary'))

      setText((prevText) => (prevText === 'primary' ? 'secondary' : prevText === 'secondary' ? 'error' : prevText === 'error' ? 'seuccess' : prevText === 'seuccess' ? 'warning' : prevText === 'warning' ? 'info' : 'primary'))
   }

   return (
      <Box>
         <Button variant="contained" color={color} onClick={handleClick}>
            {text}
            {/* Toggle Color */}
         </Button>
      </Box>
   )
}
export default MUI7

/* 

import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

function MUI7() {
   const colors = ['primary', 'secondary', 'error', 'seuccess', 'warning', 'info'];
   const [index, setIndex] = useState(0);

   const handleClick = () => {
      setIndex((prevIndex) => (prevIndex + 1) % colors.length);
   };

   return (
      <Box>
         <Button variant="contained" color={colors[index]} onClick={handleClick}>
            {colors[index]}
         </Button>
      </Box>
   );
}

export default MUI7;


*/
