
import MainScreen from './src/screens/MainScreen';


const taskList = [
{
    id: 4,
    task: "Ir a comprar carne",
    completed: false
  },{
    id: 5,
    task: "Comprar carbón",
    completed: true
  },
]


export default function App() {
  return (
      <MainScreen taskList = {taskList} />
  );
}