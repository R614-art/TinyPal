import { StyleSheet, View } from "react-native";

export default function ProgressBar({cardProgress,i,progress})
{
    const total=cardProgress.length;
    return(
        <View style={styles.container}>
            {
                cardProgress.map((card,idx)=>{
                    if(i===idx){
                        return (<View style={styles.currentCard} key={idx}>
                            <View style={{height:'100%',width:`${progress}%`,backgroundColor:'white',zIndex:4,borderRadius:2}}></View>
                        </View>)
                }
                    return <View style={{...styles.otherCard,backgroundColor:card===1?'white':'black'}} key={idx}></View>
                })
            }
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        width:'95%',
        height: 4,
        flexDirection: 'row',
        gap: 3,
        position: 'absolute',
        top: '13.2%',
        zIndex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        alignSelf: 'center',
        borderTopRightRadius: 5,
    },
    currentCard:{
        height: 4,
        flex:7,
        backgroundColor: 'black',
        borderRadius: 2,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10
    },
    otherCard:{
        height: 4,
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 2,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10
    },
})