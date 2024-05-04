import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({navigation}){
    return(
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to details"
                onPress={()=>{
                    navigation.navigate('Detalhes')
                }}
            />
        </View>
    );
}

export default HomeScreen;