import { useEffect } from 'react';
import { useClockStore } from './store';

/**
 * Root component for clock. Needs to be the parent of all clock components.
 * Only one instance of this component should be used in the app.
 * @example
 * ```tsx
 * <ClockRoot>
 *  <Clock />
 *  <Clock />
 * </ClockRoot>
 * ```
 */

function ClockRoot({ children }: { children?: React.ReactNode }) {
  const setTime = useClockStore(state => state.setTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [setTime]);

  return <>{children}</>;
}

export default ClockRoot;
