import dayjs from "dayjs"
import { useState } from "react"
import './timer.css'

let min, sec, date, timerMinuts, timerSecond, countTimeSecond, timerInterval, stopTime, quantitySecond;

export const Timer = () => {


    const [currentTime, setCurrentTime] = useState('')

    function startTimer(n) {

        console.log(typeof n)

        stopTime = dayjs().add(+n, 'second').format('YYYY-MM-DD HH:mm:ss')
        timerInterval = setInterval(getTime, 1000)
    }

    function getTime() {

        date = dayjs()
        countTimeSecond = date.diff(stopTime, 'second');

        if (date.diff(stopTime, 'seconds') === 0) {

            clearInterval(timerInterval);
            setCurrentTime('Время вышло')

        } else {

            min = Math.abs(Math.trunc(countTimeSecond / 60));
            sec = Math.abs(countTimeSecond % 60);
            setCurrentTime(`${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`);

        }

    }

// let newYearTime = dayjs('2023-01-01 00:00').format('YYYY-MM-DD HH:mm:ss')
// console.log(newYearTime)




    function changeTimerTime() {

        clearInterval(timerInterval)
        timerMinuts = document.getElementById('inputTimerMinutes')
        timerSecond = document.getElementById('inputTimerSecond')
        quantitySecond = ((+timerMinuts.value * 60) + (+timerSecond.value + 2))
        console.log(quantitySecond)
        console.log(typeof quantitySecond)
        startTimer(quantitySecond)

    }

    return (
        <div className="clockT font-effect-fire">

            <div className="container">
                <div className="font-effect-shadow-multiple">
                    <button className="btn" onClick={changeTimerTime}>
                        Запустить таймер
                    </button>
                </div>

                <div className="inputsline">

                    <div className="inputcont">


                        <input className="input" id='inputTimerMinutes' type='number' min='0'></input>
                        <p>минуты</p>

                    </div>

                    <div className="inputcont">


                        <input className="input" id='inputTimerSecond' type='number' min='0'></input>
                        <p>секунды</p>

                    </div>

                </div>


                <button className="btn" onClick={function () { clearInterval(timerInterval); setCurrentTime('00:00') }}>Остановить таймер</button>

                <div >{currentTime}</div>

            </div>
        </div >
    )

}