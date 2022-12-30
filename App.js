import { StyleSheet, TextInput, View, ImageBackground } from "react-native";

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
          <View>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
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
});
