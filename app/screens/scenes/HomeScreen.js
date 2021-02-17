import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    ImageBackground,
} from 'react-native';
const API_KEY='sgbwwCcqfUHFiUO9xKU6QlrPaLfBfy52pW39cIJ8'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './HomeScreenStyle'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
         asteroidId:null,
         asteroidData:'',
         asteroidList:[]

          
        }
    }

    onPressSubmit = async () => {

        try {
            let response = await fetch(
                `https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroidId}?api_key=sgbwwCcqfUHFiUO9xKU6QlrPaLfBfy52pW39cIJ8`
            );
            console.log("@@@@@@@json ===",response)

            let json = await response.json();
            this.setState({ asteroidData: json }, () => {
                if (json.status === 404) {
                    alert(json.message);
                    return;
                }
                this.props.navigation.navigate('AsteroidDetailsScreen', { asteroidData: this.state.asteroidData })
            })
        } catch (error) {
           alert("Invalid asteroid id")
        }
    }
getAsteroidList = async () =>{
   try {
    let response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=sgbwwCcqfUHFiUO9xKU6QlrPaLfBfy52pW39cIJ8`
    );

    let json = await response.json();
    this.setState({ asteroidList: json.near_earth_objects }, () => {
        if (json.status === 404) {
            alert(json.message);
            return;
        }
        this.props.navigation.navigate('AsteroidListScreen', { asteroidList: this.state.asteroidList })
    })
} catch (error) {
}

}

renderInput=()=>{
    return(
    <TextInput  {...this.props}
     value={this.state.asteroidId}
     onChangeText={(value) => this.setState({ asteroidId: value })}
     placeholder={'Enter Asteroid ID'}
     autoCapitalize={false}
     placeholderTextColor='black'
     style={styles.inputTextView}
    />
    )  
 }


 renderSubmitButton=()=>{
     return(
    <View style={this.state.asteroidId?styles.enablebutton:styles.disableButton}>
      <TouchableOpacity onPress={()=>this.state.asteroidId?this.onPressSubmit():''}>
     <Text style={styles.submitText}>Submit</Text>
     </TouchableOpacity>
    </View> 
     )
 }


 renderRandomButton=()=>{
    return(
   <View style={styles.Randombutton}>
     <TouchableOpacity onPress={()=>this.getAsteroidList()}>
    <Text style={styles.submitText}> Random Asteroid
     </Text>
    </TouchableOpacity>
   </View> 
    )
}
    render() {
        return (
            <SafeAreaView  style={styles.container}>
              <View style={styles.inputView}>
               {this.renderInput()}
              </View>
               <View style={styles.buttonView}>   
              {this.renderSubmitButton()}
              </View>
               <View style={styles.rendomButtonStyle}>
                   {this.renderRandomButton()}
              </View>
            </SafeAreaView>
        );
    }
};

export default Home;

