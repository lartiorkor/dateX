import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  const fadeOutAnim = useRef(new Animated.Value(1)).current

  const [fade, setfade] = useState(true)

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        useNativeDriver: true,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  React.useEffect(() => {
    Animated.timing(
      fadeOutAnim,
      {
        toValue: 0,
        useNativeDriver: true,
        duration: 5000,
      }
    ).start();
  }, [fadeOutAnim])

  const fadeText = () => {

  }

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeOutAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
const FadeInText = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
            Tap To Match
        </Text>
      </FadeInView>
    </View>
  )
}

export default FadeInText;