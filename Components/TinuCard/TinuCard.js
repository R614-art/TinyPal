import { Image, StyleSheet, Text, View } from "react-native";
import script from '../../assets/images/script.png'
import share from '../../assets/images/share.png'
import bookmark from '../../assets/images/bookmark.png'
export default function TinuCard({card}){
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={script} style={styles.script}></Image>
                <View style={styles.topRight}>
                    <Image source={share} style={styles.sandb}></Image>
                    <Image source={bookmark} style={styles.sandb}></Image>
                </View>
            </View>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.content}>{card.content}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        width: 300,
        backgroundColor: '#F0CFD280',
        flexDirection: 'column',
        borderRadius: 21.42
    },
    top:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingTop: 14,
        paddingBottom: 5,
        gap: '55%'
    },
    topRight:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '15%'
    },
    script:{
        height: 20,
        width: 55
    },
    sandb:{
        height: 20,
        width: 20
    },
    title:{
        fontFamily: 'Quicksand_400Regular',
        fontWeight: '700',
        fontSize: 16,
        width: 276,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    content: {
        fontFamily: 'Quicksand_400Regular',
        fontWeight: '400',
        fontSize: 14,
        width: 276,
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10
    }
})