import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // ou outro pacote de ícones de sua escolha

const FlashButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Icon.Button name="flash-on" size={30} color="#FFF" onPress={onPress} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: 20, // ajuste conforme necessário
        right: 10, // ajuste conforme necessário
        zIndex: 10,

        // outros estilos para o botão se necessário
    },
});

export default FlashButton;
