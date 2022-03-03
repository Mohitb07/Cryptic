/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';

import ListItem from './components/ListItem';
import {SAMPLE_DATA} from './assets/data/sampleData';

const ListHeader = () => (
  <>
    <View style={styles.headerContainer}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
    <View style={styles.divider} />
  </>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <FlatList
        keyExtractor={item => item.id}
        data={SAMPLE_DATA}
        renderItem={({item}) => (
          <>
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage={
                item.price_change_percentage_7d_in_currency
              }
              logoUrl={item.image}
              // onPress={() => openModal(item)}
            />
          </>
        )}
        ListHeaderComponent={<ListHeader />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    height: 0.7,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
});

export default App;
