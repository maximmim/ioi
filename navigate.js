import React from "react";
import Main from "./pages/main";
import Store from "./pages/store";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Головна"
            component={Main}
            optsions={{title:"Головна"}}
            />
                        <Stack.Screen
            name="Профіль"
            component={Store}
            optsions={{title:"Профіль"}}
            />

        </Stack.Navigator>
    </NavigationContainer>
}

