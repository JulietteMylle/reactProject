import { s } from "./Forecast.style";
import { Txt } from "../../components/txt/Txt";
import { Container } from "../../components/Container/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { ForecastListItems } from "../../components/ForecastListItem/ForecastListItems";
import { DAYS } from "../../components/services/date-service";
import { getWeatherInterpretation } from "../../components/services/meteo-service";
import { dateToDDMM } from "../../components/services/date-service";
export function Forecast({}) {
    const { params } = useRoute();
    const nav = useNavigation();

    const city = params ? params.city : '';

    const backButton = (
        <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
            <Txt>{"<"}</Txt>
        </TouchableOpacity>
    );

    const header = (
        <View style={s.header}>
            {backButton}
            <View style={s.header_texts}>
                <Txt>{city}</Txt>
                <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
            </View>
        </View>
    );

    // Logique de rendu de la liste de prévisions
    const forecastList = (
        <View style={s.forecastList}>
            {params.time.map((time, index) => {
                const code = params.weathercode[index];
                const image = getWeatherInterpretation(code).image;
                const date = new Date(time);
                const day = DAYS[new Date(time).getDay()];
                const temperature = params.temperature_2m_max[index];
                return (
                    <ForecastListItems
                        image={image}
                        day={day}
                        key={time}
                        date={dateToDDMM(date)}
                        temperature={temperature.toFixed(0)}
                    />
                );
            })}
        </View>
    );

    return (
        <Container>
            {header}
            {forecastList}
        </Container>
    );
}


