import OurServices from './OurServices'
import ContactUs from './ContactUs'
import BestTeachers from './BestTeachers'
import Main from './Main'
import CommonQuestions from './CommonQuestions'
import AboutUs from './AboutUs'
import { HashLink } from 'react-router-hash-link';

const Home = () => {
  return (
    <div className=' overflow-hidden '>
        <Main />
        <AboutUs />
        <BestTeachers />
        <OurServices />
        <ContactUs />
        {/*
        <CommonQuestions />*/}
        
    </div>
  )
}

export default Home