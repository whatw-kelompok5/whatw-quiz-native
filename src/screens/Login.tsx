import { View, Image, Text, Button, ButtonText, ButtonIcon, ArrowLeftIcon, SettingsIcon } from '@gluestack-ui/themed';
import React from 'react';
import logo from '../assets/logo.png';
import googleIcon from '../assets/google.png';
import WaterWave from '../components/WaterWave';
import { ImageBackground } from 'react-native';
import ReversedWaterWave from '../components/ReversedWaterWave';

export default function Login({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
      <View style={{ flex: 1, position: 'relative' }}>
        <ReversedWaterWave />
        <WaterWave />
        <View
          width={'100%'}
          height={'100%'}
          backgroundColor="transparent"
          justifyContent="space-between"
          alignItems="center"
          paddingVertical={60}
          paddingHorizontal={30}>
          <View display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
            <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} rounded="$full" width={10}>
              <ButtonIcon as={ArrowLeftIcon} />
            </Button>
            <Text color="white" fontSize={20} fontWeight="bold">
              WHATW
            </Text>
            <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} rounded="$full" width={10}>
              <ButtonIcon as={SettingsIcon} />
            </Button>
          </View>
          <View>
            <Image source={logo} alt="logo" width={400} height={400} />
          </View>
          <View>
            <View>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate('Profile')}>
                <View display="flex" flexDirection="row" gap={4}>
                  <Image source={googleIcon} alt="Google Icon" width={20} height={20} />
                  <ButtonText>
                    <Text color="white" fontSize={16} fontWeight="bold">
                      Continue with Google
                    </Text>
                  </ButtonText>
                </View>
              </Button>
            </View>
            <Text color="white" fontSize={10}>
              By continuing, you agree to the terms and privacy
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
