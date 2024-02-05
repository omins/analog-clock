import { Clock, useTimeString } from "./components/Clock";
import { Tooltip } from "./components/Tooltip";

function App() {
  const timeString = useTimeString();

  return (
    <>
      <div className="mx-auto flex max-w-3xl justify-center gap-3 bg-white pt-[100px] text-black antialiased dark:bg-black">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="mx-auto flex h-[250px] w-[250px]">
            <Tooltip placement="right-end" content={timeString} followCursor>
              <Clock />
            </Tooltip>
          </div>
          <h2>Clock with Tooltip</h2>
        </div>
      </div>
    </>
  );
}

export default App;
