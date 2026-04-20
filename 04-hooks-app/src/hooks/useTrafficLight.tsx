import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {

    const intervalId = setInterval(() => {

      setCountdown(prev => {

        if (prev === 1) {
          // cambio de color
          setLight(current => {
            if (current === 'red') return 'green';
            if (current === 'green') return 'yellow';
            return 'red';
          });

          return 5;
        }
        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(intervalId);

  }, []);

  return {
    // state
    countdown,
    light,

    // styles
    colors,

    // computed
    percentage: (countdown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
  };
};