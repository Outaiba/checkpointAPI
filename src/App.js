import "./App.css";
import Header from "./component/Header";
import Person from "./component/Person";
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [persons, setpersons] = useState([]);
  useEffect(() => {
    try {
      let result = axios
        .get("http://jsonplaceholder.typicode.com/users")
        .then((res) => setpersons(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="list">
        {persons.length ? (
          persons.map((el) => <Person user={el} />)
        ) : (
          <img src="https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif" />
        )}
      </div>
    </div>
  );
};

export default App;
