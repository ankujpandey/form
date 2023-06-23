import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Individual from "./pages/Individual";
import InputForm from "./pages/InputForm";
import UserDetails from "./pages/UserDetails";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<UserDetails />} />
				<Route path="/form" element={<InputForm />} />
				<Route path="/individual/:id" element={<Individual />} />
			</Routes>
		</div>
	);
}

export default App;
