import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';

const FormLaporan = () => {
  const [name, setName] = useState('');
  const [nim, setNIM] = useState('');
  const [prodi, setProdi] = useState('');
  const [document, setDocument] = useState(null);

  const navigation = useNavigation();

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'allFiles',
      });

      if (result.type === 'success') {
        setDocument(result);
      } else {
        // Handle the case where the user cancels the document picker
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitReport = async () => {
    // Implementasi pengiriman laporan ke server
    console.log('Data Laporan:', { name, nim, prodi, document });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nama"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        label="NIM"
        value={nim}
        onChangeText={setNIM}
        style={styles.input}
      />

      <TextInput
        label="Program Studi"
        value={prodi}
        onChangeText={setProdi}
        style={styles.input}
      />

      <Button icon="file" mode="contained" onPress={pickDocument} style={styles.button}>
        Pilih Dokumen
      </Button>

      <Button icon="send" mode="contained" onPress={submitReport} style={styles.button}>
        Kirim Laporan
      </Button>
    </View>
  );
};

export default FormLaporan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
