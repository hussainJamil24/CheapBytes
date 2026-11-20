import { useRouter } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>CheapBytes</Text>

        <Text style={styles.tagline}>Save Food. Save Money.</Text>

        <Text style={styles.description}>
          Discover delicious surplus food from local bakeries, cafés and
          restaurants.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push("/register")}
          >
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.secondaryButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Good food deserves a second chance.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5E8B7",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
  },
  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#84AA91",
    marginBottom: 12,
  },
  tagline: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#CD5C08",
    marginBottom: 18,
  },
  description: {
    fontSize: 16,
    color: "#444444",
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 45,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
  primaryButton: {
    backgroundColor: "#CD5C08",
    padding: 17,
    borderRadius: 14,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#84AA91",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#426650",
    fontSize: 17,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 55,
    color: "#426650",
    fontSize: 13,
  },
});
