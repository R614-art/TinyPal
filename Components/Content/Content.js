import { Image, Linking, StyleSheet, Text, View } from "react-native";
import arrow from '../../assets/images/Arrow.png'
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';

const {width,height}=Dimensions.get('window')
export default function Content({cause,effect,citation,content}){
    //console.log(citation);
    return(
        <>
            <LinearGradient
                colors={["#E7809E","#B65672"]} // 👈 gradient colors
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.container}
            >
                <View style={styles.ccContainer}>
                    <View style={styles.ce}>
                        <Text style={styles.ceText}>
                            {cause}
                        </Text>
                    </View>
                    <Image source={arrow}/>
                    <View style={styles.ce}>
                        <Text style={styles.ceText}>
                            {effect}
                        </Text>
                    </View>
                </View>
                <Text style={styles.content}>
                    {content}
                </Text>
                <Text onPress={()=>Linking.openURL(citation.url)} style={styles.citation}>
                    {citation.label}
                </Text>
            </LinearGradient>
        </>
    )
}

const styles=StyleSheet.create({
    container:{
        position: 'absolute',
        borderRadius: width,
        width: 2*width,
        height: 0.8*height,
        alignSelf: "center",
        left: -width/2,
        transform: [{ translateY: 0.275*height}],
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ccContainer:{
        flexDirection: 'row',
        position: 'absolute',
        top: 0.082*height,
        alignSelf: 'center',
        gap:0.032*width,
        alignItems: 'center',
        justifyContent: 'center'   
    },
    ce:{
        width: 0.34*width,
        height: '100%',
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: 'white',
        alignItems: 'center',
        backgroundColor:'#E7809E',
        justifyContent: 'center'
    },
    ceText:{
        paddingVertical: 12,
        paddingHorizontal: 8,
        fontFamily: 'Quicksand_400Regular',
        fontWeight: '600',
        fontSize: 0.0178*height,
        color: 'white',
        lineHeight: 0.0225*height,
        textAlign: 'center'
    },
    content:{
        width: 0.9*width,
        height: 0.2*height,
        position: 'absolute',
        top:0.222*height,
        fontFamily: 'Quicksand_400Regular',
        fontSize: 0.019*height,
        color: 'white',
        lineHeight: 0.025*height,
        textAlign: 'center',
        fontWeight: '600',
        alignSelf: 'center'
    },
    citation:{
        position:'absolute',
        width: 0.8*width,
        height: 0.1*height,
        top: 0.36*height,
        fontFamily: 'Quicksand_400Regular',
        textDecorationLine: 'underline',
        lineHeight: 0.025*height,
        letterSpacing: 0.005*width,
        textAlign: 'center',
        color: '#FCCCA8',
        fontWeight: '500',
        fontSize: 0.017*height
    },
    
})