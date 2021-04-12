import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import MultipleEffect from './components/MultipleEffect'
import PassComplexProps from './components/PassComplexProps'

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="flex-50">
        <ClassComponent />
      </div>
      <div className="flex-50">
        <FunctionalComponent />
      </div>
      < MultipleEffect />

      {/* Pass complex props */}
      <PassComplexProps />

    </div>
  );
}

export default App;
