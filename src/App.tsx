import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Assessment } from './pages/Assessment';
import { Report } from './pages/Report';
import { LedgerHome } from './pages/LedgerHome';
import { Expenses } from './pages/Expenses';
import { PlanHome } from './pages/PlanHome';
import { Education } from './pages/Education';
import { Insurance } from './pages/Insurance';
import { InterestClass } from './pages/InterestClass';
import { Advisor } from './pages/Advisor';
import { PocketMoney } from './pages/PocketMoney';
import { Profile } from './pages/Profile';
import { HighValue } from './pages/HighValue';
import { VideoDemo } from './pages/VideoDemo';

type Route = 'home' | 'assessment' | 'report' | 'ledger' | 'expenses' | 'plan' | 'education' | 'insurance' | 'interest_class' | 'advisor' | 'pocket_money' | 'profile' | 'high_value' | 'video';

const routes: Route[] = ['home', 'assessment', 'report', 'ledger', 'expenses', 'plan', 'education', 'insurance', 'interest_class', 'advisor', 'pocket_money', 'profile', 'high_value', 'video'];

const getInitialRoute = (): Route => {
  const route = new URLSearchParams(window.location.search).get('route');
  return routes.includes(route as Route) ? route as Route : 'assessment';
};

export default function App() {
  const [route, setRoute] = useState<Route>(getInitialRoute);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const navigate = (newRoute: Route) => {
    setRoute(newRoute);
  };

  const renderPage = () => {
    switch (route) {
      case 'home': return <Home navigate={navigate} />;
      case 'assessment': return <Assessment navigate={navigate} />;
      case 'report': return <Report navigate={navigate} />;
      case 'ledger': return <LedgerHome navigate={navigate} />;
      case 'expenses': return <Expenses navigate={navigate} />;
      case 'plan': return <PlanHome navigate={navigate} />;
      case 'education': return <Education navigate={navigate} />;
      case 'insurance': return <Insurance navigate={navigate} />;
      case 'interest_class': return <InterestClass navigate={navigate} />;
      case 'advisor': return <Advisor navigate={navigate} />;
      case 'pocket_money': return <PocketMoney navigate={navigate} />;
      case 'profile': return <Profile navigate={navigate} />;
      case 'high_value': return <HighValue navigate={navigate} />;
      case 'video': return <VideoDemo />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="bg-[#efe9e4] min-h-screen text-[#2b1712] font-sans">
      {renderPage()}
    </div>
  );
}
