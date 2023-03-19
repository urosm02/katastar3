import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Last6MonthsHappiness() {
    const fake_data = [1.5, 3.2, 4.5, 2.7, 4.2, 3.3];
    return (
        <View style={styles.container}>
            <View>
              <LineChart
                data={{
                  labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
                  datasets: [
                    {
                      data: fake_data
                    }
                  ]
                }}
                width={360} // from react-native
                height={230}
                chartConfig={{
                  backgroundColor: "lightgreen",
                  backgroundGradientFrom: "lightgreen",
                  backgroundGradientTo: "darkgreen",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: () => `rgb(255, 255, 255)`,
                  labelColor: () => `rgb(255, 255, 255)`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "darkgreen"
                  },
                  propsForLabels: {
                      fontWeight: "bold"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 15
                }}
              />
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});