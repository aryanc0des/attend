import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appSpacing, appColors, appTypography } from "../theme";
import React from "react";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={require("../../assets/icons/logo1.png")}
          style={styles.logo}
        />
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={require("../../assets/icons/home.png")}
            style={styles.homeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Identity Card */}
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AG</Text>
        </View>

        <Text style={styles.name}>Aryan Ravindra Goli</Text>
        <Text style={styles.subText}>ADT23SESB0357</Text>

        <View style={styles.divider} />

        <Text style={styles.infoText}>
          Electronics & Computer Engineering
        </Text>
        <Text style={styles.infoText}>Third Year (TY)</Text>
      </View>

      {/* Actions Card */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Log Out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryAction}>
          <Text style={styles.secondaryText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },

  /* Top Bar */
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: appSpacing.lg,
    paddingVertical: appSpacing.sm,
    marginBottom: appSpacing.lg
  },

  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },

  homeIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },

  /* Card Base */
  card: {
    backgroundColor: appColors.surface,
    marginHorizontal: appSpacing.lg,
    marginTop: appSpacing.lg,
    borderRadius: 16,
    padding: appSpacing.lg,

    borderWidth: 1,
    borderColor: "#111111",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,

    alignItems: "center",
  },

  /* Avatar */
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: appSpacing.md,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "600",
  },

  /* Text */
  name: {
    ...appTypography.headingL,
    color: appColors.textPrimary,
    marginBottom: appSpacing.xs,
  },

  subText: {
    ...appTypography.caption,
    color: appColors.textSecondary,
    marginBottom: appSpacing.md,
  },

  infoText: {
    ...appTypography.body,
    color: appColors.textSecondary,
    marginBottom: appSpacing.xs,
  },

  divider: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#111111",
    marginVertical: appSpacing.md,
  },

  /* Actions */
  actionButton: {
    width: "100%",
    backgroundColor: appColors.danger,
    paddingVertical: appSpacing.sm,
    borderRadius: 8,
    borderColor: "#111111",
    borderWidth: 1,
    alignItems: "center",
    marginBottom: appSpacing.sm,
  },

  actionText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  secondaryAction: {
    paddingVertical: appSpacing.sm,
  },

  secondaryText: {
    ...appTypography.caption,
    color: appColors.textSecondary,
  },
});