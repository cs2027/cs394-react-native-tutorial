import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Banner = ({title}) => (
    <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);

const styles = StyleSheet.create({
    bannerStyle: {
        color: '#888',
        fontSize: 32,
    },
});

export default Banner;