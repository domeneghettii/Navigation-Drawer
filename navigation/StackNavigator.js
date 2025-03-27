import React from "react"; // Importa a biblioteca React
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa a função para criar um navegador de pilha nativo
import StackScreen from "../pages/StackScreen"; // Importa o componente StackScreen
import Stack2 from "../pages/Stack2"; // Importa o componente Stack2

const Stack = createNativeStackNavigator(); // Cria uma instância do navegador de pilha

export default function StackNavigator() { // Define o componente StackNavigator
    return (
        <Stack.Navigator initialRouteName="Stack Screen">
            { /* Define o navegador de pilha com a rota inicial "Stack Screen" */ }
            <Stack.Screen name="Stack Screen" component={StackScreen} />
            { /* Define a tela "Stack Screen" com o componente StackScreen */ }
            <Stack.Screen name="Stack 2" component={Stack2} />
            { /* Define a tela "Stack 2" com o componente Stack2 */ }
        </Stack.Navigator>
    );
}