import { createDrawerNavigator } from "@react-navigation/drawer";
import { ScreenA } from "../ScreenA";
import { ScreenB } from "../ScreenB";
import {MaterialIcons} from "@expo/vector-icons"
const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
    return (
        <Navigator>
            <Screen 
                name="screenA" 
                component={ScreenA} 
                options= {{
                    headerTitle: "Home",
                    drawerLabel: "Home",
                    drawerIcon:()=>(
                        <MaterialIcons 
                            name="home"
                            />
                    )
                }} 
            />

            <Screen 
                name="screenB" 
                component={ScreenB} 
                options= {{
                    headerTitle: "Cadastrar",
                    drawerLabel: "Cadastrar",
                    drawerIcon:()=>(
                        <MaterialIcons 
                            name="add"
                            />
                    )
                }} 
            />
        </Navigator>
    )
}