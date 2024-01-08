import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { db } from '../../../firebaseConfig';
import { set, ref, push } from 'firebase/database';

const AddData = () => {
  const [programMagang, setProgramMagang] = useState('');
  const [namaPerusahaan, setNamaPerusahaan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [tanggalBerakhir, setTanggalBerakhir] = useState('');
  const [suratMagang, setSuratMagang] = useState('');
  const [buktiDaftarMagang, setBuktiDaftarMagang] = useState('');

  const dataAddOn = () => {
    const formData = {
      programMagang,
      namaPerusahaan,
      alamat,
      nomorTelepon,
      tanggalMulai,
      tanggalBerakhir,
      suratMagang,
      buktiDaftarMagang,
    };

    // Kirim data ke Firebase Realtime Database
    const newFormDataRef = push(ref(db, 'magang'), formData);
    const formDataKey = newFormDataRef.key;

    console.log('Data Magang berhasil dikirim dengan ID:', formDataKey);

    // Reset nilai input setelah pengiriman data
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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Formulir Magang</Text>
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
        onChangeText={(text) => setSuratMagang(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Bukti Daftar Magang'
        value={buktiDaftarMagang}
        onChangeText={(text) => setBuktiDaftarMagang(text)}
        style={styles.input}
      />

      <Button
        title='Tambahkan Data'
        onPress={dataAddOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    fontSize: 18, 
    borderRadius: 5,
  },
});

export default AddData;
