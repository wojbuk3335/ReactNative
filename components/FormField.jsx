import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity, Image } from "react-native";
import { useState } from "react";

import { icons } from "../constants";

const FormField = ({
  otherStyles,
  title,
  value,
  placeholder,
  handleChangeText,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium justify-center ">
        {title}
      </Text>
      <View
        className={`w-full h-16 px-4 bg-black-100 rounded-2xl border-2 ${
          isFocused ? "border-secondary" : "border-black-200"
        } flex flex-row items-center`}
      >
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
