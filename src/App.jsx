import Root from './rooter/Root';
import AuthProvider from './context/AuthContext'
function App() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>       
  );
}

export default App;
