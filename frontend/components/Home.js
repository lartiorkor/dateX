import React from 'react'
import { View,Text,StyleSheet,ScrollView,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 
 
 
 const Home = () => {

   return (
     <View style={{height:150}}>
         
            <Text style={{marginBottom:5,marginLeft:10}}>New</Text>
         
         
            <ScrollView style={{flex:1 }} horizontal showsHorizontalScrollIndicator={false}  >
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={styles.userName}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={styles.userName}>Bel Dorkenoo</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={styles.userName}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={styles.userName}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={styles.userName}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={styles.userName}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={styles.userName}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={styles.userName}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={styles.userName}>Bel WavesInTheOcean</Text>
                </View>
            </ScrollView>

            

        
     </View>


   );
 };

 const styles = StyleSheet.create({
   header: { 
    height:60,
    padding:15,
    backgroundColor:'darkslateblue'
  },
  text:{
      color:'#fff',
      fontSize:23,
      textAlign:'center',

  },
  userImage:{
    height:70,
    width:70,
    borderRadius:50,
    borderColor:'#ffffff',
    borderWidth:2,
  },
  userName :{
    textAlign:'center',
    fontSize:12,
    textTransform:'lowercase',

  }
 });
 
 export default Home;