import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.returnTo ? appState.returnTo : window.location.pathname
	);
};

createRoot(document.getElementById("root")).render(
	<Auth0Provider
		domain={domain}
		clientId={clientId}
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
		onRedirectCallback={onRedirectCallback}
	>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Auth0Provider>
);
