import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DrawerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navegação da Página Drawer</Text>

            <Text style={styles.description}>
                Este é um exemplo de uma tela de navegação usando o Drawer Navigator. Você pode navegar entre diferentes telas usando o menu lateral.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitepurple",
        padding: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "Semi Bold",
        color: "lightpink",        
        marginBottom: 18,
    },
    description: {
        fontSize: 16,
        color: "black",
        textAlign: "center",
        paddingHorizontal: 20,
    },
});