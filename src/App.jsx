import logo from './logo.png'
import './App.css'
import AddButton from './components/AddButton'

export default function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Bienvenue sur Listy !</p>
        <AddButton title='Créer une liste'>Ajouter une liste</AddButton>
      </header>
    </div>
  )
}
