/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  
  AppRegistry,
  TouchableOpacity,
  Linking
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera as Camera } from 'react-native-camera';
const App = () => {
  const [url,setUrl] = useState('');
  onSuccess = e => {
    console.log(e);
    setUrl(e.data);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
  };

   return (
    <>
        <Text>Hãy vào https://www.the-qrcode-generator.com/ để test QR Code</Text>
        <Text>Dữ liệu trả về: </Text>
        <QRCodeScanner
          reactivate={true}
          onRead={onSuccess}
          flashMode={Camera.Constants.FlashMode.off}
          topContent={
            <View>
            
            <Text style={styles.centerText}>
               {url}
            </Text>
            </View>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </>
    );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default App;

