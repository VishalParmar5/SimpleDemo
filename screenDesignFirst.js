import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  PixelRatio,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

class App extends Component {
  render() {
    console.log(width + '--' + height);
    const setFontSize = PixelRatio.getPixelSizeForLayoutSize(7.5);
    console.log(setFontSize);
    const setPadding = width * 0.03;
    console.log(setPadding);

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.MainContainer}>
          <View
            style={[
              styles.Container,
              {
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor: '#336699',
              },
            ]}>
            <View style={styles.ImageContainer}>
              <Image style={styles.Image} source={require('./img.jpg')} />

              <View style={styles.DetailContainer}>
                <Text style={{fontSize: RFPercentage(2.2)}}>React Native</Text>
                <Text
                  style={{
                    fontSize: RFPercentage(1.5),
                    textDecorationLine: 'underline',
                  }}>
                  Description
                </Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={10}
                  style={[styles.Text, {flex: 1}]}>
                  React Native comes with many built-in components, and the
                  community has built many more which you can include with your
                  projects. Each component supports a specific set of styles.{' '}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.Container, {backgroundColor: '#336699'}]}>
            <View style={styles.ImageContainer}>
              <Image style={styles.Image} source={require('./img.jpg')} />

              <View style={styles.DetailContainer}>
                <Text style={{fontSize: RFPercentage(2.2)}}>React Native</Text>
                <Text
                  style={{
                    fontSize: RFPercentage(1.5),
                    textDecorationLine: 'underline',
                  }}>
                  Description
                </Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={10}
                  style={[styles.Text, {flex: 1}]}>
                  React Native comes with many built-in components, and the
                  community has built many more which you can include with your
                  projects. Each component supports a specific set of styles.{' '}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.Container,
              {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                backgroundColor: '#336699',
              },
            ]}>
            <View style={styles.ImageContainer}>
              <Image style={styles.Image} source={require('./img.jpg')} />

              <View style={styles.DetailContainer}>
                <Text style={{fontSize: RFPercentage(2.2)}}>React Native</Text>
                <Text
                  style={{
                    fontSize: RFPercentage(1.5),
                    textDecorationLine: 'underline',
                  }}>
                  Description
                </Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={10}
                  style={[styles.Text, {flex: 1}]}>
                  React Native comes with many built-in components, and the
                  community has built many more which you can include with your
                  projects. Each component supports a specific set of styles.{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: wp('6%'),
    //paddingBottom: ( Platform.OS === 'ios' ) ? 50 : 20,
    //paddingTop: ( Platform.OS === 'ios' ) ? 50 : 20
  },
  Container: {
    flex: 0.3,
    borderWidth: 3,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('5%'),
  },
  Text: {
    fontSize: RFPercentage(2),
    color: 'white',
    textAlign: 'justify',
  },
  Image: {
    width: wp('38%'),
    height: wp('38%'),
    borderWidth: 3,
    borderColor: '#000',
  },
  ImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DetailContainer: {
    height: wp('38%'),
    flex: 1,
    paddingLeft: wp('3%'),
    alignItems: 'center',
  },
});

export default App;
