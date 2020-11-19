import React from 'react';
import './App.css';
import Car from './components/Car';
import Car1 from './images/car-1.jpg';
import Car2 from './images/car-2.jpg';
import Car3 from './images/car-3.jpg';
import Car4 from './images/car-4.jpg';

function App() {
  return (
    <div className="wrapper">
      <div className="listing">
        <div className="top">
          <h2>Latest brand new car deals</h2>
          <h3>View more deals →</h3>
        </div>
        <div className="carsAvailable">
          <Car 
            carImg={Car1}
            altText="Brum"
            rrpPrice="£2555"
            currentPrice="10p"
            saving="a wodge"
            carTitle="Brum"
            aboutCar="Brum is a difficult fella. He always screams
            when he's going up a hill and you have to always keep your 
            foot on the break because his handbrake doesn't work." 
          />
          <Car 
            carImg={Car2}
            altText="Lightning McQueen Pic"
            rrpPrice="£7555"
            currentPrice="£7000"
            saving="£555"
            carTitle="Lightning McQueen"
            aboutCar="Montgomery Lightning McQueen is not named after actor and race driver
            Steve McQueen, but after Pixar animator Glenn McQueen who died in 2002." 
          />
          <Car 
            carImg={Car3}
            altText="Coca cola truck"
            rrpPrice="£700,000"
            currentPrice="£600,000"
            saving="£100,000"
            carTitle="The Coca-Cola Truck"
            aboutCar="The holidays are coming, holidays are coming
            the holidays are coming, holidays are coming. The holidays
            are coming, holidays are coming. THEHOLIDAYS" 
          />
          <Car 
            carImg={Car4}
            altText="Herbie"
            rrpPrice="£60,000"
            currentPrice="£20,000"
            saving="£40,000"
            carTitle="Herbie"
            aboutCar="A fictional sentient 1963 Volkswagen Beetle,
            Herbie has a mind of his own and is often a serious
            contender in auto racing competitions. (Lohan not included)" 
          />
        </div>
      </div>
</div>
  );
}

export default App;
