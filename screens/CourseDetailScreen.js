import React from 'react';
import { StyleSheet, 
    SafeAreaView,
    ScrollView,
    Text,
    View } from 'react-native';

const Field = ({label, value}) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.field}>{value}</Text>
        </View>
    );
};

const CourseDetailScreen = ({route}) => {
    const course = route.params.course;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Field label="Course ID" value={course.id} />
            <Field label="Meeting Times" value={course.meets} />
            <Field label="Course Title" value={course.title} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c7e1fc',
    },
    field: {
        flex: 1,
        height: 40,
        width: 300,
        padding: 5,
        marginTop: 5,
        backgroundColor: 'white',
        textAlign: 'center',
    },
    fieldContainer: {
        marginTop: 5,
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontWeight: 'bold',
    }
});

export default CourseDetailScreen;