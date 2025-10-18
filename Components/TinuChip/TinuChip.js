import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Text as SvgText } from 'react-native-svg';

const TinuChip = ({chip}) => {
  const matches = chip.icon.match(/>(.*?)<\/text>/);
  const emoji = matches ? matches[1] : '?';

  return (
    <View style={styles.container}>
      <Svg height="24" width="24">
        <SvgText
          fontSize="15"
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {emoji}
        </SvgText>
      </Svg>
      <Text style={styles.label}>{chip.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,  
    marginRight: 5,
    marginBottom: 5 
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Quicksand_400Regular',
  },
});


export default TinuChip;
