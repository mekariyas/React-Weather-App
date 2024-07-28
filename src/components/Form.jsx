import React, {useState} from 'react'
import axios from 'axios'



function Form() {
    const [city, setCityName] = useState("");
    const [visible, setVisible] = useState(false);
    const [btnDisability,setBtnDisability] = useState(false)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid`
    const [weather, setWeather] = useState({});

    function clearAll(){
        setCityName('');
        setVisible(false)
    }

    async function handleWeatherData(e){
        e.preventDefault()
        try{
            const response = await axios.get(url);
            setBtnDisability(true);
            setWeather(response.data);
            setVisible(true);
            setBtnDisability(false);
            console.log(response.data)
        } catch(error){
            console.log(error)
        }
    }
    


  return (
    <div className="w-full h-5/6 flex flex-col justify-between items-center">
        <form className='flex justify-center space-x-4'
        onSubmit={handleWeatherData}>
        <input 
        className="w-4/5 border-b-2 border-gray-300
        focus:outline-none rounded-md"
        type="text" 
        name='city' 
        placeholder="Enter a city or a country" value={city}
        onChange={e=> setCityName(e.target.value)}/>
      <input 
      type="submit" 
      value="Search" 
      className=" border-white text-white border-2 w-20 rounded-lg
      cursor-pointer"
      disabled={btnDisability}/>
    </form>
    <Display weather={weather} visible={visible} clearAll={clearAll}/>
    </div>
  )
}

function Display({...props}){
    
    return(
        <>
        {props.visible && (<>
        <ul className=" text-white mt-2 w-full flex flex-col justify-center items-center">
            <li>City: {props.weather.name}</li>
            <li>Country: {props.weather.sys.country}</li>
            <li>Temperature: {props.weather.main.temp}</li>
            <li>Weather: {props.weather.weather[0].description}</li>
        </ul>
        <button onClick={props.clearAll} className="border-white text-white border-2 w-20 rounded-lg
      cursor-pointer">Clear All</button>
        </>)}
        </>
    )
}

export default Form
