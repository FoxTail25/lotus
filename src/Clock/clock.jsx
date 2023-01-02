// import { useState } from 'react';
// import dayjs from 'dayjs';
// import './clock.css'


// export const Clock = () => {

//   let timeNow = dayjs().format('HH:mm:ss')

//   const [currectTime, setCurrectTime] = useState(timeNow)

//   function clock() {
//     timeNow = dayjs().format('HH:mm:ss')
//     setCurrectTime(timeNow)
//   }
//   setInterval(clock, 1000)

//   return (
//     <div className='font-effect-fire'>
      
//       <div className='clock font-effect-fire'><h1>Сейчас</h1>{currectTime}</div>

//     </div>

//   )
// }