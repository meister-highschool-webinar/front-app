import React, {useState, useEffect} from 'react';
import './MainLuckyDrawTable.scss';
import socketio from 'socket.io-client';
import { SERVER } from '../../../config/config.json';
import LuckyDrawItem from './LuckyDrawItem';

const MainLuckyDrawTable = () => {
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
            <div className="table__flist">
                <div />  
                <div>
                    <span>학교</span>
                </div>
                <div>
                    <span>학년</span>
                </div>
                <div>
                    <span>반</span>
                </div>
                <div>
                    <span>번호</span>
                </div>
            </div>
            {data.map((data, ix) => {
                return (
                    <LuckyDrawItem
                        ix = { ix } 
                        schoolName = { data.schoolName }
                        grade = { data.grade }
                        class = { data.class}
                        number = { data.number }
                    />
                )
            })}
        </div>
    );
}

export default MainLuckyDrawTable;