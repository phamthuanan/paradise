
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ButtonBackToTop from '../components/utils/ButtonBackToTop'
import HomeContainer from './HomeContainer'
import TourContainer from './TourContainer'
import BlogContainer from './BlogContainer'
import BlogDetailContainer from './BlogDetailContainer'
import ContactContainer from './ContactContainer'
import SignInUpContainer from './SignIn_SignUp_Container'
import ProfileUserContainer from './ProfileUserContainer'
import TourDetailContainer from './TourDetailContainer'
import DesignTourContainer from './DesignTourContainer'
import BookingContainer from './BookingContainer'
import CompanyDetailContainer from './CompanyDetailContainer'
import ConfirmBookingContainer from './ConfirmBookingContainer'
import Pages404 from '../components/404/404'
function App() {
  return (
    <Router>
      <div class="body-overlay" id="body-overlay"></div>
      <Switch>
        <Route exact path="/" component = {HomeContainer}></Route>
        <Route exact path="/tour" component = {TourContainer}></Route>
        <Route exact path="/blog" component = {BlogContainer}></Route>
        <Route path="/blog/:blogId" component = {BlogDetailContainer}></Route>
        <Route exact path="/contact" component = {ContactContainer}></Route>
        <Route exact path="/signin_signup" component = {SignInUpContainer}></Route>
        <Route  path="/tour/:tourId" component={TourDetailContainer}></Route>
        <Route path="/profile/:email" component={ProfileUserContainer}></Route>
        <Route exact path="/designtour" component={DesignTourContainer}></Route>
        <Route path="/bookingtour/:idbooking" component={BookingContainer}></Route>
        <Route path="/company/:idcompany" component={CompanyDetailContainer}></Route>
        <Route path="/confirmbooking/:token" component={ConfirmBookingContainer}></Route>
        <Route path = "*" component ={Pages404}></Route>
      </Switch>
      <ButtonBackToTop />
    </Router>
    
  );
}

export default App;
