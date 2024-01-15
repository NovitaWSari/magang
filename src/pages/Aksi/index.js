import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Aksi = () => {
  const navigation = useNavigation();

  const navigateToformLogbook = () => {
    navigation.navigate('formLogbook');
  };

  const navigateToformLaporan = () => {
    navigation.navigate('formLaporan');
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.header}>
        <Text style={styles.title}>AKSI | MAGANG YUK</Text>
        <Text style={styles.subtitle}>Tambahkan aksi untuk kegiatan magangmu</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={navigateToformLogbook}>
          <Text style={styles.buttonText}>Log Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToformLaporan}>
          <Text style={styles.buttonText}>Laporan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Aksi;

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
