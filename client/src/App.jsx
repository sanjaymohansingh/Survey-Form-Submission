import { Route, Routes } from "react-router-dom";
import SurveyForm from "./pages/SurveyForm";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import SurveyList from "./pages/SurveyList";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/get" element={<SurveyList />} />
        <Route path="/" element={<SurveyForm />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
