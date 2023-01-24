import TicketProvider from './src/context/TicketContext';
import Navigates from './src/Routes';

export default function App() {
  return (
    <TicketProvider>
        <Navigates />
    </TicketProvider>
  );
}
