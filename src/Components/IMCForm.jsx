import { useState } from "react"; 

const valoresIniciales = {
  peso: "",
  altura: "",
  diaDePesaje: "",
  horaDePesaje: "",
  key: ""
}


export const IMCForm = ({change}) => {

  const [state, setState] = useState(valoresIniciales);

  const handleChange = (e) => {
    let {value, name} = e.target

    if (value > 500) {
      value = 500
    }

    const diaDePesaje = new Date().toLocaleString().split(",")[0]

    setState({
      ...state,
      [name]: value,
      diaDePesaje,
      horaDePesaje: new Date().toLocaleString().split(",")[1],
      key: new Date().getTime()
    })
  }

  const handleSubmit = () => {
    change(state)
    setState(valoresIniciales)
  }

  return (
    <div>
      <div className="row">
          <div className="col m6 s12">
            <label htmlFor="peso">Peso en Kg</label>
            <input 
              type="number" 
              id="peso" 
              name="peso" 
              min="1"
              max="500"
              placeholder="150"
              value={state.peso}
              onChange={handleChange}
              autoFocus={true}
              />
          </div>

          <div className="col m6 s12">
            <label htmlFor="altura">Altura en CM</label>
            <input 
              type="number" 
              id="altura" 
              name="altura" 
              min="1"
              max="200"
              placeholder="150"
              value={state.altura}
              onChange={handleChange}
              />
          </div>
      </div>

          <div className="center">
            <button 
              className="btn"
              type="button" 
              disabled={state.peso === "" || state.altura === ""} 
              onClick={handleSubmit}>
                Calcula tu IMC
              </button>
          </div>
    </div>
  )
}

