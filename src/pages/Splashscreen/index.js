import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Ganti dengan warna latar yang diinginkan
  },
  logo: {
    width: 200, // Sesuaikan lebar gambar
    height: 200, // Sesuaikan tinggi gambar
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Ganti dengan warna teks yang diinginkan
  },
});

export default Splashscreen;
