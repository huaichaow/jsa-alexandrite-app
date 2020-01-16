import React, { useEffect } from 'react';
import {
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { logOut, fetchUserProfile } from '../redux/account/actionCreator';
import commonStyles from '../common/styles';
import Profile from './Profile';
import Balance from './Balance';
import MenuItem from './MenuItem';
import LoginButtonPage from './LoginButtonPage';

const Account = () => {
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [accessToken]);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  const { alignItems, ...SVStyles } = commonStyles.container;
  const navigator = useNavigation();
  return (
    accessToken
      ? (
        <ScrollView style={SVStyles} contentContainerStyle={{ alignItems }}>
          <>
            <Profile />
            <Balance />
            <MenuItem name="Transactions" onPress={() => navigator.push('Transactions')} />
            <MenuItem name="Logout" color="red" onPress={handleLogOut} />
          </>
        </ScrollView>
      ) : (
        <LoginButtonPage />
      )
  );
};

Account.navigationOptions = {
  title: 'ACCOUNT',
};

export default Account;
