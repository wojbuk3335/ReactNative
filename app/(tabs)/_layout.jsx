import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ color, icon, name, focused }) => {
    return (
        <View className="w-16 items-center justify-center">
            <Image
                source={icon} // Corrected to use the passed `icon` prop
                tintColor={color}
                resizeMode="contain"
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs text-center`}>
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                color={color}
                                focused={focused}
                                icon={icons.home}
                                name="Home"
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="create"
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                color={color}
                                focused={focused}
                                icon={icons.plus}
                                name="Create"
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                color={color}
                                focused={focused}
                                icon={icons.profile}
                                name="Profile"
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="bookmark"
                    options={{
                        title: 'Bookmark',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                color={color}
                                focused={focused}
                                icon={icons.bookmark}
                                name="Bookmark"
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;