import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';

const App = () => {
  const textLine = [
    {
      id: 1,
      text: 'Electronics',
    },
    {
      id: 4,
      text: 'Fashion',
    },
    {
      id: 5,
      text: 'Electronics',
    },
    {
      id: 6,
      text: 'Sports',
    },
    {
      id: 7,
      text: 'Newsletter',
    },
    {
      id: 8,
      text: 'Shoes',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('./src/aesstes/icons/arrow-left-icon-2048x1433-le08mlmd.png')} />
        <Text style={styles.text}>Flash Sale</Text>
        <Image style={styles.image} source={require('./src/aesstes/icons/remove.png')} />
      </View>
      <View style={styles.loop}>
        <View style={styles.wrapper}>
          <View style={styles.section}>
            <Text style={styles.new}>New Arrivals</Text>
            <Text style={styles.sale}>Sale upto 60% off</Text>
            <Text style={styles.june}>25-30 June</Text>
          </View>
          <Image style={styles.img} source={require('./src/aesstes/images/shoe.png')} />
        </View>
      </View>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {textLine.map(item => (
          <Text key={item.id} style={styles.max}>{item.text}</Text>
        ))}
      </ScrollView>
      <View style={styles.middle}>
        <View style={styles.middleWrapper}>
          <View style={styles.swbah}>
            <Image style={styles.gellary} source={require('./src/aesstes/images/shirt.jpg')} />
          </View>
          <View style={styles.center}>
            <Text style={styles.newe}>HoMen Regular Shirt</Text>
            <View>
              <Text style={styles.newl}>Buy</Text>
            </View>
            <Text style={styles.newa}>$100</Text>
            <Text style={styles.newx}>$50.00</Text>
            <Text style={styles.newv}>346 Sold</Text>
          </View>
        </View>
        <View style={styles.middleWrapper}>
          <View style={styles.swbah}>
            <Image style={styles.gellary} source={require('./src/aesstes/images/shirt.jpg')} />
          </View>
          <View style={styles.center}>
            <Text style={styles.newe}>HoMen Regular Shirt</Text>
            <View>
              <Text style={styles.newl}>Buy</Text>
            </View>
            <Text style={styles.newa}>$100</Text>
            <Text style={styles.newx}>$50.00</Text>
            <Text style={styles.newv}>346 Sold</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 70,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  loop: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '87%',
    borderRadius: 15,
    height: '25%',
    marginLeft: 25,
    backgroundColor: '#FBE8E7',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    width: '95%',
  },
  img: {
    width: 240,
    height: 200,
    borderRadius: 10,
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 30,
  },
  new: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  sale: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#EBA352',
    marginTop: 6,
  },
  june: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginTop: 6,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 130,
    textAlign: 'center',
  },
  argintina: {
    flex: 3,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '87%',
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 20,
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  max: {
    padding: 10,
    width: 120,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2d2d2d',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#333333',
    margin: 5,
    height: 40,
  },
  middle: {
    flex: 3,
    padding: 20,
    borderRadius: 10,
    width: '45%',
    marginTop: -40,
    marginBottom: 20,
    flexDirection: 'column', // <-- Corrected
    height: '45%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleWrapper: {
    // flex: ,
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  center: {
    flex: 3,
    padding: 20,
    borderRadius: 10,
    width: '45%',
    marginTop: 30,
    marginBottom: 20,
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gellary: {
    width: 130,
    height: 190,
    marginTop: -40,
    borderRadius: 10,
  },
  swbah: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    width: '45%',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newe: {
    width: 300,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginLeft: 400,
  },
  newa: {
    width: 300,
    fontSize: 17,
    marginLeft: 400,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  newx: {
    width: 300,
    fontSize: 25,
    marginLeft: 400,
    fontWeight: 'bold',
    color: '#EBA352',
  },
  newv: {
    width: 200,
    fontSize: 15,
    marginLeft: 300,
    fontWeight: 'bold',
    color: '#2d2d2d',
    backgroundColor: '#2d2d2d',
    writingDirection: 1,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    borderRadius: 10,
    padding: 2,
  },
  newl: {
    width: 100,
    fontSize: 20,
    marginLeft: 400,
    fontWeight: 'bold',
    color: '#2d2d2d',
    backgroundColor: '#2d2d2d',
    writingDirection: 1,
    marginBottom: 10,
    height: 40,
    color: 'white',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 40,
    padding: 2,
    margin: 5,
    marginTop: 20,
  },
});

export default App;
