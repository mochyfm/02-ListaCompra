import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ShoppingForm from './Components/ShoppingForm';

const App = () => {

  const [products, setProducts] = useState([]);

  const addProductHandler = (newProduct) => {
    setProducts(() => [newProduct, ...products]);
  }

  return (
      <View style={styles.mainBackground}>
          <View behavior='height' style={styles.formSite}>
            <ShoppingForm onProductAdd={addProductHandler}/>
          </View>
        <View style={styles.bodySite}>
          <ScrollView style={styles.productScroll}>
            {products.length === 0 ? <Text style={{color: '#2c2c2c', fontStyle: 'italic'}}>There is no products added yet</Text> : null}
          </ScrollView>
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
    marginBottom: 50,
    flex: 1,
  },
  bodySite: {
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 2
  },
  productScroll: {
    width: '100%'
  }

  
});

export default App;