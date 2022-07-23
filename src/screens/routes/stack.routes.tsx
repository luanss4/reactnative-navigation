import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenA } from "../ScreenA";
import { ScreenB } from "../ScreenB";
const { Screen, Navigator, Group } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="screenA" component={ScreenA} options={{
                title: 'Tela A',
                headerTitleAlign: 'left',
                headerShown: false
            }} />
            <Screen name="screenB" component={ScreenB} options={{ 
                title: 'Tela B' ,
                    headerStyle: {
                      backgroundColor: 'navy',
                    },
                    headerTintColor: 'white'
                }} />
        </Navigator>
    )
}