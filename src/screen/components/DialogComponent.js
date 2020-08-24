import React from 'react';
import {View} from 'react-native';

export function Card({children, style}) {
  return (
    <View
      style={[
        {
          backgroundColor: '#63a296',
          borderRadius: 12,
          minHeight: 290,
          overflow: 'hidden',
        },
        style,
      ]}>
      {children}
    </View>
  );
}
