import { StyleSheet, View, Image, Text, Animated, Easing } from 'react-native'
import { appColors, appTypography, appSpacing } from "../theme";
import React, { useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function AttendanceSuccess() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start();
    }, []);
 
    const navigation = useNavigation();

    useEffect(() => {
    const timer = setTimeout(() => {
        navigation.replace("Home");
    }, 1800);

    return () => clearTimeout(timer);
    }, []);

    return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Image
        source={require("../../assets/icons/check.png")}
        style={styles.tick}
        />

        <Text style={styles.primaryText}>Attendance marked successfully</Text>

        <Text style={[styles.secondaryText, { marginBottom: appSpacing.xs }]}>Subject: Computer Networks</Text>

        <Text style={styles.secondaryText}>10:30 AM</Text>

        <Text style={styles.tertiaryText}>Recorded securely</Text>
    </Animated.View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: appSpacing.lg,
  },

  tick: {
    width: 60,
    height: 60,
    tintColor: appColors.success,
    marginBottom: appSpacing.md,
  },

  primaryText: {
    ...appTypography.headingL,
    color: appColors.textPrimary,
    textAlign: "center",
    marginBottom: appSpacing.sm,
  },

  secondaryText: {
    ...appTypography.body,
    color: appColors.textSecondary,
    textAlign: "center",
  },

  tertiaryText: {
    ...appTypography.caption,
    color: appColors.textSecondary,
    textAlign: "center",
    marginTop: appSpacing.md,
  },
});