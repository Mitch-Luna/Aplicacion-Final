import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import Youprofile from '../Components/Profile';
import Body from '../Components/body';
import Header from '../Components/header';

export default function Favourite() {
    const [fontsLoaded] = useFonts({
        'Kanit': require('../assets/Font/Kanit-Regular.ttf'),
        'Secular One': require('../assets/Font/SecularOne-Regular.ttf'),
        'IBMPlexSans': require('../assets/Font/IBMPlexSans-Medium.ttf'),

    })
    if (!fontsLoaded) return null;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={"white"} />
            <View style={styles.container}>
            <Header
            title={"Tús favoritos"}
            />
            <View style={styles.subContainer}>
                
                <View style={styles.profile}>
                    <Youprofile
                        image={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbWkG8XpPL1kJCNbiWTBu3i5VxuvtxMu_MF-7CkpaA8oFyXfg6wPQh4te8c3kYu3g970&usqp=CAU" }}
                        name={"Lee Jounk Sue"}
                        email={"leejonk@gmail.com"}
                    />
                </View>
                
                <Text style={styles.title}>Tús favoritos!!!</Text>
                <ScrollView>
                <Body
                    image={{ uri: "https://www.tn8.tv/media/uploads/2019/05/30/taxm3.jpg" }}
                    color={"Color: Rojo"}
                    horario={"Horario: De 7:00am a 8:00pm"}
                    diasDisponibles={"Dias: De Lunes a Viernes"}
                    contacto={"Contacto: 6789-7654"}
                    whatsApp={"WhatsApp: 8909-7645"}
                    propietario={"Propietario: Marcos Chacado"}
                    numeroPlaca={"Número de placa: RI 2976"}
                    namebutton={"Eliminar"}
                />
                <Body
                    image={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwKR8lpzi5a0JieSc49fgjYIHxc17J1w2LL3gmEynSUu5TKkgBw-aRHFMkA_viXV8KU4&usqp=CAU" }}
                    color={"Color: Rojo"}
                    horario={"Horario: De 7:00am a 8:00pm"}
                    diasDisponibles={"Dias: De Lunes a Viernes"}
                    contacto={"Contacto: 6789-7654"}
                    whatsApp={"WhatsApp: 8909-7645"}
                    propietario={"Propietario: Marcos Chacado"}
                    numeroPlaca={"Número de placa: RI 2976"}
                    namebutton={"Eliminar"}
                />
                    </ScrollView>
                </View>  
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        backgroundColor: 'white',
        alignSelf:'center',
    },
    profile: {
        alignSelf: "center",
        marginTop:50,
        backgroundColor: "",
        width: "85%",
        height: 120,
        borderBottomWidth: 2,
        borderColor: "gray"
    },
    title: {
        marginTop: 12,
        fontFamily: "Secular One",
        alignSelf: "center",
        fontSize: 36,
        color: "black"
    },
    subContainer:{
        alignSelf: "center",
        width: '90%',
        height:"80%",
        backgroundColor: 'white',
        marginTop: 12,
    }



});