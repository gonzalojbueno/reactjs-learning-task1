import React from "react";

import MenuItem from '../../Components/Menu.item.component/MenuItem';


class Productos extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
            id: 1,
            name: "Chicago Pizza",
            image: "https://cdn2.lamag.com/wp-content/uploads/sites/6/2020/03/Trio-Pie_1500x1000.jpg",
            desc: "The pan in which it is baked gives the pizza its characteristically high edge which provides ample space for large amounts of cheese and a chunky tomato sauce.",
            price: 9,
            linkUrl: "/Buy_Pizza1",
          },
          {
            id: 2,
            name: "Neapolitan Pizza",
            image: "https://www.italiarail.com/sites/default/files/2020-01/pizza_napolitana1_Fotor.jpg",
            desc: "This style of pizza is prepared with simple and fresh ingredients: a basic dough, raw tomatoes, fresh mozzarella cheese, fresh basil, and olive oil. A fantastic original pizza.",
            price: 7,
            linkUrl: "/Buy_Pizza2",
          },
          {
            id: 3,
            name: "New York Pizza",
            image: "https://image.nuevayork.com/wp-content/uploads/2013/12/Best-Pizza-in-New-York.jpeg",
            desc: "New York-style pizza has slices that are large and wide with a thin crust that is foldable yet crispy. It is traditionally topped with tomato sauce and mozzarella cheese.",
            price: 8,
            linkUrl: "/Buy_Pizza3",
          },
          {
            id: 4,
            name: "Sicilian Pizza",
            image: "https://pbs.twimg.com/media/EJ-tLcTUUAAS53m.jpg",
            desc: "Sicilian pizza is pizza prepared in a manner that originated in Sicily, Italy. Sicilian pizza is also known as sfincione or focaccia with toppings. A great tasteful pizza all around.",
            price: 9,
            linkUrl: "/Buy_pizza4",
          },
      ],
    };
  }

  render() {
    return (
        
      <div className="text-center">

        <div className="cards">

          {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}

        </div>

      </div>
    );
  }
}

export default Productos;