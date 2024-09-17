// === State ===
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// This is also where we define functions to modify the state.

// TODO: Add support for more colors
const names= ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];
const starting_prices = ["$30", "$50", "$70"];
const freelancers = [];
const maxFreelancers = 1000;

// Here, we should do index +=1 , but not sure where to add the loop yet.
function addFreelancer() {
  freelancers.push({
    name: names[0],
    occupation: occupations[0],
    starting_price: starting_prices[0],
  });
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}

// === Render ===
// Render = convert state into HTML so users can see the state in the document

function render() {
    const $freelancers = [];
    for (const freelancer of freelancers) {
      const $freelancer = document.createElement("li");
      // Add the freelancer's name, occupation and starting_price as classes to the new element
      $freelancer.classList.add(freelancer.name, freelancer.occupation, freelancer.starting_price);
      $freelancers.push($freelancer);
    }

  // Take the freelancer elements & bring them out onto the HTML so users can see these elements
  // Hey document, can you find in your model the element
  // that corresponds to the CSS selector #shapes
  const $freelancerList = document.querySelector(".freelancers");
  $freelancerList.replaceChildren(...$freelancers);
}

function getAveragePrice(prices){
  let sum_price = 0;
  for(const price of prices){
    sum_price += price;
  }
  return (sum_price / prices.length) 
}

// not sure where to add the above function yet.

// === Script ===
// Let's call the functions we defined in the state & render sections

render();

// Set Interval = run the callback function every interval
// which is given in ms
setInterval(() => {
  addShape();
  render();
}, 5000);