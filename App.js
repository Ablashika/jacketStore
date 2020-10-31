import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import StorePage from './StorePage'
import JacketStore from './JacketStore';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }





  render() {
    return (
     <View style={styles.container}>
     <StorePage/> 
     </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal:16,
    marginTop:50
  },
});



export default App