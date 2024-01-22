import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native'; // Import Text dari 'react-native'

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('/assets/magangUYP-removebg-preview.png')} // Ganti path dengan path gambar Anda
        style={styles.logo}
      />
      <Text style={styles.judul}>MAGANG YUK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7D0A0A', // Ganti dengan warna latar yang diinginkan
  },
  logo: {
    width: 250, // Sesuaikan lebar gambar
    height: 250, // Sesuaikan tinggi gambar
  },
  judul: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Ganti dengan warna teks yang diinginkan
  },
});

export default Splashscreen;
