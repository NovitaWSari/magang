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
      <StatusBar style='light' />
      <View style={styles.header}>
        <Text style={styles.title}>HOME | MAGANG YUK</Text>
        <Text style={styles.subtitle}>MANDIRI atau MBKM Gass semua</Text>
      </View>
      <View style={styles.content}>
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
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    color: '#FFFFFF',
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
    borderRadius: 35,
    paddingVertical: 20,
    width: '60%',
  },
  buttonText: {
    color: '#000000',
    fontSize: 20
  },
});
