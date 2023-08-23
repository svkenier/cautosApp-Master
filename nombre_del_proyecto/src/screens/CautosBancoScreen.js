import React from 'react'
import { SafeAreaView, Text,View,StyleSheet,Pressable } from 'react-native'
import useDrawer from "../hooks/useDrawer";
import DrawerMenu from "../components/DrawerMenu";
import * as Animatable from 'react-native-animatable';
import { Entypo } from "@expo/vector-icons";

const CautosBancoScreen = () => {
    const {handleDrawer, openDrawer, closeDrawer} = useDrawer()

    const slideAnimation = {
        from: {
          translateX: openDrawer ? 0 : -8000,
          
        },
        to: {
          translateX: openDrawer ? -8000 : 0,
          
        },
      };


  return (
   <SafeAreaView style={{backgroundColor:"#020025",width:"100%",height:"100%",justifyContent:"flex-end"}}>
    <View style={{backgroundColor:"red",width:"100%",height:"20%",justifyContent:"center"}}>
   
    <View style={styles.containerMenu}>
      <Pressable  style={styles.menu} onPress={handleDrawer}>
        <Entypo style={styles.iconMenu} name="menu" size={24} color="black" />
      </Pressable>
      </View>
      </View>
      
      <Animatable.View   animation={slideAnimation} duration={500} 
        style={styles.containerDrawerMenu}>
          <DrawerMenu handleDrawer={handleDrawer}/>
      </Animatable.View> 
    
    <View style={{backgroundColor:"#fff",width:"100%",height:"80%",borderTopStartRadius:70,borderTopEndRadius:70}}>
  
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    containerMenu: {
      backgroundColor: "#fff",
      width: 85,
      height: 55,
      borderRadius: 10,
      
    },
  
    menu:{
      justifyContent: "center",
      alignItems: "center",
      width:"100%",
      height:"100%"
    },
    iconMenu: {
      fontSize: 35,
    },
  
    containerDrawerMenu: {
      position: "absolute",
       width: "100%",
       height: "100%",
      zIndex: 1,
      
    },
  });

export default CautosBancoScreen