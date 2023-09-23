import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const SearchInput = () => {
  return (
    <View style={styles.root}>
      <Ionicons name="search" size={20} color="black" />
      <TextInput style={styles.input} placeholder="Search Store"></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    alignSelf: "stretch",
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    padding: hp(1.5),
    flex: 1,
  },
});
