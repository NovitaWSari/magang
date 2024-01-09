import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { db } from '../../../firebaseConfig';
import { set, ref, push } from 'firebase/database';

const AddData = ({ navigation }) => {
  const [programMagang, setProgramMagang] = useState('');
  const [namaPerusahaan, setNamaPerusahaan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [tanggalBerakhir, setTanggalBerakhir] = useState('');
  const [suratMagang, setSuratMagang] = useState('');
  const [buktiDaftarMagang, setBuktiDaftarMagang] = useState('');
  const [status, setStatus] = useState('Menunggu Persetujuan'); // Menambahkan status default 'Menunggu Persetujuan'

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
      status, // Menambahkan status ke formData
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
    setStatus('Pending'); // Mengganti status kembali ke 'Pending'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Formulir Magang</Text>
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
          onChangeText={(text) => setSuratMagang(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Bukti Daftar Magang'
          value={buktiDaftarMagang}
          onChangeText={(text) => setBuktiDaftarMagang(text)}
          style={styles.input}
        />
        
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title='Tambahkan Data'
          onPress={dataAddOn}
          color='#5cb85c' // Warna hijau
        />
        <Button
          title='Lihat Status'
          onPress={() => navigation.navigate('CrudTable')}
          color='#337ab7' // Warna biru
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    padding: 8,
    fontSize: 12,
    borderRadius: 5,
    width: '80%', // Lebar input 80% dari parent
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Mengubah dari 'space-between' ke 'flex-end'
    marginTop: 20,
  },
});

export default AddData;