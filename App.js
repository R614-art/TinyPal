import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import DYK from './Screens/DYK/DYK';
import { useFonts, Quicksand_400Regular } from "@expo-google-fonts/quicksand"

const Stack = createNativeStackNavigator();

export default function App() {
  const [fonstLoaded]=useFonts({Quicksand_400Regular});

  if(!fonstLoaded)
  {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='DYK' component={DYK} initialParams={{type:'DYK'}}/>
        <Stack.Screen name='FlashCard' component={DYK} initialParams={{type:'Flash'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
