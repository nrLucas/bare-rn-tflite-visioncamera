import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useCameraPermission, useCameraDevice, Camera } from "react-native-vision-camera";
import Icon from "react-native-vector-icons/MaterialIcons"; // ou outro pacote de ícones de sua escolha
import { useTensorflowModel } from "react-native-fast-tflite";

import FlashButton from "./components/FlashButton";

export default function App() {
    const [isFlashOn, setIsFlashOn] = React.useState(false);
    const { hasPermission, requestPermission } = useCameraPermission();
    const device = useCameraDevice("back");

    React.useEffect(() => {
        requestPermission();
    }, []);

    const handleToggleFlash = () => {
        setIsFlashOn((prevState) => !prevState);
    };

    return (
        <View style={styles.container}>
            <Text>Teste</Text>
            <StatusBar style="auto" />
            {/* <FlashButton onPress={handleToggleFlash} /> */}
            {!!hasPermission && <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} torch={isFlashOn ? "on" : "off"} />}
            <View style={styles.iconButtonContainer}>
                <Icon.Button
                    name={isFlashOn ? "flash-off" : "flash-on"}
                    size={30}
                    color="#FFF"
                    backgroundColor="#ffffff34"
                    onPress={handleToggleFlash}
                    iconStyle={styles.iconStyle}
                    style={styles.iconButton} // Estilo adicional para o botão
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconButtonContainer: {
        position: "absolute",
        right: 10,
        top: 50,
    },
    iconButton: {
        padding: 5,
        justifyContent: "center", // Centraliza o ícone verticalmente
        alignItems: "center", // Centraliza o ícone horizontalmente
    },
    iconStyle: {
        marginRight: 0, // Remove o espaço extra à direita do ícone
    },
});
