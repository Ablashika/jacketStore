import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import redd from './assets/redd.jpg'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Rating from './Rating'

 
export default function StorePage() {
    return (
        <View style={styles.container}>
            

            
        <View style={styles.imageBox}>
            <Image source={redd} style={styles.image}/>
        </View> 
     <View style={styles.icons}>

     <View style={styles.boxArrow}><AntDesign name="arrowleft" size={24} color="black" /></View>

    

         <View style={styles.boxCart}><EvilIcons name="cart" size={24} color="#188ded"/></View>
     </View>
        
     <View style={styles.heart}>
       <EvilIcons name="heart" size={24} color="#188ded" />
    </View>


<View style={styles.text}>
    <View style={styles.redTextContainer}><Text style={styles.redText}> Red Woman Jacket</Text></View>
    <View style={styles.rateContainer}><Text>Ratings : </Text><Rating/></View>
    <View>
        
    </View>
    
    <View style={styles.bar}>
    </View>

    <View style ={styles.boxText}><Text>for sure , here come the will of your thoughts as fas as ye doeth</Text></View>
    
</View> 

<View style={styles.textDesign}>
    <Text style={styles.blueText}>Material:91% polyester 9% estane</Text>
</View>

<View style={styles.sizeBox}>
    <View style={styles.size}><Text>XS</Text></View>
    <View style={styles.size} ><Text>S</Text></View>  
    <View style={styles.sizeMedium} ><Text style={styles.medium}>M</Text></View>
    <View  style={styles.size}><Text>X</Text></View>
    <View style={styles.size} ><Text>XL</Text></View>
</View>

<View style={styles.prizeContainer}>
    <View style={styles.boxOne}>

         <Text style={styles.boxOneText}>TotalAmount</Text>
        <Text style={styles.boText}>$110</Text>
    </View> 

   <TouchableOpacity style={styles.boxTwo}>
        <Text style={styles.cartText}>Add to Cart</Text>
   </TouchableOpacity>

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

    image:{
        
        height:200,
        width:200,
        marginHorizontal:50,
        marginTop:20,
        justifyContent:"center"
        
    },

    imageBox:{
        backgroundColor:"white",
        marginHorizontal:25,
        width: 300,
        height:250,
        marginTop:40,
        borderRadius:20,
        shadowOpacity:2,
        shadowColor:"white",
        opacity:0.8


    },

    boxArrow:{
       backgroundColor:"white",
        height:50,
        width:50,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:4,
        
    },
 
    boxCart:{
        backgroundColor:"white",
         height:50,
         width:50,
         justifyContent:"center",
         alignItems:"center",
         borderRadius:30,
        marginHorizontal:240
         
     },
  

     icons:{
         flexDirection:"row",
         marginTop:-270,
     },
     
     heart:{
        backgroundColor:"white",
        height:50,
        width:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        marginHorizontal:290,
        marginTop:20,
    
     },

     redTextContainer:{
         marginTop:170,
        
     },

     redText:{
         fontWeight:"bold",
         fontSize:15
     },

     rateContainer:{
         marginTop:10
     },
     text:{
         flexDirection:"column",
         marginHorizontal:20
     },
    
     bar:{
         height:5,
         width:70,
         backgroundColor:"#0a9bf5",
         marginTop:10,
         borderRadius:10
     },

     boxText:{
         marginTop:20,
         marginHorizontal:5
     },
     textDesign:{
         height:50,
         width:300,
         marginTop:20,
         backgroundColor:"white",
         justifyContent:"center",
         alignItems:"center",
         shadowOpacity:2,
         shadowColor:"white"
     },

     sizeBox:{
         flexDirection:"row",
         justifyContent:"space-evenly",
         marginTop:10
     },

     size:{
      height:25,
      width:25,
      backgroundColor:"white",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:6
     },

    prizeContainer:{
        flexDirection:"row",
        justifyContent:"center"
    },

    boxOne:{
        backgroundColor:"#81cdfc",
        height:50,
        width:280,
        marginTop:10,
        borderRadius:20,
       

    },

    boxTwo:{
        backgroundColor:"#0a9bf5",
        height:35,
        width:160,
        marginLeft:-170,
        borderRadius:15,
        marginTop:18,
        alignItems:"center",
        justifyContent:"center"
    },
      
    boxOneText:{
        marginTop:7,
        marginHorizontal:10,
        fontWeight:"bold",
        color:"white"
    },
    
    boText:{
        marginTop:0.5,
        marginHorizontal:10,
        fontWeight:"bold",
        color:"white",
        fontSize:15
    },

    cartText:{
        color:"white",
        fontWeight:"bold"
    },
    sizeMedium:{
        backgroundColor:"#0a9bf5",
        height:25,
        width:25,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:6
    },

    medium:{
color:"white"
    },

    blueText:{
        color:"#0a9bf5"
    },

    rateContainer:{
        flexDirection:"row"
    }

    })