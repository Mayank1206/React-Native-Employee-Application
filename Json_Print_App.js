import React from 'react';
import { ListView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            MoviesList: "Hello",
            Demo: "fgdfkj",
        }
    }

/*  
    componentDidMount() {
        async function getMoviesFromApi() {
            console.log("In Function");
            try {
                console.log("In try")
                let response = await fetch('https://facebook.github.io/react-native/movies.json');
                console.log("Response => "+response)
                let responseJson = await response.json();
                console.log("ResponseJson => "+responseJson)
                this.setState({
                    MoviesList: responseJson.movies,
                });
                return responseJson.movies;
            } catch(error) {
                console.error(error);
            }
                console.log("End try")
        }
        console.log("End Function")
    }*/

    componentDidMount() {
        return fetch('http://employee-directory-services.herokuapp.com/employees')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                     MoviesList: JSON.stringify(responseJson),
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text> Movies Collection</Text>
                    <Text>{this.state.MoviesList}</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
});
