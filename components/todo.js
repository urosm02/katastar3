import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function TodoItem({item}) {

    return (
        <TouchableOpacity>
            <Text style={styles.text}>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 2,
        padding: 16,
        borderColor: 'lightgreen',
        color: 'lightgreen',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        width: 300,
        textAlign: 'center'
    }
})