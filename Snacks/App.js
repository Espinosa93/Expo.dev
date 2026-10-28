import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import casca from './css/style';

export default function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [n4, setN4] = useState('');
  const [total, setTotal] = useState('');
  const [media, setMedia] = useState('');

  function calcular() {
    if (n1 == '' || n2 == '' || n3 == '' || n4 == '') {
      Alert.alert('Erro', 'Digite todas as notas');
      return;
    }

    let soma = Number(n1) + Number(n2) + Number(n3) + Number(n4);
    let m = soma / 4;

    setTotal(soma.toFixed(2));
    setMedia(m.toFixed(2));

    if (m >= 7) {
      Alert.alert('Resultado', 'Aprovado!');
    } else {
      Alert.alert('Resultado', 'Reprovado ou recuperação!');
    }
  }

  return (
    <View style={casca.container}>
      <Text style={casca.paragraph}>BOLETIM ESCOLAR</Text>

      <View style={casca.cx1}>
        <TextInput
          style={casca.caixas}
          placeholder="Primeira nota"
          value={n1}
          onChangeText={setN1}
          keyboardType="numeric"
        />

        <TextInput
          style={casca.caixas}
          placeholder="Segunda nota"
          value={n2}
          onChangeText={setN2}
          keyboardType="numeric"
        />

        <TextInput
          style={casca.caixas}
          placeholder="Terceira nota"
          value={n3}
          onChangeText={setN3}
          keyboardType="numeric"
        />

        <TextInput
          style={casca.caixas}
          placeholder="Quarta nota"
          value={n4}
          onChangeText={setN4}
          keyboardType="numeric"
        />

        <Text style={casca.textototal}>Soma das notas:</Text>
        <TextInput
          style={casca.cxtotal}
          value={total}
          editable={false}
          placeholder="Total"
        />

        <Text style={casca.textototal}>Média:</Text>
        <TextInput
          style={casca.cxtotal}
          value={media}
          editable={false}
          placeholder="Média"
        />

        <TouchableOpacity style={casca.icone} onPress={calcular}>
          <AntDesign name="calculator" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
