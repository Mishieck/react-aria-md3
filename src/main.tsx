import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'material-icons/iconfont/material-icons.css';
import { AppProvider } from './providers/app.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>
);
