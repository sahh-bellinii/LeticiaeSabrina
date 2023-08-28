import React from 'react';
import{View, Text, TextInput, StyleSheet} from 'react-native';
const PercentageDimensionBasics = () =>{
    return(
        <View style={{height: '100%'}}>
            <View
            style={{
                height: '15%' ,
                backgroundColor: 'powerblue',
            }}
            />
            <Text style={styles.heading}>Tela de Login</Text>
            <TextInput
            style={styles.input}
            placeholder="senha"
            />
        </View>
    );
};
const styles= StyleSheet.create({
    heading:{
    fontSize:20,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    input:{
    width: '80%',
    paddin:10,
    marginBottom:10,
    borderwidth:1,
    borderColor: 'gray',
    },
});
export default PercentageDimensionBasics;