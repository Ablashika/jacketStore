import React from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList, ScrollView
 } from 'react-native';
import redd from './assets/redd.jpg'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import blue from './assets/blue.jpg'
import hoodie from './assets/hoodie.jpg'
import pink from './assets/pink.jpg'
import Rating from './Rating'
import StorePage from './StorePage';

export default function JacketStore() {

    
    const jackets = [
        {name: "Blue Biker", image:blue, price:"$99"},
        {name: "Pink Hoodie", image:hoodie,price:"$909" },
        {name: "Green Hoodie Biker", image:pink, price:"$899"},
        {name: "Red Woman Jacket", image:redd, price:"$209"},
    ] 

    return (



 <View style={styles.container}>



         <View style={styles.icons}>
            <View style={styles.boxArrow}><AntDesign name="arrowleft" size={24} color="black" /></View>
            <View style={styles.boxCart}><EvilIcons name="cart" size={24} color="#188ded"/></View>
        </View>
    

        <View>
            <Text style={styles.womenText}>Women Jacket</Text> 
        </View>

        
        <View style={styles.box}>
            <TouchableOpacity>
                   <TextInput style={styles.searchText}>  Search
                   </TextInput>
            </TouchableOpacity>
            <Text style={styles.filterText}>filters</Text>  
        </View>
        <View style={styles.imageBox}>
          
<FlatList
           data = {jackets}
           renderItem={({item})=> {
               return (
                <View style={styles.description}>
                <Image source={item.image} style={styles.image}/>
                <View style={styles.rateBox}>
                    <Text style={styles.descriptionText}>{item.name}</Text>
                   <View style={styles.rating}>
                       <Rating/>
                       </View>
               <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
               )
           }}
           keyExtractor = {(item)=>item.name}
           />  
       
    </View> 
             
</View>


    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:"#f5f9fa",
        height:600,
        width:350,
        marginTop:-15   
    },

    boxArrow:{
        backgroundColor:"white",
         height:40,
         width:40,
         borderRadius:30,
         justifyContent:"center",
         alignItems:"center",
         marginLeft:10,
         
     },
  
     boxCart:{
         backgroundColor:"white",
          height:40,
          width:40,
          justifyContent:"center",
          alignItems:"center",
          borderRadius:30,
         marginLeft:250
          
      },
   
 
      icons:{
          flexDirection:"row",
          marginTop:10,
      },
      
      womenText:{
          marginTop:10,
          marginHorizontal:15,
          fontWeight:"bold"
      },
      box:{
          flexDirection:"row",
         marginTop:10,
         marginLeft:10,
         backgroundColor:"white",
         width:320,
         height:40,
         alignItems:"center",
         borderRadius:10
      },
      filterText:{
          color:"#188ded",
          marginLeft:230
      },

      image:{
        
        height:80,
        width:80,
        marginHorizontal:25,
        marginTop:30,
        justifyContent:"center"
        
    },

    description:{
        flexDirection:"row",
        alignItems:"center",
       
    },
    price:{
        // marginTop:80,
        // marginLeft:-130,
        color:"#188ded",
        fontWeight:"bold"
    },

    searchText:{
        color:"grey"
    },
    descriptionText:{
        fontWeight:"bold" 
    },

    rateBox:{
        flexDirection:"column"
    },

    rating:{
        width:30
    }
  });
