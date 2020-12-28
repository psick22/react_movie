import React from "react";
import PropTypes from "prop-types";

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>
        I like {name} {image}
      </h2>
      <h3>{rating}/5.0</h3>
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  { id: 1, name: "egg", image: "asdfasdf", rating: 5 },
  { id: 2, name: "sushi", image: "asdfasdf", rating: 3 },
  { id: 3, name: "bread", image: "asdfasdf", rating: 4 },
];

function App() {
  return (
    <div>
      {foodILike.map((food) => {
        return (
          <Food
            key={food.id}
            name={food.name}
            image={food.image}
            rating={food.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
