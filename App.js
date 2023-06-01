import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [resultado, setResultado] = useState('');
  const [imagemMoeda, setImagemMoeda] = useState('');

  const jogarMoeda = () => {
    const numero = Math.random();
    const novoResultado = numero < 0.5 ? 'cara' : 'coroa';
    setResultado(novoResultado);

    if (novoResultado === 'cara') {
      setImagemMoeda('cara');
    } else {
      setImagemMoeda('coroa');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={jogarMoeda}>
        {imagemMoeda === 'cara'? 
        <Image source={require('./images/real_cara.png')} style={{ width: 200, height: 200 }} /> :
        <Image source={require('./images/real_coroa.png')} style={{ width: 200, height: 200 }} />}
        {/* <Image source={require('./images/real_cara.png')} style={{ width: 200, height: 200 }} /> */}
      </TouchableOpacity>
      {resultado !== '' && <Text style={{ fontSize: 24, marginTop: 20 }}>{resultado}</Text>}
    </View>
  );
};

export default App;
