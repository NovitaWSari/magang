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
    backgroundColor: '#ffff',
  },
  header: {
    backgroundColor: '#CDEDEE',
    paddingTop: 5,  // Mengurangi paddingTop agar lebih kecil
    paddingBottom: 10,  // Mengurangi paddingBottom agar lebih kecil
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  title: {
    color: '#00000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtitle: {
    color: '#00000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#CDEDEE',
    marginTop: 20,
    borderRadius: 15, // Mengubah radius untuk membuat tombol lebih kecil
    paddingVertical: 10, // Mengurangi padding untuk membuat tombol lebih kecil
    width: '10%', // Mengurangi lebar tombol
  },
  buttonText: {
    color: '#000000',
    fontSize: 12, // Mengubah ukuran teks
    fontWeight: 'bold', // Menambah ketebalan teks
    marginTop: 5, // Menambah jarak antara teks dan tombol
  },
});
