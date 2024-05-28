import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import User from '../../assets/Images/User.png'
import styles from './Home.module.css'
import { Whether } from '../../apis/Whether'
import { News } from '../../apis/News'
import { FaTemperatureHalf } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import { RiContrastDrop2Line } from "react-icons/ri";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Home = () => {
const navigate = useNavigate()
const navigateToMovies = () =>{
  navigate('/movies')
}

  const details = localStorage.getItem('userData')
  const userDetails = JSON.parse(details)
  
const genre = localStorage.getItem('genre')
 

//Notes Area
const [notes, setNotes] = useState('')
const notesData = (e) =>{
  setNotes(e.target.value)
  localStorage.setItem('notes', JSON.stringify(notes))
}
useEffect(() => {
  const notesInfo = localStorage.getItem('notes');
  setNotes(JSON.parse(notesInfo))
}, []);

//Climate Area
const [time, setTime] = useState('')
const [climate, setClimate] = useState([])
const fetchWhether = async() =>{
  const result = await Whether()
  setTime(result.location.localtime)
  setClimate(result.current)
}
 useEffect(()=>{
  fetchWhether()
 },[])

 //News Area
 const [news, setNews] = useState([])
const fetchNews = async()=>{
  const result = await News()
  const filterResult = result?.data?.articles[2];
  setNews(filterResult)
}
useEffect(() => {
  fetchNews();
});

//Count Down Area
const [seconds, setSeconds] = useState(0)
const [minutes, setMinutes] = useState(0)
const [hours, setHours] = useState(0)
const [timeInSecs, setTimeInSecs] = useState()
const [isStarted, setIsStarted] = useState(false)

const secondsInc = ()=>{
  if(seconds === 59) return
  setSeconds(seconds+1)
}
const secondsDec = ()=>{
    if(seconds === 0) return
  setSeconds(seconds-1)
}
const minutesInc = ()=>{
    if(minutes === 59) return
  setMinutes(minutes+1)
}
const minutesDec = () =>{
  if(minutes === 0) return
  setMinutes(minutes -1)
}
const hoursInc = ()=>{
  if(hours === 23) return
  setHours(hours+1)
}
const hoursDec = ()=>{
  if(hours === 0) return
  setHours(hours-1)
}
useEffect(()=>{
  const convertedTime = seconds + minutes * 60 + hours * 60 * 60;
  setTimeInSecs(convertedTime)
}, [seconds, minutes, hours])
// const stopClicked = () =>{
//  set
//   return 
// }

  return (<>
  <div className={styles.home}>
    <div className={styles.left}>
      <div className={styles.upperInfo}>
    <div className={styles.upper}>
    <div className={styles.upperLeft}>
        <div className={styles.user}>
          <img src={User} alt="User Image"></img>
          <p>{userDetails.name}<br />{userDetails.email} <br /><span style={{fontSize: "2rem", fontWeight: "700"}}>{userDetails.userName}</span> <br /><br />
          <div className={styles.genre}>{genre}</div>
          </p>
        </div>
        <div className={styles.climate}>
        <div className={styles.time}>
          <p>{time}</p>
        </div>
        <div className={styles.whether}>
        <div className={styles.whetherClimate}>
        <img src={climate?.condition?.icon}/> <br />
        <span style={{color: "white", fontSize: "2rem", marginLeft: "1vw"}}> {climate?.condition?.text}</span> <br />
        </div><hr />
        <div className={styles.whetherTemp}>
        <span className={styles.temp}>{climate?.temp_c} <sup>°</sup>C</span><br /><br />
         <FaTemperatureHalf size={40} /><span className={styles.pressure}>{climate?.pressure_mb} mbar <br /> pressure</span>
        </div><hr />
        <div className={styles.whetherPressure}>
        <FiWind size={40} /><span className={styles.wind}>{climate?.wind_kph} km/h <br/> Wind</span><br />  <br /> 
        <RiContrastDrop2Line size={40} /><span className={styles.humidity}>{climate?.humidity}%  <br /> Humidity</span>
        <br />
        </div>
        </div>
        </div> 
        </div>
        <div className={styles.notes}>
          All notes <br /><textarea onChange={notesData}  value={notes}></textarea>
        </div>
    </div>
    </div>
    <div className={styles.lower}>
    <div className={styles.timer}>
      <div className={styles.circleTimer}>
    <CountdownCircleTimer 
    isPlaying={isStarted}
    duration={timeInSecs}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  </div>
    </div>
    <div className={styles.countDown}>
    <div style={{marginRight: "5vw"}}><FaCaretUp onClick={hoursInc} size={60} color={'#949494'} /><p>{hours}</p><FaCaretDown onClick={hoursDec}  size={60} color={'#949494'} /></div>
    <div style={{marginRight: "5vw"}}><FaCaretUp onClick={minutesInc} size={60} color={'#949494'} /><p>{minutes}</p><FaCaretDown onClick={minutesDec}size={60} color={'#949494'} /></div>
    <div style={{marginRight: "5vw"}}><FaCaretUp onClick={secondsInc} size={60} color={'#949494'} /><p>{seconds}</p><FaCaretDown onClick={secondsDec} size={60} color={'#949494'} /></div>
    </div>
    {isStarted?<button onClick={()=>setIsStarted(!isStarted)}>Pause</button>:<button onClick={()=>setIsStarted(!isStarted)}>Start</button>}
    </div>
    </div>
    <div className={styles.right}>
      <div><img src={news?.urlToImage}/>
      <div className={styles.title}>{news?.title}</div>
      </div> <br /><br /><br /><br /><br /><br />
      <p className={styles.description}>{news?.description}</p>
    </div>
  </div>
    <button onClick={navigateToMovies} className={styles.next}>Browse</button>   
  </>
  )
}

export default Home


       