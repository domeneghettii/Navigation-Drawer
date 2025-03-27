import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./navigation/DrawerNavigator";
import Stack from "./navigation/StackNavigator";
import Tab from "./navigation/TabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <Tab />
        </NavigationContainer>
    );
}