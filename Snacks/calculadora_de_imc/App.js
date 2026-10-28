import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

import casca from './css/style';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [total, setTotal] = useState('');

  function calcular(){
    var imc = Number(peso) / (Number(altura) * Number(altura));

    setTotal(imc.toFixed(2));

    if (imc < 18.5){
      alert('Abaixo do peso');
    }else if (imc < 25){
      alert('Peso normal');
    }else if (imc < 30){
      alert('Sobrepeso');
    }else {
      alert('Obesidade');
    }
  }

  return(
    <View style={casca.container}>
      <Text style={casca.paragraph}>
        Calculadora de IMC
      </Text>

      <View style={casca.cx1}>
        <TextInput
          style={casca.caixas} placeholder="Digite seu peso (kg)"
          value={peso} onChangeText={setPeso} keyboardType="decimal-pad"
        />

        <TextInput
          style={casca.caixas} placeholder="Digite sua altura (m)"
          value={altura} onChangeText={setAltura} keyboardType="decimal-pad"
        />

        <Text style={casca.textototal}>Seu IMC:</Text>

        <TextInput
          style={casca.cxtotal} value={total} editable={false}
        />

        <TouchableOpacity
          style={casca.icone} onPress={calcular}
        >
          <AntDesign name="calculator" size={18} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}