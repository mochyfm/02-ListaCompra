import { Image, Text, StyleSheet, View, Pressable } from 'react-native'

 const ListItem = ({productInfo, onProductPurchase}) => {

  const selectImageByType = () => {
    let randomPhoto = Math.floor((Math.random() * 3) + 1);
    switch (productInfo.type) {
      case 'Meat':
          return require(`../../assets/foodLogos/Meat/Meat.png`)
      case 'Vegetable':
          return require(`../../assets/foodLogos/Vegetable/Vegetable.png`)
      case 'Bakery':
          return require(`../../assets/foodLogos/Bakery/Bakery.png`)
      case 'Fish':
          return require(`../../assets/foodLogos/Fish/Fish.png`)
      case 'Fruit':
        if (randomPhoto === 1) return require(`../../assets/foodLogos/Fruit/Fruit1.png`)
        else if (randomPhoto === 2) return require(`../../assets/foodLogos/Fruit/Fruit2.png`)
        else return require(`../../assets/foodLogos/Fruit/Fruit3.png`)
      default:
        
        return require('../../assets/foodLogos/UnknownType.png')
    }
  }

    return (
      <Pressable style={styles.product} onPress={() => onProductPurchase(productInfo)}>
        <View style={styles.description}>
          {productInfo.bought ? <Text style={styles.productPurchased}>PURCHASED</Text> : null}
          <Text style={styles.productName}>{productInfo.productName}</Text>
          <Text style={styles.quantity}>Cantidad: {productInfo.quantity}</Text>
        </View>
        <Image style={styles.logo} source={selectImageByType()}/>
      </Pressable>
    )
}

const styles = StyleSheet.create({
  product: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#FF6F00',
    borderRadius: 10,
    borderWidth: 1.5,
    padding: 30,
    marginBottom: 20,
  },
    productPurchased: {
      color: 'red',
      fontSize: 20,
      fontWeight: 'bold'
    },
    productName: {
      color: '#FFF',
      fontSize: 20
    },
    quantity: {
      color: '#FFF',
      fontWeight: 'bold'
    },
  logo: {
    backgroundColor: 'black',
    borderRadius: 50,
    borderColor: '#FF6F00',
    borderWidth: 1,
    height: 90,
    width: 90,
  }
})

export default ListItem;