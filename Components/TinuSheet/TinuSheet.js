import { Image, StyleSheet, TouchableOpacity, View,Text } from "react-native";
import Tinu from '../../assets/images/Tinu.png'
import rectangle from '../../assets/images/Rectangle.png'
import Ellipse from '../../assets/images/Ellipse 10.png'
import Circle from '../../assets/images/Ellipse 9.png'
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';
import { useState } from "react";
import TinuOverlay from "../TinuOverlay/TinuOverlay";

const {width,height}=Dimensions.get('window')
export default function TinuSheet({text,setPaused}){
  const [overLay,setOverLay]=useState(false);
  const handleOverLay=()=>{
    setOverLay(false);
    setPaused(false);
  }
    return(
      <>
      {
      overLay===false?
        <View style={{width:width, height: '100%' }}>
            <Image source={Tinu} style={styles.tinu}></Image>
            <Image source={rectangle} style={styles.rectangleBg}></Image>
            
            <View style={styles.rectangleWrapper}>
                <Image source={rectangle} style={styles.rectangle}></Image>
                <Image source={Ellipse} style={styles.gradient}></Image>
                <Image source={Circle} style={styles.g2}></Image>
                <View style={{position:'absolute', top:'21%',flexDirection:'row',alignItems:'center', justifyContent: "space-between", left:'7%',gap:0.15*width}}>
                    <Text style={styles.label}>
                        {text.cta_label}
                    </Text>
                    <TouchableOpacity style={{position:'absolute',top:0,left:0.65*width}} onPress={()=>{setPaused(true);setOverLay(true)}}>
                        <LinearGradient
                            colors={["#E2D3FF","#FFCCB8","#FFB4E2"]}
                            start={{x:0,y:1}}
                            end={{x:1,y:1}}
                            locations={[0,0.5,1]}
                            style={styles.askTinu}
                        >
                            <Text style={styles.askText} >Ask Tinu</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        :
        <TinuOverlay handleOverLay={handleOverLay} text={text}></TinuOverlay>
      }
      </>
    )
}

const styles=StyleSheet.create({
    tinu:{
        width: 0.15*width,
        height: 0.08*height,
        position: 'absolute',
        top: 0.013*height,
        left: 0.185*width,
        zIndex: 3
    },
    rectangleBg:{
        position : 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        bottom: 0.135*height,
    },
    rectangleWrapper: {
    bottom: 0.100*height,
    width: '100%',
    height: '95%',
    overflow: 'hidden'
    },
    rectangle: {
         width: '100%',
        height: '100%',
        resizeMode: 'contain',
        overflow: 'hidden'
    },
  gradient: {
    position: 'absolute',
    width: '50%',
    transform: [{ rotate: '-45.39deg' }],
    top: '10%',
    left: 0,
    zIndex: 4
  },
  g2:{
    position: 'absolute',
    width: '40%',
    top: '10%',
    left: '50%',
    zIndex:4
  },
  askTinu:{
    width: '100%',
    height: 0.04*height,
    borderRadius: 92,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    paddingHorizontal: 5
  },
  askText:{
    fontFamily: 'Quicksand_400Regular',
    fontWeight: '700',
    color: 'black',
    fontSize: 0.015*height,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  label:{
    height: 20,
    fontFamily: 'Quicksand_400Regular',
    fontSize: 0.019*height,
    fontWeight: '600',
    paddingHorizontal: 5
  }

})