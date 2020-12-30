import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions, TouchableHighlight } from 'react-native';
import Loading from './Loading';

const WorldStatistics = ({ navigation }) => {
    const [worldData, setWorldData] = useState({})
    const [loading, setLoading] = useState(true)
    const [worldPopulation, setWorldPopulation] = useState()
    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/all')
            .then(response => response.json())
            .then(json => { setWorldData(json) })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
        fetch("https://world-population.p.rapidapi.com/worldpopulation", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "e3d05b1613msh271c4b9cf3466ccp18094fjsn7baef7fc921a",
                "x-rapidapi-host": "world-population.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(json => { setWorldPopulation(json.body.world_population) })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }, []);

    const percentage = (item) => {
        return (
            (item * 100 / worldPopulation).toFixed(3)
        )
    }

    return (
        <View style={styles.container}>
            {
                loading ? <Loading /> : (
                    <ImageBackground blurRadius={15} style={styles.imageScaling} source={require('../assets/Virus2.jpg')}>
                        <Text style={styles.heading}>
                            World Statistics
                        </Text>
                        <View style={styles.worldVeiw}>
                            <View style={styles.innerView1}>
                                <Text style={styles.viewText}>
                                    Population: {worldPopulation}
                                </Text>
                            </View>

                            <View style={styles.innerView1}>
                                <Text style={styles.viewText}>
                                    Cases: {percentage(worldData.cases)} %
                                    </Text>
                            </View>

                            <View style={styles.innerView1}>
                                <Text style={styles.viewText}>
                                    Deaths: {percentage(worldData.deaths)} %
                                    </Text>
                            </View>

                            <View style={styles.innerView1}>
                                <Text style={styles.viewText}>
                                    Recovered: {percentage(worldData.recovered)} %
                                    </Text>
                            </View>
                            <View style={[styles.innerView1, { backgroundColor: '#e6e6e6' }]}>
                                <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Home')}>
                                    <Text style={[styles.viewText, { fontWeight: 'bold' }]}>
                                        Go Back
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </ImageBackground>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    imageScaling: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    heading: {
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        color: '#bbbfca',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 90,
    },
    worldVeiw: {
        flex: 1,
        margin: 30,
        justifyContent: 'center',
        width: Dimensions.get('screen').width - 70
    },
    innerView1: {
        backgroundColor: '#99a8b2',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        marginVertical: 30,
    },
    viewText: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },

})

export default WorldStatistics;
