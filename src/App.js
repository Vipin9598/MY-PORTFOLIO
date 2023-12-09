import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Main from "./components/main"
import Project from "./components/project"
import ContactForm from './components/ContactForm';
import Footer from './components/footer'
import Skill from './components/skill'

function App() {
  return (
<div  className=' bg-slate-700  overflow-x-hidden'>

    <Navbar/>

    <div className='mx-auto  sm:w-[10/12] w-full  max-w-[1080px] flex-col flex gap-10 '>
      <Main/>
      <Project/>
      <Skill/>
      <ContactForm/>
    </div>

    <Footer/>
</div>
  );
}

export default App;
