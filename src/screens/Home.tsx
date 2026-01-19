import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { appSpacing, appColors, appTypography } from "../theme";
import React from 'react'
import { useState } from 'react';


export default function Home() {

    const [showEnterCodeOverlay, setShowEnterCodeOverlay] = useState(false)

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.topBar}>
            <TouchableOpacity activeOpacity={0.7}>
                <Image source={require('../../assets/icons/logo1.png')} style={styles.logo}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
                <Image source={require('../../assets/icons/user-2.png')} style={styles.profile}/>
            </TouchableOpacity>
        </View>
        <ScrollView>
            <View style={styles.scanContainer}>
                <View style={styles.scanCard}>
                    <View style={styles.scanOutline}>
                        <View style={[styles.corner, styles.topLeft]} />
                        <View style={[styles.corner, styles.topRight]} />
                        <View style={[styles.corner, styles.bottomLeft]} />
                        <View style={[styles.corner, styles.bottomRight]} />
                        <TouchableOpacity activeOpacity={0.7} style={styles.scanContent}>
                            <Image source={require('../../assets/icons/qr-code.png')} style={styles.qr}/>
                            <Text style={styles.scanText}>Tap to scan </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setShowEnterCodeOverlay(true)}>
                        <View style={styles.enterCode}>
                            <Text style={styles.enterCodeText}>Enter Code</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.proximityText}>Requires proximity to professor</Text>
                </View>
                <Modal
                visible={showEnterCodeOverlay}
                transparent
                animationType="fade"
                onRequestClose={() => setShowEnterCodeOverlay(false)}
                >
                    <TouchableOpacity
                        style={styles.modalOverlay}
                        activeOpacity={1}
                        onPress={() => setShowEnterCodeOverlay(false)}
                    >
                        <TouchableOpacity
                        activeOpacity={1}
                        style={styles.modalCard}
                        >
                        <Text style={styles.modalTitle}>Enter Session Code</Text>

                        <TextInput
                            placeholder="e.g. ATT-92KQ"
                            placeholderTextColor={appColors.textSecondary}
                            style={styles.codeInput}
                            autoCapitalize="characters"
                            autoCorrect={false}
                            maxLength={8}
                        />

                            <TouchableOpacity activeOpacity={0.8}>
                                <View style={styles.markButton}>
                                <Text style={styles.markButtonText}>Mark My Attendance</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setShowEnterCodeOverlay(false)}
                                style={styles.cancelBtn}
                            >
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            </View>
            <View style={styles.analyticsContainer}>
                <View style={styles.analyticsCard}>
                    <Text style={styles.analyticsTitle}>Your Attendance</Text>

                    {/* Hero Metric */}
                    <Text style={styles.attendancePercent}>82%</Text>
                    <Text style={styles.analyticsSubtitle}>Overall attendance this semester</Text>

                    <View style={styles.analyticsDivider} />

                    {/* Supporting Info */}
                    <View style={styles.analyticsRow}>
                        <Text style={styles.analyticsRowLabel}>Classes attended</Text>
                        <Text style={styles.analyticsRowValue}>128 / 156</Text>
                    </View>

                    <View style={styles.analyticsRow}>
                        <Text style={styles.analyticsRowLabel}>Last marked</Text>
                        <Text style={styles.analyticsRowValue}>CN · Today 10:32 AM</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: appSpacing.lg,
    paddingVertical: appSpacing.sm,
  },

  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },

  profile: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },

  scanCard: {
    width: '90%',
    height: 410,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    backgroundColor: appColors.surface,
    paddingTop: 10
  },

  scanContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: appSpacing.lg
  },

qr: {
  width: 200,
  height: 200,
  opacity: 0.45, 
  resizeMode: "contain",
  marginBottom: appSpacing.sm,
},

  scanOutline: {
    width: 250,
    height: 250,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: appSpacing.lg,
},
scanText: {
  ...appTypography.body,
  color: appColors.textPrimary,
},

scanContent: {
  justifyContent: "center",
  alignItems: "center",
},

corner: {
  position: "absolute",
  width: 28,
  height: 28,
  borderColor: "#000",
},

topLeft: {
  top: 0,
  left: 0,
  borderTopWidth: 2,
  borderLeftWidth: 2,
  borderTopLeftRadius: 6,
},

topRight: {
  top: 0,
  right: 0,
  borderTopWidth: 2,
  borderRightWidth: 2,
  borderTopRightRadius: 6,
},

bottomLeft: {
  bottom: 0,
  left: 0,
  borderBottomWidth: 2,
  borderLeftWidth: 2,
  borderBottomLeftRadius: 6,
},

bottomRight: {
  bottom: 0,
  right: 0,
  borderBottomWidth: 2,
  borderRightWidth: 2,
  borderBottomRightRadius: 6,
},

  enterCode: {
    backgroundColor: '#111111',
    width: 170,
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom: appSpacing.
  },
  
  enterCodeText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  proximityText: {
    paddingTop: 15,
    color: appColors.textSecondary,
    fontWeight: 'bold'
  },

  modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.35)",
  justifyContent: "center",
  alignItems: "center",
  padding: appSpacing.lg,
},

modalCard: {
  width: "100%",
  maxWidth: 320,
  backgroundColor: appColors.surface,
  borderRadius: 16,
  padding: appSpacing.lg,

  shadowColor: "#000",
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.15,
  shadowRadius: 20,
  elevation: 6,
},

modalTitle: {
  ...appTypography.headingL,
  color: appColors.textPrimary,
  textAlign: "center",
  marginBottom: appSpacing.md,
},

codeInput: {
  height: 48,
  borderWidth: 1,
  borderColor: appColors.divider,
  borderRadius: 8,
  paddingHorizontal: appSpacing.md,
  fontSize: 16,
  color: appColors.textPrimary,
  marginBottom: appSpacing.lg,
},

markButton: {
  backgroundColor: "#111111",
  height: 48,
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
},

markButtonText: {
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: 16,
},

cancelBtn: {
  marginTop: appSpacing.md,
  alignItems: "center",
},

cancelText: {
  ...appTypography.caption,
  color: appColors.textSecondary,
},

analyticsContainer: {
  justifyContent: "center",
  alignItems: "center",
  paddingTop: appSpacing.lg,
  paddingBottom: appSpacing.xl,
},

analyticsCard: {
  width: "90%",
  backgroundColor: appColors.surface,
  borderRadius: 20,
  padding: appSpacing.lg,

  borderWidth: 2,
  borderColor: "#000",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.06,
  shadowRadius: 14,
  elevation: 3,
},

analyticsTitle: {
  ...appTypography.caption,
  color: appColors.textSecondary,
  marginBottom: appSpacing.sm,
},

attendancePercent: {
  fontSize: 36,
  fontWeight: "700",
  color: appColors.textPrimary,
  marginBottom: appSpacing.xs,
},

analyticsSubtitle: {
  ...appTypography.body,
  color: appColors.textSecondary,
  marginBottom: appSpacing.lg,
},

analyticsDivider: {
  height: 1,
  backgroundColor: appColors.divider,
  marginBottom: appSpacing.md,
},

analyticsRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: appSpacing.sm,
},

analyticsRowLabel: {
  ...appTypography.body,
  color: appColors.textSecondary,
},

analyticsRowValue: {
  ...appTypography.body,
  color: appColors.textPrimary,
  fontWeight: "500",
},
});