import { useState, useEffect } from "react";

import {
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.images}
          source={require("../../assets/images/bg-register.jpg")}
        >
          <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
            <View style={styles.formBg}>
              <Text style={styles.title}>Регистрация</Text>
              <View
                style={{
                  ...styles.form,
                  width: dimensions,
                }}
              >
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={styles.input}
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.login}
                    placeholder={"Логин"}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={styles.input}
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.email}
                    placeholder={"Адрес электронной почты"}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View style={{ marginBottom: 43 }}>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    placeholder={"Пароль"}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={keyboardHide}
                >
                  <Text style={styles.textBtn}>Зарегистрироваться</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...styles.text,
                  marginBottom: isShowKeyboard ? 32 : 78,
                }}
              >
                Уже есть аккаунт? Войти
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: "flex-end",
  },
  formBg: {
    height: 529,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 30,
    marginBottom: 33,
  },

  form: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    backgroundColor: "#F6F6F6",
    paddingLeft: 20,
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
  text: {},
});
