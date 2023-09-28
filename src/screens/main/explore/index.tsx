import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import withSafeZone from "../../../hoc/withSafeZone";
import { SearchInput } from "../../../components/searchInput";
import CategoryCard from "../../../components/cards/categoryCard";
import { categories } from "../../../utils/dummy";
import { FlashList } from "@shopify/flash-list";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const Explore = () => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SearchInput />
      </View>

      <View style={styles.list}>
        <FlatList
          numColumns={2}
          data={categories}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <View style={{ width: "48%" }}>
              <CategoryCard {...item} />
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ paddingBottom: "3.8%" }}></View>
          )}
        />
      </View>
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

export default withSafeZone(Explore);
