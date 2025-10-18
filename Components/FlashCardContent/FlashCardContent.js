import { Image, StyleSheet, View,Text } from "react-native";
import rectangle from '../../assets/images/RectangleFlash.png'
import { Dimensions } from 'react-native';

const {width,height}=Dimensions.get('window')
export default function FlashCardContent({content,heading,i}){
    return (
        <View style={styles.Container}>
            <Text style={styles.SNO}>{i+1}</Text>
            <Image source={rectangle} style={styles.rectangle} ></Image>
            <View style={styles.contentContainer}>
                <View style={styles.vertical}></View>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        position:'absolute',
        top: 0.27*height,
        width: width,
    },
    rectangle:{
        width: '100%',
        height: 0.05 * height,
    },
    contentContainer:{
        position:'absolute',
        width: width,
        backgroundColor:'#4C7B9E',
        top:0.05*height,
        height: 0.5*height,
    },
    SNO:{
        fontFamily:'Quicksand_400Regular',
        fontSize: 0.035*height,
        fontWeight: '700',
        color: 'white',
        position: 'absolute',
        left: 0.097*width,
        zIndex: 3,
        top: 0.0012*height
    },
    vertical:{
        position: 'absolute',
        left: 0.05*width,
        width: 4,
        height: 0.25*height,
        top: 0.03*height,
        backgroundColor: 'white',
        zIndex: 3
    },
    heading:{
        position: 'absolute',
        top: 0.03*height,
        left: 0.1*width,
        fontSize: 0.03*height,
        fontFamily: 'Quicksand_400Regular',
        fontWeight: '700',
        lineHeight: 0.03*height,
        height: 0.1*height,
        color: 'white',
        width: 0.7*width
    },
    content:{
        position: 'absolute',
        top: 0.12*height,
        left: 0.1*width,
        fontFamily: 'Quicksand_400Regular',
        fontSize: 0.023*height,
        fontWeight: '600',
        color: 'white',
        height: 0.25*height,
        width: 0.8*width,
    }
})