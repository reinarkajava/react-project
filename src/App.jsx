import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      date: new Date(12, 2, 2025),
      title: 'Uus raamat',
      price: 30.99
    },
    {
      date: new Date(12, 2, 2025),
      title: 'Uus auto',
      price: 31340.99
    }
  ]



  return (
    <div className="App">
      < ExpenseItem data={expenses[0]}/>
      < ExpenseItem data={expenses[1]}/>
    </div>

    
  );
}




export default App;
