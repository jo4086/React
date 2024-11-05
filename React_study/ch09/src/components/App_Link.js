import { Route, Routes, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

function App() {
   function Home() {
      return (
         <div>
            <h2>Home</h2>
            ...Home
         </div>
      )
   }
   function Topics() {
      return (
         <div>
            <h2>Topics</h2>
            ...Topics
         </div>
      )
   }
   function Contact() {
      return (
         <div>
            <h2>Contact</h2>
            ...Contact
         </div>
      )
   }
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/topics">Topics</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
         </ul>

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />

            {/* 지정한 경로 외에 다른 모든 경로는 Not, Found를 통해 보여줌 */}
            {/* <Routes path="/" element={ <Contact> />}>  */}
            {/* <Routes path="/contact element={Comtact /} " /> */}
         </Routes>
      </div>
   )
}

export default App
