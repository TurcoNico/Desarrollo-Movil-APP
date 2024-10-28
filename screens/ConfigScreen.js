import React, { useEffect, useState } from 'react';
import ConfigContent from '../templates/ConfigContent';
import { fetchUserData, updateUserData, changePassword } from '../functions/APIUserSettings';

const ConfigScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const setUserData = (data) => {
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setUsername(data.username);
      setEmail(data.email);
    };
    fetchUserData(setUserData);
  }, []);

  const handleUpdateUserData = async () => {
    const userData = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
    };
    await updateUserData(userData, navigation);
  };

  const handleChangePassword = async () => {
    const passwordData = {
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    await changePassword(passwordData, navigation);
  };

  return (
    <ConfigContent
      firstName={firstName} 
      lastName={lastName} 
      username={username} 
      email={email} 
      currentPassword={currentPassword} 
      newPassword={newPassword} 
      confirmPassword={confirmPassword} 
      setFirstName={setFirstName} 
      setLastName={setLastName} 
      setUsername={setUsername} 
      setEmail={setEmail} 
      setCurrentPassword={setCurrentPassword} 
      setNewPassword={setNewPassword} 
      setConfirmPassword={setConfirmPassword} 
      updateUser Data={handleUpdateUserData} 
      changePassword={handleChangePassword} 
    />
  );
};

export default ConfigScreen;
