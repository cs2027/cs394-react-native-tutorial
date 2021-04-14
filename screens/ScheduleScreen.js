import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Banner from '../components/Banner';
import CourseList from '../components/CourseList';
import UserContext from '../UserContext';
import { firebase } from '../firebase';

const fixCourses = json => ({
  ...json,
  courses: Object.values(json.courses)
});

const ScheduleScreen = ({navigation}) => {
    const user = useContext(UserContext);
    const canEdit = user && user.role === 'admin';
    const [schedule, setSchedule] = useState({ title: '', courses: [] });
    const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

    const view = (course) => {
      navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
    };
  
    useEffect(() => {
      const db = firebase.database().ref();
      const handleData = snap => {
        if (snap.val()) setSchedule(fixCourses(snap.val()));
      }
      db.on('value', handleData, error => alert(error));
      return () => { db.off('value', handleData); };
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <Banner title={schedule.title} />
        <CourseList courses={schedule.courses} view={view} />
      </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
});

export default ScheduleScreen;