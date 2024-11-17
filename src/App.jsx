import { useEffect, useState } from "react";
import mockData from "./utils/mockData";
import "./App.css";
import { CircularProgress } from "@mui/material";
import Table from "./components/table";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);
  const [tableIsLoading, setTableIsLoading] = useState(true);

  useEffect(() => {
    const loadData = setTimeout(() => {
      setData([...mockData]);
      setTableIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadData);
    };
  }, []);

  return (
    <>
      <div className="main-container">
        <Table data={data}></Table>
        {tableIsLoading ? <CircularProgress /> : null}
        <Form data={data} setData={setData}></Form>
      </div>
    </>
  );
}

export default App;
