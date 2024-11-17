import { useState } from "react";

function Form({ data, setData }) {
  const [inputData, setInputData] = useState({
    nombre: "",
    precio: "",
    categoria: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id: data.length + 1,
      ...inputData,
    };

    setData((values) => [...values, newProduct]);
  }

  return (
    <div className="tableForm">
      <form onSubmit={handleSubmit}>
        <h3>Agrega un producto:</h3>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={inputData.nombre}
          onChange={handleInputChange}
          required
        />
        <label>Precio</label>
        <input
          type="number"
          name="precio"
          value={inputData.precio}
          onChange={handleInputChange}
          required
        />
        <label>Categoría</label>
        <input
          type="text"
          name="categoria"
          value={inputData.categoria}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default Form;
