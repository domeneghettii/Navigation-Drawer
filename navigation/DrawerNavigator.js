import React from "react"; // Importa a biblioteca React
import { createDrawerNavigator } from "@react-navigation/drawer"; // Importa a função para criar um navegador de gaveta (drawer)
import DrawerScreen from "../pages/DrawerScreen"; // Importa o componente DrawerScreen
import Drawer2 from "../pages/Drawer2"; 
const Drawer = createDrawerNavigator(); 
export default function DrawerNavigator() { // Define o componente DrawerNavigator
    return (
        <Drawer.Navigator initialRouteName="Drawer Screen">
            {/* Define o navegador de gaveta com a rota inicial "Drawer Screen" */}
            <Drawer.Screen name="Drawer Screen" component={DrawerScreen} />
            {/* Define a tela "Drawer Screen" com o componente DrawerScreen */}
            <Drawer.Screen name="Drawer 2" component={Drawer2} />
            {/* Define a tela "Drawer 2" com o componente Drawer2 */}
        </Drawer.Navigator>
    );
}