import Tracker from './components/Tracker';
function App() {
  const cls="relative w-full h-96 bg-black";
  const overlayCls="absolute top-0 left-0 w-full h-full bg-blue-700 bg-opacity-20"
  return (
    <div className={cls}>
      <span className={overlayCls}>

      </span>
      <Tracker />
    </div>
  );
}

export default App;
