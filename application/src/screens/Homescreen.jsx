import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';

import COURSES  from "../data/data";
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
  // const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {COURSES.map((course, index) => (
        <Pressable
          key={index}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'palevioletred' : 'white',
            },
            styles.courseContainer,
          ]}
          onPress={() => {
            // setSelectedCourse(course);
            // navigation.navigate('CourseDetails', { course });
          }}
        >
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Image source={{ uri: course.image }} style={styles.courseImage} />
          <Text style={styles.courseDescription}>{course.description}</Text>
          <Text style={styles.coursePrice}>{`$${course.price}`}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  courseContainer: {
    borderRadius: 10,
    margin: 10,
    padding: 15,
    alignItems: 'center',
  },
  courseImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Homescreen;
