import { useState } from 'react';
import uuid from 'react-native-uuid';
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import ListItem from './Components/ListItem';
import ShoppingForm from './Components/ShoppingForm';

const App = () => {

  const [products, setProducts] = useState([]);

  const addProductHandler = (newProduct) => {
    setProducts(() => [{id: uuid.v4(), ...newProduct}, ...products]);
  }

  const buyProductHandler = (productData) => {
    setProducts(() => products.filter((productElement) => productElement.id !== productData.id));
  }
  
  return (
      <View style={styles.mainBackground}>
        <View behavior='height' style={styles.formSite}>
            <ShoppingForm 
              onProductAdd={addProductHandler}
              />
        </View>
        <View style={styles.bodySite}>
          <ScrollView>
            {products.length === 0 
            ? <Text style={{color: '#A3AAB2', fontStyle: 'italic', flex: 0, alignSelf: 'center'}}>There is no products added yet</Text> 
            : <View>
                {products.map((product) => ( 
                  <ListItem
                    key={product.id}
                    productInfo={{...product}}
                    onProductPurchase={buyProductHandler}
                    />                                   
                ))}
              </View>
            }
          </ScrollView>
        </View>
        <View style={styles.clearButtonSite}>
          <Pressable style={products.length !== 0 ? styles.clearButton : styles.clearButtonDisabled} onPress={() => products.length !== 0 ? setProducts([]) : null}>
            <Text style={products.length !== 0 ? styles.clearButtonText : styles.clearButtonTextDisabled}>Clear</Text>
          </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: '#000000',
    width: '100%',
    height: '100%'
  }, 
  formSite: {
    alignItems: 'center',
    marginTop: 50,
  },
  bodySite: {
    alignContent: 'center',
    alignSelf: 'center',
    height: '60%',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 40,
    padding: 10,
    width: '80%',
    height: 400
  },
  clearButtonSite: {
    alignSelf: 'center',
    backgroundColor: 'FFF',
    marginBottom: 30,
    height: 500,
    width: 100
  },
    clearButton: {
      borderColor: '#FF6F00',
      borderRadius: 5,
      borderWidth: 1,
      padding: 5
    },
    clearButtonDisabled: {
      backgroundColor: '#6A6970',
      borderColor: '#6A6970',
      borderRadius: 5,
      borderWidth: 1,
      padding: 5
    },
    clearButtonText: {
      color: '#FFF',
      textAlign: 'center'
    },
    clearButtonTextDisabled: {
      color: '#000',
      textAlign: 'center'
    }
    
    
});

export default App;