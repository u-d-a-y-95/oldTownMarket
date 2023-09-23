import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
const imageSrc = require("../../../assets/images/onboardBgImg.png");
export default function OnBoarding() {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={imageSrc}
        style={styles.bgImg}
        resizeMode="cover"
      >
        <Text>Welcome</Text>
        <Text>to our store</Text>
        <Text>Ger your groceries in as fast as one hour</Text>
        <Pressable>
          <View>
            <Text>Get Started</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
