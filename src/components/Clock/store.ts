import { create } from 'zustand';

type Store = {
  time: Date;
};

type Actions = {
  setTime: (time: Date) => void;
};

export const useClockStore = create<Store & Actions>(set => ({
  time: new Date(),
  setTime: time => set({ time }),
}));

export const useTime = () => {
  return useClockStore(state => state.time);
};

export const useHour = () => {
  return useClockStore(state => state.time.getHours());
};

export const useMinute = () => {
  return useClockStore(state => state.time.getMinutes());
};

export const useSecond = () => {
  return useClockStore(state => state.time.getSeconds());
};

export const useTimeString = () => {
  const time = useTime();

  return time.toLocaleTimeString();
};
