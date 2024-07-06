import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
import React, { useContext } from 'react';
import { FeedbackContext } from '../FeedbackContext';

export default function AdminLoginScreen() {
  const { feedbackData, resolveBill } = useContext(FeedbackContext);

  const handleResolveBill = (index) => {
    resolveBill(index);
    Alert.alert('Bill has been resolved.');
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.feedbackItem}>
      {item.type === 'salary' ? (
        <>
          <Text>Question: {item.question}</Text>
          <Text>Answer: {item.answer}</Text>
          <Text>Date: {item.salaryDate}</Text>
          <Text>Amount: {item.salaryAmount}</Text>
        </>
      ) : (
        <>
          <Text>Bill Amount: {item.billAmount}</Text>
          <Text>Bill Date: {item.billDate}</Text>
          <Text>Status: {item.resolved ? 'Resolved' : 'Pending'}</Text>
          {!item.resolved && (
            <Button title="Resolve the Bill" onPress={() => handleResolveBill(index)} />
          )}
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Screen</Text>
      <FlatList
        data={feedbackData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
  },
  feedbackItem: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});

