import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
        setRes(json.products);
      });
  }, []);
  const [res, setRes] = useState([]);
  const changeHandler = (e) => {
    setSearchInput(e.target.value);
    setTimeout(() => {
      setRes(
        data.filter((d) =>
          d.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }, 200);
  };
  console.log(res);
  return (
    <div className="App">
      <input value={searchInput} onChange={(e) => changeHandler(e)} />
      {res.map((result) => (
        <p>{result.title}</p>
      ))}
    </div>
  );
}
