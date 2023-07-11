import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const domain = "dev-kwwblh1qwdip54ij.uk.auth0.com";
const clientId = "SsxO9vdIdy1wMTC8iBH1GAL2riST4MpU";

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
