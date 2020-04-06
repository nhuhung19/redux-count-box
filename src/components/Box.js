import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Box() {
    const dispatch = useDispatch()
    const changeBgIndivisual = (e, id) => {
        let indivisualBg = e.target.value
        dispatch({ type: 'BG_INDIVISUAL', payload: { bgColor: indivisualBg, boxId: id } })
    }

    let boxs = useSelector(state => state.colorBoxs)
    let bgColor = useSelector(state => state.backGround);
    let textColor = useSelector(state => state.textColor)

    console.log(boxs)
    const htmlBoxs = boxs.map(box => {
        return (
            <div key={box.id} className="mt-3 mx-5" style={{ backgroundColor: `${box.backGround ? box.backGround : bgColor}`, width: '200px', height: '150px', border: '1px solid black' }}>
                <h2 style={{ color: `${textColor}` }}>{box.name}</h2>
                
                    <input className="mt-2" onChange={(e) => changeBgIndivisual(e, box.id)} type="text" />
               
            </div>
        )
    })

    return (
        <div className="d-flex justify-content-center row">
            {htmlBoxs}
        </div>
    )
}
