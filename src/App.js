import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NylasSessions } from '@nylas/identity';
import { NylasIdentityRequestWrapper } from '@nylas/react';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const configId = urlParams.get('config_id') || '';
  const componentSettings = {
    authSettings: {
      scopes: {
        google: [
          'openid',
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/contacts',
          'https://www.googleapis.com/auth/calendar',
          'https://www.googleapis.com/auth/directory.readonly'
        ],
        microsoft: [
          'Calendars.ReadWrite',
          'Mail.ReadWrite',
          'Contacts.ReadWrite',
          'User.Read',
          'offline_access'
        ]
      }
    }
  };

  const identitySettings = {
    clientId: clientId,
    redirectUri: `${window.location.origin}/nylas-auth/scheduler-editor`,
    domain: 'https://api.us.nylas.com/v3',
    hosted: true,
    accessType: 'offline'
  };
  const identity = new NylasSessions(identitySettings);
  const nylasApiRequest = new NylasIdentityRequestWrapper(identity);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/hello'
          element={
            <div>
              <h2>Hello world</h2>
            </div>
          }
        ></Route>
        <Route
          path='/nylas-auth/scheduler-editor'
          element={<div>Hi</div>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
