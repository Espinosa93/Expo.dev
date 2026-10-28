import { StyleSheet } from 'react-native';

const casca = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 20,
  },

  paragraph: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },

  cx1: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },

  caixas: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
  },

  textototal: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },

  cxtotal: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 5,
  },

  icone: {
    backgroundColor: 'lightblue',
    padding: 15,
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default casca;
