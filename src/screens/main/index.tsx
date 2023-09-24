import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopScreen from "./shop";
import TabBar from "./tabbar";
import Cart from "./cart";

const { Navigator, Screen } = createBottomTabNavigator();
export default function Main() {
  return (
    <Navigator
      initialRouteName="Cart"
      tabBar={(props) => <TabBar {...props} />}
    >
      <Screen
        name="Shop"
        component={ShopScreen}
        options={{ headerShown: false }}
      />
      <Screen name="Explore" component={ShopScreen} />
      <Screen name="Cart" component={Cart} />
      <Screen name="Favourite" component={ShopScreen} />
      <Screen name="Account" component={ShopScreen} />
    </Navigator>
  );
}
