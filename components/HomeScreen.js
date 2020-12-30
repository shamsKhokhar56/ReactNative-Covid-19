import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableHighlight } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageScaling} source={require('../assets/Virus.jpg')}>
                <View style={styles.buttonsView}>
                    <TouchableHighlight style={styles.buttons}
                        onPress={() => { navigation.navigate('World Statistics') }}
                    >
                        <Text style={styles.buttonText}>
                            World Statistics
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttons}
                        onPress={() => { navigation.navigate('Country Statistics') }}
                    >
                        <Text style={styles.buttonText}>
                            Country Statistics
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttons} onPress={() => { navigation.navigate('Favourites') }}>
                        <Text style={styles.buttonText}>
                            Favourite Countries
                        </Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    imageScaling: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsView: {
        flexDirection: 'column',
    },
    buttons: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        margin: 15
    },
})

export default HomeScreen
