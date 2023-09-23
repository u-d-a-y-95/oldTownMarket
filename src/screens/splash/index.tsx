import { Image, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../utils/const";
import { useEffect } from "react";
import { useAppContext } from "../../state";

const splash = require("../../../assets/splash.png");

type splashScreenProps = {};

export default function SplashScreen({ navigation }: any) {
  const { isOnBoarding } = useAppContext();
  useEffect(() => {
    setTimeout(() => {
      if (!isOnBoarding) return navigation.replace("OnBoarding");
      navigation.navigate("Shop", {});
    }, 5000);
  }, []);
  return (
    <View style={styles.root}>
      <View
        style={{
          backgroundColor: "#67b982",
          width: 320,
          height: 320,
          borderRadius: 160,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#79c190",
            width: 240,
            height: 240,
            borderRadius: 120,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.body}>
            <Image source={splash} />
            <Text
              style={{
                alignSelf: "flex-end",
                fontWeight: "bold",
                fontSize: 18,
                color: "#1b4229",
              }}
            >
              Old Town
            </Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "bold",
              letterSpacing: 8,
            }}
          >
            Market
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
});
