import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { usePosts } from "src/hooks";
import { getPosts as fetchPosts } from "src/store/Posts";
import Table from "./components/table";

import Layout from "./pages/Layout";
import Login from "./pages/Login";

//import Table from "./components/table";




function App() {
  const { getPosts } = usePosts();
  const dispatch = useDispatch();

  useEffect(() => {
    let isCalled = false;

    getPosts().then((res) => {
      const payload = res.data;
      if (!isCalled) {
        dispatch(fetchPosts(payload));
      }
      return payload;
    });

    return () => {
      isCalled = true;
    };
  }, [dispatch, getPosts]);

  return (

    <Router>
      <Routes>
        <Route path="/login" element={<Table />} />
        <Route path="/home" element={<Layout />} />
      </Routes>
    </Router>

  );
}

export default App;
