import React, { Component } from 'react';
import { ActivityIndicator, Button, Image, ListView, StyleSheet, Text, View } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://employee-directory-services.herokuapp.com/employees')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.employeesData}
          />
      </View>
    );
  }

  employeesData(emp) {
    return(
      <View>
        <View style= {styles.mainBox}>
          <Image
            source = {{uri: emp.picture}}
            style = {styles.empImage}
          />
          <View style= {styles.innerMainBox}>
            <Text>
              {emp.firstName} {emp.lastName}
            </Text>
            <Text>
              Post : {emp.title}
            </Text>
            <Text>
              E-Mail ID : {emp.email}
            </Text>
            <Button
              title= "More Information"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  empImage: {
    height: 100,
    width: 100,
  },
  mainBox: {
    flexDirection: 'row',
  },
  innerMainBox: {
    flexDirection: 'column',
  }
})