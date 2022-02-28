import './App.css'
import SideBar from './components/SideBar'
import Middle from './components/Middle'
import Description from './components/Description'
const App = () => {
  /* eslint-disable */
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
    return images;
  }
  const images = importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className='container'>
      <header className='styled header'>Lorem Ipsum is simply dummy text of the printing
      </header>
      <main className="row main">
        <SideBar images={ images } />
        <Middle images={ images } />
        <Description images={ images } />
      </main>
    </div>

  )
}

export default App