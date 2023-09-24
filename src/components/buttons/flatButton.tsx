import { Pressable, StyleSheet, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLOR } from "../../utils/const";

type FlatButtonProps = {
  label: string;
  onPressHandler?: Function;
  disabled?: boolean;
};

export const FlatButton = ({
  label,
  onPressHandler,
  disabled,
}: FlatButtonProps) => {
  const handler = () => {
    console.log("test");
    onPressHandler && onPressHandler();
  };
  return (
    <Pressable
      style={[styles.btn, disabled && styles.disabled]}
      onPress={handler}
      disabled={disabled}
    >
      <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
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
  disabled: {
    backgroundColor: "gray",
  },
});
