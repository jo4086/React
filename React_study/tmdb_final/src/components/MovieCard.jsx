import { Link } from 'react-router-dom' // 클릭시 상세페이지 이동을 위한 import
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'

function MovieCard({ movies }) {
   return (
      <Grid container spacing={2.5}>
         {movies.map((movie) => (
            // 12비율을 5로 나눈 값 = 2.4
            <Grid size={2.4} key={movie.id}>
               <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none' }}></Link>
            </Grid>
         ))}
      </Grid>
   )
}

export default MovieCard
