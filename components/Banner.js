import React from 'react';
import { StyleSheet, Text } from 'react-native';

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