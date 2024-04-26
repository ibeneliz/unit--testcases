import { useState } from "react";
import Output from "./Output";

export default function Greeting(){
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
        console.log(changeText);
    };
    return(
        <div>
            <h2>Greetings everyone!</h2>
            {!changeText && <Output>It's good to see you all!</Output>}
            {changeText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
}