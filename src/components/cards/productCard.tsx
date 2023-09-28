import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { COLOR } from "../../utils/const";
import Banana from "../../../assets/images/banana.png";
type productProps = {
  title: string;
  unit: string;
  stock: number;
  price: number;
  imgUrl: any;
};

export default function ProductCard({
  title,
  unit,
  stock,
  price,
  imgUrl,
}: productProps) {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image source={imgUrl} resizeMode="contain" style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>
          {stock} {unit}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.priceText}>$ {price}</Text>
        <Pressable>
          <View style={styles.button}>
            <Feather name="plus" size={24} color="white" />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: "#7C7C7C",
    borderRadius: 10,
    padding: 12,
    height: "100%",
    width: "100%",
  },
  header: {
    flex: 3,
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {},
  body: {
    marginBottom: 2,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    backgroundColor: COLOR.PRIMARY,
    padding: 5,
    borderRadius: 5,
  },
});
