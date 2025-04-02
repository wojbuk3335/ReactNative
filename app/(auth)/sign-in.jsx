import CustomButton from "@/components/CustomButton";
import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import {Link} from "expo-router";

import { images } from "@/constants";

const SignIn = () => {
    const [form,setForm] = React.useState({
        email: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const submit = () => {
        setIsSubmitting(true);
        console.log("Form submitted:", form);
        // Add your form submission logic here
        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000); // Simulate a delay for demonstration
    }

  return (
    <>
      <SafeAreaView className="bg-primary h-full">
        <View className="flex-1 justify-center items-center">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold text-center">
            Log in to Aora
          </Text>
          <FormField 
            title="Email"
            valued={form.email}
            handleChangeText={(value) => setForm({ ...form, email: value })}
            otherStyles='mt-7 justify-center items-center'
            keybordType="email-address"
            />
          <FormField 
            title="Password"
            valued={form.password} 
            handleChangeText={(value) => setForm({ ...form, password: value })}  
            otherStyles='mt-7 justify-center items-center' 
        />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
