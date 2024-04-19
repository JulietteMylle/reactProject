import { s } from "./SearchBar.style";
import { TextInput } from "react-native";
import { useState } from "react";

export function SearchBar({ onSubmit }) {
    const [city, setCity] = useState(""); // Ajoutez un état pour stocker la valeur de la ville

    const handleSearch = () => {
        onSubmit(city); // Appelez onSubmit avec la valeur de la ville
    };

    return (
        <TextInput
            onSubmitEditing={handleSearch}
            onChangeText={text => setCity(text)} // Mettez à jour la valeur de la ville lors de la saisie
            style={s.input}
            placeholder='Chercher une ville'
            clearTextOnFocus
        />
    );
}
