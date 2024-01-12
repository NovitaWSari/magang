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

  const handleAction = (id) => {
    Alert.alert(
      'Pilih Aksi',
      '',
      [
        {
          text: 'Log Book',
          onPress: () => handleAddLogBook(id),
        },
        {
          text: 'Laporan',
          onPress: () => handleAddLaporan(id),
        },
        {
          text: 'Batal',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>STATUS MAGANG | MAGANG YUK</Text>
        <Text style={styles.subtitle}>Perkembangan Pengajuan Magang</Text>
      </View>
    <View style={styles.tableContainer}>
      <Text style={[styles.judul]}>DAFTAR PENGAJUAN MAGANG</Text>
      <View style={[styles.tableRow, styles.titleRow]}>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Program Magang</Text>
        </View>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Nama Perusahaan</Text>
        </View>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Alamat</Text>
        </View>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Nomor Telepon</Text>
        </View>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Tanggal Mulai</Text>
        </View>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Tanggal Berakhir</Text>
        </View>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Surat Magang</Text>
        </View>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Bukti Daftar Magang</Text>
        </View>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Status</Text>
        </View>
        <View style={styles.tableCellTitle}>
          <Text style={styles.titleText}>Hapus</Text>
        </View>
      </View>

      {/* Data Rows */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>{item.programMagang}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.namaPerusahaan}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.alamat}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.nomorTelepon}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.tanggalMulai}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.tanggalBerakhir}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.suratMagang}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.buktiDaftarMagang}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.status}</Text>
            </View>
            <View style={styles.tableCell}>
              <Button
                title="Hapus"
                onPress={() => handleDelete(item.id)}
              />
              <Button
                title="Aksi"
                onPress={() => handleAction(item.id, 'aksi')}
                    />
            </View>
          </View>
        )}
      />
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
    backgroundColor: '#CDEDEE',
    paddingTop: 5,  // Mengurangi paddingTop agar lebih kecil
    paddingBottom: 10,  // Mengurangi paddingBottom agar lebih kecil
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
  judul: {
    color: '#000',
    fontSize: 12,
    alignContent: 'flex-end',
    paddingBottom: 10
  },
  tableContainer: {
    padding: 10, // Sesuaikan jumlah padding sesuai kebutuhan
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  tableCell: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  titleRow: {
    backgroundColor: '#ddd',
  },
  titleText: {
    fontWeight: 'bold',
  },
  tableCellTitle: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
});

export default CrudTable;