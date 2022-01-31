import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const CustomButtom = ({children, handleLogin}) => {
  return (
    // <TouchableOpacity onPress={handleLogin} activeOpacity={0.8}>
    //   <View style={styles.btn}>
    //     <Text style={styles.text}>{children}</Text>
    //   </View>
    // </TouchableOpacity>
    <Pressable
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : '#ff5c2c'},
        styles.btn,
      ]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    marginVertical: 20,
    borderRadius: 10,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default CustomButtom;
