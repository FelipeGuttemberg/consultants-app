import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_Relatorio';


const telaRelatorio = () => {
  const [searchText, setSearchText] = useState('');
  const [nomeContato, setNomeContato] = useState('');
  const [contato, setContato] = useState('');
  const [unidade, setUnidade] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    console.log(`Buscando por: ${searchText}`);
  };


  return (
    <View style={styles.container}>
      <View style={[styles.header, { flex: 2}]}>
    
        <View style={styles.seachContainer}>
          <Ionicons
            name="search"
            size={24}
            color="#808080"
            onPress={handleSearch}
            style={styles.searchIcon}
          />

          <TextInput
            style={styles.seachInput}
            placeholder="Pequisar"
            placeholderTextColor="#808080"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>


        
        <View style={styles.informacao}>
          <Text style={styles.textoInformativo}>
            Você pode pesquisar pelo nome do cliente ou morador
          </Text>
        </View>
        

        <View style={styles.infoTitulo}>
          <Ionicons name="reader" size={50} color="#044D8C" />
          <Text style={styles.infoRelatorio}>Relatório de Encomendas</Text>
        </View>


        <View style={styles.buscar}>     
          <Text style={styles.textoBuscar}> Buscar por: </Text>
        </View>

        <View style={styles.bnt_Status}>
          <Pressable style={styles.bntAguardando}>
            <Text style={styles.textoAguardando}>Aguardando</Text>
          </Pressable>

        <View style={{width:10}}/>

          <Pressable style={styles.bntPendente}>
            <Text style={styles.textoPendente}>Pendente</Text>
          </Pressable>

        <View style={{width:10}}/>

          <Pressable style={styles.bntEntregue}>
            <Text style={styles.textoEntregue}>Entregue</Text>
          </Pressable>
        </View>

      

      </View>

      <View style={[styles.main, { flex: 5 }]}>
        
      </View>

      <View style={[styles.footer, { flex: 0.5 }]}>
        <Link href="#">
          <Ionicons name="chevron-back-outline" size={24} color="#fff" />
        </Link>
      </View>
    </View>
  );
}

export default telaRelatorio;