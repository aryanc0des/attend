import { StyleSheet, Text, View, FlatList, Image, } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appColors, appTypography, appSpacing } from "../theme";

const DATA = [
  { enroll_num: "ADT23SESB0301", name: "Aarav Patil" },
  { enroll_num: "ADT23SESB0302", name: "Aditya Kulkarni" },
  { enroll_num: "ADT23SESB0303", name: "Akash Jadhav" },
  { enroll_num: "ADT23SESB0304", name: "Amit Deshmukh" },
  { enroll_num: "ADT23SESB0305", name: "Aniket Shinde" },
  { enroll_num: "ADT23SESB0306", name: "Anuj Patwardhan" },
  { enroll_num: "ADT23SESB0307", name: "Arjun Pawar" },
  { enroll_num: "ADT23SESB0308", name: "Atharva Joshi" },
  { enroll_num: "ADT23SESB0309", name: "Bhavesh More" },
  { enroll_num: "ADT23SESB0310", name: "Chaitanya Kulkarni" },

  { enroll_num: "ADT23SESB0311", name: "Darshan Patil" },
  { enroll_num: "ADT23SESB0312", name: "Gaurav Bhosale" },
  { enroll_num: "ADT23SESB0313", name: "Harshad Mane" },
  { enroll_num: "ADT23SESB0314", name: "Ishan Deshpande" },
  { enroll_num: "ADT23SESB0315", name: "Ketan Sawant" },
  { enroll_num: "ADT23SESB0316", name: "Mahesh Gaikwad" },
  { enroll_num: "ADT23SESB0317", name: "Mayur Kulkarni" },
  { enroll_num: "ADT23SESB0318", name: "Neel Joshi" },
  { enroll_num: "ADT23SESB0319", name: "Nikhil Patil" },
  { enroll_num: "ADT23SESB0320", name: "Omkar Jadhav" },

  { enroll_num: "ADT23SESB0321", name: "Pranav Deshmukh" },
  { enroll_num: "ADT23SESB0322", name: "Rahul Kulkarni" },
  { enroll_num: "ADT23SESB0323", name: "Rohit Pawar" },
  { enroll_num: "ADT23SESB0324", name: "Sachin Patil" },
  { enroll_num: "ADT23SESB0325", name: "Sahil Shinde" },
  { enroll_num: "ADT23SESB0326", name: "Sanket Jadhav" },
  { enroll_num: "ADT23SESB0327", name: "Shubham More" },
  { enroll_num: "ADT23SESB0328", name: "Siddharth Kulkarni" },
  { enroll_num: "ADT23SESB0329", name: "Swapnil Patil" },
  { enroll_num: "ADT23SESB0330", name: "Tanmay Joshi" },

  { enroll_num: "ADT23SESB0331", name: "Tejas Deshpande" },
  { enroll_num: "ADT23SESB0332", name: "Umesh Pawar" },
  { enroll_num: "ADT23SESB0333", name: "Vaibhav Shinde" },
  { enroll_num: "ADT23SESB0334", name: "Vedant Kulkarni" },
  { enroll_num: "ADT23SESB0335", name: "Vikas Patil" },
  { enroll_num: "ADT23SESB0336", name: "Vinayak Jadhav" },
  { enroll_num: "ADT23SESB0337", name: "Yash Deshmukh" },
  { enroll_num: "ADT23SESB0338", name: "Yogesh More" },
  { enroll_num: "ADT23SESB0339", name: "Zubin Shah" },
  { enroll_num: "ADT23SESB0340", name: "Zeeshan Khan" },
];

/* ---------- Student Row ---------- */
function StudentItem({ name, enroll }: { name: string; enroll: string }) {
  return (
    <View style={styles.studentRow}>
      <View style={styles.studentLeft}>
        <View style={styles.checkDot} />
        <Text style={styles.studentName}>{name}</Text>
      </View>
      <Text style={styles.enrollText}>{enroll}</Text>
    </View>
  );
}

export default function LiveSession() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.subject}>Computer Networks</Text>
        <Text style={styles.section}>ECO II</Text>

        <View style={styles.statusRow}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Session Active</Text>
        </View>
      </View>

      {/* Metrics */}
      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <Image
            source={require("../../assets/icons/timer.png")}
            style={styles.metricIcon}
          />
          <View>
            <Text style={styles.metricLabel}>Time Remaining</Text>
            <Text style={styles.metricValue}>0:25</Text>
          </View>
        </View>

        <View style={styles.metricCard}>
          <Image
            source={require("../../assets/icons/students.png")}
            style={styles.metricIcon}
          />
          <View>
            <Text style={styles.metricLabel}>Students Present</Text>
            <Text style={styles.metricValue}>40 / 47</Text>
          </View>
        </View>
      </View>

      {/* Attendance List Card */}
      <View style={styles.attendanceCard}>
        <Text style={styles.listHeader}>Present Students</Text>

        <View style={styles.columnHeader}>
          <Text style={styles.columnHeaderText}>Name</Text>
          <Text style={styles.columnHeaderText}>Enrollment No</Text>
        </View>

        <FlatList
          data={DATA}
          keyExtractor={(item) => item.enroll_num}
          renderItem={({ item }) => (
            <StudentItem name={item.name} enroll={item.enroll_num} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Students must be in proximity to mark attendance
      </Text>
    </SafeAreaView>
  );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
    paddingHorizontal: appSpacing.lg,
  },

  /* Header */
  header: {
    alignItems: "center",
    marginTop: appSpacing.lg,
    marginBottom: appSpacing.xl,
  },

  subject: {
    ...appTypography.headingL,
    color: appColors.textPrimary,
    marginBottom: appSpacing.xs,
  },

  section: {
    ...appTypography.body,
    color: appColors.textSecondary,
    marginBottom: appSpacing.sm,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: appSpacing.sm,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: appColors.success,
    marginRight: appSpacing.xs,
  },

  statusText: {
    ...appTypography.caption,
    color: appColors.textSecondary,
  },

  /* Metrics */
  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: appSpacing.lg,
  },

  metricCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: appSpacing.sm,

    backgroundColor: appColors.surface,
    borderRadius: 16,
    padding: appSpacing.md,
    marginHorizontal: appSpacing.xs,

    borderWidth: 1,
    borderColor: appColors.divider,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  metricIcon: {
    width: 20,
    height: 20,
    tintColor: appColors.textSecondary,
    opacity: 0.7,
  },

  metricLabel: {
    ...appTypography.caption,
    color: appColors.textSecondary,
    paddingBottom: appSpacing.sm,
  },

  metricValue: {
    ...appTypography.headingL,
    color: appColors.textPrimary,
  },

  /* Attendance Card */
  attendanceCard: {
    backgroundColor: appColors.surface,
    borderRadius: 16,
    padding: appSpacing.md,
    marginTop: appSpacing.sm,

    borderWidth: 1,
    borderColor: appColors.divider,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    height: '60%'
  },

  listHeader: {
    ...appTypography.caption,
    color: appColors.textSecondary,
    marginBottom: appSpacing.sm,
  },

  columnHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: appSpacing.xs,
    marginBottom: appSpacing.xs,
  },

  columnHeaderText: {
    ...appTypography.caption,
    color: appColors.textSecondary,
  },

  studentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: appSpacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: appColors.divider,
  },

  studentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: appColors.success,
    marginRight: appSpacing.sm,
  },

  studentName: {
    ...appTypography.body,
    color: appColors.textPrimary,
  },

  enrollText: {
    ...appTypography.caption,
    color: appColors.textSecondary,
  },

  /* Footer */
  footerText: {
    ...appTypography.caption,
    color: appColors.textSecondary,
    textAlign: "center",
    marginTop: appSpacing.lg,
    marginBottom: appSpacing.lg,
  },
});