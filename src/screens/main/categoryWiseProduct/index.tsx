import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import withSafeZone from "../../../hoc/withSafeZone";

import { products } from "../../../utils/dummy";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import ProductCard from "../../../components/cards/productCard";

const CategoryWiseProduct = () => {
  return (
    <View style={styles.root}>
      <FlatList
        numColumns={2}
        data={products}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => <ProductCard {...item} />}
        ItemSeparatorComponent={() => (
          <View style={{ paddingBottom: "3.8%" }}></View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: wp(100),
    paddingHorizontal: 15,
    gap: 10,
  },
  header: {},
  list: {
    flex: 1,
  },
});

export default withSafeZone(CategoryWiseProduct);
