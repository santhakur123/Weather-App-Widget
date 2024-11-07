import Card from '@mui/material/Card';
import "./WInfoBox.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WInfoBox({info}){
   const IMG_URL="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const HOT_URL="https://images.unsplash.com/photo-1561484930-974554019ade?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const COLD_URL="https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      const RAIN_URL="https://images.unsplash.com/photo-1689891227675-7eb01c841124?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    return(<div className="InfoBox">
     <h1>WeatherInfo-{info.weather} </h1>
     <div className="cardContainer">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p> Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp ={info.tempMax}&deg;C</p>
         <p>The weather can be described as ${info.weather} feels like {info.feelsLike}&deg;C</p>
         
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>)
};
export default WInfoBox;