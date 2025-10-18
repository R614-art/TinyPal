import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import back from '../../assets/images/back.png'
import { Dimensions } from 'react-native';

const {width,height}=Dimensions.get('window')

export default function Header({heading,subHeading}){
    return (
        <View>
            <StatusBar></StatusBar>
            <View style={styles.container}>
                <Image source={back} style={styles.back}/>
                <View style={{flexDirection:'column',gap:2,marginVertical:30,paddingLeft:10}}>
                    <Text style={styles.heading}>{heading}</Text>
                    <Text style={styles.subHeading}>{subHeading}</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:12,
        backgroundColor: 'black',
        position: 'absolute',
        //top: '15%',
        width: '100%',
        height: 0.12*height,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 0.01*width
    },
    back:{
        width: 0.085*width,
        height: 0.04*height,
        marginLeft: 0.040*width
    },
    heading:{
        color: 'white',
        fontSize: 0.02*height,
        fontFamily: 'Quicksand_400Regular',
        fontWeight: '700'
    },
    subHeading:{
        color: 'grey',
        fontFamily: 'Quicksand_400Regular',
        fontSize: 0.015*height , 
    }
})