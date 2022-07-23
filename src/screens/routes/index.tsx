import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drower.routes";
export function Routes(){
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}