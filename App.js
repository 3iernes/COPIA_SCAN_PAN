//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Context
import ContextProvider from "./src/context/useContext";
//Paper
import { PaperProvider } from "react-native-paper";
import { customTheme } from "./src/utils/theme";
//Screens
import Home from "./src/screens/home";
import Scanner from "./src/screens/scanner";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <PaperProvider theme={customTheme}>
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen
              name={"home"}
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={"scanner"}
              component={Scanner}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </PaperProvider>
  );
}
