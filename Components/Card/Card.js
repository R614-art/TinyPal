import { ActivityIndicator, Image, Pressable, StyleSheet, View } from "react-native";
import Header from "../Header/Header";
import Content from "../Content/Content";
import DYK from "../../assets/images/DYK.png"
import { useEffect, useState,useRef } from "react";
import TinuSheet from "../TinuSheet/TinuSheet";
import { Dimensions } from 'react-native';
import FlashCardContent from "../../Components/FlashCardContent/FlashCardContent";

const {width,height}=Dimensions.get('window')


export default function Card({card,setPaused,handleRight,handleLeft,type,i}){
    const uri='https://genai-images-4ea9c0ca90c8.herokuapp.com'+card.image_url;
    
    return (
        <View style={styles.container}>
            <Header heading={card.heading} subHeading={card.sub_heading} />
                <View style={styles.imageContainer}>
                    {type==='DYK' ?
                        <View>
                            <Image source={{uri:uri}} style={styles.image}></Image>
                            <Content effect={card.cause_and_effect.effect} cause={card.cause_and_effect.cause} citation={card.citation} content={card.content}/>
                            <Image source={DYK} style={styles.DYK}/>
                        </View>
                        :
                            <View>
                            <Image source={{uri:uri}} style={styles.image}></Image>
                            <FlashCardContent heading={card.heading} content={card.content} i={i}></FlashCardContent>
                            </View>
                    }
                        <Pressable onPressIn={()=>setPaused(true)} onPressOut={()=>setPaused(false)} style={{...styles.tapZones,left:'20%',width:'60%'}}></Pressable>
                        <Pressable onPress={handleRight} style={{...styles.tapZones,left:'80%',width:'20%'}}></Pressable>
                        <Pressable onPress={handleLeft} style={{...styles.tapZones,left:'0%',width:'20%'}}></Pressable>
                </View>
            <View style={styles.rectangle}>
            </View>
            <TinuSheet text={card.tinu_activation} setPaused={setPaused}></TinuSheet>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height: 1*height,
        backgroundColor: 'black'
    },
    imageContainer:{
        width: '100%',
        marginTop: 0.12*height,
        height: 0.7*height,
        borderRadius: 32,
        overflow:'hidden',
        position: 'relative'
    },
    image:{
        width: width,
        height: 0.55*height,   
    },
    DYK:{
        width: 0.36*width,
        height: 0.1*height,
        position: 'absolute',
        transform: [{translateY: 0.23*height}],
        alignSelf: 'center',
        zIndex: 2
    },
    rectangle:{
        position:'absolute',
        top: 0.845*height,
        alignSelf: 'center',
        zIndex: 3,
        backgroundColor: 'white',
        height: 4,
        width: 32,
        borderRadius: 100
    },
    tapZones:{
        position: 'absolute',
        height: '100%',
        zIndex: 99,
        top: 0
    }
})