// App.jsx
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users"; //İstifadə ediləcək API ünvanını təyin edirik:

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  //API-dan məlumat almaq üçün getData adlı asinxron funksiyanı təyin edirik:
  const getData = async () => {
    try {
      const response = await axios(BASE_URL);
      console.log(response.data);
      setName(response.data[0].name);
      setUserName(response.data[0].username); // Düzəliş: 'username', 'userName' deyil
    } catch (err) {
      console.error(err);
    }
  };

  //məlumatları çəkmək üçün useEffect hook-nu istifadə edirik:
  useEffect(() => {
    getData();
  }, []);
  //Komponentin render olunması üçün JSX təyin edirik:
  return (
    <div className="App">
      <h1>Ad: {name}</h1>
      <h2>İstifadəçi Adı: {userName}</h2>
    </div>
  );
}

export default App;
