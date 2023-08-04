/* eslint-disable no-unused-vars */
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

interface TimeI {
  hours: number;
  minutes: number;
  seconds: number;
}
interface SplitItemI {
  number: number;
  time: TimeI;
}

interface ButtonPropsI {
  onClick: () => void;
  color: string;
  children: ReactNode;
}

function Button({ onClick = () => {}, color = 'bg-green-500', children = <> </> }: ButtonPropsI) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white mx-4 ${color}`}
    >
      {children}
    </button>
  );
}

function Timer(): ReactElement {
  const [isActiveSt, setIsActiveSt] = useState<boolean>(false);
  const [timeSt, setTimeSt] = useState<TimeI>({ hours: 0, minutes: 0, seconds: 3590 });
  const [splitsSt, setSplitsSt] = useState<SplitItemI[]>();

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isActiveSt) {
      intervalId = setInterval(() => {
        setTimeSt((prevTime) => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
          const newHours = prevTime.hours + Math.floor(newMinutes / 60);

          return {
            seconds: newSeconds % 60,
            minutes: newMinutes % 60,
            hours: newHours
          };
        });
      }, 1000);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActiveSt]);

  function handleResetFn() {
    setIsActiveSt(false);
    setTimeSt({ hours: 0, minutes: 0, seconds: 0 });
  }
  function handleFinishFn() {
    handleResetFn();
    // setSplitsSt((prevSplits) => [
    //   ...prevSplits,
    //   { number: prevSplits[prevSplits.length - 1].number + 1, time: timeSt }
    // ]);

    // setSplitsSt((prevSplits) => {
    //   if (prevSplits.length < 1) {
    //     return [{ number: 1, time: timeSt }];
    //   }

    // });

    setSplitsSt((prevSplits) => {
      if (prevSplits) {
        return [
          ...prevSplits,
          { number: prevSplits[prevSplits.length - 1].number + 1, time: timeSt }
        ];
      }

      return [{ number: 1, time: timeSt }];
    });
  }

  return (
    <div className="px-8 py-8">
      <h1 className="text-2xl">
        {timeSt.hours}h-{timeSt.minutes}m-{timeSt.seconds}s
      </h1>

      <div className="-mx-4 mt-8">
        <Button onClick={handleResetFn} color="bg-red-500">
          Reset
        </Button>
        <Button onClick={handleFinishFn} color="bg-blue-500">
          Finish
        </Button>
        <Button onClick={() => setIsActiveSt(false)} color="bg-yellow-500">
          Pause
        </Button>
        <Button onClick={() => setIsActiveSt(true)} color="bg-green-500">
          Start
        </Button>
      </div>

      <table>
        <tbody>
          {splitsSt &&
            splitsSt.map(({ number, time }) => (
              <tr key={number}>
                <td>{number}</td>
                <td>
                  {time.hours}h-{time.minutes}m-{time.seconds}s
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Timer;
