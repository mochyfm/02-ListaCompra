import { useState } from 'react';
import uuid from 'react-native-uuid';
import { Pressable, StyleSheet, Text, TextInput, View, Image, Alert, ToastAndroid } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const ShoppingList = ({onProductAdd}) => {

    const [product, setProduct] = useState({})

    const exampleList = [
      'Lettuce',
      'Fish',
      'Legumes',
      'Blueberries',
      'Chetos',
      'Doritos',
      'Cheese',
      'Chocolate',
      'Ham',
      'Cake',
      'Coca-cola',
      'Tobacco',
      'Hearts Of Iron IV '
    ]

    const typesOfFood = [
      'Carne',
      'Verdura',
      'Pescado',
      'Dulces',
      'Otro'
    ]

    const randomProduct = () => {
      let randomValue = Math.floor(Math.random() * exampleList.length);
      return exampleList[randomValue]
    }

    const productNameHandler = (value) => {
        setProduct({...product, productName: value})
    }

    const productQuantityHandler = (value) => {
      setProduct({...product, quantity: parseInt(value)})
    }

    const productTypeHandler = (value) => {
      setProduct({...product, type: value})
    }

    const productAddHandler = () => {
      setProduct({
        id: uuid.v4(),
        ...product,
        bought: false,
      })
      onProductAdd(product)
    }

    return (
        <View style={styles.mainBackground}>
          <View style={styles.containerSection}>
            <View>
              <Text style={styles.textProperties}>Product Name</Text>
              <TextInput
                  maxLength={25}
                  onChangeText={productNameHandler}
                  placeholder={randomProduct()}
                  placeholderTextColor={'#AAAFB5'}
                  style={styles.valueInput}
                  value={product.productName}
              />
            </View>
            <View style={styles.quantitySection}>
              <Text style={styles.quantityText}>Quantity: </Text>
              <TextInput   
                  onChangeText={productQuantityHandler}
                  keyboardType='numeric'
                  maxLength={2}
                  placeholder='0'
                  placeholderTextColor={'#AAAFB5'}
                  style={styles.quantityInput}
                  value={product.quantity}
              />
            </View>
          </View>
          <View style={styles.containerSection}>
            <View>
              {/* https://www.npmjs.com/package/react-native-select-dropdown */}
              <SelectDropdown
                data={typesOfFood}
                defaultButtonText={'Select Type'}
                onSelect={productTypeHandler}
                buttonStyle={styles.dropDownButtonStyle}
                buttonTextStyle={styles.dropDownButtonTxtStyle}
                dropdownStyle={styles.dropDownColumnStyle}
                rowTextStyle={styles.dropDownRowTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <Image source={isOpened ? require('../../assets/foodLogos/UnknownType.png') : require('../../assets/foodLogos/DefaultFoodLogo.png')} style={styles.dropDownLogoProperties}/>
                }}
              />
            </View>
            <Pressable style={styles.addButtonProperties} onPress={productAddHandler}>
              <Text style={styles.addbuttonTxtProperties}>Añadir</Text>
              <Text style={styles.addbuttonTxtProperties}>+</Text>
            </Pressable>
          </View>
        </View> 
    )

  /*
        
  */
  
  }

  const styles = StyleSheet.create({
    mainBackground: {
      backgroundColor: 'transparent',
      borderColor: '#FF6F00',
      borderRadius: 20,
      borderWidth: 1,
      padding: 20,
      paddingTop: 40,
      paddingBottom: 0,
      height: '80%'
    },
      valueInput: {
        alignItems: 'center',
        borderColor: '#FF6F00',
        borderRadius: 5,
        borderWidth: 1.5,
        color: '#FFF',
        marginTop: 5,
        padding: 5,
        paddingLeft: 12.5,
      },
      textProperties: {
        color: '#FFF',
        fontSize: 15,
        margin: 2.5,
      },
      containerSection: {
        alignItems: 'flex-end',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        width: '95%'
      },
        quantitySection: {
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        },
        quantityText: {
          color: '#FFF',
          fontSize: 15,
          marginRight: 10
        },
        quantityInput: {
          borderColor: '#FF6F00',
          borderRadius: 5,
          borderWidth: 1.5,
          color: '#FFF',
          padding: 5,
          paddingLeft: 15,
          paddingRight: 15,
          textAlign: 'center'
        },
        addButtonProperties: {
          alignSelf: 'center',
          backgroundColor: '#87277C',
          borderWidth: 1,
          borderRadius: 5,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginLeft: 50,
          padding: 3,
          width: 80
        },
        addbuttonTxtProperties: {
          fontSize: 18,
          color: '#ffffff',
        },
        dropDownButtonStyle: {
          alignItems: 'center',
          backgroundColor: 'transparent',
          borderColor: '#FF6F00',
          borderRadius: 5,
          borderWidth: 1,
          marginTop: 10,
          marginBottom: 10,
          flex: 1,
          width: 180
        },
        dropDownButtonTxtStyle: {
          color: '#FFF',
          fontStyle: 'italic'
        },
        dropDownLogoProperties: {
          height: 40,
          width: 40,
          borderRadius: 50,
        },
        dropDownColumnStyle: {
          borderRadius: 10,
          backgroundColor: '#87277C',
        },
        dropDownRowTxtStyle: {
          color: '#FFF',
        }
});

export default ShoppingList;