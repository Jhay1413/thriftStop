import { Route, Routes } from 'react-router';
import { LoginPage } from '../features/login';
import NxWelcome from './nx-welcome';
import { LandingPage } from '../features/landing-page';

export function App() {
  return (
    

   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
   </Routes>
   
  );
}

export default App;
