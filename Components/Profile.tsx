import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
interface Props {
    name: String
    email: String
    image: {}
}
export default function Youprofile({ name, email, image }: Props) {
    const [fontsLoaded] = useFonts({
        'Kanit': require('../assets/Font/Kanit-Regular.ttf'),
        'Secular One': require('../assets/Font/SecularOne-Regular.ttf'),
        'IBMPlexSans': require('../assets/Font/IBMPlexSans-Medium.ttf'),

    })
    if (!fontsLoaded) return null;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={"white"} />
            <View style={styles.containerInformation}>
                <Image
                    source={image}
                    style={styles.photo}
                />
                <View>
                    <Text style={styles.name}> {name} </Text>
                    <Text style={styles.email}> {email} </Text>
                </View>

            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    containerInformation: {
        width: "100%",
        height: 120,
        backgroundColor: "",
        flexDirection: 'row'
    },
    photo: {
        marginTop:2,
        width: "30%",
        height: "80%",
        borderRadius: 50
    },
    name: {
        fontSize: 25,
        fontFamily: "Kanit",
        color: "black",
        marginHorizontal: 13,
        marginTop: 25,
    },
    email: {
        fontSize: 18,
        fontFamily: "Kanit",
        color: "gray",
        marginHorizontal: 13,
        marginTop: -7,
    },

});