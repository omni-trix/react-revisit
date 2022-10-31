import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Header from './components/FavColor';
import FragementDemo from './components/FragementDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentRef from './components/FRParentRef';
import PortalDemo from './components/PortalDemo';

function App() {
  return (
    <div className="App">
      <PortalDemo />
    </div>
  );
}

export default App;
