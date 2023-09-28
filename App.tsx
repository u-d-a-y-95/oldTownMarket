import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/splash";
import { Provider } from "./src/state";
import OnBoarding from "./src/screens/onBoarding";
import LoginScreen from "./src/screens/login";
import { Main } from "./src/navigations/index";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Navigator initialRouteName="Splash">
          <Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{ headerShown: false }}
          />
          <Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Screen
            name="MainNavigator"
            component={Main}
            options={{ headerShown: false }}
          />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}
