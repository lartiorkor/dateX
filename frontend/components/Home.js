import React from 'react'
import { View,Text,StyleSheet,ScrollView,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ThemeContext from './context/ThemeContext';
 
 
 const Home = () => {
  const {currentTheme} = React.useContext(ThemeContext)
   return (
     <View style={{height:150, borderTopWidth: 0.5, borderColor: currentTheme.tabInactive, paddingHorizontal: 10, marginTop: 5}}>
         
            <Text style={{marginVertical:5, color: currentTheme.txtColor}}>Recent Matches</Text>
         
         
            <ScrollView style={{flex:1 }} horizontal showsHorizontalScrollIndicator={false}  >
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={[styles.userName, {color: currentTheme.txtColor}]}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={[styles.userName, {color: currentTheme.txtColor}]}>Bel Dorkenoo</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={[styles.userName, {color: currentTheme.txtColor}]}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={[styles.userName, {color: currentTheme.txtColor}]}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={[styles.userName, {color: currentTheme.txtColor}]}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={[styles.userName, {color: currentTheme.txtColor}]}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={[styles.userName, {color: currentTheme.txtColor}]}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={[styles.userName, {color: currentTheme.txtColor}]}>Bel WavesInTheOcean</Text>
                </View>
                <View style={{width:85, padding:5, marginRight:10}}>
                  <LinearGradient colors={['#bc2a8d','#e95950','#fccc63']}
                  style={{padding:2, borderRadius:50}}>
                
                <Image style={styles.userImage} source={require ('../Assets/1.jpg')}/>
                  </LinearGradient>
                  <Text style={[styles.userName, {color: currentTheme.txtColor}]}>Bel WavesInTheOcean</Text>
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