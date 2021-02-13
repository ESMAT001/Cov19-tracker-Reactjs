import Tracker from './components/Tracker';
function App() {
  const cls="relative w-full bg-black p-10 sm:px-14 md:p-20";
  const overlayCls="absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-25"
  return (
    <div className={cls}>
      <span className={overlayCls}>

      </span>
      <Tracker />
    </div>
  );
}

export default App;
