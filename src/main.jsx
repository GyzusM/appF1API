import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import StoreProvider from './store/StoreProvider.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
        <ThemeProvider>
            <StoreProvider>
                <App />
            </StoreProvider>
        </ThemeProvider>
)
