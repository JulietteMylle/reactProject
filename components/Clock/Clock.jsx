import { useEffect, useState } from "react";
import { Txt } from "../txt/Txt";
import { nowTOHHMM } from "../services/date-service";
import { s } from "../services/date-service";

export function Clock() {

    const [time, setTime] = useState(nowTOHHMM());


    useEffect(() => {

        const interval = setInterval(() => {
            setTime(nowTOHHMM());
        }, 1000);




        return () => clearInterval(interval);
    }, [time]);


    return <Txt>{time}</Txt>;
}
