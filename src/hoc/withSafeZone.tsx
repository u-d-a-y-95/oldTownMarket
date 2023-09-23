import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { ANDROID } from "../utils/const";

export default function withSafeZone(Component: any) {
  return () => {
    return (
      <View style={styles.root}>
        <SafeAreaView style={styles.zone}>
          <Component />
        </SafeAreaView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  zone: {
    paddingTop:
      Platform.OS.toUpperCase() === ANDROID ? StatusBar.currentHeight : 0,
  },
});
