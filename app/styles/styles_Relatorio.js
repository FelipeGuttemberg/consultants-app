import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  header: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop:35,
    marginBottom:8,
    // backgroundColor:'red'
  },

  seachContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginTop: '2%',
    marginBottom: '1%',
  },

  seachInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
  },

  searchIcon: {
    marginLeft: 10,
  },

  informacao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '5%',
  },

  textoInformativo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
  },

  infoTitulo: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom:25
  },

  infoRelatorio: {
    fontSize: 25,
    fontWeight:'bold'
  },

  
  buscar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '1%',
    marginBottom: '4%',
  },

  textoBuscar: {
    fontSize: 13,
    color: '#808080',
    fontWeight:'bold'
  },

  bnt_Status: {
    flexDirection: 'row',
    justifyContent: '',
    alignItems: 'center',
    // gap: 1,
    marginBottom: 20,
    marginRight:72,
    marginLeft:7
  },

  bntAguardando: {
    backgroundColor: '#fff',
    borderColor: '#0C3854',
    borderWidth: 2,
    alignItems: 'center',
    padding: 5,
    width: 110,
  },

  bntEntregue: {
    backgroundColor: '#fff',
    borderColor: '#0C3854',
    borderWidth: 2,
    alignItems: 'center',
    padding: 5,
    width: 110,
  },

  textoAguardando: {
    color: '#0C3854',
  },

  textoEntregue: {
    color: '#0C3854',
  },

  bntPendente: {
    backgroundColor: '#fff',
    borderColor: '#0C3854',
    borderWidth: 2,
    alignItems: 'center',
    padding: 5,
    width: 110,
  },

  // bntPendenteView: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   marginLeft: 7.2,
  // },

  textoPendente: {
    color: '#0C3854',
  },


  main: {
    flexDirection: 'column',
    // backgroundColor: 'green'
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#044D8C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxHeight: 50,
  },
});

export default styles