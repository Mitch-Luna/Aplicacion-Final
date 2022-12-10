import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

interface Props{
  image:{},
  color: String,
  horario:String,
  diasDisponibles: String,
  contacto: String,
  whatsApp:String,
  propietario:String,
  numeroPlaca:String,
  namebutton:String
}

export default function Body({image, color, horario,diasDisponibles, contacto, whatsApp,propietario, numeroPlaca, namebutton}:Props) {
  const [fontsLoaded] = useFonts({
    'Kanit': require('../assets/Font/Kanit-Regular.ttf'),
    'Secular One': require('../assets/Font/SecularOne-Regular.ttf'),
    'IBMPlexSans': require('../assets/Font/IBMPlexSans-Medium.ttf'),
    
})
if (!fontsLoaded) return null;
  return (
      <View style={styles.taxiDetails}>
      <AntDesign style={styles.heart} name="hearto" size={30} color="black" />
      <View style={styles.containerInformation}>
      <Image
        source={image}
        style={styles.auto1}
        />
        <View style={styles.containerdata}>
        <Text style={styles.textInformation}> {color} </Text>
        <Text style={styles.textInformation}> {horario} </Text>
        <Text style={styles.textInformation}> {diasDisponibles} </Text>
        <Text style={styles.textInformation}> {contacto} </Text>
        <Text style={styles.textInformation}> {whatsApp} </Text>
        <Text style={styles.textInformation}> {propietario} </Text>
        <Text style={styles.textInformation}> {numeroPlaca} </Text>
        </View>
      </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.nameButton}> {namebutton} </Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({ 
  taxiDetails:{
    marginTop:10,
    flex:1,
    borderColor:"#1D69A4",
    backgroundColor:"",
    borderWidth:3,
    alignSelf:"center",
    borderRadius:20,
  },
  container:{
    marginTop:12,
    backgroundColor:"",
    width:"100%",
    height:"80%",

  },
  heart:{
    marginHorizontal:12,
    marginTop:12,
  },
  auto1:{
    width:170,
    height:160,
    marginHorizontal:10,
    marginTop:8,
  },
  containerInformation:{
    marginTop:12,
    marginBottom:4,
    alignItems:'center',
    flexDirection:"row",
    width:"100%",
    flex:1,
    backgroundColor:""
  },
  containerdata:{
    width:"50%",
    flex:1,
    backgroundColor:""
  },
  textInformation:{
    fontFamily:"Kanit",
    fontSize:15,
    color:"black"
  },
  button:{
    marginRight:12,
    marginLeft:'auto',
    marginTop:8,
    marginBottom:8,
    width:100,
    height:40,
    backgroundColor:"#A82323",
    borderRadius:12
  },
  nameButton:{
    marginTop:3,
    fontFamily:"IBMPlexSans",
    color:"white",
    fontSize:20,
    alignSelf:"center"
  },
  title:{
    marginHorizontal:12,
    fontFamily:"IBMPlexSans",
    fontSize:30,
    color:"black"
  },
  subcontainer:{
    flexDirection:"column",
    marginTop:12,
    backgroundColor:"",
    width:"100%",
    height:200,
  },
 
});
