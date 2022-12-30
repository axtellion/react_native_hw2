import {
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.images}
        source={require("./images/bg-register.jpg")}
      >
        <View style={styles.form}>
          <View style={{ marginBottom: 16 }}>
            <TextInput style={styles.input} />
          </View>
          <View style={{ marginBottom: 16 }}>
            <TextInput style={styles.input} />
          </View>
          <View style={{ marginBottom: 43 }}>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.textBtn}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  images: {
    flex: 1,
    resizeMode: "cover",
    height: 870,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
  },
  form: {
    marginHorizontal: 16,
  },
  btn: {
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "#fff",
    fontSize: 16,
  },
});
