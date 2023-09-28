import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import withSafeZone from "../../../hoc/withSafeZone";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLOR } from "../../../utils/const";
import { FlatButton } from "../../../components/buttons/flatButton";
const ProductDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../../../assets/images/apple.png")}
        style={styles.header}
        blurRadius={8}
      >
        <Image source={require("../../../../assets/images/apple.png")} />
        <Pressable onPress={() => navigation.goBack()} style={styles.arrowBack}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </Pressable>
      </ImageBackground>

      <View style={styles.body}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#E2E2E2",
            paddingVertical: hp(3),
          }}
        >
          <View style={styles.titleSection}>
            <View>
              <Text style={styles.title}>Naturel Red Apple</Text>
              <Text style={styles.subTitle}>1kg, Price</Text>
            </View>
            <Pressable>
              <Ionicons name="ios-heart-outline" size={hp(3)} color="black" />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: wp(3.5),
                alignItems: "center",
                marginVertical: hp(2),
              }}
            >
              <Pressable>
                <FontAwesome5
                  name="minus"
                  size={hp(2)}
                  color={COLOR.TEXT_COLOR}
                />
              </Pressable>
              <View style={styles.quantitySection}>
                <Text style={styles.quantity}>20</Text>
              </View>
              <Pressable>
                <FontAwesome5 name="plus" size={hp(2)} color={COLOR.PRIMARY} />
              </Pressable>
            </View>
            <Text style={styles.priceText}>$4.99</Text>
          </View>
        </View>
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              color: COLOR.TEXT_COLOR,
              marginVertical: 10,
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </Text>
        </ScrollView>
        <FlatButton label="Add to Basket" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
  },
  header: {
    flex: 2,
    width: wp(100),
    backgroundColor: "#F2F3F2",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: hp(4),
    borderBottomRightRadius: hp(4),
    position: "relative",
  },
  arrowBack: {
    position: "absolute",
    left: wp(3),
    top: hp(2),
  },

  body: {
    flex: 3,
    paddingHorizontal: wp(5),
  },
  titleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: wp(6),
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: wp(4),
    color: COLOR.TEXT_COLOR,
  },

  quantitySection: {
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(2),
    borderWidth: 1,
    borderRadius: hp(1.5),
    borderColor: COLOR.TEXT_COLOR,
    textAlign: "center",
  },
  quantity: {
    fontSize: hp(2),
  },
  priceText: {
    fontSize: hp(2.2),
    fontWeight: "bold",
  },
});

export default withSafeZone(ProductDetail);
