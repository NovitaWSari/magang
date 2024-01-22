import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../firebaseConfig';
import { push, ref } from 'firebase/database';
import * as DocumentPicker from 'expo-document-picker';

const AddData = ({ navigation }) => {
  const [programMagang, setProgramMagang] = useState('');
  const [namaPerusahaan, setNamaPerusahaan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [tanggalBerakhir, setTanggalBerakhir] = useState('');
  const [suratMagang, setSuratMagang] = useState('');
  const [buktiDaftarMagang, setBuktiDaftarMagang] = useState('');
  const [status, setStatus] = useState('Menunggu Persetujuan');
  const [selectedFileName, setSelectedFileName] = useState('');

  const dataAddOn = async () => {
    const formData = {
      programMagang,
      namaPerusahaan,
      alamat,
      nomorTelepon,
      tanggalMulai,
      tanggalBerakhir,
      suratMagang,
      buktiDaftarMagang,
      status,
    };

    const newFormDataRef = push(ref(db, 'magang'), formData);
    const formDataKey = newFormDataRef.key;

    console.log('Data Magang berhasil dikirim dengan ID:', formDataKey);

    resetForm();
  };

  const resetForm = () => {
    setProgramMagang('');
    setNamaPerusahaan('');
    setAlamat('');
    setNomorTelepon('');
    setTanggalMulai('');
    setTanggalBerakhir('');
    setSuratMagang('');
    setBuktiDaftarMagang('');
    setStatus('Pending');
  };

  const pickDocument = async (fieldName) => {
    try {
      const result = await DocumentPicker.getDocumentAsync();

      if (result.type === 'success' && result.uri) {
        if (fieldName === 'suratMagang') {
          setSuratMagang(result.uri);
          setSelectedFileName(result.name);
        } else if (fieldName === 'buktiDaftarMagang') {
          setBuktiDaftarMagang(result.uri);
          setSelectedFileName(result.name);
        }

        console.log(`File ${fieldName} berhasil dipilih: ${result.name}`);
        console.log('selectedFileName:', selectedFileName);
      }
    } catch (err) {
      if (err.message !== 'DocumentPicker.getDocumentAsync cancelled') {
        throw err;
      }
    }
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToHome} style={styles.iconButton}>
          <Ionicons name="md-arrow-back" size={24} color="white" />
        </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>FORMULIR | MAGANG YUK</Text>
        <Text style={styles.subtitle}>Formulir Pendaftraan Magang</Text>
      </View>
    </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Program Magang'
          value={programMagang}
          onChangeText={(text) => setProgramMagang(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Nama Perusahaan'
          value={namaPerusahaan}
          onChangeText={(text) => setNamaPerusahaan(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Alamat'
          value={alamat}
          onChangeText={(text) => setAlamat(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Nomor Telepon'
          value={nomorTelepon}
          onChangeText={(text) => setNomorTelepon(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Tanggal Mulai (YYYY-MM-DD)'
          value={tanggalMulai}
          onChangeText={(text) => setTanggalMulai(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Tanggal Berakhir (YYYY-MM-DD)'
          value={tanggalBerakhir}
          onChangeText={(text) => setTanggalBerakhir(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Surat Magang'
          value={suratMagang}
          editable={false}
          style={styles.input}
        />
        {suratMagang ? <Text>{suratMagang}</Text> : null}
        <View style={styles.filePickerContainer}>
          <View style={styles.filePickerBorder}>
            <TouchableOpacity onPress={() => pickDocument('suratMagang')}>
              <Text>Unggah Surat Magang</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          placeholder='Bukti Daftar Magang'
          value={buktiDaftarMagang}
          editable={false}
          style={styles.input}
        />
        {buktiDaftarMagang ? <Text>{buktiDaftarMagang}</Text> : null}
        <View style={styles.filePickerContainer}>
          <View style={styles.filePickerBorder}>
            <TouchableOpacity onPress={() => pickDocument('buktiDaftarMagang')}>
              <Text>Unggah Bukti Daftar Magang</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title='Tambahkan Data'
          onPress={dataAddOn}
        />
        <Button
          title='Lihat Status'
          onPress={() => navigation.navigate('CrudTable')}
          color='#337ab7'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#7D0A0A',
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    elevation: 2,
  },
  iconButton: {
    width: '50',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingLeft: 10,
  },
  titleContainer: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtitle: {
    color: 'white',
  },
  formContainer: {
    flex: 1, // Ubah agar hanya ada satu properti flex
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    padding: 8,
    fontSize: 12,
    borderRadius: 5,
    width: '80%',
  },
  filePickerContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  filePickerBorder: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
    marginRight: 20,
    borderRadius: 7,
  },
});

export default AddData;