import React, { useEffect } from 'react';
import { View, Text, Button, ButtonIcon, ArrowLeftIcon,Image, SettingsIcon, ButtonText } from '@gluestack-ui/themed';
import { ImageBackground, ImageSourcePropType } from 'react-native';
import googleIcon from '../assets/google.png';
import logo from '../assets/logo.png';
import SplashScreen from 'react-native-splash-screen';
import ReversedWaterWave from '../components/ReversedWaterWave';
import WaterWave from '../components/WaterWave';

export default function SplashScreenComponent({navigation}) {
        setTimeout(() => {
            if (SplashScreen){
                SplashScreen.hide();
            }
            navigation.navigate('Login');
        }, 3000);
  return (
    <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
      <View style={{ flex: 1, position: 'relative' }}>
        <ReversedWaterWave />
        <WaterWave />
        <View
          width={'100%'}
          height={'100%'}
          backgroundColor="transparent"
          position='absolute'
          top={200}
          alignItems="center"
          paddingVertical={60}
          paddingHorizontal={30}>
          <View>
            <Image source={logo} alt="logo" width={400} height={400} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
