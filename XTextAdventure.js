  const startGame = () => {
    const welcomeMessage = "Welcome to the Text Adventure Game!";
    console.log(welcomeMessage);
  }
startGame();

const Scenes = [
  {
    name: "Unit Testing ",
    description:
      "Testing individual code components to ensure they work as expected",
    items: [],
  },

  {
    name: "Integration Testing",
    description:
      "Testing interactions between components to ensure proper collaboration.",
    items: [],
  },

  {
    name: "Functional Testing",
    description: " Evaluating software functionality for intended behavior.",
    items: [],
  },
];

console.log(Scenes);

const player = {
  name: "",
  location: Scenes[0],
  inventory: "",
  health: 100,
};

const nonPlayerCharacter = {
  name: "",
  location: Scenes[1],
  Dialouge: [
    "Greetings, traveler!",
    "The forest is full of mysteries.",
    "Be careful in the cave, it's dangerous!",
  ],
};

console.log(player);
console.log(nonPlayerCharacter);

const displayScene = (scene) => {
  console.log(scene.description);

  if (player.location === scene) {
    console.log("You are here.");
  }

  if (nonPlayerCharacter.location === scene) {
    console.log(`${nonPlayerCharacter.name} is here.`);
  }
};