import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { db } from '../../../firebaseConfig';
import { onValue, ref, remove } from 'firebase/database';

const CrudTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const databaseRef = ref(db, 'magang');
        
        try {
          onValue(databaseRef, (snapshot) => {
            const items = [];
            snapshot.forEach((childSnapshot) => {
              const item = childSnapshot.val();
              items.push({ id: childSnapshot.key, ...item });
            });
            setData(items);
          });
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
      

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const itemRef = ref(db, `magang/${id}`);

    try {
      await remove(itemRef);
      Alert.alert('Sukses', 'Data berhasil dihapus!');
    } catch (error) {
      console.error('Error deleting data:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tabel Magang</Text>
      
<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.itemContainer}>
      <Text>Program Magang: {item.programMagang}</Text>
      <Text>Nama Perusahaan: {item.namaPerusahaan}</Text>
      <Text>Alamat: {item.alamat}</Text>
      <Text>Nomor Telepon: {item.nomorTelepon}</Text>
      <Text>Tanggal Mulai: {item.tanggalMulai}</Text>
      <Text>Tanggal Berakhir: {item.tanggalBerakhir}</Text>
      <Text>Surat Magang: {item.suratMagang}</Text>
      <Text>Bukti Daftar Magang: {item.buktiDaftarMagang}</Text>
      <Text>Status: {item.status}</Text> {/* Menambahkan status ke dalam tampilan */}
      <Button
        title="Hapus"
        onPress={() => handleDelete(item.id)}
      />
    </View>
  )}
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
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default CrudTable;
