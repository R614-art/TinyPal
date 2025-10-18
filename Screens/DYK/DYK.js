import axios from "axios";
import { useEffect, useState, useRef } from "react";
import responses from "../../assets/data/responses";
import { View, Image } from "react-native";
import Card from "../../Components/Card/Card";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window')

export default function DYK({route}){
    const {type}=route.params;
    //console.log(type)
    const cards=useRef(null);
    const [card,setCard]=useState(0);
    const [loaded,setLoaded]=useState(false);
    const cardProgress=useRef(null);
    const [progress,setProgress]=useState(0);
    const [paused,setPaused]=useState(false);
    useEffect(() => {
    const getDYK = async () => {
        try {
            const { data } = await axios.post(
                'https://genai-images-4ea9c0ca90c8.herokuapp.com/p13n_answers',
                responses
            );
            cards.current = (type==='Flash')?data.flash_cards:data.dyk_cards;
            //console.log(cards.current)
            cardProgress.current=Array(cards.current.length).fill(0);
            await Promise.all(
                cards.current.map((card) =>
                    Image.prefetch('https://genai-images-4ea9c0ca90c8.herokuapp.com' + card.image_url)
                )
            );
            setLoaded(true);
        } catch (err) {
            console.log('Error fetching DYK cards:', err);
        }
    };

    getDYK();
    return ()=> setCard(0);
}, []);


    useEffect(()=>{
        if (!cards.current) return;
        let cprogress=0;
        setProgress(0);
        const interval=setInterval(()=>{
            if(!paused)
            {
                cprogress+=5;
                setProgress(cprogress);
                if(cprogress>100)
                {
                    setCard((prev)=>{
                    cprogress=0
                    cardProgress.current[prev]=1;
                    setProgress(0)
                    return (prev+1)%(cards.current.length)
                })
                }
            }
        },750)
        return () => clearInterval(interval);
    },[loaded,card])
    const handleRight=()=>{
        if(card!==cards.current.length-1)
        {
            setProgress(0);
            setCard((prev)=>{
                cardProgress.current[prev]=1;
                return prev+1;
            })
        }
    }
    const handleLeft=()=>{
        if(card!==0)
        {
            setProgress(0);
            setCard((prev)=>{
                cardProgress.current[prev]=1;
                return prev-1;
            })
        }
    }

    return(
        <View>
            { loaded && 
            <>
            {!paused && <ProgressBar cardProgress={cardProgress.current} i={card} progress={progress}></ProgressBar>}
            <Card card={cards.current[card]} setPaused={setPaused} handleRight={handleRight} handleLeft={handleLeft} type={type} i={card}/>
            </>
            }
        </View>
    )
}