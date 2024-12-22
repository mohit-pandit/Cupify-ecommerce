import './assets/css/App.css';
import './assets/css/skin-and-color.css';
import './assets/css/theme-custom.css';
import './assets/css/theme-default.css';
import './assets/css/theme-responsive.css';
import './assets/css/timber.scss.css';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import { AllRoutes } from './Routes/AllRoutes';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* // Scroll smoothly on every routes changes */}
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
