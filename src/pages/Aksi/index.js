import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const Aksi = () => {
  const navigation = useNavigation();

  const navigateToCrudTable = () => {
    navigation.navigate('CrudTable');
  };

  const navigateToformLogbook = () => {
    navigation.navigate('formLogbook');
  };

  const navigateToformLaporan = () => {
    navigation.navigate('formLaporan');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToCrudTable} style={styles.iconButton}>
          <Ionicons name="md-arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>AKSI | MAGANG YUK</Text>
          <Text style={styles.subtitle}>Lakukan aksi untuk kegiatan Magangmu</Text>
        </View>
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
    backgroundColor: '#7D0A0A',
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    elevation: 2,
  },
  titleContainer: {
    marginLeft: 10,
  },
  iconButton: {
    width: 50, // Change to a numeric value
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingLeft: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtitle: {
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#7D0A0A',
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 10,
    width: '30%', // Menyesuaikan lebar tombol agar lebih mudah diakses
  },
  buttonText: {
    color: '#fff',
    fontSize: 15, // Menyesuaikan ukuran teks agar lebih mudah dibaca
    fontWeight: 'bold',
    marginTop: 5,
  },
});
