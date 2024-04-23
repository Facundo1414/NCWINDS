import React from "react";
import { Document, Text, Page, StyleSheet, Image } from '@react-pdf/renderer';


const PDF_Render =()=>{

  return(
    <Document>
      <Page>
        <Text>Hello World</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt magni ipsam rerum quae officiis hic! Totam sapiente aspernatur adipisci ullam, voluptatum, non sequi optio fugit laboriosam aliquid fuga. Accusantium, saepe!</Text>
      </Page>
    </Document>
  );
}

export { PDF_Render };