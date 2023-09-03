import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [syote1, setSyote1] = useState('');  

  const [data, setData] = useState([]);
  const [viesti, setViesti] = useState('')

  let historia;
  

  const lisaa = () => {
    console.log("Lisätään: " + syote1);
    
    setData([...data, { key: syote1 }]); 
    
    console.log("lisätty listaan");  
   
    setSyote1(''); 

    setViesti("Items to remember: ");
    
    
  
  };     

  const tyhjenna = () => {
    console.log("Tyhjennetään lista ");       

    setData([]);
    
    console.log("Lista tyhjä, tyhjennetään input ja viesti");

    setSyote1('');
    setViesti('');
    
    
  
  };


  return (
    <View style={styles.container}>

      <Text style={{marginTop: 50}}>Shopping List</Text>

      <View style={{marginTop: 30}}>

        <TextInput 
        keyboardType='default' 
        style={styles.input}
        onChangeText={arvo1 => setSyote1((arvo1))}value={syote1} 
        />

        

      </View>

      <View style={styles.buttons}> 

        <Button onPress={lisaa} title=" ADD "></Button>
        <Button onPress={tyhjenna} title=" CLEAR "></Button>

      </View>
      
      <Text style={{marginTop: 20}}> {viesti} </Text>

      <FlatList 
        data={data}        
        renderItem={({ item }) => <Text>{item.key}</Text> }
        keyExtractor={(item, index) => index.toString()}
        
      />

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input: {
    width : 250,
    borderWidth : 2,
    borderColor : 'black',    
  },
  buttons: {
    flexDirection: 'row', 
    marginTop : 20,     
    justifyContent: 'space-between' , 
    justifyContent: 'center',
    width : 75,
  }

});
