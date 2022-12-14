import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { BookDetail } from "./screens";
import Tabs from "./navigation/tabs";
import { useFonts } from "expo-font";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: "transparent",
	},
};

const Stack = createStackNavigator();

export default function App() {
	const [loaded] = useFonts({
		"Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
		"Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
	});

	if (!loaded) {
		return null;
	}
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={""}
			>
				{/* Tabs */}
				<Stack.Screen
					name="Home"
					component={Tabs}
					options={{ headerShown: false }}
				/>
				{/* Screens */}
				<Stack.Screen
					name="BookDetail"
					component={BookDetail}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
