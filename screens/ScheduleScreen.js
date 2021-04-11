import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Banner from '../components/Banner';
import CourseList from '../components/CourseList';

const ScheduleScreen = ({navigation}) => {
    const [schedule, setSchedule] = useState({ title: '', courses: [] });
    const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

    const view = (course) => {
        navigation.navigate('CourseDetailScreen', { course });
    };
  
    useEffect(() => {
      const fetchSchedule =  async () => {
        const response = await fetch(url);
        if (!response.ok) throw response;
        const json = await response.json();
        setSchedule(json);
      }
      fetchSchedule();
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