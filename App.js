import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {Button, Pressable, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [won, toggleWon] = useState(false);
  const [six, setSix] = useState(6)
  const [seven, setSeven] = useState(7)
  const [eight, setEight] = useState(8)
  const [nine, setNine] = useState(9)
  const [win, setWin] = useState(true);
  const [mes, setMes] = useState('Win');
  const [pound, setPound] = useState(false);
  const [op, setOp] = useState('+');
  const [opTxt, setOpText] = useState("Delete");
  const [btnColor, setBtnColor] = useState('green')

  function increment(n) {
    setCount(count+n);
  }

  function decrement(n){
    if (count > 0){
      if (count-n < 0){
        setCount(0)
      } else {
        setCount(count-n)
      }
      
      
      } 
  }

  useEffect(() => {
    if (count >= 54) {
      setPound(true);
    }
  }, [count]);

  const toggleOp = () =>{
    if (op == '+') {setOp('-'); setOpText('Add')} else {setOp('+'); setOpText('Delete')};
  }
  

  const setToLose = ()=>{
    setSix(12);
    setSeven(14);
    setEight(16);
    setNine(18);
    setWin(true)
    setMes('Lose')
  }

  
  const setToWin = ()=> {
      setSix(6);
      setSeven(7);
      setEight(8);
      setNine(9);
      setWin(false)
      setMes('Win')
  }
  

  function winF(bool){
    bool ? setToWin() : setToLose()
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
    {!pound && <View className='pt-[160px] h-screen  bg-cyan-400'>
    <View className='flex justify-center items-center'>
      <Text className='text-[120px] ' >{count}</Text>
      </View>
      <View className='w-screen flex-row items-center justify-center mt-32'>
      <View className='flex-row'>
      
      <Pressable style={st.button} className=' bg-green-500 py-7 rounded-lg w-[70px] flex justify-center items-center' onPress={() => op == '+' ? increment(5): decrement(5)}>
      <Text style={st.text}>{op}5</Text>
      </Pressable>
      <Pressable style={st.button} className='bg-green-500 py-5 rounded-lg w-[70px] flex justify-center items-center' onPress={() => op == '+' ? increment(six) : decrement(six)}>
      <Text style={st.text}>{op}{six}</Text>
      </Pressable>
      <Pressable style={st.button} className='bg-green-500 py-5 rounded-lg w-[70px] flex justify-center items-center' onPress={() => op == '+' ? increment(seven) : decrement(seven)}>
      <Text style={st.text}>{op}{seven}</Text>
      </Pressable>
      <Pressable style={st.button} className='bg-green-500 py-5 rounded-lg w-[70px] flex justify-center items-center' onPress={() => op == '+' ? increment(eight) : decrement(eight)}>
      <Text style={st.text}>{op}{eight}</Text>
      </Pressable>
      <Pressable style={st.button} className='bg-green-500 py-5 rounded-lg w-[70px] flex justify-center items-center' onPress={() => op == '+' ? increment(nine) : decrement(nine)}>
      <Text style={st.text}>{op}{nine}</Text>
      </Pressable>
      </View>
      
        </View>
        
        <View className='flex-row justify-center'>
      
      </View>
      <View className='pl-4 pt-4 -mb-4'>
        <Pressable className='bg-red-500 p-3 w-[100px] justify-center flex items-center rounded' onPress={toggleOp}>
          <Text className='text-[20px]'>{opTxt}</Text>
        </Pressable>
      </View>
      <Pressable onPress={()=>{winF(win)}} style={st.button} className='py-6 mt-32 justify-center flex items-center rounded bg-black'>
        <Text style={st.text} className='text-white'>{mes}</Text>  
      </Pressable>  
      <Pressable style={st.button} className='bg-yellow-400 p-3 mt-1 rounded  justify-center items-center' onPress={reset}>
        <Text className='font-bold'>RESET</Text>
      </Pressable>
     
    </View>}

    {pound && <View className=' h-screen bg-blue-300 justify-center items-center flex'>
      <Text className='text-[100px]'>POUND!</Text>
      <Pressable style={st.button} className='rounded bg-yellow-400' onPress={()=> {setPound(false); setCount(0); setWin(true)}}>
        <Text style={st.text} className=' p-5 font-bold'>Reset</Text>
      </Pressable>
      </View>}
    
    </>
  );
}

const st = StyleSheet.create({
  button: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3,
    marginHorizontal: 2,
    padding: 1,
  
  },
  button1: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3,
    marginHorizontal: 2,
    padding: 1
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    
  }
})