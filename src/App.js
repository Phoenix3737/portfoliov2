import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
// import ContactUs from './components/contact/contact';
import Footer from './components/footer/footer';
import resumeData from './components/resume/resumeData.js';
import Contact from './components/contact/contact.js';

// import Text from './components/text/text.js';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header resumeData={resumeData}/>
//       </div>
//     );

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Text /> */}
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        
    </div>
    );
  }
}
export default App;