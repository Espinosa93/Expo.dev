import { StyleSheet } from 'react-native';

const casca = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF2F8',
    padding: 20,
  },

  paragraph:{
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 25,
    textAlign: 'center',
  },

  cx1:{
    width: '100%',
    maxWidth: 350,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },

  caixas:{
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#BDC3C7',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },

  textototal:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 8,
  },

  cxtotal:{
    backgroundColor: '#D6EAF8',
    borderWidth: 1,
    borderColor: '#85C1E9',
    padding: 12,
    borderRadius: 8,
    fontSize: 20,
    color: '#154360',
    marginBottom: 15,
  },

  icone:{
    backgroundColor: '#3498DB',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 5,
  },
});

export default casca;
