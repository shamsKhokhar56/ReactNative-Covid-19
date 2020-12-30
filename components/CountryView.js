import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, ImageBackground, Image, Alert, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';


const CountryView = ({ route, navigation }) => {
    const countryName = route.params.countryObj;
    const countryCases = route.params.casesObj;
    const countryCritical = route.params.criticalObj;
    const countryDeaths = route.params.deathsObj;
    const countryRecovered = route.params.recoveredObj;
    const recieved = route.params.passObj;
    const [favourites, setfavourites] = useState([]);

    const settingValues = () => {
        setfavourites([{
            name: countryName,
            cases: countryCases,
            critical: countryCritical,
            deaths: countryDeaths,
            recovered: countryRecovered
        }, ...favourites])
        storeData(favourites)
    }

    const storeData = async (favourites) => {

        try {
            await AsyncStorage.setItem('data', JSON.stringify(favourites));
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={15} style={styles.imageScaling} source={require('../assets/Virus2.jpg')}>
                <View style={styles.headingView}>
                    <Text style={styles.countryName}>
                        {countryName}
                    </Text>
                </View>
                {recieved ? <View style={styles.iconView}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Add to Favourites</Text>
                    <TouchableHighlight underlayColor="none" style={{ paddingTop: 5 }} onPress={settingValues}>
                        <Ionicons name="md-heart" size={32} color="white" />
                    </TouchableHighlight>
                </View> : (
                        <View style={styles.iconView}>
                            <Text style={{ color: 'white', fontSize: 30 }}>Added to Favourites</Text>
                            <TouchableHighlight underlayColor="none" style={{ paddingTop: 5 }}>
                                <Ionicons name="md-heart" size={32} color="red" />
                            </TouchableHighlight>
                        </View>
                    )
                }

                <View style={styles.worldVeiw}>
                    <View style={styles.innerView1}>
                        <Text style={styles.viewText}>
                            Cases: {countryCases}
                        </Text>
                    </View>
                    <View style={styles.innerView1}>
                        <Text style={styles.viewText}>
                            Critical: {countryCritical}
                        </Text>
                    </View>

                    <View style={styles.innerView1}>
                        <Text style={styles.viewText}>
                            Deaths: {countryDeaths}
                        </Text>
                    </View>

                    <View style={styles.innerView1}>
                        <Text style={styles.viewText}>
                            Recovered: {countryRecovered ? countryRecovered : 'No Data'}
                        </Text>
                    </View>
                    <View style={[styles.innerView1, { backgroundColor: '#e6e6e6' }]}>
                        <TouchableHighlight underlayColor='none' onPress={() => navigation.goBack()}>
                            <Text style={[styles.viewText, { fontWeight: 'bold' }]}>
                                Go Back
                                    </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
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

    heading: {
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        color: '#bbbfca',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 90,
    },
    iconView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 20,
        width: Dimensions.get('screen').width - 100
    },
    imageScaling: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    worldVeiw: {
        flex: 1,
        marginVertical: 30,
        justifyContent: 'center',
        width: Dimensions.get('screen').width - 70
    },
    innerView1: {
        backgroundColor: '#99a8b2',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
    },
    viewText: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },

})

export default CountryView;
