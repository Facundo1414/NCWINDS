import { Document, Page, Text, StyleSheet, View, Image } from '@react-pdf/renderer';

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

const PDF_Render = () => (
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
          <Text style={styles.text}>Nombre: John Doe</Text>
          <Text style={styles.text}>Correo: john.doe@example.com</Text>
          <Text style={styles.text}>Nacionalidad: Argentina</Text>
        </View>

        <View style={styles.columnSection}>
          <Image style={styles.qrCode} src="src/assets/QRCode.png"/>
        </View>
      </View>

        <Text style={styles.subTittle}>Información de vuelo</Text>
        <View style={styles.columnContainer}>
          <View style={styles.columnSection}>
            <Text style={styles.text}>Fecha de salida: 01/04/2023</Text>
            <Text style={styles.text}>Hora de salida: 21:00</Text>
            <Text style={styles.text}>Salida: Argentina</Text>
          </View>

          <View style={styles.columnSection}>
            <Text style={styles.text}>Fecha llegada: 02/04/2023</Text>
            <Text style={styles.text}>Hora de llegada: 07:45</Text>
            <Text style={styles.text}>Llegada: Dinamarca</Text>
          </View>
        </View>


        <Text style={styles.subTittle}>Lista de asientos</Text>
          <View  style={styles.seatContainer}>
            <Text style={styles.text}>Pasajero 1</Text>
            <Text style={styles.text}>Asiento: A1</Text>
            <Text style={styles.text}>Clase: Turista</Text>
            <Text style={styles.text}>Precio: $1000</Text>
          </View>

          <View  style={styles.seatContainer}>
            <Text style={styles.text}>Pasajero 2</Text>
            <Text style={styles.text}>Asiento: B2</Text>
            <Text style={styles.text}>Clase: Turista</Text>
            <Text style={styles.text}>Precio: $1000</Text>
          </View>

        <Text style={styles.totalPrice}>Precio total: $2000</Text>
    </Page>
  </Document>
);

export { PDF_Render };