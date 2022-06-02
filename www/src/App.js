import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Components/Navigation';
import { AppContext } from './Contexts/AppContext';

import DisplayConfigPage from './Pages/DisplayConfig';
import HomePage from './Pages/HomePage';
import LEDConfigPage from './Pages/LEDConfigPage';
import PinMappingPage from "./Pages/PinMapping";
import ResetSettingsPage from './Pages/ResetSettingsPage';
import SettingsPage from './Pages/SettingsPage';

import './App.scss';
import { loadButtonLabels } from './Services/Storage';

const App = () => {
	const [buttonLabels, setButtonLabels] = useState(loadButtonLabels() ?? 'gp2040');

	const appData = {
		buttonLabels,
		setButtonLabels,
	};

	return (
		<AppContext.Provider value={appData}>
			<Router>
				<Navigation />
				<div className="container-fluid body-content">
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/settings">
							<SettingsPage />
						</Route>
						<Route path="/pin-mapping">
							<PinMappingPage />
						</Route>
						<Route path="/reset-settings">
							<ResetSettingsPage />
						</Route>
						<Route path="/led-config">
							<LEDConfigPage />
						</Route>
						<Route path="/display-config">
							<DisplayConfigPage />
						</Route>
					</Switch>
				</div>
			</Router>
		</AppContext.Provider>
	);
}

export default App;
