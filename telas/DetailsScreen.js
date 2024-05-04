import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function DetailsScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button 
                title="Go back to Home"
                onPress={()=>{
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DetailsScreen;