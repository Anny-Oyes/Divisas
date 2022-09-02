import React from "react";
import { StyleSheet } from 'react-native';
import {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";

export default function Conversor() {
  const [Form, setForm] = useState({
    nacional: "NIO",
    fareign: "USD",
    exchangeRate: "1 NIO = 0. 028 USD",
    resultados: 0,
    Monto: 0,
  });

  const handlerForm = (text: string, input: string) => {
    setForm({
      ...Form,
      [input]: text.toUpperCase(),
    });
  };

  const calcular = () => {
    interface Moneda {
      CordobaADolar: number;
      DolarACordoba: number;
      PesoMexicanoACordoba: number;
      CordobaAPesoMexicano: number;
      DolarAPesoMexicano: number;
      PesoMexicanoADolares: number;
    }

    const costoDeMoneda: Moneda = {
      CordobaADolar: 0.02757,
      DolarACordoba: 36,
      PesoMexicanoACordoba: 1.8,
      CordobaAPesoMexicano: 0.56,
      DolarAPesoMexicano: 19.99,
      PesoMexicanoADolares: 0.05,
    };

    if (isNaN(Form.Monto)) {
      alert("Ingresa un número, para continuar");
      setForm({
        ...Form,
        resultados: 0,
      });
    } else {
      if (Form.nacional === "NIO" && Form.fareign === "USD") {
        const resultados = Form.Monto * costoDeMoneda.CordobaADolar;
        setForm({
          ...Form,
          exchangeRate: `1 NIO = ${costoDeMoneda.CordobaADolar} USD`,
          resultados,
        });
      } else if (Form.nacional === "USD" && Form.fareign === "NIO") {
        const resultados = Form.Monto * costoDeMoneda.DolarACordoba;
        setForm({
          ...Form,
          exchangeRate: `1 USD = ${costoDeMoneda.DolarACordoba} NIO`,
          resultados,
        });
      } else if (Form.nacional === "NIO" && Form.fareign === "MXN$") {
        const resultados = Form.Monto * costoDeMoneda.CordobaAPesoMexicano;
        setForm({
          ...Form,
          exchangeRate: `1 NIO = ${costoDeMoneda.CordobaAPesoMexicano} MXN$`,
          resultados,
        });
      } else if (Form.nacional === "USD" && Form.fareign === "MXN$") {
        const resultados = Form.Monto * costoDeMoneda.DolarAPesoMexicano;
        setForm({
          ...Form,
          exchangeRate: `1 USD = ${costoDeMoneda.DolarAPesoMexicano} MXN$`,
          resultados,
        });
      } else if (Form.nacional === "MXN$" && Form.fareign === "USD") {
        const resultados = Form.Monto * costoDeMoneda.PesoMexicanoADolares;
        setForm({
          ...Form,
          exchangeRate: `1 MXN$ = ${costoDeMoneda.PesoMexicanoADolares} USD`,
          resultados,
        });
      } else if (Form.nacional === "MXN$" && Form.fareign === "NIO") {
        const resultados = Form.Monto * costoDeMoneda.PesoMexicanoACordoba;
        setForm({
          ...Form,
          exchangeRate: `1 MXN$ = ${costoDeMoneda.PesoMexicanoACordoba} NIO`,
          resultados,
        });
      }
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}> Conversiones que se pueden hacer</Text>
      <Text style={style.text}> NIO  /  USD</Text>
      <Text style={style.text}> USD  /  NIO</Text>
      <Text style={style.text}> NIO  /  MXN$</Text>
      <Text style={style.text}> USD  /  MXN$</Text>
      <Text style={style.text}> MXN$  /  USD</Text>
      <Text style={style.text}> MXN$  /  NIO</Text>

      <View>
        <Text style={style.text}> Moneda origen</Text>
        <TextInput
          style={style.input}
          onChangeText={(text) => handlerForm(text, "nacional")}
          value={String(Form.nacional)}
        />
      </View>

      <View>
        <Text style={style.text}> Moneda destino</Text>
        <TextInput
          style={style.input}
          onChangeText={(text) => handlerForm(text, "fareign")}
          value={String(Form.fareign)}
        />
      </View>

      <View>
        <Text style={style.text}> Tasa de cambio </Text>
        <TextInput
          style={style.input}
          onChangeText={(text) => handlerForm(text, "exchangeRate")}
          value={String(Form.exchangeRate)}
        />
      </View>

      <View>
        <Text style={style.text}>Monto</Text>
        <TextInput
          style={style.input}
          onChangeText={(text) => handlerForm(text, "Monto")}
          value={String(Form.Monto)}
        />
      </View>

      <View>
        <Text style={style.text}>Resultados</Text>
        <TextInput style={style.input} editable={false} value={String(Form.resultados)} />
      </View>

      <View>
        <Button title="Calcular" onPress={() => calcular()} />
      </View>
    </View>
  );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        width: 500,
        height: 400,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
       
      },
      title: {
        textAlign: "center",
        marginRight: 0,
        marginVertical: 30,
        fontSize: 22,
      },
    
      text: {
        textAlign: "center",
        margin: 5,
        fontSize: 15,
      },
    
      input: {
        height: 50,
        width: "90%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        padding: 10,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        marginBottom: 15,
        fontSize: 15,
        borderColor: "#769ecb",
      },

      buttonText: {
        height: 30,
        width: "40%",
        color: "white",
        textAlign: "center",
        fontSize: 20,
      },
    });

