import React, {useState, useEffect} from 'react'
import './LuckyDrawTable.scss'
import socketio from 'socket.io-client'
import { SERVER } from './config/config.json'

const LuckyDrawTable = () => {
    const [data, setData] = useState([{},{},{},{},{},{},{},{},{},{}])
    const socket = socketio.connect(SERVER, {
        event: 1-10
    }, {
        extraHeaders: {
            "x-access-token": sessionStorage.getItem('adminToken')
        }
    });
    socket.on('winner', (data) => {
        console.log(data);
        setData(data); 
    })
    return (
        <div className="table">
            {data.map((data, ix) => {
                return (
                    <div className="table__list">
                        <div>
                            <span>{ix + 1}</span>
                        </div>
                        <div>
                            <span className="school">{data.schoolName}</span>
                        </div>
                        <div>
                            <span className="grade">{data.grade}</span>
                        </div>
                        <div>
                            <span className="class">{data.class}</span>
                        </div>
                        <div>
                            <span className="number">{data.number}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default LuckyDrawTable;