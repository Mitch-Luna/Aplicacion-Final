import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import Body from '../Components/body';
import Header from '../Components/header';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header 
      title={"Taxis para tí"}
      />
      <View style={styles.container}>
        <ScrollView>
          <Body
            image={{ uri: "https://i.ytimg.com/vi/_Z0jDqbJ3I0/hqdefault.jpg" }}
            color={"Color: Rojo"}
            horario={"Horario: De 7:00am a 8:00pm"}
            diasDisponibles={"Dias: De Lunes a Viernes"}
            contacto={"Contacto: 6789-7654"}
            whatsApp={"WhatsApp: 8909-7645"}
            propietario={"Propietario: Marcos Chacado"}
            numeroPlaca={"Número de placa: RI 2976"}
            namebutton={"ver más"}
          />
          <Body
            image={{ uri: "https://www.tn8.tv/media/uploads/2019/05/30/taxm3.jpg" }}
            color={"Color: Blanco"}
            horario={"Horario: De 7:00am a 8:00pm"}
            diasDisponibles={"Dias: De Lunes a Domingo"}
            contacto={"Contacto: 6789-7654"}
            whatsApp={"WhatsApp: 8909-7645"}
            propietario={"Propietario: Marcos Chacado"}
            numeroPlaca={"Número de placa: RI 2976"}
            namebutton={"ver más"}
          />
          <Body
            image={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwKR8lpzi5a0JieSc49fgjYIHxc17J1w2LL3gmEynSUu5TKkgBw-aRHFMkA_viXV8KU4&usqp=CAU" }}
            color={"Color: Amarillo"}
            horario={"Horario: De 5:00am a 8:00pm"}
            diasDisponibles={"Dias: De Lunes a Sabado"}
            contacto={"Contacto: 6789-7654"}
            whatsApp={"WhatsApp: 8909-7645"}
            propietario={"Propietario: Marcos Chacado"}
            numeroPlaca={"Número de placa: AAA 2976"}
            namebutton={"ver más"}
          />
          <Body
            image={{ uri: "https://i.ytimg.com/vi/mzwyJg5TZGo/maxresdefault.jpg" }}
            color={"Color: gris"}
            horario={"Horario: De 8:00am a 7:00pm"}
            diasDisponibles={"Dias: De Lunes a Domingo"}
            contacto={"Contacto: 6789-7654"}
            whatsApp={"WhatsApp: 8909-7645"}
            propietario={"Propietario: Alex Zurdo"}
            numeroPlaca={"Número de placa: M 2976"}
            namebutton={"ver más"}
          />
          <Body
            image={{ uri: "https://puntonoticioso.com/wp-content/uploads/2021/11/Taxis-Juigalpa.jpg" }}
            color={"Color: Azulesco tirando a verde"}
            horario={"Horario: De 8:00am a 7:00pm"}
            diasDisponibles={"Dias: De Lunes a Domingo"}
            contacto={"Contacto: 6789-7654"}
            whatsApp={"WhatsApp: 8909-7645"}
            propietario={"Propietario: Alex Zurdo"}
            numeroPlaca={"Número de placa: M 2976"}
            namebutton={"ver más"}
          />
        </ScrollView>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    backgroundColor: "",
    width: "100%",
    height: "80%",

  },
});
