import React, { useState, useEffect } from 'react'
import {
    StyleSheet, View, Text, ImageBackground, FlatList,
    TouchableHighlight, TextInput, Dimensions, KeyboardAvoidingView
} from 'react-native';
import Loading from './Loading';

const CountryNames = ({ navigation, route }) => {
    const passignValue = true;
    const [array, setArray] = useState({});
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch("https://coronavirus-19-api.herokuapp.com/countries")
            .then((response) => response.json())
            .then(json => {
                setArray(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))

    },
        []
    );

    return (
        <KeyboardAvoidingView style={styles.container}>
            {
                loading ? <Loading /> : (

                    <ImageBackground blurRadius={15} source={require('../assets/Virus2.jpg')} style={styles.imageScaling}>
                        <Text style={styles.heading}>
                            Countries
                        </Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Search Country"
                            onChangeText={text => { setSearch(text) }}
                            value={search}
                        />
                        <FlatList
                            data={array}
                            keyExtractor={item => item.country}
                            renderItem={({ item }) => {
                                if((item.country).toLowerCase().includes(search.toLowerCase()) || search == ''){
                                    return (
                                        <View style={styles.countryView} key={item.country}>
                                            <TouchableHighlight
                                                style={styles.countryButtons}
                                                underlayColor='#99a8b2'
                                                onPress={() => {
                                                    navigation.navigate('Country View', {
                                                        countryObj: item.country, casesObj: item.cases, deathsObj: item.deaths,
                                                        recoveredObj: item.recovered, criticalObj: item.critical, passObj: passignValue
                                                    })
                                                }}>
                                                <Text style={styles.countryText}>
                                                    {item.country}
                                                </Text>
                                            </TouchableHighlight>
                                    </View>
                                    )
                                }
                            }}
                        />
                    </ImageBackground>
                )
            }
        </KeyboardAvoidingView>
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
    heading: {
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        color: '#bbbfca',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 60,
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
    inputField: {
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        marginTop: 20,
        padding: 5,
        width: '80%',
    },

})

export default CountryNames;
