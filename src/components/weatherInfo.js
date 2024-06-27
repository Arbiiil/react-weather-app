import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WeatherInfo = ({ weatherData }) => {
    return (
      <View style={styles.marginTop20}>
        <Text style={styles.text}>The weather of {weatherData.name}</Text>
        <Text style={[styles.marginTop20, styles.temperature]}>
          {weatherData.main.temp}°C
        </Text>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Image
            source={{
              uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
            }}
            style={styles.weatherIcon}
          />
          <Text style={[styles.bold, styles.marginLeft]}>
            {weatherData.weather[0].main}
          </Text>
        </View>
        <Text style={styles.text}>{weatherData.weather[0].description}</Text>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Text style={[styles.text, styles.bold]}>visibility :</Text>
          <Text style={[styles.marginLeft, styles.text]}>
            {weatherData.visibility} km
          </Text>
        </View>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
          <Text style={[styles.marginLeft, styles.text]}>
            {weatherData.wind.speed} m/s
          </Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    marginTop20: {
      marginTop: 20,
    },
    marginLeft: {
      marginLeft: 15,
    },
    text: {
      textAlign: "center",
      fontSize: 16,
    },
    rowContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    temperature: {
      fontWeight: "700",
      fontSize: 80,
      textAlign: "center",
    },
    bold: {
      fontWeight: "700",
    },
    weatherIcon: {
      width: 50,
      height: 50,
    },
  });
  
  export default WeatherInfo;