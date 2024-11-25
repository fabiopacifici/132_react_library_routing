import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Books from "./pages/Books"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import DefaultLayout from "./pages/DefaultLayout"

function App() {


  return (
    <>
      {/* 👇 Put everything inside the `BroserRouter` component */}
      <BrowserRouter>
        {/* Your  routes list here */}
        {/* Add `Routes` component where nest all routes  */}
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
