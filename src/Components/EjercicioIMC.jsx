import { useState, useEffect } from "react";
import { IMCForm } from "./IMCForm";
import { InfoIMC } from "./InfoIMC";
import 'materialize-css/dist/css/materialize.min.css'

export const EjercicioIMC = () => {
  const [state, setState] = useState([]);
  const [data, setData] = useState({});

  console.log(data);


  useEffect(() => {
    console.log("Se esta ejecutando el useEffect");
    const diaDePesaje = state.map((el) => el.diaDePesaje);
    const imc = state.map((el) => el.imc);

    let nuevaData = { diaDePesaje, imc };

    setData(nuevaData);
  }, [state]);

  const handleChange = (objConValores) => {

    console.log(objConValores);
    console.log(objConValores.altura);
    
    let altura = objConValores.altura / 100;
    
    objConValores.imc = (objConValores.peso / (altura * altura)).toFixed(2);

    console.log(objConValores.imc);
    
    let nuevoValor = [...state, objConValores];
    console.log(nuevoValor);

    let len = nuevoValor.length;

    if (len > 4) {
      nuevoValor = nuevoValor.slice(1, len);
    }

    setState(nuevoValor);
  };

  return (
    <div className="container">
      <div className="row center">
        <h1 className="white-text">✔️Calcula el Indice Masa Corporal✔️</h1>
      </div>
      <div className="row">
        <div className="col m12 s12">
          <IMCForm change={handleChange} />
        </div>
      </div>
      <div className="row center">
        <h2 className="white-text">Datos del último día</h2>
      </div>
      <div className="data-container row">
        {
          state.length > 0 
          ? 
          state.map(info => <InfoIMC key={info.key} peso={info.peso} altura={info.altura} imc={info.imc} diaDePesaje={info.diaDePesaje} horaDePesaje={info.horaDePesaje}/>)
          : 
          <h3 className="white-text center">Ingresa algun dato en los campos requeridos</h3>
        }
      </div>
    </div>
  );
};
