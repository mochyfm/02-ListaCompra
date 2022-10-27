import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image, Alert, ToastAndroid } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const ShoppingList = ({onProductAdd}) => {

    const defaultProduct = {
      productName: '',
      quantity: '',
      bought: false,
      type: ''
    }

    const [productInfo, setProductInfo] = useState(defaultProduct)

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
      'Meat',
      'Vegetable',
      'Fish',
      'Bakery',
      'Fruit'
    ]

    const randomProduct = () => {
      let randomValue = Math.floor(Math.random() * exampleList.length);
        return exampleList[randomValue]
    }

    const productNameHandler = (value) => {
      setProductInfo({...productInfo, productName: value})
    }

    const productQuantityHandler = (value) => {
      setProductInfo({...productInfo, quantity: parseInt(value)})
    }

    const productTypeHandler = (value) => {
      setProductInfo({...productInfo, type: value})
    }

    const checkForm = (product) => {
      return (product.productName).trim() !== '' && product.type !== '' && (product.quantity >= 1 && product.quantity <= 50)
    } 

    const productAddHandler = () => {
      if (productInfo.quantity >= 1 && productInfo.quantity <= 50 ) {
        if ((productInfo.productName).trim() === '') {
          console.log('ERROR: No hay nombre de producto');
        } else {
          if (productInfo.type.trim() === ''){
            console.log('ERROR: No hay tipo seleccionado')
          }
          else { 
            onProductAdd(productInfo);
            setProductInfo(defaultProduct);
          }
        }
      }  
    }

    return (
        <View style={styles.mainBackground}>
          <View style={styles.topSection}>
            <View style={styles.productNameBox}>
              <Text style={styles.productNameText}>Product Name</Text>
              <TextInput
                  maxLength={30}
                  onChangeText={productNameHandler}
                  placeholder={randomProduct()}
                  placeholderTextColor={'#AAAFB5'}
                  style={styles.productNameInput}
                  value={productInfo.productName}
              />
            </View>
          </View>
          <View style={styles.botSection}>
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
            <View style={styles.quantityBox}>
              <Text style={styles.quantityText}>Quantity: </Text>
              <TextInput   
                  onChangeText={productQuantityHandler}
                  keyboardType='numeric'
                  maxLength={2}
                  placeholder='0'
                  placeholderTextColor={'#AAAFB5'}
                  style={styles.quantityInput}
                  value={productInfo.quantity}
              />
            </View>
          </View>
          <Pressable style={checkForm(productInfo)
              ? styles.addButton
              : styles.addButtonDisabled} 
              onPress={productAddHandler}>
              <Text style={ checkForm(productInfo) 
              ? styles.addButtonText
              : styles.addButtonDisabledText }>Añadir</Text>
              <Text style={ checkForm(productInfo) 
              ? styles.addButtonText
              : styles.addButtonDisabledText }>+</Text>
          </Pressable>
        </View> 
    )

  /*
        
  */
  
  }

  const styles = StyleSheet.create({
    mainBackground: {
      borderColor: '#FF6F00',
      borderBottomWidth: 1,
      paddingBottom: 15,
      width: '90%'
    },
      topSection: {
        alignContent: 'center',
        justifyContent: 'space-evenly',
        marginTop: 15,
        padding: 10
      },
        productNameBox: {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        },
          productNameText: {
            color: '#FF6F00',
            marginRight: 10,
            padding: 5
          },
          productNameInput: {
            borderBottomWidth: 1,
            borderColor: '#FF6F00',
            color: '#FFF',
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            textAlign: 'center'
          },
      botSection: {
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 10
      },
        dropDownButtonStyle: {
          alignContent: 'center',
          backgroundColor: 'transparent',
          borderColor: '#FF6F00',
          borderRadius: 10,
          borderWidth: 1
        },
          dropDownLogoProperties: {
            height: 40,
            width: 40,
            borderRadius: 50,
          },
          dropDownButtonTxtStyle: {
            color: '#FFF'
          },
          dropDownColumnStyle: {
            borderRadius: 10,
            backgroundColor: '#FF6F00',
          },
          dropDownRowTxtStyle: {
            color: '#000',
          },
        quantityBox: {
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row'
        },
          quantityText: {
            color: '#FFF',
            marginRight: 10
          },
          quantityInput: {
            borderRadius: 8,
            borderColor: '#FF6F00',
            borderWidth: 1,
            color: '#FFF',
            textAlign: 'center',
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
          },
        addButton: {
          alignSelf: 'center',
          backgroundColor: 'transparent',
          borderColor: '#FF6F00',
          borderWidth: 1,
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 15,
          marginBottom: 15,
          padding: 10,
          width: 100
        },
        addButtonDisabled: {
          alignSelf: 'center',
          backgroundColor: '#6A6970',
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 15,
          marginBottom: 15,
          padding: 10,
          width: 100
        },
          addButtonDisabledText: {
            color: '#2C2C2C'
          },
          addButtonText: {
            color: '#FFF'
          }
        
});

export default ShoppingList;