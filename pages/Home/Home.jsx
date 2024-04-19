import { s } from "./Home.style";
import { Text, View, Alert } from "react-native";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { useEffect, useState } from "react";
import { MeteoAPI } from "../../api/meteo";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../components/services/meteo-service";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container/Container";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Home() {
    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();
    const [city, setCity] = useState();
    const currentWeather = weather?.current_weather;
    useEffect(() => {
        getUserCoords();
    }, [])
    useEffect(() => {
        if (coords) {
            fetchWeather(coords)
        }
    }, [coords])
    useEffect(() => {
        if (coords) {
            fetchCity(coords)
        }
    }, [coords])
    async function getUserCoords() {
        let { status } = await requestForegroundPermissionsAsync();
        if (status === "granted") {
            const location = await getCurrentPositionAsync();
            setCoords({ lat: location.coords.latitude, lng: location.coords.longitude });
        } else {
            setCoords({ lat: "48.85", lng: "2.35" });
        }
    }
    async function fetchWeather(coordinates) {
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
        setWeather(weatherResponse)
    }
    async function fetchCity(coordinates) {
        const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
        setCity(cityResponse);
    }
    const nav = useNavigation();
    function goToForecastPage() {
        nav.navigate("Forecast", { city, ...weather.daily });
    }

    async function fetchCoordsFromCity(city) {

        try {
            const coords = await MeteoAPI.fetchCoordsFromCity(city);
            setCoords(coords);
        } catch (e) {
            Alert.alert("Désolé !", e)
        }

    }
    return (
        currentWeather ?
            <Container>
                <View style={s.meteo_basic}>
                    <MeteoBasic
                        temperature={Math.round(currentWeather?.temperature)}
                        city={city}
                        interpretation={getWeatherInterpretation(currentWeather.weathercode)}
                        onPress={goToForecastPage} // Pas besoin d'inclure city ici
                    />
                </View>
                <View style={s.searchbar}>
                    <SearchBar onSubmit={fetchCoordsFromCity} />
                </View>
                <View style={s.meteo_advanced}>
                    <MeteoAdvanced
                        dusk={weather.daily.sunrise[0].split("T")[1]}
                        dawn={weather.daily.sunset[0].split("T")[1]}
                        wind={weather.current_weather.windspeed}
                    />
                </View>
            </Container>
            : null
    )
}