
import dayjs from 'dayjs';
import { useState } from 'react';
import './header.css';

const headerText = {
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '10px',
    marginBottom: '30px',
}
const spanStyle = {
    padding: '10px',
    fontSize: 'weight',
    fontWeight: 'bold',
};
const timeStyle = {
    padding: '10px',
    color: 'blue',
};


export const Header = () => {

    let time = dayjs().format('DD.MM.YYYY HH.mm.ss')
    const [currectTime, setCurrectTime] = useState(time)

    function clock() {
        time = dayjs().format('DD.MM.YYYY HH:mm:ss')
        setCurrectTime(time)
    }
    setInterval(clock, 1000)


    return (
        <div className="header">
            <div style={headerText}>
                Ход торгов <span style={spanStyle}>Тестовые торги на аппарат ЛОТОС №2033564</span>
                <span style={timeStyle}>( {currectTime} )</span>
            </div >
            <hr/>
        </div >

    );
}
