import Tinu from '../../assets/images/Tinu.png';
import rectangle from '../../assets/images/Rectangle.png';
import { Dimensions, Image, StyleSheet, View, Pressable, Text, ActivityIndicator, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { BlurView } from 'expo-blur';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TinuCard from '../TinuCard/TinuCard';
import star from '../../assets/images/star.png';
import TinuChip from '../TinuChip/TinuChip';

const { width, height } = Dimensions.get('window');

export default function TinuOverlay({ handleOverLay,text }) {

    const [cards,setCards]=useState(null);
    const [fChips,setFChips]=useState(null);
    const [sChips,setSChips]=useState(null);
    const [loading,setLoading]=useState(true);
    const [contextLabel,setContextLabel]=useState('');
    const [input,setInput]=useState('');

    useEffect(()=>{
        const getData= async ()=>{
            const body=text.parameters;
            const data= await axios.post('https://genai-images-4ea9c0ca90c8.herokuapp.com/activate_tinu',body)

            setCards(data.data.cards);
            const chips=data.data.chips;
            const half=Math.ceil(chips.length/2);
            setFChips(chips.slice(0,half));
            setSChips(chips.slice(half));
            setContextLabel(data.data.context_label);
            setLoading(false);
        }
        getData()
    },[])
    return (
        <View style={StyleSheet.absoluteFill}>
            <Pressable onPress={handleOverLay} style={StyleSheet.absoluteFill}>
                <BlurView intensity={100} tint='dark' style={StyleSheet.absoluteFill} />
            </Pressable>
            <View style={styles.container}>
                <Image source={rectangle} style={styles.rectangle} />
                <Image source={Tinu} style={styles.tinu} />
                <Text style={styles.label}>{text.cta_label}</Text>
                <View style={{top:0.1*height,position:'absolute',alignSelf:'center',zIndex: 8,width:width,height:"100%"}}>
                    {loading===true?
                        
                        <ActivityIndicator color='black'></ActivityIndicator>
                        :
                        <View style={{position:'absolute',top:0.04*height,flexDirection:'column',width:'100%', height:'100%'}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    flexDirection: 'row',
                                    paddingHorizontal: 30,
                                }}
                            >
                                {
                                    cards.map((card, idx) => (
                                    <View key={idx} style={{ marginRight: 20 }}>
                                    <TinuCard card={card} />
                                    </View>
                                ))}
                            </ScrollView>
                            <View style={{position:'absolute',flexDirection:'row',gap:5,zIndex: 8,width:'100%', top:0.31*height, marginLeft:30}}>
                                <Image source={star} style={{width: 21,height: 21}}></Image>
                                <Text style={{fontFamily:'Quicksand_400Regular',fontWeight:'600',fontSize:12.5,color:'blue'}}>{contextLabel}</Text>
                            </View>
                            <View style={{position: 'absolute',flexDirection:'column',left:20,top:0.34*height}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{
                                        flexDirection: 'row',
                                        marginHorizontal: 5,
                                    }}
                                >
                                    {
                                        fChips.map((chip,idx)=>{
                                            return <TinuChip key={idx} chip={chip}></TinuChip>
                                        })
                                    }
                                </ScrollView>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{
                                        flexDirection: 'row',
                                        marginHorizontal: 5,
                                    }}
                                >
                                    {
                                        sChips.map((chip,idx)=>{
                                            return <TinuChip key={idx} chip={chip}></TinuChip>
                                        })
                                    }
                                </ScrollView>
                            </View>
                            <TextInput placeholder="ask me anything" style={{position:'absolute',top:0.47*height,backgroundColor: 'white',borderRadius:70,width:'90%',height:0.07*height,color:'black', paddingHorizontal: 15,alignSelf: 'center',fontSize:20, alignItems:'center'}} value={input} onChangeText={setInput}>
                                    
                            </TextInput>
                            <TouchableOpacity style={{position:'absolute',top:0.475*height, backgroundColor:(input==='')?'grey':'black', width:50,height:50,borderRadius: 50,left:0.8*width,alignItems: 'center',justifyContent:'center'}}>
                                <Text style={{color:'white',fontSize:20}}>↑</Text>
                            </TouchableOpacity>
                            
                        </View>
                    }
                    </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0.3*height ,
        width: width,
        height: 0.8 * height,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 7,
    },
    rectangle: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    tinu: {
        width: 0.25 * width,
        height: 0.13 * height,
        position: 'absolute',
        zIndex: 8,
        top: -0.01*height,
        left: 0.135*width
    },
    label: {
        position: 'absolute',
        top: 0.025*height,
        zIndex: 8,
        fontFamily: 'Quicksand_400Regular',
        fontWeight: '600',
        color: 'white',
        fontSize: 0.02* height,
        left: 0.4*width
    }
});
