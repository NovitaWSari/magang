import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { db, ref, push } from '../../../firebaseConfig';

const FormLaporan = () => {
  const [nama, setNama] = useState('');
  const [nim, setNIM] = useState('');
  const [prodi, setProdi] = useState('');
  const [dokumen, setDokumen] = useState(null);

  const navigation = useNavigation();

  const navigateToAksi = () => {
    navigation.goBack();
  };

  const submitLaporan = async () => {
    try {
      const laporanRef = push(ref(db, 'laporan'), {
        nama: nama,
        nim: nim,
        prodi: prodi,
        dokumen: dokumen,
      });

      const title = laporanRef.key;

      setNama('');
      setNIM('');
      setProdi('');
      setDokumen('');

      console.log('Data Laporan berhasil ditambahkan dengan ID:', title);
    } catch (error) {
      console.error('Error menambahkan data laporan:', error.message);
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'allFiles',
      });

      if (result.type === 'success') {
        setDokumen(result);
      } else {
        // Menangani kasus ketika pengguna membatalkan pemilih dokumen
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToAksi} style={styles.iconButton}>
          <Ionicons name="md-arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LAPORAN | MAGANG YUK</Text>
          <Text style={styles.subtitle}>Kirim Laporan Magangmu</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Nama:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama"
          value={nama}
          onChangeText={(text) => setNama(text)}
        />

        <Text style={styles.label}>NIM:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan NIM"
          value={nim}
          onChangeText={(text) => setNIM(text)}
        />

        <Text style={styles.label}>Program Studi:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan program studi"
          value={prodi}
          onChangeText={(text) => setProdi(text)}
        />

        <TouchableOpacity style={styles.unggah} onPress={pickDocument}>
          <Text style={styles.unggahText}>Pilih Dokumen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={submitLaporan}>
          <Text style={styles.buttonText}>Kirim Laporan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    width: 50,
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
    borderColor: '#ccc',
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
  button: {
    backgroundColor: '#7D0A0A',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default FormLaporan;
