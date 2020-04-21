import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
    </div>
  );
}

export default App;
// export default class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//       <div className="App">

//       </div>
//       </React.Fragment>
//     );
//   }
// }