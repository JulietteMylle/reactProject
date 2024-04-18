import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import fond from "../../assets/fond.jpg";
import { s } from "./Container.style";

export function Container({ children }) {
    return (
        <ImageBackground source={fond} style={s.img_background} imageStyle={s.img}>
            <SafeAreaProvider>
                <SafeAreaView style={s.container}>
                    {children}
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    )
}