import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLOR } from "../../utils/const";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const icons = {
  Shop: {
    component: MaterialIcons,
    name: "storefront",
  },
  Explore: {
    component: Ionicons,
    name: "md-search-outline",
  },
  Cart: {
    component: AntDesign,
    name: "shoppingcart",
  },
  Favourite: {
    component: FontAwesome5,
    name: "heart",
  },
  Account: {
    component: FontAwesome5,
    name: "user",
  },
};

export default function TabBar({ state, descriptors, navigation, insets }) {
  const { routes, index } = state;

  return (
    <View style={styles.root}>
      <View style={styles.tabContainer}>
        {routes.map((route: any, i: number) => {
          const Component = icons[route.name].component;
          const isFocused = descriptors[route.key].navigation.isFocused();
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
          return (
            <Pressable style={styles.btn} key={i} onPress={onPress}>
              <Component
                name={icons[route.name].name}
                size={wp(5)}
                color={isFocused ? COLOR.PRIMARY : "black"}
              />
              <Text style={{ color: isFocused ? COLOR.PRIMARY : "black" }}>
                {route.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    height: hp(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    paddingTop: 15,
  },
  btn: {
    alignItems: "center",
    gap: 5,
  },
});
