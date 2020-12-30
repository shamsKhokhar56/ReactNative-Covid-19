import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/splash.png')} style={{ width: 40, height: 40 }} />
            <Text style={{ color: 'black', fontSize: 20, justifyContent: 'center', marginTop: 20 }}>
                Intezaar Farmaiye
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default Loading;
