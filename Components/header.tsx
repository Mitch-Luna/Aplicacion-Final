import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
interface Props{
    title:String
}
export default function Header({title}:Props) {
  const [fontsLoaded] = useFonts({
    'Kanit': require('../assets/Font/Kanit-Regular.ttf'),
    'Secular One': require('../assets/Font/SecularOne-Regular.ttf'),
    'IBMPlexSans': require('../assets/Font/IBMPlexSans-Medium.ttf'),
    
})
if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"white"} />
    <View style={styles.header}>
      <Text style={styles.text1}> {title} </Text>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    flex:1,
    width:'100%',
    backgroundColor: '#EED63B',
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,

  },
  text1:{
    marginHorizontal:12,
    fontFamily:"Kanit",
    marginTop:50,
    fontSize:45,
    color:"black",

  },
 
});
