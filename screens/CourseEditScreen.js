import React from 'react';
import { StyleSheet, 
    SafeAreaView,
    ScrollView,
    Text,
    View } from 'react-native';
import Form from '../components/Form';
import * as Yup from 'yup';

const Field = ({label, value}) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.field}>{value}</Text>
        </View>
    );
};

const validationSchema = Yup.object().shape({
    id: Yup.string()
      .required()
      .matches(/(F|W|S)\d{3,}/, 'Must be a term and 3-digit number')
      .label('ID'),
    meets: Yup.string()
      .required()
      .matches(/(M|Tu|W|Th|F)+ +\d\d?:\d\d-\d\d?:\d\d/, 'Must be weekdays followed by start and end time')
      .label('Meeting times'),
    title: Yup.string()
      .required()
      .label('Title'),
});

const CourseEditScreen = ({navigation, route}) => {
    const course = route.params.course;
    const width = 300;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Form
                    initialValues={{
                        id: course.id,
                        meets: course.meets,
                        title: course.title,
                    }}
                    validationSchema={validationSchema}
                >
                    <Form.Field name="id" leftIcon="identifier" width={width} />
                    <Form.Field name="meets" leftIcon="calendar-range" width={width} />
                    <Form.Field name="title" leftIcon="format-title" width={width} />
                </Form>
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

export default CourseEditScreen;