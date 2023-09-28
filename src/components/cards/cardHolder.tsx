import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLOR } from "../../utils/const";

type CardHolderProps = {
  title: string;
  ItemRender: any;
  data?: Array<any>;
};

export default function CardHolder({
  ItemRender,
  title,
  data = [],
}: CardHolderProps) {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Pressable>
          <Text style={styles.buttonText}>See all</Text>
        </Pressable>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: wp(4) }}></View>}
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={{ width: wp(40), height: hp(25) }}>
            <ItemRender {...item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: hp(2.5),
    marginVertical: hp(2),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: "bold",
  },
  buttonText: {
    color: COLOR.PRIMARY,
    fontWeight: "bold",
  },
});
