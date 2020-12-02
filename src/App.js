import ContactsContextProvider from './contexts/ContactsContext';
import Routes from './Routes';

function App() {
  return (
    <ContactsContextProvider>
      <Routes />
    </ContactsContextProvider>
  );
}

export default App;
