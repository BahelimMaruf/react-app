import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import { store } from './app/store.jsx';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';

// let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

