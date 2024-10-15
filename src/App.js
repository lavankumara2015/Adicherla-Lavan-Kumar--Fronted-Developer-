import './App.css';
import HeroSection from './heroSection(nav,header)/heroSection';
import MarketInsight from './marketInsightSection/marketInsight';
import AboutEth from './aboutEthAiSection/aboutEth';
import TokenGrap from './tokenGraphSection/tokenGrap';
import RoadMap from './roadMapSection/roadMap';
import FrequentlyAsked from './FrequentlyAskedSection/frequently';
import Footer from './footer/footer';

function App() {
  return (
<>
<HeroSection/> 
<MarketInsight/>
<AboutEth/>
<TokenGrap/>
<RoadMap/>
<FrequentlyAsked/>
<Footer/>

</>
  );
}

export default App;
