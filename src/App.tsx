import { Clock, ClockRoot } from "./components/Clock";

function App() {
  return (
    <>
      <div className="mx-auto max-w-3xl bg-white text-black antialiased dark:bg-black">
        <div className="mx-auto h-[250px] w-[250px]">
          <ClockRoot>
            <Clock />
          </ClockRoot>
        </div>
      </div>
    </>
  );
}

export default App;
