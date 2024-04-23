import { Document, Page, Text, StyleSheet, View, Image } from '@react-pdf/renderer';
import { useState, useEffect } from 'react';


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 45,
  },
  header: {
    fontSize: 42,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  tittle: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTittle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
  },
  columnContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  columnSection:{
    flexGrow: 1,
  },
  qrCode: {
    width: 150,
    height: 150,
  },
  seatContainer: {
    padding: 10,
  },
  totalPrice: {
    fontSize: 20,
    marginVertical: 20,
  }
});


const PDF_Render = ({ reserva, vueloSeleccionado, listaAsientos }) => {
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    listaAsientos.forEach(seat => {
        price += parseInt(seat.seatPrice);
    });
    setFinalPrice(price);
}, [listaAsientos]);


  const name = reserva.name + " " + reserva.lastName;
  const nacionalidad = reserva.residenceCountry;

  const fechaSalida = vueloSeleccionado.dateOfOrigin;
  const horaSalida = vueloSeleccionado.departureTime;
  const lugarOrigen = vueloSeleccionado.origin;

  const fechaLlegada = vueloSeleccionado.dateOfDestiny;
  const horaLlegada = vueloSeleccionado.arrivalTime;
  const lugarLlegada = vueloSeleccionado.destiny;


  return(
    <Document>
      <Page style={styles.body}>
        <View style={styles.header}>
          <Text>FlyAirlines</Text>
        </View>
        <View style={styles.tittle}>
          <Text>Recibo de compra electrónico: 000001</Text>
        </View>

        <View style={styles.columnContainer}>
          <View style={styles.columnSection}>
            <Text style={styles.subTittle}>Cliente</Text>
            <Text style={styles.text}>Nombre: {name}</Text>
            {/* <Text style={styles.text}>Correo: john.doe@example.com</Text> */}
            <Text style={styles.text}>Nacionalidad: {nacionalidad}</Text>
          </View>

          <View style={styles.columnSection}>
            <Image style={styles.qrCode} src="src/assets/QRCode.png"/>
          </View>
        </View>

          <Text style={styles.subTittle}>Información de vuelo</Text>
          <View style={styles.columnContainer}>
            <View style={styles.columnSection}>
              <Text style={styles.text}>Fecha de salida: {fechaSalida}</Text>
              <Text style={styles.text}>Hora de salida: {horaSalida}</Text>
              <Text style={styles.text}>Salida: {lugarOrigen}</Text>
            </View>

            <View style={styles.columnSection}>
              <Text style={styles.text}>Fecha llegada: {fechaLlegada}</Text>
              <Text style={styles.text}>Hora de llegada: {horaLlegada}</Text>
              <Text style={styles.text}>Llegada: {lugarLlegada}</Text>
            </View>
          </View>


          <Text style={styles.subTittle}>Lista de asientos</Text>

          {listaAsientos.map((value, index) => { 

            return(             
              <View  style={styles.seatContainer}>
                <Text style={styles.text}>Pasajero {index}</Text>
                <Text style={styles.text}>Asiento: {value.seatNumber}</Text>
                <Text style={styles.text}>Clase: Turista</Text>
                <Text style={styles.text}>Precio: {value.seatPrice}</Text>
              </View>
            );
          })}

          <Text style={styles.totalPrice}>Precio total: ${finalPrice}</Text>
      </Page>
    </Document>
  );
};

export { PDF_Render };