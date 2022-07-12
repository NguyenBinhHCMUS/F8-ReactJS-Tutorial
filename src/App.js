import React, { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch("https://reqres.in/api/users");

  if (error) {
    return "Something wrong!!!";
  }
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    users.map((user) => (
      <p>
        {user.first_name} {users.last_name}
      </p>
    ))
  );
}

export default App;
