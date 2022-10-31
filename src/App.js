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
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      {/* <ErrorBoundary>
      <Hero heroName="batman" />
      <Hero heroName="superman" />
      <Hero heroName= "Joker"/>
      </ErrorBoundary> */}
    </div>
  );
}

export default App;
