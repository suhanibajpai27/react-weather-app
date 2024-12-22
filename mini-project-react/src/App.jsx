// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert } from '@mui/material';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';

function App() {

  let handleClick=()=>{
    console.log("Button was clicked!");
  }

  return (
    <>
   
      {/* <SearchBox/>
      <InfoBox/> */}
      <WeatherApp/>
      
    </>
  )
}

export default App
