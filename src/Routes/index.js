import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from './BottomTabs';

export default function Navigates(){
    return(
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    )
}