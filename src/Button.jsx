import { useDispatch } from "react-redux";
import { increamentNum } from "./redux/reduser";
import { dicreamentNum } from "./redux/reduser";
import { resetNum } from "./redux/reduser";


function Button() {
    const dispatch = useDispatch();

    return (
        <div>

            <button onClick={() => {
                dispatch(increamentNum())
            }}>+1</button>

            <button onClick={() => {
                dispatch(dicreamentNum())
            }}>-1</button>

            <button onClick={() => {
                dispatch(resetNum())
            }}>reset</button>
        </div>

    );
}

export default Button;