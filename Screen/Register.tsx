import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, TextInput, Button, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export default function Register() {
  const [fontsLoaded] = useFonts({
    'Kanit': require('../assets/Font/Kanit-Regular.ttf'),
    'Secular One': require('../assets/Font/SecularOne-Regular.ttf'),
    'IBMPlexSans': require('../assets/Font/IBMPlexSans-Medium.ttf'),

  })
  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"black"} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text1}>Travol</Text>
          <View style={styles.subcontainer}>
            <Text style={styles.text2}>Your account!!</Text>
            <TextInput
              placeholder=" ingresa tu nombre"
              style={styles.inputName}
            />
            <TextInput
              placeholder=" ingresa tu contraseña"
              style={styles.inputName}
            />
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.nameButtonLogin}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.nameButtonRegister}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: "70%",
    backgroundColor: '#EED63B',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  subcontainer: {
    alignSelf: "center",
    marginTop: 50,
    width: '80%',
    height: 450,
    backgroundColor: 'white',
    borderColor: "#EED63B",
    borderWidth: 3,
    borderRadius: 30,

  },
  text1: {
    fontFamily: "Secular One",
    marginTop: 75,
    color: "white",
    fontSize: 65,
    alignSelf: "center",
  },
  text2: {
    fontFamily: "IBMPlexSans",
    marginTop: 35,
    color: "black",
    fontSize: 25,
    alignSelf: "center",
  },
  inputName: {
    fontSize: 15,
    color: "Very dark cyan: hsl(183, 100%, 15%)",
    marginHorizontal: 23,
    marginTop: 38,
    width: "87%",
    height: 62,
    borderRadius: 5,
    backgroundColor: "Very light grayish cyan: hsl(189, 41%, 97%)",
  },
  containerButton: {
    marginTop: 44,
    alignSelf: "center",
    flexDirection: "row",
    width: "90%",
    height: "10%",
    backgroundColor: ""
  },
  buttonLogin: {
    marginHorizontal: 10,
    width: "45%",
    height: 45,
    backgroundColor: "#1D69A4",
    borderRadius: 12,
  },
  nameButtonLogin: {
    marginTop: 2,
    fontFamily: "Secular One",
    fontSize: 25,
    color: "white",
    alignSelf: "center"
  },
  buttonRegister: {
    marginHorizontal: 2,
    width: "45%",
    height: 45,
    backgroundColor: "#A82323",
    borderRadius: 12,
  },
  nameButtonRegister: {
    marginTop: 2,
    fontFamily: "Secular One",
    alignSelf: "center",
    fontSize: 25,
    color: "white"
  },
});