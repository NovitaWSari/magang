import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const navigateToFormMagang = () => {
    navigation.navigate('FormMagang');
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.header}>
        <Text style={styles.title}>HOME | MAGANG YUK</Text>
        <Text style={styles.subtitle}>MANDIRI atau MBKM Gass semua</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require('/assets/magangUYP-removebg-preview.png')} // Ganti path dengan path gambar Anda
          style={styles.logo}
        />
        <Text style={styles.appDescription}>
          Aplikasi untuk mencatat informasi magang.
          Yuk daftar magang sekarang!
        </Text>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={navigateToFormMagang}>
          <Text style={styles.buttonText}>DAFTAR MAGANG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#7D0A0A',
    paddingTop: 5,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtitle: {
    color: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appDescription: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#7D0A0A',
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 10,
    width: '20%', // Menyesuaikan lebar tombol agar lebih mudah diakses
  },
  buttonText: {
    color: '#fff',
    fontSize: 14, // Menyesuaikan ukuran teks agar lebih mudah dibaca
    fontWeight: 'bold',
    marginTop: 5,
  },
});
