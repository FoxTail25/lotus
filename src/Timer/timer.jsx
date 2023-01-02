import dayjs from "dayjs";
import { useEffect, useState } from "react";
import './timer.css'



let min, sec, date, countTimeSecond, timerInterval, stopTime;



export const Timer = () => {
    
    useEffect(() => {
        timerInterval = setInterval(setTimerTime, 1000)
    },[])

    const [currentTime, setCurrentTime] = useState('')

    function setTimerTime(sec = 120) {

        stopTime = dayjs().add(sec, 'second').format('YYYY-MM-DD HH:mm:ss')
        timerInterval = setInterval(startTimer, 1000, stopTime)
    }

    function startTimer(stopTime) {

        date = dayjs()
        countTimeSecond = date.diff(stopTime, 'second'); // Вычисляем количество оставшихся секунд

        if (date.diff(stopTime, 'seconds') === 0) {

            clearInterval(timerInterval);
            setCurrentTime('Время вышло')

        } else {
            // hour = Math.abs(Math.trunc((countTimeSecond / 60) / 60))
            min = Math.abs(Math.trunc((countTimeSecond / 60) % 60));
            sec = Math.abs(countTimeSecond % 60);
            setCurrentTime(`${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`);

        }

    }






    // function changeTimerTime() {

        // clearInterval(timerInterval)
        // timerMinuts = document.getElementById('inputTimerMinutes')
        // timerSecond = document.getElementById('inputTimerSecond')
        // quantitySecond = ((+timerMinuts.value * 60) + (+timerSecond.value + 2))
        // document.getElementById('footerHead').innerHTML = "осталось"
        // startTimer(quantitySecond)

    // }

    return (
        <>
        <div className="timerTime">{currentTime}</div>
        </>


    )

}