import React, { useState, useEffect } from 'react';
import HomeContent from '../templates/HomeContent'; 
import { fetchUserData, handleLogout } from '../functions/HomeFuntions';

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchUserData(setUserData, setLoading);
    });

    return unsubscribe;
  }, [navigation]);

  const onLogout = async () => {
    await handleLogout(navigation);
  };

  return (
    <HomeContent
      userData={userData}
      loading={loading}
      handleLogout={onLogout}
      navigation={navigation}
    />
  );
};

export default HomeScreen;