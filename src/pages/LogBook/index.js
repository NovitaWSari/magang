import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Import StatusBar dari expo-status-bar
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const FormLogbook = () => { // Ganti nama fungsi menjadi FormLogbook (sesuai dengan nama file)
  const navigation = useNavigation();
  const [logData, setLogData] = useState({
    tanggal: '',
    kegiatan: '',
    deskripsi: '',
    buktiMedia: null,
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Maaf, kita membutuhkan izin untuk mengakses media.');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setLogData({ ...logData, buktiMedia: result.uri });
    }
  };

  const handleChangeText = (key, value) => {
    setLogData({
      ...logData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    // Lakukan sesuatu dengan data logbook yang telah diisi, termasuk bukti media
    console.log('Data Logbook:', logData);
    // Tambahkan log ke database atau lakukan tindakan lain sesuai kebutuhan
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.header}>
        <Text style={styles.title}>FORM LOGBOOK</Text>
        <Text style={styles.subtitle}>Isi Logbook Anda</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Tanggal:</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={logData.tanggal}
          onChangeText={(text) => handleChangeText('tanggal', text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Kegiatan:</Text>
        <TextInput
          style={styles.input}
          placeholder="Deskripsi kegiatan"
          value={logData.kegiatan}
          onChangeText={(text) => handleChangeText('kegiatan', text)}
        />

        <Text style={styles.label}>Deskripsi:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Detail kegiatan"
          value={logData.deskripsi}
          onChangeText={(text) => handleChangeText('deskripsi', text)}
          multiline
        />

        <Text style={styles.label}>Unggah Media:</Text>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Unggah Bukti</Text>
        </TouchableOpacity>

        {logData.buktiMedia && (
          <Image source={{ uri: logData.buktiMedia }} style={{ width: 200, height: 200, marginTop: 10 }} />
        )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Simpan Log</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  formContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    width: '80%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  multilineInput: {
    height: 100,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormLogbook;
