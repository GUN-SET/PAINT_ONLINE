import './styles/app.scss'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Components from "./components/Components";

const App = () => {
	return (
		<BrowserRouter>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Navigate to={`f${(+new Date()).toString(16)}`}/>}/>
					<Route path={':id'} element={<Components/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
