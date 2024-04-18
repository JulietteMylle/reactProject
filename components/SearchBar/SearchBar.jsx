import { s } from "./SearchBar.style";
import { TextInput } from "react-native";

export function SearchBar({onSubmit}){
    return <TextInput onSubmitEditing={onSubmit} style={s.input} placeholder='Chercher une ville' clearTextOnFocus/>
    
}