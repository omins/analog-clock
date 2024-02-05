# Analog clock

Analog clock and tooltip  
![Example](https://github.com/omins/analog-clock/assets/52988822/78597f78-f86f-42ca-95a3-9c09440579c1)

You can also visit [demo](https://analog-clock-blue.vercel.app/)

## Running locally

```bash
git clone https://github.com/omins/analog-clock.git
cd analog-clock

pnpm install
pnpm dev
# or
npm install
npm dev
# or
yarn
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Requirements

- [x] Use one of the SPA frameworks.

  - Used React for UI.

- [x] Use a State Management library.

  - Used Zustand for state management.

- [x] The hour hand, minute hand, and second hand (optional) should be shown based on the current time.

- [x] The current time must be shown in a tooltip when hovering on the clock.(The tooltip is located in the upper right corner of the mouse pointer and the position must be updated continuously along the movement of the mouse)
