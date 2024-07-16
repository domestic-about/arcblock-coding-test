import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ProfilePage from './pages/profile';
import HomePage from './pages/home';
import theme from './theme';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Router basename={basename}>
        <App />
      </Router>
    </ChakraProvider>
  );
}
