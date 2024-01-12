import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
        <Text style={styles.appDescription}>
          Aplikasi untuk mencatat informasi magang. Yuk daftar magang sekarang!
        </Text>
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
    backgroundColor: '#CDEDEE',
    paddingTop: 5,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtitle: {
    color: '#000',
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
    backgroundColor: '#CDEDEE',
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 10,
    width: '50%', // Menyesuaikan lebar tombol agar lebih mudah diakses
  },
  buttonText: {
    color: '#000',
    fontSize: 14, // Menyesuaikan ukuran teks agar lebih mudah dibaca
    fontWeight: 'bold',
    marginTop: 5,
  },
});
