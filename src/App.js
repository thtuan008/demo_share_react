// import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import MultipleEffect from './components/MultipleEffect'
import PassComplexProps from './components/PassComplexProps'
import ReactMemo from './components/ReactMemo'
import DestroySlide from './components/DestroySlide'
import UseEffect from './components/UseEffect'

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <div className="col-6">
          <ClassComponent />
        </div>
        <div className="col-6">
          <FunctionalComponent />
        </div>
      </div>
      <div className="flex-50">
        <UseEffect />

        < MultipleEffect />
      </div>


      {/* Pass complex props */}
      <PassComplexProps />
      <ReactMemo />
      <DestroySlide />

    </div>
  );
}

export default App;
