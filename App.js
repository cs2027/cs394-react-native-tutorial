import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CourseDetailScreen from './screens/CourseDetailScreen';
import ScheduleScreen from './screens/ScheduleScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScheduleScreen"
          component={ScheduleScreen}
          options={{ title: 'CS Course Scheduler' }}
        />
        <Stack.Screen name="CourseDetailScreen"
          component={CourseDetailScreen}
          options={{ title: 'Course Details'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;