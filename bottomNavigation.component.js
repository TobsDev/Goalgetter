import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const ChallengeIcon = (props) => (
  <Icon {...props} name='trending-up-outline'/>
);
const UserScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USER</Text>
  </Layout>
);

const ChallengesScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>CHALLENGES</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='USER' icon={PersonIcon}/>
    <BottomNavigationTab title='CHALLENGES' icon={ChallengeIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='User' component={UserScreen}/>
    <Screen name='Challenges' component={ChallengesScreen}/>
  </Navigator>
);

export const BottomAppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);