import React from 'react'
import style from './Cards.module.css';
export default function Cards({ data, c ,img_src}) {
    return (
        <div className={style.widget}>
            <div  className={style.container}>
                <div className={style.mid}>
                    <img className={style.myicon} src={img_src} alt="" />
                </div>
                <div className={style.top}>
                    <p>View Details</p>
                </div>
            </div>
            <div className={style.bottom}>
                <span className={style.counter} >
                    <span>{data}</span>
                </span>
            </div>

        </div>
    )
}
