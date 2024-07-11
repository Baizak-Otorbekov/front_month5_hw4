import { useSelector } from "react-redux";


const Count = () => {
    const num = useSelector(s => s.reduser.num)
    return (
        <div>

            <h1>{num}</h1>

        </div>
    );
}

export default Count;