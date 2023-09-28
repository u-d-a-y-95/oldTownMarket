import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { COLOR } from "../../utils/const";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

type categoryProps = {
  title: string;
  imgUrl: any;
};

export default function CategoryCard({ title, imgUrl }: categoryProps) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("CategoryWiseProdcut")}>
      <View style={styles.root}>
        <Image source={imgUrl} resizeMode="contain" style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#eff7f1",
    borderWidth: 1,
    borderColor: "#53B175",
    borderRadius: 10,
    padding: 12,
    height: wp(50),
    width: "100%",
    alignItems: "center",
    flex: 1,
  },

  image: {
    width: "80%",
    height: "80%",
  },
  title: {
    fontSize: hp(1.2),
    fontWeight: "bold",
  },
});
