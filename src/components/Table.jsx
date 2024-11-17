function Table({ data }) {
  return (
    <div className="data-table">
      <table>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
        </tr>
        <tbody>
          {/* Iterar sobre los productos y mostrarlos */}
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>{item.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
