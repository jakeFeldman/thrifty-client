import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Card, CardSection, Button} from './common';

const ProductDetail = props => {

const {textContainer, thumbnail, thumbnailContainer, headerText, cardImage, productActionsStyle} = styles;
  return(
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnail} source={{
            uri: props.product.seller.profile_image_url
          }}/>
        </View>
        <View style={textContainer}>
          <Text onPress={() => props.navigation.navigate('UserProfile')}>{props.product.seller.username}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={cardImage} source={{uri: props.product.images["0"].image_url}}/>
      </CardSection>

      <CardSection>
        <View style={productActionsStyle}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Ionicons name='ios-heart' size={20} color='#000' />
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <Ionicons name='ios-text' size={20} color='#000' />
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <Ionicons name='ios-share-alt' size={20} color='#000' />
          </View>
        </View>
      </CardSection>

      <CardSection>
        <View style={productActionsStyle}>
          <View style={{flex:4}}>
            <Text style={headerText}>{props.product.title.substr(0, 30)}</Text>
            <Text>$ {props.product.price}</Text>
          </View>
          <View style={{flex:1}}>
            <Button onPress={() => props.navigation.navigate('Product')} color="#CCC">
              INFO
            </Button>
          </View>
          <View style={{flex:1}}>
            <Button onPress={() => props.navigation.navigate('Checkout')} color="#D62246">
              BUY
            </Button>
          </View>
        </View>
      </CardSection>
    </Card>
  );
}

export default ProductDetail;

const styles = StyleSheet.create({
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: "#CCC",
    borderWidth: 1
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  headerText: {
    fontSize: 14,
    flexWrap: 'wrap'
  },
  cardImage: {
    height: 300,
    flex: 1,
    width: null
  },
  productActionsStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
