import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ListItem = () => {
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        {/* Left Side */}
        <View style={styles.leftContainer}>
          <Image
            source={{
              uri: 'https://downloads.coindesk.com/arc-hosted-images/eth.png',
            }}
            style={styles.image}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Etheream</Text>
            <Text style={styles.subtitle}>ETH</Text>
          </View>
        </View>

        {/* Right Side */}
        <View style={styles.rightContainer}>
          <Text style={styles.title}>$1,000.00</Text>
          <Text style={[styles.subtitle, {color: 'red'}]}>$1,000.00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    color: '#000',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
});

export default ListItem;
