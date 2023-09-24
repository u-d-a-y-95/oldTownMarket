import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { COLOR } from "../../utils/const";
import { GlobalStyle } from "../../styles/global.style";
import { NavigationProp } from "@react-navigation/native";
const imageSrc = require("../../../assets/images/onboardBgImg.png");

type onBoardingProps = {
  navigation: NavigationProp<{}>;
};

export default function OnBoarding({ navigation }: onBoardingProps) {
  const getStartedButtonPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={imageSrc}
        style={styles.bgImg}
        resizeMode="cover"
      >
        <View style={styles.body}>
          <Image
            source={require("../../../assets/splash.png")}
            style={{ alignSelf: "center" }}
          />
          <Text
            style={[
              GlobalStyle.font_white,
              GlobalStyle.font_2xl,
              GlobalStyle.font_bold,
            ]}
          >
            Welcome
          </Text>
          <Text
            style={[
              GlobalStyle.font_white,
              GlobalStyle.font_2xl,
              GlobalStyle.font_bold,
            ]}
          >
            to our store
          </Text>
          <Text style={[GlobalStyle.font_white, GlobalStyle.font_md]}>
            Ger your groceries in as fast as one hour
          </Text>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.button} onPress={getStartedButtonPressed}>
            <Text
              style={[
                GlobalStyle.font_bold,
                GlobalStyle.font_md,
                GlobalStyle.font_white,
              ]}
            >
              Get Started
            </Text>
          </Pressable>
        </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 40,
    gap: 10,
  },
  footer: {
    paddingBottom: 100,
    width: "100%",
    padding: 20,
  },
  button: {
    backgroundColor: COLOR.PRIMARY,
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
  },
});
