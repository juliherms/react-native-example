import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

// no JSX os componentes sempre devem ter letra maiúscula
// para criar componentes a extensao sempre tem que ser .tsx
// no react native o flex box já é ativado
export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent />
      <Home />
    </>
  );
}