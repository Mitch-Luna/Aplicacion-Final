import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import { useFonts } from 'expo-font';
import Header from '../Components/header';
import Body from '../Components/body';
import Youprofile from '../Components/Profile';

export default function Profile() {
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
                title={"Tú perfil"}
            />
            <View style={styles.Body}>
            <ScrollView
            
            >
                <View style={styles.subContainer}>
                    <Youprofile
                    image={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbWkG8XpPL1kJCNbiWTBu3i5VxuvtxMu_MF-7CkpaA8oFyXfg6wPQh4te8c3kYu3g970&usqp=CAU"}}
                    name={"Lee Jounk Sue"}
                    email={"leejonk@gmail.com"}
                    />
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.nameButton}>Editar perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.nameButton}>Publicar tu servicio</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Tú servicio!!!</Text>
                    <View style={styles.subBody}>
                        <Image
                        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwKR8lpzi5a0JieSc49fgjYIHxc17J1w2LL3gmEynSUu5TKkgBw-aRHFMkA_viXV8KU4&usqp=CAU"}}
                        style={styles.imagen}
                        />
                        <View style={styles.containerData}>
                            <Text style={styles.data}>Color: Amarillo</Text>
                            <Text style={styles.data}>Horario: De 8:00 am a 9:00 pm</Text>
                            <Text style={styles.data}>Dias disponible: De lunes a viernes</Text>
                            <Text style={styles.data}>Contacto: 8976-8965</Text>
                            <Text style={styles.data}>WhatsApp: 78654345</Text>
                            <Text style={styles.data}>Numero de placa: RI 2976</Text>
                        </View>
                        <View style={styles.containerButtons}>
                        <TouchableOpacity style={styles.Buttons}>
                            <Text style={styles.nameButton}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Buttons}>
                            <Text style={styles.nameButton}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
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
    Body:{
        alignSelf: "center",
        width: '90%',
        height:"80%",
        backgroundColor: '',
        marginTop: 12,
    },
    subContainer: {
        alignSelf: "center",
        width: '90%',
        height:"100%",
        backgroundColor: '',
        marginTop: 12,
    },
    
    containerButton: {
        marginTop:2,
        backgroundColor: "white",
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderColor:""

    },
    button:{
        marginTop:8,
        width: "43%",
        height: 50,
        backgroundColor: "#A82323",
        borderRadius: 18,
    },
    nameButton:{
        marginHorizontal:12,
        marginTop: 6,
        fontFamily: "Secular One",
        alignSelf: "center",
        fontSize: 16,
        color: "white",
    },
    title:{
        fontFamily: "Secular One",
        alignSelf: "center",
        fontSize: 36,
        color: "black"
    },
    subBody:{
        marginBottom:43,
        alignContent:'flex-end',
        alignSelf:"center",
        width:"97%",
        height:420,
        backgroundColor:"",
        borderColor:"#1D69A4",
        borderWidth:2,
        borderRadius:23,
        
    },
    imagen:{
        marginTop:12,
        alignSelf:"center",
        width:"50%",
        height:106,
    },
    containerData:{
        marginTop:5,
        marginHorizontal:6,
        backgroundColor:"",
        width:"70%",
        height:"50%"
    },
    data:{
        marginTop: 6,
        fontFamily: "Kanit",
        marginHorizontal:12,
        fontSize: 16,
        color: "black"
    },
    containerButtons:{
        marginTop:28,
        alignSelf:"center",
        backgroundColor: "",
        width: "95%",
        height: 55,
        flexDirection: "row",
        justifyContent:'space-between',
    },
    Buttons:{
        marginTop:8,
        marginHorizontal: 2,
        width: "35%",
        height: 40,
        backgroundColor: "#1D69A4",
        borderRadius: 18,
    },

});
