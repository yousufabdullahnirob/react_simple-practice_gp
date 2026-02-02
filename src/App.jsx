// cspell:ignore worksample
import Image from './image.jsx'
import WorkSample from './worksample.jsx'
import Clock from './Clock.jsx'
import Extract from './Extract.jsx'
export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Image />
      <WorkSample  year={2026}  experience="5 years"/>
      <WorkSample  year={2025}  experience="4 years"/>
      <WorkSample  year={2024}  experience="3 years"/>
      <Clock color="red" time={new Date().toLocaleTimeString()} /> 
      <Extract />
    </>
  );
}
