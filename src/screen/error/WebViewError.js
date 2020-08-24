import React from 'react';
import {Image, Text, View} from 'react-native';
import {storageImageUrl} from '../../tools/helper';
import Style from './style';
import ModalContent from '../components/ModalContent';
import {Card} from '../components/DialogComponent';

const image = storageImageUrl('no_item', 'no_item_9_satellite.png');

const WebViewError = ({isVisible, dismiss}) => {
  return (
    <ModalContent
      visible={isVisible}
      style={{padding: 30}}
      onBackDropPress={dismiss}>
      <Card style={Style.card}>
        <View style={Style.topView}>
          <View style={Style.view1}>
            <Image style={Style.image} source={{uri: image}} />
            <Text style={Style.title}>Ooopppss!</Text>
            <Text style={Style.description}>{'Terjadi Kesalahan.'}</Text>
          </View>
        </View>
      </Card>
    </ModalContent>
  );
};

export default WebViewError;
