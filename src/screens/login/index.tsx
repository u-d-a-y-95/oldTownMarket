import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { COLOR } from "../../utils/const";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FlatButton } from "../../components/buttons/flatButton";

export default function LoginScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <View>
        <ImageBackground
          source={require("../../../assets/images/bg.png")}
          style={styles.bgImg}
          blurRadius={35}
        >
          <Image source={require("../../../assets/images/icon.png")} />
        </ImageBackground>
        <View style={styles.loginSection}>
          <Text style={styles.loginText}>Login</Text>
          <View style={{ gap: 10 }}>
            <View style={styles.inputBox}>
              <Text style={styles.inputlabel}>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputlabel}>Password</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>

            <FlatButton label="Log in" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImg: {
    width: "100%",
    height: hp(35),
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  loginSection: {
    paddingHorizontal: 20,
  },
  loginText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: COLOR.PRIMARY,
    letterSpacing: 4,
    textTransform: "uppercase",
  },
  inputBox: {
    marginVertical: 10,
  },
  inputlabel: {
    color: "#7C7C7C",
    fontSize: hp(2.1),
    fontWeight: "600",
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#7C7C7C",
    paddingVertical: 10,
  },
  loginBtn: {
    backgroundColor: COLOR.PRIMARY,
    alignItems: "center",
    borderRadius: hp(1),
    marginTop: 20,
  },
  btnText: {
    paddingVertical: hp(1.5),
    color: "#fff",
    fontWeight: "bold",
    fontSize: hp(2.5),
  },
});
