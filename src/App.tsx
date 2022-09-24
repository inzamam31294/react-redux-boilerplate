import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { usePosts } from "src/hooks";
import { getPosts as fetchPosts } from "src/store/Posts";

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
      </Routes>
    </Router>

  );
}

export default App;
