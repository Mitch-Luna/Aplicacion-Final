import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import Header from '../Components/header';

export default function Service() {
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
                title={"Tú servicio"}
            />   
                <View style={styles.subcontainer}>
                    <ScrollView>
                    <Image
                        style={styles.image}
                        source={{ uri: "https://play-lh.googleusercontent.com/pmEnTOeRvosC1yOXFVwo15zS2uAdB9nijugU93NbrmFBYt61IVCZBzg7EZ00YTqmLw" }}
                    />
                    <TextInput
                        placeholder=" Color del auto "
                        style={styles.inputName}
                    />
                    <TextInput
                        placeholder=" Horario"
                        style={styles.inputName}
                    />
                    <TextInput
                        placeholder=" Dias disponibles"
                        style={styles.inputName}
                    />
                    <TextInput
                        placeholder=" Contacto"
                        style={styles.inputName}
                    />
                    <TextInput
                        placeholder=" WhatsApp"
                        style={styles.inputName}
                    />
                    <TextInput
                        placeholder=" Propietario"
                        style={styles.inputName}
                    />
                    <TextInput
                        placeholder=" Número de placa"
                        style={styles.inputName}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.nameButton}>Publicar</Text>
                    </TouchableOpacity>
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
    image: {
        width: 50,
        height: 56,
        borderRadius: 45,
        alignSelf: 'center',
    },
    subcontainer: {
        alignSelf: "center",
        width: '90%',
        height:"80%",
        backgroundColor: '',
        marginTop: 12,
    },
    inputName: {
        fontSize: 17,
        marginHorizontal: 3,
        marginTop: 18,
        width: "97%",
        height: 57,
        borderRadius: 5,
        backgroundColor: "Very light grayish cyan: hsl(189, 46%, 90%)",

    },
    button:{
        alignSelf:'center',
        marginTop:20,
        marginBottom:12,
        width:"60%",
        height:50,
        backgroundColor:"#A82323",
        borderRadius:12
      },
      nameButton:{
        marginTop:3,
        fontFamily:"IBMPlexSans",
        color:"white",
        fontSize:25,
        alignSelf:"center"
      },

});