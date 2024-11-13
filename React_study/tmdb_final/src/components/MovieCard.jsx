import { Link } from 'react-router-dom' // 클릭시 상세페이지 이동을 위한 import
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import { CardContent, Card, CardMedia } from '@mui/material'

function MovieCard({ movies }) {
   return (
      <Grid container spacing={2.5}>
         {movies.map((movie) => (
            // 12비율을 5로 나눈 값 = 2.4
            <Grid size={2.4} key={movie.id}>
               <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none' }}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardMedia sx={{ height: 400,objectFit:'contain' }} image={ movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`: '/images/poster_3.png'} title={movie.title} />
                     <CardContent>
                        <Typography
                           gutterBottom
                           variant="h5"
                           component="div"
                           sx={{
                              fontSize: 17,
                              whiteSpace: 'nowrap',
                              overflor: 'hidden',
                              textOverflow: 'ellipsis',
                              width: '200px',
                           }}
                        >
                           {movie.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                           {movie.release_date}
                        </Typography>
                     </CardContent>
                  </Card>
               </Link>
            </Grid>
         ))}
      </Grid>
   )
}

export default MovieCard
