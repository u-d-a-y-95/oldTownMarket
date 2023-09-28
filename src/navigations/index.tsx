import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../screens/main/tabbar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import shop from "../screens/main/shop";
import ProductDetail from "../screens/main/product-detail";
import Explore from "../screens/main/explore";
import categoryWiseProduct from "../screens/main/categoryWiseProduct";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const MainTab = () => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator
      initialRouteName="Shop"
      tabBar={(props) => <TabBar {...props} />}
    >
      <Screen
        name="Shop"
        component={shop}
        options={{
          headerShown: false,
          title: "Shop",
        }}
      />
      <Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          title: "Explore",
        }}
      />
    </Navigator>
  );
};

export const Main = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={MainTab} />
      <Screen name="ProductDetail" component={ProductDetail} />
      <Screen
        name="CategoryWiseProdcut"
        component={categoryWiseProduct}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
};
