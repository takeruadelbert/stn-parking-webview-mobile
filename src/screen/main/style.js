import {Dimensions} from 'react-native';

const widthScreen = Dimensions.get('window').width;

export default {
  overlayView: {
    position: 'absolute',
    right: 0,
    top: 50,
    zIndex: 1,
    height: 50,
    width: widthScreen,
    backgroundColor: 'transparent',
  },
};
