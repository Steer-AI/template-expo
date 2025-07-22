import { Stack } from 'expo-router';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import type {
  AdaptiveSearchHeaderProps,
  NativeStackNavigationOptions,
  NativeStackNavigationSearchBarOptions,
} from './types';

import { useColorScheme } from '@/lib/useColorScheme';

export function AdaptiveSearchHeader(props: AdaptiveSearchHeaderProps) {
  const { colors } = useColorScheme();
  const [isFocused, setIsFocused] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <Stack.Screen
        options={propsToScreenOptions(props, colors.background, setIsFocused, setSearchValue)}
      />
      {props.searchBar?.content && (isFocused || searchValue.length > 0) && (
        <Animated.View
          entering={FadeIn.delay(100).duration(200)}
          exiting={FadeOut}
          style={StyleSheet.absoluteFill}
          className="z-[99999]">
          <Animated.View entering={FadeIn.delay(200).duration(400)} style={StyleSheet.absoluteFill}>
            {props.searchBar?.content}
          </Animated.View>
        </Animated.View>
      )}
    </>
  );
}

function propsToScreenOptions(
  props: AdaptiveSearchHeaderProps,
  backgroundColor: string,
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
): NativeStackNavigationOptions {
  return {
    headerLargeTitle: props.iosIsLargeTitle,
    headerBackButtonMenuEnabled: props.iosBackButtonMenuEnabled,
    headerBackTitle: props.iosBackButtonTitle,
    headerBackTitleStyle: props.headerBackTitleStyle,
    headerBackVisible: props.iosBackVisible,
    headerLargeTitleShadowVisible: props.shadowVisible,
    headerBlurEffect:
      props.iosBlurEffect === 'none' ? undefined : (props.iosBlurEffect ?? 'systemMaterial'),
    headerShadowVisible: props.shadowVisible,
    headerLeft: props.leftView
      ? (headerProps) => (
          <View className="flex-row justify-center gap-4">{props.leftView!(headerProps)}</View>
        )
      : undefined,
    headerRight: props.rightView
      ? (headerProps) => (
          <View className="flex-row justify-center gap-4">{props.rightView!(headerProps)}</View>
        )
      : undefined,
    headerShown: props.shown,
    headerTitle: props.iosTitle,
    headerTransparent: props.iosBlurEffect !== 'none',
    headerLargeStyle: { backgroundColor: props.backgroundColor ?? backgroundColor },
    headerStyle:
      props.iosBlurEffect === 'none'
        ? { backgroundColor: props.backgroundColor ?? backgroundColor }
        : undefined,
    headerSearchBarOptions: {
      autoCapitalize: props.searchBar?.autoCapitalize,
      cancelButtonText: props.searchBar?.iosCancelButtonText,
      hideWhenScrolling: props.searchBar?.iosHideWhenScrolling ?? false,
      inputType: props.searchBar?.inputType,
      tintColor: props.searchBar?.iosTintColor,
      onBlur: () => {
        setIsFocused(false);
        props.searchBar?.onBlur?.();
      },
      onCancelButtonPress: props.searchBar?.onCancelButtonPress,
      onChangeText: (event) => {
        const text = event.nativeEvent.text;
        setSearchValue(text);
        if (props.searchBar?.onChangeText) {
          props.searchBar?.onChangeText(event.nativeEvent.text);
        }
      },
      onFocus: () => {
        setIsFocused(true);
        props.searchBar?.onFocus?.();
      },
      onSearchButtonPress: props.searchBar?.onSearchButtonPress,
      placeholder: props.searchBar?.placeholder ?? 'Search...',
      ref: props.searchBar?.ref as NativeStackNavigationSearchBarOptions['ref'],
      textColor: props.searchBar?.textColor,
    },
    ...props.screen,
  };
}
