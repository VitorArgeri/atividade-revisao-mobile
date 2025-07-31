import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WitcherIndex from './index';
import About from './about';
import Contact from './contact';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={WitcherIndex} options={{ title: 'The Witcher 3' }} />
                <Stack.Screen name="About" component={About} options={{ title: 'Sobre o Jogo' }} />
                <Stack.Screen name="Contact" component={Contact} options={{ title: 'Contato' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}