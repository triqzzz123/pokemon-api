import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = (props) => {
  const [pokemenData, setPokemenData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
      });
    } catch (error) {
      isLoading(false);
    }
  };

  //UseEffect
  useEffect(() => {
    fetchData();
  }, [fetchData, isLoading]);

  if (pokemenData.length <= 0) {
    return (
      <div>
        <h1>Is loading</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>pokemon </h1>
    </div>
  );
};

export default Pokemon;
