import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import SettingsCreen from "./Screens/SettingsScreen";
import ContactScreen from "./Screens/ContactScreen";
import ShoppinScreen from "./Screens/ShoppinScreen";
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTinColor: 'red',
          tabBarInactiveColor: 'purple',
          tabBarActiveBackgroundColor: 'gray'
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Inicio', tabBarIcon:({color, size})=>
          (
            <Ionicons name="home" color={'orange'} size={18}/>
          )
        }}
        />
        <Tab.Screen
        name="Settings"
        component={SettingsCreen}
        options={{title: 'Configuracion', tabBarIcon:({color, size})=>
          (
            <Ionicons name="settings" color={'blue'} size={18}/>
          )
        }}
        />
        <Tab.Screen
        name="Contacts"
        component={ContactScreen}
        options={{title: 'Contactos', tabBarIcon:({color, size})=>
          (
            <Ionicons name="person" color={'orange'} size={18}/>
          )
        }}
        />
        <Tab.Screen
        name="Shopping"
        component={ShoppinScreen}
        options={{title: 'Carrito', tabBarIcon:({color, size})=>
          (
            <Ionicons name="cart-sharp" color={'blue'} size={18}/>
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

