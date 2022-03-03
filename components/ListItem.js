import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage,
  logoUrl,
}) => {
  const priceChangeColor = priceChangePercentage > 0 ? '#34C759' : '#FF3B30';
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        {/* Left Side */}
        <View style={styles.leftContainer}>
          <Image
            source={{
              uri: logoUrl,
            }}
            style={styles.image}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/* Right Side */}
        <View style={styles.rightContainer}>
          <Text style={styles.title}>
            ${currentPrice.toLocaleString('en-US', {currency: 'USD'})}
          </Text>
          <Text style={[styles.subtitle, {color: priceChangeColor}]}>
            {priceChangePercentage.toFixed(2)}%
          </Text>
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
