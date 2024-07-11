import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCar } from "./redux/cars";

const Cars = () => {
    const cars = useSelector(s => s.cars.cars);
    const dispatch = useDispatch();
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    return (
        <div>

            <h1>cars</h1>
            <input type="text" onChange={e => {
                setModel(e.target.value)
            }}
                value={model}
            />
            <input type="text" onChange={e => {
                setYear(e.target.value)
            }}
                value={year}
            />
            <button onClick={()=>{
                dispatch(addCar({model, year}))
            }}>add</button>

            {
                cars.map(item=>{
                    return <h1>{item.model}</h1>
                })
            }
        </div>
    );
}

export default Cars;