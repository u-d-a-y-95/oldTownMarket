import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { ANDROID } from "../utils/const";

export default function withSafeZone(Component: any) {
  return () => {
    return (
      <SafeAreaView style={styles.root}>
        <Component />
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  root: {
    paddingTop:
      Platform.OS.toUpperCase() === ANDROID ? StatusBar.currentHeight : 0,
  },
});
