import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { db, ref, push } from '../../../firebaseConfig';
import { useNavigation } from '@react-navigation/native'; // Tambahkan impor ini
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

const FormLogbook = () => {
  const navigation = useNavigation(); // Pastikan akses ke fungsi useNavigation

  const [tanggal, setTanggal] = useState('');
  const [kegiatan, setKegiatan] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [image, setImage] = useState(null);

  const navigateToAksi = () => {
    navigation.goBack(); // Berikan implementasi atau deklarasikan fungsi ini sesuai kebutuhan Anda
  };

  const submitLogbook = async () => {
    try {
      const logbookRef = push(ref(db, 'logbook'), {
        tanggal: tanggal,
        kegiatan: kegiatan,
        deskripsi: deskripsi,
        unggahmedia: image, // Updated to use the selected image URI
      });
  
      const title = logbookRef.key;
  
      setTanggal('');
      setKegiatan('');
      setDeskripsi('');
      setImage(null);
  
      console.log('Data Logbook berhasil ditambahkan dengan ID:', title);
    } catch (error) {
      console.error('Error adding logbook data:', error.message);
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      console.error('Error picking an image:', error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateToAksi} style={styles.iconButton}>
            <Ionicons name="md-arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>AKSI | MAGANG YUK</Text>
            <Text style={styles.subtitle}>Lakukan aksi untuk kegiatan Magangmu</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Tanggal:</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            value={tanggal}
            onChangeText={(text) => setTanggal(text)}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Deskripsi Kegiatan:</Text>
          <TextInput
            style={styles.input}
            placeholder="Deskripsi kegiatan"
            value={kegiatan}
            onChangeText={(text) => setKegiatan(text)}
          />

          <Text style={styles.label}>Deskripsi:</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Detail kegiatan"
            value={deskripsi}
            onChangeText={(text) => setDeskripsi(text)}
            multiline
          />
          <TouchableOpacity
              style={styles.unggah}
              onPress={pickImage}
            >
              <Text style={styles.unggahText}>Unggah Foto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={submitLogbook}
          >
            <Text style={styles.buttonText}>AddData</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  formContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    width: '100%',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 8,
    marginBottom: 15,
  },
  unggah: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 8,
    marginBottom: 15,
  },
  unggahText: {
    fontSize: 12,
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  multilineInput: {
    height: 100,
  },
  button: {
    backgroundColor: '#7D0A0A',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default FormLogbook;
