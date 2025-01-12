import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Equipments from './components/Equipments';
import Rentals from './components/Rentals';
import Admin from './components/Admin';
import Contact from './components/Contact';
import withNavbar from './components/withNavbar';

const HomeWithNavbar = withNavbar(Home);
const EquipmentsWithNavbar = withNavbar(Equipments);
const RentalsWithNavbar = withNavbar(Rentals);
const ContactWithNavbar = withNavbar(Contact);

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomeWithNavbar} />
                    <Route path="/equipment" component={EquipmentsWithNavbar} />
                    <Route path="/rentals" component={RentalsWithNavbar} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/contact" component={ContactWithNavbar} />
                    {/* Add other routes here */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;