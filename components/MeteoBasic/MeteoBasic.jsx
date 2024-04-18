import { View, Image, StyleSheet } from "react-native";
import { Txt } from "./../txt/Txt";
import { s } from "./MeteoBasic.style";
import { Clock } from "../Clock/Clock.jsx";

export function MeteoBasic({ temperature, city, interpretation, label }) {
    return (
        <>
            <View style={s.clock}>
                <Clock />
            </View>
            <Txt style={s.city}>{city}</Txt>
            <Txt style={s.label}>{label}</Txt>
            <View style={s.temperature_box}>
                <Txt style={s.temperature}>{temperature}°</Txt>
                <Image style={s.image} source={interpretation.image} />
            </View>
        </>
    );
}
