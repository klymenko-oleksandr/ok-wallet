import reactLogo from './assets/react.svg';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 min-h-svh">
        <img src={reactLogo} className="logo react" alt="React logo"/>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
