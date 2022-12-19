import TicketProvider from './src/context/TicketContext';
import Navigation from './src/Routes/Navigation';

export default function App() {
  return (
    <TicketProvider>
        <Navigation />
    </TicketProvider>
  );
}
