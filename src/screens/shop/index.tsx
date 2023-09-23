import { ScrollView, StyleSheet, View } from "react-native";
import { SearchInput } from "../../components/searchInput";
import withSafeZone from "../../hoc/withSafeZone";
import ProductCard from "../../components/cards/productCard";
import CardHolder from "../../components/cards/cardHolder";
import { products } from "../../utils/dummy";

function ShopScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SearchInput />
        <View style={styles.card}></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <CardHolder
            title="Exclusive Offer"
            ItemRender={ProductCard}
            data={products}
          />
        </View>
        <View>
          <CardHolder
            title="Best Selling"
            ItemRender={ProductCard}
            data={products}
          />
        </View>
        <View>
          <CardHolder
            title="Best Selling"
            ItemRender={ProductCard}
            data={products}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
  },
  header: {
    width: "100%",
    gap: 10,
  },
  card: {
    borderRadius: 5,
    height: 150,
    backgroundColor: "#bfe2cc",
  },
});
export default withSafeZone(ShopScreen);
