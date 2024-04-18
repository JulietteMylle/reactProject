import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

export function Txt({ children, style }) {
    const { height } = useWindowDimensions(); // Correction ici
    const fontSize = style?.fontSize || s.text.fontSize;
    const echelle = 1 / height;

    console.log(fontSize * echelle * height);
    return <Text style={[s.text, style, { fontSize: fontSize * echelle * height }]}>{children}</Text>;
}