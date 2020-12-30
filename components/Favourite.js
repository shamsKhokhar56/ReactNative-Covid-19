import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, ScrollView, Dimensions, ImageBackground } from 'react-native';

const Favourite = ({ navigation }) => {
    const [favourites, setFavourites] = useState([])
    const passignValue = false;
    const getItem = async () => {
        try {
            await AsyncStorage.getItem('data').then((value) => { setFavourites(JSON.parse(value)) });
        }
        catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getItem()
    }, [favourites])


    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={15} source={require('../assets/Virus2.jpg')} style={styles.imageScaling}>
                <View style={styles.headingView}>
                    <Text style={styles.countryName}>
                        Favourites
                    </Text>
                </View>
                <ScrollView>
                    {favourites.map((item) => (
                        <View style={styles.countryView} key={item.name}>
                            <TouchableHighlight
                                style={styles.countryButtons}
                                underlayColor='#99a8b2'
                                onPress={() => {
                                    navigation.navigate('Country View', {
                                        countryObj: item.name, casesObj: item.cases, deathsObj: item.deaths,
                                        recoveredObj: item.recovered, criticalObj: item.critical, passObj: passignValue
                                    })
                                }}
                            >
                                <Text style={styles.countryText}>
                                    {item.name}
                                </Text>
                            </TouchableHighlight>
                        </View>
                    ))}
                </ScrollView>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    imageScaling: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    headingView: {
        marginTop: 90,
    },
    countryName: {
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        color: '#bbbfca',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    countryView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width - 40,
    },
    countryButtons: {
        width: '80%'
    },
    countryText: {
        color: 'white',
        fontSize: 30,
        padding: 20,
        textAlign: 'center'
    },
})
export default Favourite;