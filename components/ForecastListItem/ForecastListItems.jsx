import { Image, View } from "react-native";
import { s } from "./ForecastListItems.style";
import { Txt } from "../txt/Txt";
export function ForecastListItems ({ image, day, date, temperature}) {
    return <View style={s.container}>
        <Image style={s.image} source={image}/>
        <Txt style={s.day}>{day}</Txt>
        <Txt style={s.date}>{date}</Txt>
        <Txt>{temperature}°</Txt>
    </View>
}