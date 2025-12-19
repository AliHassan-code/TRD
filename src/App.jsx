import './App.css';
import { Distribution } from './components/Distribution';
import FeaturesApplications from './components/Features';
import { Header } from './components/Header';
import LogoBar from './components/LogoBar';
import { Rewards } from './components/Rewards';
import { Roadmap } from './components/Roadmap';
import { Footer } from './Footer';
import { NetworkFAQ } from './NetworkFAQ';
import { Question } from './Question';

function App() {
  return (
    <>
      <Header />
      <FeaturesApplications />
      <Rewards />
      <Distribution />
      <Roadmap />
      <Question />
      <NetworkFAQ />
      <Footer />
    </>
  );
}

export default App;
