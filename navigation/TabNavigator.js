import React from "react"; // Importa a biblioteca React
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Importa a função para criar um navegador de abas inferior
import TabScreen from "../pages/TabScreen"; // Importa o componente TabScreen
import Tab2 from "../pages/Tab2"; // Importa o componente Tab2
import Icon from "react-native-vector-icons/Ionicons"; // Importa o componente Icon

const Tab = createBottomTabNavigator(); // Cria uma instância do navegador de abas inferior

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Tab Screen">
            {/* Define o navegador de abas com a rota inicial "Tab Screen" */}
            <Tab.Screen 
                name="Tab Screen" 
                component={TabScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => ( // Define o ícone da aba usando o componente Icon
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            {/* Define a tela "Tab Screen" com o componente TabScreen */}
            {/* Define o ícone da aba usando o componente Icon */}
            {/* Define a tela "Tab 2" com o componente Tab2 */}            
            <Tab.Screen 
                name="Tab2" 
                component={Tab2} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="refresh" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}