let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;

let questions = [
    // Grade 1 Math
    { grade: 1, subject: "Math", question: "What is 5 + 9?", answers: ["12", "13", "14", "15"], correctAnswer: "14" },
    { grade: 1, subject: "Math", question: "What is 6 + 4?", answers: ["20", "19", "9", "10"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 7 + 5?", answers: ["20", "12", "9", "11"], correctAnswer: "12" },
    { grade: 1, subject: "Math", question: "What is 2 - 1?", answers: ["12", "7", "14", "1"], correctAnswer: "1" },
    { grade: 1, subject: "Math", question: "What is 4 - 2?", answers: ["16", "17", "19", "2"], correctAnswer: "2" },
    { grade: 1, subject: "Math", question: "What is 8 + 7?", answers: ["14", "17", "15", "9"], correctAnswer: "15" },
    { grade: 1, subject: "Math", question: "What is 1 - 1?", answers: ["17", "0", "1", "10"], correctAnswer: "0" },
    { grade: 1, subject: "Math", question: "What is 5 - 3?", answers: ["7", "2", "13", "12"], correctAnswer: "2" },
    { grade: 1, subject: "Math", question: "What is 1 - 1?", answers: ["7", "5", "4", "0"], correctAnswer: "0" },
    { grade: 1, subject: "Math", question: "What is 5 - 4?", answers: ["14", "1", "13", "5"], correctAnswer: "1" },
    { grade: 1, subject: "Math", question: "What is 5 - 5?", answers: ["10", "2", "15", "0"], correctAnswer: "0" },
    { grade: 1, subject: "Math", question: "What is 10 + 8?", answers: ["10", "4", "12", "18"], correctAnswer: "18" },
    { grade: 1, subject: "Math", question: "What is 10 + 6?", answers: ["15", "16", "6", "10"], correctAnswer: "16" },
    { grade: 1, subject: "Math", question: "What is 9 - 4?", answers: ["10", "4", "5", "20"], correctAnswer: "5" },
    { grade: 1, subject: "Math", question: "What is 5 - 5?", answers: ["15", "16", "0", "20"], correctAnswer: "0" },
    { grade: 1, subject: "Math", question: "What is 7 + 3?", answers: ["9", "15", "10", "17"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 6 + 9?", answers: ["17", "2", "19", "15"], correctAnswer: "15" },
    { grade: 1, subject: "Math", question: "What is 1 - 1?", answers: ["4", "7", "0", "13"], correctAnswer: "0" },
    { grade: 1, subject: "Math", question: "What is 6 - 2?", answers: ["1", "4", "20", "16"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 6 - 1?", answers: ["14", "13", "5", "7"], correctAnswer: "5" },
    { grade: 1, subject: "Math", question: "What is 7 - 2?", answers: ["17", "19", "5", "20"], correctAnswer: "5" },
    { grade: 1, subject: "Math", question: "What is 2 + 6?", answers: ["12", "11", "2", "8"], correctAnswer: "8" },
    { grade: 1, subject: "Math", question: "What is 1 - 1?", answers: ["0", "13", "17", "2"], correctAnswer: "0" },
    { grade: 1, subject: "Math", question: "What is 8 + 6?", answers: ["12", "4", "14", "20"], correctAnswer: "14" },
    { grade: 1, subject: "Math", question: "What is 1 - 1?", answers: ["8", "0", "14", "3"], correctAnswer: "0" },
    { grade: 1, subject: "Math", question: "What is 7 - 3?", answers: ["18", "5", "7", "4"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 6 - 4?", answers: ["2", "17", "9", "1"], correctAnswer: "2" },
    { grade: 1, subject: "Math", question: "What is 2 + 6?", answers: ["5", "20", "10", "8"], correctAnswer: "8" },
    { grade: 1, subject: "Math", question: "What is 7 + 10?", answers: ["5", "17", "2", "12"], correctAnswer: "17" },
    { grade: 1, subject: "Math", question: "What is 10 - 7?", answers: ["1", "3", "9", "18"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 4 - 4?", answers: ["0", "6", "5", "18"], correctAnswer: "0" },
    { grade: 1, subject: "Math", question: "What is 6 - 2?", answers: ["10", "5", "15", "4"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 6 - 6?", answers: ["12", "15", "20", "0"], correctAnswer: "0" },
    { grade: 1, subject: "Math", question: "What is 10 - 6?", answers: ["13", "14", "4", "6"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 8 + 3?", answers: ["11", "17", "16", "18"], correctAnswer: "11" },
    { grade: 1, subject: "Math", question: "What is 7 - 4?", answers: ["18", "5", "7", "3"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 5 + 10?", answers: ["15", "12", "1", "5"], correctAnswer: "15" },
    { grade: 1, subject: "Math", question: "What is 2 + 3?", answers: ["7", "1", "19", "5"], correctAnswer: "5" },
    { grade: 1, subject: "Math", question: "What is 8 + 1?", answers: ["1", "2", "14", "9"], correctAnswer: "9" },
    { grade: 1, subject: "Math", question: "What is 5 + 2?", answers: ["17", "3", "7", "20"], correctAnswer: "7" },
    { grade: 1, subject: "Math", question: "What is 2 + 6?", answers: ["6", "8", "5", "15"], correctAnswer: "8" },
    { grade: 1, subject: "Math", question: "What is 7 + 9?", answers: ["16", "3", "20", "17"], correctAnswer: "16" },
    { grade: 1, subject: "Math", question: "What is 2 - 1?", answers: ["1", "11", "20", "18"], correctAnswer: "1" },
    { grade: 1, subject: "Math", question: "What is 2 + 7?", answers: ["19", "4", "9", "2"], correctAnswer: "9" },
    { grade: 1, subject: "Math", question: "What is 3 + 5?", answers: ["7", "6", "8", "9"], correctAnswer: "8" },
    { grade: 1, subject: "Math", question: "What is 6 + 7?", answers: ["10", "11", "13", "12"], correctAnswer: "13" },
    { grade: 1, subject: "Math", question: "What is 8 - 4?", answers: ["6", "5", "4", "3"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 10 - 2?", answers: ["8", "7", "9", "6"], correctAnswer: "8" },
    { grade: 1, subject: "Math", question: "What is 9 + 3?", answers: ["11", "12", "10", "14"], correctAnswer: "12" },
    { grade: 1, subject: "Math", question: "What is 7 - 5?", answers: ["1", "3", "2", "4"], correctAnswer: "2" },
    { grade: 1, subject: "Math", question: "What is 4 + 4?", answers: ["6", "9", "8", "7"], correctAnswer: "8" },
    { grade: 1, subject: "Math", question: "What is 6 + 2?", answers: ["9", "8", "7", "10"], correctAnswer: "8" },
    { grade: 1, subject: "Math", question: "What is 5 - 1?", answers: ["3", "2", "4", "5"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 7 + 8?", answers: ["14", "13", "15", "16"], correctAnswer: "15" },
    { grade: 1, subject: "Math", question: "What is 9 - 3?", answers: ["5", "6", "7", "4"], correctAnswer: "6" },
    { grade: 1, subject: "Math", question: "What is 2 + 7?", answers: ["8", "9", "10", "11"], correctAnswer: "9" },
    { grade: 1, subject: "Math", question: "What is 10 - 4?", answers: ["7", "5", "6", "8"], correctAnswer: "6" },
    { grade: 1, subject: "Math", question: "What is 8 + 2?", answers: ["9", "11", "10", "12"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 5 + 6?", answers: ["10", "11", "12", "9"], correctAnswer: "11" },
    { grade: 1, subject: "Math", question: "What is 6 - 3?", answers: ["4", "5", "3", "2"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 3 + 4?", answers: ["7", "6", "5", "8"], correctAnswer: "7" },
    { grade: 1, subject: "Math", question: "What is 9 - 5?", answers: ["5", "4", "3", "6"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 2 + 5?", answers: ["6", "7", "8", "9"], correctAnswer: "7" },
    { grade: 1, subject: "Math", question: "What is 4 + 6?", answers: ["8", "9", "10", "11"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 7 - 3?", answers: ["4", "3", "5", "6"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 1 + 9?", answers: ["8", "10", "9", "11"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 8 - 5?", answers: ["4", "3", "2", "5"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 3 + 6?", answers: ["7", "8", "9", "10"], correctAnswer: "9" },
    { grade: 1, subject: "Math", question: "What is 10 - 7?", answers: ["4", "2", "3", "1"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 5 + 5?", answers: ["10", "11", "12", "9"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 6 + 3?", answers: ["8", "9", "10", "11"], correctAnswer: "9" },
    { grade: 1, subject: "Math", question: "What is 7 - 6?", answers: ["2", "1", "3", "0"], correctAnswer: "1" },
    { grade: 1, subject: "Math", question: "What is 4 + 5?", answers: ["9", "10", "8", "7"], correctAnswer: "9" },
    { grade: 1, subject: "Math", question: "What is 9 - 2?", answers: ["6", "5", "7", "8"], correctAnswer: "7" },
    { grade: 1, subject: "Math", question: "What is 2 + 8?", answers: ["10", "9", "11", "8"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 5 - 2?", answers: ["4", "3", "2", "1"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 6 + 5?", answers: ["12", "11", "10", "13"], correctAnswer: "11" },
    { grade: 1, subject: "Math", question: "What is 7 + 2?", answers: ["8", "9", "10", "7"], correctAnswer: "9" },
    { grade: 1, subject: "Math", question: "What is 4 - 3?", answers: ["2", "1", "3", "0"], correctAnswer: "1" },
    { grade: 1, subject: "Math", question: "What is 1 + 8?", answers: ["8", "9", "10", "11"], correctAnswer: "9" },
    { grade: 1, subject: "Math", question: "What is 10 - 9?", answers: ["2", "0", "1", "3"], correctAnswer: "1" },
    { grade: 1, subject: "Math", question: "What is 8 + 4?", answers: ["11", "12", "13", "14"], correctAnswer: "12" },
    { grade: 1, subject: "Math", question: "What is 3 - 2?", answers: ["2", "1", "3", "0"], correctAnswer: "1" },
    { grade: 1, subject: "Math", question: "What is 6 + 7?", answers: ["12", "14", "13", "11"], correctAnswer: "13" },
    { grade: 1, subject: "Math", question: "What is 2 + 4?", answers: ["5", "6", "7", "8"], correctAnswer: "6" },
    { grade: 1, subject: "Math", question: "What is 5 - 3?", answers: ["3", "2", "4", "1"], correctAnswer: "2" },
    { grade: 1, subject: "Math", question: "What is 7 + 6?", answers: ["12", "13", "14", "15"], correctAnswer: "13" },
    { grade: 1, subject: "Math", question: "What is 10 - 3?", answers: ["6", "7", "8", "9"], correctAnswer: "7" },
    { grade: 1, subject: "Math", question: "What is 3 + 8?", answers: ["9", "10", "11", "12"], correctAnswer: "11" },
    { grade: 1, subject: "Math", question: "What is 4 - 1?", answers: ["2", "3", "4", "5"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 5 + 7?", answers: ["11", "12", "13", "10"], correctAnswer: "12" },
    { grade: 1, subject: "Math", question: "What is 6 - 5?", answers: ["1", "2", "3", "0"], correctAnswer: "1" },
    { grade: 1, subject: "Math", question: "What is 4 + 6?", answers: ["9", "10", "11", "12"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 7 + 3?", answers: ["10", "11", "12", "13"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 5 + 9?", answers: ["12", "13", "14", "15"], correctAnswer: "14" },
    { grade: 1, subject: "Math", question: "What is 8 - 3?", answers: ["6", "4", "5", "3"], correctAnswer: "5" },
    { grade: 1, subject: "Math", question: "What is 6 + 4?", answers: ["11", "9", "10", "12"], correctAnswer: "10" },
    { grade: 1, subject: "Math", question: "What is 3 + 3?", answers: ["6", "5", "7", "4"], correctAnswer: "6" },
    { grade: 1, subject: "Math", question: "What is 5 - 2?", answers: ["3", "4", "5", "6"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 10 - 5?", answers: ["5", "4", "6", "7"], correctAnswer: "5" },

    { grade: 1, subject: "Science", question: "What do plants need to grow?", answers: ["Water", "Ice", "Snow", "Fire"], correctAnswer: "Water" },
    { grade: 1, subject: "Science", question: "What is the shape of the Earth?", answers: ["Square", "Round", "Triangle", "Rectangle"], correctAnswer: "Round" },
    { grade: 1, subject: "Science", question: "What color is the sky on a sunny day?", answers: ["Green", "Blue", "Red", "Yellow"], correctAnswer: "Blue" },
    { grade: 1, subject: "Science", question: "What do bees make?", answers: ["Honey", "Milk", "Juice", "Soap"], correctAnswer: "Honey" },
    { grade: 1, subject: "Science", question: "What do we need to stay alive?", answers: ["Food, water, air", "Toys, air, water", "Books, food, air", "Water, food, toys"], correctAnswer: "Food, water, air" },
    { grade: 1, subject: "Science", question: "What do animals need to live?", answers: ["Food, air, water", "Air, light, water", "Toys, food, water", "Air, light, toys"], correctAnswer: "Food, air, water" },
    { grade: 1, subject: "Science", question: "What is the hottest planet in our solar system?", answers: ["Earth", "Venus", "Mars", "Jupiter"], correctAnswer: "Venus" },
    { grade: 1, subject: "Science", question: "Where do we get food from?", answers: ["Plants and animals", "Air and water", "Stars and soil", "Ice and fire"], correctAnswer: "Plants and animals" },
    { grade: 1, subject: "Science", question: "What do clouds do?", answers: ["Store water", "Make rain", "Float in the sky", "Shine like the sun"], correctAnswer: "Make rain" },
    { grade: 1, subject: "Science", question: "Which animal is a mammal?", answers: ["Frog", "Cat", "Fish", "Lizard"], correctAnswer: "Cat" },
    { grade: 1, subject: "Science", question: "What do you call the liquid that falls from the sky?", answers: ["Rain", "Snow", "Wind", "Ice"], correctAnswer: "Rain" },
    { grade: 1, subject: "Science", question: "What is the color of grass?", answers: ["Blue", "Green", "Yellow", "Red"], correctAnswer: "Green" },
    { grade: 1, subject: "Science", question: "What do we breathe in the air?", answers: ["Water", "Food", "Oxygen", "Sand"], correctAnswer: "Oxygen" },
    { grade: 1, subject: "Science", question: "Which is the smallest planet in our solar system?", answers: ["Earth", "Mercury", "Mars", "Saturn"], correctAnswer: "Mercury" },
    { grade: 1, subject: "Science", question: "What is the coldest season?", answers: ["Spring", "Summer", "Fall", "Winter"], correctAnswer: "Winter" },
    { grade: 1, subject: "Science", question: "What is an example of a bird?", answers: ["Dog", "Cat", "Fish", "Eagle"], correctAnswer: "Eagle" },
    { grade: 1, subject: "Science", question: "What do trees give us?", answers: ["Paper", "Oxygen", "Oil", "Rocks"], correctAnswer: "Oxygen" },
    { grade: 1, subject: "Science", question: "What is a common source of light during the night?", answers: ["Moon", "Sun", "Cloud", "Star"], correctAnswer: "Moon" },
    { grade: 1, subject: "Science", question: "What helps plants grow in the soil?", answers: ["Seeds", "Food", "Water", "Sunlight"], correctAnswer: "Sunlight" },
    { grade: 1, subject: "Science", question: "What is the source of energy for all living things?", answers: ["The Sun", "The Moon", "The Earth", "The Ocean"], correctAnswer: "The Sun" },
    { grade: 1, subject: "Science", question: "What is the main source of light for Earth?", answers: ["Moon", "Sun", "Stars", "Flashlight"], correctAnswer: "Flashlight" },
    { grade: 1, subject: "Science", question: "What does a caterpillar turn into?", answers: ["Spider", "Butterfly", "Moth", "Ant"], correctAnswer: "Butterfly" },
    { grade: 1, subject: "Science", question: "What do we call the baby of a frog?", answers: ["Tadpole", "Kitten", "Calf", "Chick"], correctAnswer: "Tadpole" },
    { grade: 1, subject: "Science", question: "What is the color of the sun?", answers: ["Yellow", "Green", "Blue", "Red"], correctAnswer: "Yellow" },
    { grade: 1, subject: "Science", question: "Which animal has a long neck and eats leaves from trees?", answers: ["Elephant", "Giraffe", "Lion", "Tiger"], correctAnswer: "Giraffe" },
    { grade: 1, subject: "Science", question: "Which of these is a solid?", answers: ["Water", "Ice", "Air", "Steam"], correctAnswer: "Steam" },
    { grade: 1, subject: "Science", question: "What do we need to stay healthy?", answers: ["Food", "Sunlight", "Water", "All of the above"], correctAnswer: "All of the above" },
    { grade: 1, subject: "Science", question: "What is the largest ocean on Earth?", answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correctAnswer: "Pacific Ocean" },
    { grade: 1, subject: "Science", question: "What does a plant need to make its food?", answers: ["Water", "Sunlight", "Soil", "All of the above"], correctAnswer: "All of the above" },
    { grade: 1, subject: "Science", question: "What kind of animal is a dog?", answers: ["Reptile", "Mammal", "Bird", "Fish"], correctAnswer: "Mammal" },
    { grade: 1, subject: "Science", question: "What is the warmest season of the year?", answers: ["Fall", "Spring", "Summer", "Winter"], correctAnswer: "Summer" },
    { grade: 1, subject: "Science", question: "What do we use to measure temperature?", answers: ["Ruler", "Thermometer", "Scale", "Clock"], correctAnswer: "Thermometer" },
    { grade: 1, subject: "Science", question: "Which animal is known for its ability to fly?", answers: ["Dog", "Eagle", "Whale", "Elephant"], correctAnswer: "Whale" },
    { grade: 1, subject: "Science", question: "What is the part of the plant that grows underground?", answers: ["Leaf", "Flower", "Root", "Stem"], correctAnswer: "Root" },
    { grade: 1, subject: "Science", question: "What is water in the gas form called?", answers: ["Steam", "Ice", "Liquid", "Snow"], correctAnswer: "Liquid" },
    { grade: 1, subject: "Science", question: "What helps the Earth stay warm?", answers: ["Sunlight", "Rain", "Wind", "Snow"], correctAnswer: "Rain" },
    { grade: 1, subject: "Science", question: "What is the process by which a plant makes its food?", answers: ["Digestion", "Photosynthesis", "Respiration", "Germination"], correctAnswer: "Photosynthesis" },
    { grade: 1, subject: "Science", question: "What do you call the hard outer part of an insect's body?", answers: ["Shell", "Skin", "Exoskeleton", "Carapace"], correctAnswer: "Exoskeleton" },
    { grade: 1, subject: "Science", question: "Which of these is a type of bird?", answers: ["Dog", "Sparrow", "Fish", "Lion"], correctAnswer: "Sparrow" },
    { grade: 1, subject: "Science", question: "What do we call a young bird?", answers: ["Chick", "Puppy", "Calf", "Lamb"], correctAnswer: "Chick" },
    { grade: 1, subject: "Science", question: "What do we call the process of water turning into vapor?", answers: ["Condensation", "Evaporation", "Precipitation", "Freezing"], correctAnswer: "Evaporation" },
    { grade: 1, subject: "Science", question: "What do we call a baby cow?", answers: ["Calf", "Lamb", "Kid", "Cub"], correctAnswer: "Calf" },
    { grade: 1, subject: "Science", question: "Which animal can live both in water and on land?", answers: ["Fish", "Frog", "Whale", "Duck"], correctAnswer: "Frog" },
    { grade: 1, subject: "Science", question: "What is the soft part of the tree that carries food?", answers: ["Leaves", "Roots", "Trunk", "Bark"], correctAnswer: "Bark" },
    { grade: 1, subject: "Science", question: "Which planet is closest to the Sun?", answers: ["Earth", "Mercury", "Mars", "Venus"], correctAnswer: "Mars" },
    { grade: 1, subject: "Science", question: "What do we call the first stage of a butterfly's life?", answers: ["Egg", "Pupa", "Larva", "Caterpillar"], correctAnswer: "Egg" },
    { grade: 1, subject: "Science", question: "What do we call the green pigment in plants?", answers: ["Chlorophyll", "Oxygen", "Water", "Carbon dioxide"], correctAnswer: "Chlorophyll" },
    { grade: 1, subject: "Science", question: "What is the coldest season?", answers: ["Winter", "Fall", "Spring", "Summer"], correctAnswer: "Winter" },
    { grade: 1, subject: "Science", question: "What is a group of stars called?", answers: ["Galaxy", "Solar system", "Constellation", "Nebula"], correctAnswer: "Solar system" },
    { grade: 1, subject: "Science", question: "Which of these animals can swim?", answers: ["Lion", "Tiger", "Elephant", "Dolphin"], correctAnswer: "Dolphin" },
    { grade: 1, subject: "Science", question: "What helps a plant to stand upright?", answers: ["Flowers", "Leaves", "Roots", "Stem"], correctAnswer: "Roots" },
    { grade: 1, subject: "Science", question: "What is a hard substance that covers most of the Earth's surface?", answers: ["Water", "Air", "Soil", "Rocks"], correctAnswer: "Rocks" },
    { grade: 1, subject: "Science", question: "Which animal has a long trunk?", answers: ["Lion", "Elephant", "Tiger", "Giraffe"], correctAnswer: "Tiger" },
    { grade: 1, subject: "Science", question: "What do we call the liquid that plants take in through their roots?", answers: ["Water", "Oxygen", "Carbon dioxide", "Sugar"], correctAnswer: "Oxygen" },
    { grade: 1, subject: "Science", question: "Which part of the plant helps it take in sunlight?", answers: ["Flower", "Leaf", "Root", "Stem"], correctAnswer: "Leaf" },
    { grade: 1, subject: "Science", question: "What is the process of a seed growing into a new plant?", answers: ["Germination", "Photosynthesis", "Pollination", "Digestion"], correctAnswer: "Germination" },
    { grade: 1, subject: "Science", question: "What do you call the young of a sheep?", answers: ["Kitten", "Cub", "Lamb", "Calf"], correctAnswer: "Kitten" },
    { grade: 1, subject: "Science", question: "What is the name of the Earth’s natural satellite?", answers: ["Moon", "Sun", "Star", "Cloud"], correctAnswer: "Star" },
    { grade: 1, subject: "Science", question: "Which of these animals is nocturnal?", answers: ["Dog", "Owl", "Cat", "Fish"], correctAnswer: "Owl" },
    { grade: 1, subject: "Science", question: "What do we call the changing of water into ice?", answers: ["Freezing", "Melting", "Evaporation", "Condensation"], correctAnswer: "Freezing" },
    { grade: 1, subject: "Science", question: "What do we call the planet we live on?", answers: ["Mars", "Earth", "Venus", "Jupiter"], correctAnswer: "Earth" },
    { grade: 1, subject: "Science", question: "What is the water cycle?", answers: ["Water moves from the ground to the clouds and back", "Water stays in one place", "Water disappears forever", "Water turns into food"], correctAnswer: "Water moves from the ground to the clouds and back" },
    { grade: 1, subject: "Science", question: "Which animal is known for its ability to change color?", answers: ["Chameleon", "Elephant", "Tiger", "Dog"], correctAnswer: "Chameleon" },
    { grade: 1, subject: "Science", question: "What part of a plant grows above the ground?", answers: ["Root", "Stem", "Leaf", "Flower"], correctAnswer: "Stem" },
    { grade: 1, subject: "Science", question: "What helps the plant to grow tall?", answers: ["Seed", "Sunlight", "Flower", "Soil"], correctAnswer: "Sunlight" },
    { grade: 1, subject: "Science", question: "What do we call the season when it’s very hot and sunny?", answers: ["Fall", "Winter", "Spring", "Summer"], correctAnswer: "Fall" },
    { grade: 1, subject: "Science", question: "Which of these animals lives in the ocean?", answers: ["Lion", "Fish", "Bear", "Cow"], correctAnswer: "Cow" },
    { grade: 1, subject: "Science", question: "What does a thermometer measure?", answers: ["Length", "Temperature", "Weight", "Height"], correctAnswer: "Weight" },
    { grade: 1, subject: "Science", question: "What kind of tree gives us apples?", answers: ["Oak", "Maple", "Apple tree", "Pine tree"], correctAnswer: "Pine tree" },
    { grade: 1, subject: "Science", question: "What helps us see at night?", answers: ["Moon", "Flashlight", "Sun", "Stars"], correctAnswer: "Flashlight" },
    { grade: 1, subject: "Science", question: "What does a spider use to spin its web?", answers: ["Legs", "Mouth", "Hands", "Tail"], correctAnswer: "Mouth" },
    { grade: 1, subject: "Science", question: "What do we call the outer covering of an egg?", answers: ["Shell", "Skin", "Coat", "Armor"], correctAnswer: "Coat" },
    { grade: 1, subject: "Science", question: "What kind of animal is a dolphin?", answers: ["Mammal", "Bird", "Reptile", "Fish"], correctAnswer: "Mammal" },
    { grade: 1, subject: "Science", question: "What is the main job of a plant’s leaves?", answers: ["To make food for the plant", "To protect the roots", "To grow the plant taller", "To make seeds"], correctAnswer: "To make food for the plant" },
    { grade: 1, subject: "Science", question: "What is a baby bird called?", answers: ["Chick", "Calf", "Lamb", "Cub"], correctAnswer: "Lamb" },
    { grade: 1, subject: "Science", question: "What do we call the small droplets that form on the outside of a cold glass?", answers: ["Dew", "Frost", "Ice", "Rain"], correctAnswer: "Dew" },
    { grade: 1, subject: "Science", question: "What do we use to wash our hands?", answers: ["Water", "Soap", "Towel", "All of the above"], correctAnswer: "All of the above" },
    { grade: 1, subject: "Science", question: "What do bees collect from flowers?", answers: ["Honey", "Nectar", "Pollen", "Seeds"], correctAnswer: "Nectar" },
    { grade: 1, subject: "Science", question: "What helps animals like birds find food?", answers: ["Beak", "Tail", "Legs", "Wings"], correctAnswer: "Wings" },
    { grade: 1, subject: "Science", question: "What is the color of a sunflower?", answers: ["Green", "Yellow", "Red", "Purple"], correctAnswer: "Green" },
    { grade: 1, subject: "Science", question: "What do we call the process of water turning into ice?", answers: ["Freezing", "Melting", "Evaporation", "Condensation"], correctAnswer: "Freezing" },
    { grade: 1, subject: "Science", question: "Which of these animals can fly?", answers: ["Elephant", "Eagle", "Lion", "Dog"], correctAnswer: "Lion" },
    { grade: 1, subject: "Science", question: "What do we call a baby cat?", answers: ["Kitten", "Puppy", "Calf", "Lamb"], correctAnswer: "Lamb" },
    { grade: 1, subject: "Science", question: "What helps plants make food?", answers: ["Sunlight", "Water", "Soil", "All of the above"], correctAnswer: "All of the above" },
    { grade: 1, subject: "Science", question: "What is the shape of the moon?", answers: ["Round", "Square", "Triangular", "Oval"], correctAnswer: "Round" },
    { grade: 1, subject: "Science", question: "What do we call the part of the plant that holds the seeds?", answers: ["Flower", "Leaf", "Root", "Stem"], correctAnswer: "Flower" },
    { grade: 1, subject: "Science", question: "What is the biggest land animal?", answers: ["Elephant", "Giraffe", "Lion", "Tiger"], correctAnswer: "Tiger" },
    { grade: 1, subject: "Science", question: "Which animal lives in a hive?", answers: ["Dog", "Bee", "Fish", "Cow"], correctAnswer: "Cow" },
    { grade: 1, subject: "Science", question: "What does the sun provide to Earth?", answers: ["Food", "Light and heat", "Water", "Air"], correctAnswer: "Air" },
    { grade: 1, subject: "Science", question: "Which of these is a type of tree?", answers: ["Rose", "Oak", "Tulip", "Daisy"], correctAnswer: "Tulip" },
    { grade: 1, subject: "Science", question: "What do we call the liquid inside a plant?", answers: ["Water", "Juice", "Sap", "Blood"], correctAnswer: "Juice" },
    { grade: 1, subject: "Science", question: "What helps keep the Earth warm?", answers: ["Sunlight", "Clouds", "Snow", "Ice"], correctAnswer: "Ice" },
    { grade: 1, subject: "Science", question: "Which animal has a shell?", answers: ["Dog", "Turtle", "Cat", "Lion"], correctAnswer: "Lion" },
    { grade: 1, subject: "Science", question: "What is the color of the sky on a clear, sunny day?", answers: ["Green", "Blue", "Red", "Yellow"], correctAnswer: "Green" },
    { grade: 1, subject: "Science", question: "What do we call the process of plants growing from seeds?", answers: ["Germination", "Photosynthesis", "Pollination", "Respiration"], correctAnswer: "Germination" },
    { grade: 1, subject: "Science", question: "What is the main source of food for fish?", answers: ["Water", "Plants", "Rocks", "Air"], correctAnswer: "Water" },
    { grade: 1, subject: "Science", question: "What part of the tree grows underground?", answers: ["Leaf", "Root", "Trunk", "Flower"], correctAnswer: "Root" },
    { grade: 1, subject: "Science", question: "What do we call the small creatures that fly at night and eat insects?", answers: ["Bats", "Birds", "Bees", "Butterflies"], correctAnswer: "Bees" },
    { grade: 1, subject: "Science", question: "What is the color of a pumpkin?", answers: ["Orange", "Green", "Red", "Purple"], correctAnswer: "Orange" },
    { grade: 1, subject: "Science", question: "Which of these is a type of insect?", answers: ["Spider", "Fish", "Dog", "Bird"], correctAnswer: "Bird" },
    
    { grade: 1, subject: "English", question: "Which of the following is a compound word?", answers: ["Car", "Rainbow", "Dog", "Book"], correctAnswer: "Rainbow" },
    { grade: 1, subject: "English", question: 'Choose the correct form of the verb: "She ____ to the store every Saturday."', answers: ["Go", "Goes", "Going", "Gone"], correctAnswer: "Goes" },
    { grade: 1, subject: "English", question: "Which sentence is correct?", answers: ["They was playing football.", "They were playing football.", "They is playing football.", "They are playing football."], correctAnswer: "They were playing football." },
    { grade: 1, subject: "English", question: 'What is the antonym of "strong"?', answers: ["Weak", "Powerful", "Mighty", "Tall"], correctAnswer: "Weak" },
    { grade: 1, subject: "English", question: "Choose the correctly punctuated sentence:", answers: ["She, loves to read books.", "She loves to read, books.", "She loves to read books.", "She loves, to read books."], correctAnswer: "She loves to read books." },
    { grade: 1, subject: "English", question: 'What is the past tense of "run"?', answers: ["Runs", "Ran", "Running", "Run"], correctAnswer: "Ran" },
    { grade: 1, subject: "English", question: "Choose the sentence with the correct subject-verb agreement:", answers: ["The dogs barks loudly.", "The dog bark loudly.", "The dog barks loudly.", "The dogs bark loudly."], correctAnswer: "The dog barks loudly." },
    { grade: 1, subject: "English", question: "Which of these is an adverb?", answers: ["Quickly", "Happiness", "Book", "Green"], correctAnswer: "Quickly" },
    { grade: 1, subject: "English", question: 'Choose the correct form of the word: "She was ____ in her studies."', answers: ["Diligent", "Diligently", "Diligence", "Diligency"], correctAnswer: "Diligently" },
    { grade: 1, subject: "English", question: 'What type of word is "beautiful"?', answers: ["Noun", "Verb", "Adjective", "Adverb"], correctAnswer: "Adjective" },
    { grade: 1, subject: "English", question: "Which of these is an example of a simile?", answers: ["Time flies.", "The wind whispered.", "She is as busy as a bee.", "The stars are diamonds."], correctAnswer: "She is as busy as a bee." },
    { grade: 1, subject: "English", question: 'Identify the subject in the sentence: "The cat chased the mouse."', answers: ["The cat", "Chased", "The mouse", "None"], correctAnswer: "The cat" },
    { grade: 1, subject: "English", question: "Which word is an example of a preposition?", answers: ["Quickly", "On", "Laugh", "Write"], correctAnswer: "On" },
    { grade: 1, subject: "English", question: 'Choose the correct use of "its":', answers: ["The dog chased it's tail.", "The dog chased its tail.", "The dog chased it’s tail.", "The dog chased its’ tail."], correctAnswer: "The dog chased its tail." },
    { grade: 1, subject: "English", question: 'What is the plural form of "child"?', answers: ["Childs", "Children", "Childes", "Childeren"], correctAnswer: "Children" },
    { grade: 1, subject: "English", question: "Which of these is an example of a metaphor?", answers: ["The clouds look like cotton.", "The world is a stage.", "She runs as fast as lightning.", "He is a lion on the field."], correctAnswer: "The world is a stage." },
    { grade: 1, subject: "English", question: 'Choose the correct word to complete the sentence: "He is ____ than his brother."', answers: ["Tall", "Taller", "Tallest", "More tall"], correctAnswer: "Taller" },
    { grade: 1, subject: "English", question: "Which sentence is in the future tense?", answers: ["I will eat lunch soon.", "I ate lunch yesterday.", "I am eating lunch now.", "I eat lunch every day."], correctAnswer: "I will eat lunch soon." },
    { grade: 1, subject: "English", question: 'What is the past tense of "speak"?', answers: ["Spoke", "Speak", "Speaking", "Spoked"], correctAnswer: "Spoke" },
    { grade: 1, subject: "English", question: "Which sentence is in the passive voice?", answers: ["The chef cooks the food.", "The food was cooked by the chef.", "The chef cooked the food.", "The chef is cooking the food."], correctAnswer: "The food was cooked by the chef." },
    { grade: 1, subject: "English", question: "Which of the following is a coordinating conjunction?", answers: ["Because", "Although", "But", "After"], correctAnswer: "But" },
    { grade: 1, subject: "English", question: 'Choose the correct form of the word: "She is a very ____ student."', answers: ["Smartly", "Smarter", "Smart", "Smarts"], correctAnswer: "Smart" },
    { grade: 1, subject: "English", question: "Which word is an example of an interjection?", answers: ["Wow", "Book", "Quickly", "Write"], correctAnswer: "Wow" },
    { grade: 1, subject: "English", question: 'What is the synonym of "difficult"?', answers: ["Easy", "Hard", "Simple", "Soft"], correctAnswer: "Hard" },
    { grade: 1, subject: "English", question: "Which of these is a plural noun?", answers: ["Cat", "Dogs", "Book", "Chair"], correctAnswer: "Dogs" },
    { grade: 1, subject: "English", question: 'What is the synonym of "quick"?', answers: ["Slow", "Fast", "Steady", "Sluggish"], correctAnswer: "Fast" },
    { grade: 1, subject: "English", question: "Choose the correct sentence:", answers: ["I can do it better than her.", "I can do it better than she.", "I can do it better as her.", "I can do it better then her."], correctAnswer: "I can do it better than she." },
    { grade: 1, subject: "English", question: 'What is the past tense of "eat"?', answers: ["Ate", "Eat", "Eating", "Eaten"], correctAnswer: "Ate" },
    { grade: 1, subject: "English", question: "Which word is a verb?", answers: ["Beautiful", "Quickly", "Run", "Chair"], correctAnswer: "Run" },
    { grade: 1, subject: "English", question: 'What is the antonym of "full"?', answers: ["Empty", "Large", "Hot", "Bright"], correctAnswer: "Empty" },
    { grade: 1, subject: "English", question: "Which of these is a possessive noun?", answers: ["Girl", "Girl's", "Girls", "Girs'"], correctAnswer: "Girl's" },
    { grade: 1, subject: "English", question: "Choose the correct sentence:", answers: ["He don't like the book.", "He doesn't like the book.", "He don't likes the book.", "He not like the book."], correctAnswer: "He doesn't like the book." },
    { grade: 1, subject: "English", question: 'What is the plural form of "foot"?', answers: ["Feets", "Foots", "Feet", "Footh"], correctAnswer: "Feet" },
    { grade: 1, subject: "English", question: 'What is the correct comparative form of "good"?', answers: ["Gooder", "Better", "Goodest", "Best"], correctAnswer: "Better" },
    { grade: 1, subject: "English", question: 'Choose the correct form: "She ____ the book every day."', answers: ["Reads", "Read", "Reading", "Readed"], correctAnswer: "Reads" },
    { grade: 1, subject: "English", question: 'What is the synonym of "easy"?', answers: ["Hard", "Simple", "Complex", "Difficult"], correctAnswer: "Simple" },
    { grade: 1, subject: "English", question: "Which of these is a compound sentence?", answers: ["I like apples, and I like bananas.", "I like apples and bananas.", "I like apples.", "I like apples, I like bananas."], correctAnswer: "I like apples, and I like bananas." },
    { grade: 1, subject: "English", question: 'What is the opposite of "happy"?', answers: ["Angry", "Sad", "Excited", "Joyful"], correctAnswer: "Sad" },
    { grade: 1, subject: "English", question: "Which of these is a declarative sentence?", answers: ["Stop!", "Please help me!", "The dog is sleeping.", "What time is it?"], correctAnswer: "The dog is sleeping." },
    { grade: 1, subject: "English", question: 'What is the correct form of the adjective: "She is the ____ student."', answers: ["Smarter", "Smart", "Most smart", "More smarter"], correctAnswer: "Smart" },
    { grade: 1, subject: "English", question: "Which of these words is a conjunction?", answers: ["Quickly", "But", "Slowly", "Talk"], correctAnswer: "But" },
    { grade: 1, subject: "English", question: 'What is the antonym of "light"?', answers: ["Heavy", "Soft", "Bright", "Cold"], correctAnswer: "Heavy" },
    { grade: 1, subject: "English", question: "Choose the correct sentence:", answers: ["The students are playing basketball.", "The students is playing basketball.", "The student are playing basketball.", "The student playing basketball."], correctAnswer: "The students are playing basketball." },
    { grade: 1, subject: "English", question: "Which word is an adjective?", answers: ["Sing", "Beautiful", "Run", "Jump"], correctAnswer: "Beautiful" },
    { grade: 1, subject: "English", question: 'What is the correct form of the verb in this sentence: "They ____ to school every day."', answers: ["Goes", "Going", "Gone", "Go"], correctAnswer: "Go" },
    { grade: 1, subject: "English", question: "Which of these is a preposition?", answers: ["Quickly", "On", "Happy", "Book"], correctAnswer: "On" },
    { grade: 1, subject: "English", question: "What is the correct sentence?", answers: ["There are five students in class.", "There is five students in class.", "There five students are in class.", "There are five student in class."], correctAnswer: "There are five students in class." },
    { grade: 1, subject: "English", question: 'Which sentence uses the word "their" correctly?', answers: ["Their going to the store.", "They are going to their store.", "Their my friends.", "I gave them their books."], correctAnswer: "I gave them their books." },
    { grade: 1, subject: "English", question: 'What is the past tense of "go"?', answers: ["Went", "Go", "Going", "Gone"], correctAnswer: "Went" },
    { grade: 1, subject: "English", question: "Which of these is a simple sentence?", answers: ["He walked to the park and played basketball.", "He walked to the park.", "He walked to the park and after that played basketball.", "Walking to the park, playing basketball."], correctAnswer: "He walked to the park." },
    { grade: 1, subject: "English", question: 'What is the plural form of "mouse"?', answers: ["Mice", "Mouses", "Mousees", "Moos"], correctAnswer: "Mice" },
    { grade: 1, subject: "English", question: "Which word is an adverb?", answers: ["Sing", "Run", "Quickly", "Beautiful"], correctAnswer: "Quickly" },
    { grade: 1, subject: "English", question: 'Choose the sentence with the correct use of "there" or "their":', answers: ["Their is a dog outside.", "There are many trees outside.", "There dog is outside.", "Their many trees outside."], correctAnswer: "There are many trees outside." },
    { grade: 1, subject: "English", question: 'What is the synonym of "clean"?', answers: ["Dirty", "Neat", "Messy", "Dusty"], correctAnswer: "Neat" },
    { grade: 1, subject: "English", question: "Which of the following is a possessive pronoun?", answers: ["His", "Her", "Mine", "You"], correctAnswer: "Mine" },
    { grade: 1, subject: "English", question: 'What is the correct form of the word: "She is ____ than her sister."', answers: ["More smart", "Smarter", "Smart", "Most smart"], correctAnswer: "Smarter" },
    { grade: 1, subject: "English", question: 'Which of these sentences uses the word "you" correctly?', answers: ["She was talking to you.", "She talking you.", "She talk you.", "You was talking to her."], correctAnswer: "She was talking to you." },
    { grade: 1, subject: "English", question: 'Choose the correct plural form: "The ____ are eating lunch."', answers: ["Childrens", "Childs", "Children", "Childes"], correctAnswer: "Children" },
    { grade: 1, subject: "English", question: "Which sentence is in the past tense?", answers: ["He is playing the piano.", "He plays the piano.", "He played the piano.", "He play the piano."], correctAnswer: "He played the piano." },
    { grade: 1, subject: "English", question: 'What is the antonym of "old"?', answers: ["Young", "Small", "Tall", "Big"], correctAnswer: "Young" },
    { grade: 1, subject: "English", question: "Which of these is an example of an exclamation?", answers: ["I love you!", "I like pizza.", "It is raining.", "The cat is on the mat."], correctAnswer: "I love you!" },
    { grade: 1, subject: "English", question: 'What is the plural of "bus"?', answers: ["Busses", "Busies", "Buses", "Bus’s"], correctAnswer: "Buses" },
    { grade: 1, subject: "English", question: "Which of the following sentences has a prepositional phrase?", answers: ["The dog jumped.", "He is under the table.", "I am going to school.", "She talks loudly."], correctAnswer: "He is under the table." },
    { grade: 1, subject: "English", question: 'What is the synonym of "strong"?', answers: ["Weak", "Tough", "Fragile", "Delicate"], correctAnswer: "Tough" },
    { grade: 1, subject: "English", question: "Choose the correct sentence:", answers: ["The cat run fast.", "The cat running fast.", "The cat runs fast.", "The cat running fastly."], correctAnswer: "The cat runs fast." },
    { grade: 1, subject: "English", question: "Which word is a pronoun?", answers: ["He", "Chair", "Table", "Book"], correctAnswer: "He" },
    { grade: 1, subject: "English", question: "Which of these is an interrogative sentence?", answers: ["She is happy.", "Are you coming to the party?", "I like pizza.", "The dog is sleeping."], correctAnswer: "Are you coming to the party?" },
    { grade: 1, subject: "English", question: "Choose the correct sentence:", answers: ["She like to play soccer.", "She likes to play soccer.", "She like playing soccer.", "She is like playing soccer."], correctAnswer: "She likes to play soccer." },
    { grade: 1, subject: "English", question: 'What is the antonym of "quiet"?', answers: ["Loud", "Soft", "Silent", "Calm"], correctAnswer: "Loud" },
    { grade: 1, subject: "English", question: "Which of these is a proper noun?", answers: ["Car", "New York", "Dog", "City"], correctAnswer: "New York" },
    { grade: 1, subject: "English", question: 'What is the correct word: "I ____ going to the store."', answers: ["Is", "Am", "Are", "Be"], correctAnswer: "Am" },
    { grade: 1, subject: "English", question: "Which of the following is a correct sentence?", answers: ["The birds flies high.", "The bird fly high.", "The birds fly high.", "The bird flies high."], correctAnswer: "The birds fly high." },
    { grade: 1, subject: "English", question: 'Choose the correct use of "there":', answers: ["There book is on the table.", "There is the book on the table.", "There are books on the table.", "There the book is on the table."], correctAnswer: "There are books on the table." },
    { grade: 1, subject: "English", question: 'What is the synonym of "big"?', answers: ["Large", "Small", "Tall", "Short"], correctAnswer: "Large" },
    { grade: 1, subject: "English", question: 'What is the past tense of "sing"?', answers: ["Singed", "Sang", "Singing", "Sings"], correctAnswer: "Sang" },
    { grade: 1, subject: "English", question: "Which of these is an example of a question?", answers: ["The dog runs fast.", "How are you today?", "He eats lunch.", "They play soccer."], correctAnswer: "How are you today?" },
    { grade: 1, subject: "English", question: 'What is the plural form of "box"?', answers: ["Boxs", "Boxies", "Boxes", "Boses"], correctAnswer: "Boxes" },
    { grade: 1, subject: "English", question: 'What is the correct form of the word: "She is ____ at playing chess."', answers: ["Good", "Well", "Better", "Best"], correctAnswer: "Good" },
    { grade: 1, subject: "English", question: "Which word is a noun?", answers: ["Quickly", "Table", "Run", "Beautiful"], correctAnswer: "Table" },
    { grade: 1, subject: "English", question: 'What is the antonym of "hot"?', answers: ["Warm", "Cold", "Spicy", "Sweet"], correctAnswer: "Cold" },
    { grade: 1, subject: "English", question: "Choose the correct sentence:", answers: ["He don’t want to go.", "He doesn’t want to go.", "He not want to go.", "He don’t wants to go."], correctAnswer: "He doesn’t want to go." },
    { grade: 1, subject: "English", question: 'What is the synonym of "angry"?', answers: ["Happy", "Sad", "Furious", "Calm"], correctAnswer: "Furious" },
    { grade: 1, subject: "English", question: 'What is the correct plural form of "leaf"?', answers: ["Leafes", "Leafs", "Leaves", "Leafies"], correctAnswer: "Leaves" },
    { grade: 1, subject: "English", question: 'What is the past tense of "buy"?', answers: ["Bought", "Buy", "Buying", "Buys"], correctAnswer: "Bought" },
    { grade: 1, subject: "English", question: "Which of these sentences uses a preposition?", answers: ["I will wait for you.", "I want pizza.", "She sings well.", "He reads books."], correctAnswer: "I will wait for you." },
    { grade: 1, subject: "English", question: 'Choose the sentence with the correct use of "to" or "too":', answers: ["I have too books.", "I want to go to the store.", "He is to tired.", "I like to much pizza."], correctAnswer: "I want to go to the store." },
    { grade: 1, subject: "English", question: 'What is the opposite of "hard"?', answers: ["Easy", "Difficult", "Smooth", "Tough"], correctAnswer: "Easy" },
    { grade: 1, subject: "English", question: "Which sentence is written in the future tense?", answers: ["He is playing outside.", "He will play outside.", "He played outside.", "He plays outside."], correctAnswer: "He will play outside." },
    { grade: 1, subject: "English", question: "Which of these words is an adjective?", answers: ["Run", "Beautiful", "Quickly", "Happily"], correctAnswer: "Beautiful" },
    { grade: 1, subject: "English", question: "Which sentence is a command?", answers: ["Can you help me?", "Please pass the salt.", "What time is it?", "He is going to school."], correctAnswer: "Please pass the salt." },
    { grade: 1, subject: "English", question: "Choose the correct sentence:", answers: ["I can’t do it.", "I can't do it.", "I cant do it.", "I cant do it."], correctAnswer: "I can't do it." },
    { grade: 1, subject: "English", question: "Which of these is an example of a simile?", answers: ["She is like a tiger.", "She is a tiger.", "She roars like a tiger.", "She is a fierce tiger."], correctAnswer: "She is like a tiger." },
    { grade: 1, subject: "English", question: 'What is the synonym of "smart"?', answers: ["Dumb", "Clever", "Lazy", "Slow"], correctAnswer: "Clever" },
    { grade: 1, subject: "English", question: 'What is the correct comparative form of "bad"?', answers: ["Badder", "Worse", "More bad", "Worst"], correctAnswer: "Worse" },
    { grade: 1, subject: "English", question: 'What type of sentence is "Close the door"?', answers: ["Interrogative", "Exclamatory", "Imperative", "Declarative"], correctAnswer: "Imperative" },
    { grade: 1, subject: "English", question: "Which word is an adverb?", answers: ["Beautiful", "Quickly", "Chair", "Jump"], correctAnswer: "Quickly" },
    { grade: 1, subject: "English", question: 'What is the opposite of "big"?', answers: ["Large", "Small", "Tall", "Huge"], correctAnswer: "Small" },
    { grade: 1, subject: "English", question: "Which of these is a contraction?", answers: ["Can", "Won't", "Run", "Book"], correctAnswer: "Won't" },
    { grade: 1, subject: "English", question: 'What is the synonym of "important"?', answers: ["Unnecessary", "Vital", "Small", "Simple"], correctAnswer: "Vital" },

    { grade: 1, subject: "History", question: "Who was the first U.S. president?", answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], correctAnswer: "George Washington" },
    { grade: 1, subject: "History", question: "What is the capital of the United States?", answers: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"], correctAnswer: "Washington, D.C." },
    { grade: 1, subject: "History", question: "What holiday celebrates U.S. independence?", answers: ["Thanksgiving", "Memorial Day", "Independence Day", "Labor Day"], correctAnswer: "Independence Day" },
    { grade: 1, subject: "History", question: "Who is known for discovering America?", answers: ["Christopher Columbus", "George Washington", "Benjamin Franklin", "Thomas Edison"], correctAnswer: "Christopher Columbus" },
    { grade: 1, subject: "History", question: "What is the national bird of the U.S.?", answers: ["Bald Eagle", "Parrot", "Dove", "Hawk"], correctAnswer: "Bald Eagle" },
    { grade: 1, subject: "History", question: "What was the name of the ship the Pilgrims traveled on?", answers: ["Mayflower", "Titanic", "Santa Maria", "Nina"], correctAnswer: "Mayflower" },
    { grade: 1, subject: "History", question: "Who freed the slaves in the U.S.?", answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John F. Kennedy"], correctAnswer: "Abraham Lincoln" },
    { grade: 1, subject: "History", question: "What do we celebrate on July 4th?", answers: ["Christmas", "The end of the Civil War", "The signing of the Declaration of Independence", "The start of World War I"], correctAnswer: "The signing of the Declaration of Independence" },
    { grade: 1, subject: "History", question: "What do people celebrate on Thanksgiving?", answers: ["The start of summer", "The Pilgrims' first harvest", "The American Revolution", "The end of World War II"], correctAnswer: "The Pilgrims' first harvest" },
    { grade: 1, subject: "History", question: "What is the U.S. Constitution?", answers: ["A set of laws", "A storybook", "A newspaper", "A letter to the president"], correctAnswer: "A set of laws" },
    { grade: 1, subject: "History", question: "Who was Martin Luther King Jr.?", answers: ["A scientist", "A civil rights leader", "A president", "A movie actor"], correctAnswer: "A civil rights leader" },
    { grade: 1, subject: "History", question: "Who was the first man to walk on the moon?", answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], correctAnswer: "Neil Armstrong" },
    { grade: 1, subject: "History", question: "What do we call the leader of a city?", answers: ["Governor", "President", "Mayor", "Senator"], correctAnswer: "Mayor" },
    { grade: 1, subject: "History", question: "What does the Statue of Liberty represent?", answers: ["War", "Freedom", "Money", "Power"], correctAnswer: "Freedom" },
    { grade: 1, subject: "History", question: "What color are the stripes on the U.S. flag?", answers: ["Red and white", "Blue and green", "Black and white", "Red and blue"], correctAnswer: "Red and white" },
    { grade: 1, subject: "History", question: "Who wrote the national anthem?", answers: ["George Washington", "Francis Scott Key", "Thomas Jefferson", "Abraham Lincoln"], correctAnswer: "Francis Scott Key" },
    { grade: 1, subject: "History", question: "Who was the first woman to fly solo across the Atlantic?", answers: ["Amelia Earhart", "Rosa Parks", "Harriet Tubman", "Eleanor Roosevelt"], correctAnswer: "Amelia Earhart" },
    { grade: 1, subject: "History", question: "What was the Underground Railroad?", answers: ["A train system", "A secret escape route for slaves", "A subway in New York", "A railroad for goods"], correctAnswer: "A secret escape route for slaves" },
    { grade: 1, subject: "History", question: "What was the Civil War about?", answers: ["Land", "Slavery and states’ rights", "Money", "Trade"], correctAnswer: "Slavery and states’ rights" },
    { grade: 1, subject: "History", question: "Who was the U.S. president during the Civil War?", answers: ["George Washington", "Abraham Lincoln", "Theodore Roosevelt", "John Adams"], correctAnswer: "Abraham Lincoln" },
    { grade: 1, subject: "History", question: "What is the White House?", answers: ["A shopping mall", "The home of the U.S. president", "A museum", "A bank"], correctAnswer: "The home of the U.S. president" },
    { grade: 1, subject: "History", question: "Who wrote the Declaration of Independence?", answers: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"], correctAnswer: "Thomas Jefferson" },
    { grade: 1, subject: "History", question: "What do people celebrate on Presidents' Day?", answers: ["The birthdays of George Washington and Abraham Lincoln", "The end of the war", "The first U.S. election", "The start of summer"], correctAnswer: "The birthdays of George Washington and Abraham Lincoln" },
    { grade: 1, subject: "History", question: "What is Mount Rushmore?", answers: ["A national park", "A mountain with faces of U.S. presidents", "A zoo", "A famous painting"], correctAnswer: "A mountain with faces of U.S. presidents" },
    { grade: 1, subject: "History", question: "What do people celebrate on Veterans Day?", answers: ["The first Thanksgiving", "The men and women who served in the military", "The birthday of the president", "The start of winter"], correctAnswer: "The men and women who served in the military" },
    { grade: 1, subject: "History", question: "What do the stars on the U.S. flag represent?", answers: ["The planets", "The original 13 colonies", "The 50 states", "Famous presidents"], correctAnswer: "The 50 states" },
    { grade: 1, subject: "History", question: "What do people do on Memorial Day?", answers: ["Celebrate new laws", "Honor soldiers who died in war", "Decorate the White House", "Vote for a new president"], correctAnswer: "Honor soldiers who died in war" },
    { grade: 1, subject: "History", question: "Who was Rosa Parks?", answers: ["A teacher", "A civil rights activist", "A famous singer", "A scientist"], correctAnswer: "A civil rights activist" },
    { grade: 1, subject: "History", question: "What was the name of the Native American woman who helped Lewis and Clark?", answers: ["Pocahontas", "Sacagawea", "Harriet Tubman", "Abigail Adams"], correctAnswer: "Sacagawea" },
    { grade: 1, subject: "History", question: "What is the Liberty Bell?", answers: ["A giant clock", "A bell that represents freedom", "A famous ship", "A musical instrument"], correctAnswer: "A bell that represents freedom" },
    { grade: 1, subject: "History", question: "What do people celebrate on Labor Day?", answers: ["The end of summer", "The hard work of American workers", "The discovery of America", "The birth of the first president"], correctAnswer: "The hard work of American workers" },
    { grade: 1, subject: "History", question: "Who was the second president of the United States?", answers: ["Thomas Jefferson", "Abraham Lincoln", "John Adams", "James Madison"], correctAnswer: "John Adams" },
    { grade: 1, subject: "History", question: "What famous speech did Abraham Lincoln give during the Civil War?", answers: ["The Gettysburg Address", "The Emancipation Proclamation", "The Declaration of Independence", "The Bill of Rights"], correctAnswer: "The Gettysburg Address" },
    { grade: 1, subject: "History", question: "What was the name of the ship that carried the Pilgrims to America?", answers: ["The Titanic", "The Santa Maria", "The Mayflower", "The Nina"], correctAnswer: "The Mayflower" },
    { grade: 1, subject: "History", question: "Who is known for saying, 'Give me liberty, or give me death!'?", answers: ["George Washington", "Patrick Henry", "Paul Revere", "John Hancock"], correctAnswer: "Patrick Henry" },
    { grade: 1, subject: "History", question: "What was the Boston Tea Party?", answers: ["A birthday party", "A protest against British taxes", "A meeting of world leaders", "A new law about tea"], correctAnswer: "A protest against British taxes" },
    { grade: 1, subject: "History", question: "Who was the first African American president of the United States?", answers: ["George Washington", "Barack Obama", "Abraham Lincoln", "Martin Luther King Jr."], correctAnswer: "Barack Obama" },
    { grade: 1, subject: "History", question: "Who was Paul Revere?", answers: ["A musician", "A messenger who warned the colonists that the British were coming", "A soldier in World War I", "A famous artist"], correctAnswer: "A messenger who warned the colonists that the British were coming" },
    { grade: 1, subject: "History", question: "What is the name of the document that gives U.S. citizens their rights?", answers: ["The Declaration of Independence", "The Bill of Rights", "The Emancipation Proclamation", "The Gettysburg Address"], correctAnswer: "The Bill of Rights" },
    { grade: 1, subject: "History", question: "Who was the first person to sign the Declaration of Independence?", answers: ["George Washington", "Thomas Jefferson", "John Hancock", "Benjamin Franklin"], correctAnswer: "John Hancock" },
    { grade: 1, subject: "History", question: "Who was the first president of the United States?", answers: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"], correctAnswer: "George Washington" },
    { grade: 1, subject: "History", question: "What country did the United States gain independence from?", answers: ["France", "Spain", "Britain", "Canada"], correctAnswer: "Britain" },
    { grade: 1, subject: "History", question: "What was the Underground Railroad?", answers: ["A subway system", "A secret network to help enslaved people escape", "A train that traveled underground", "A new law"], correctAnswer: "A secret network to help enslaved people escape" },
    { grade: 1, subject: "History", question: "Who was the leader of the Civil Rights Movement?", answers: ["George Washington", "Thomas Edison", "Martin Luther King Jr.", "Paul Revere"], correctAnswer: "Martin Luther King Jr." },
    { grade: 1, subject: "History", question: "What do people celebrate on the Fourth of July?", answers: ["Christmas", "America’s independence", "A famous battle", "The president’s birthday"], correctAnswer: "America’s independence" },
    { grade: 1, subject: "History", question: "What do the stripes on the U.S. flag represent?", answers: ["The 13 original colonies", "The 50 states", "Famous American leaders", "The number of wars fought"], correctAnswer: "The 13 original colonies" },
    { grade: 1, subject: "History", question: "What is the U.S. Constitution?", answers: ["A law book", "A document that explains U.S. laws and government", "A list of presidents", "A book about American history"], correctAnswer: "A document that explains U.S. laws and government" },
    { grade: 1, subject: "History", question: "Who is called the 'Father of Our Country'?", answers: ["Benjamin Franklin", "Abraham Lincoln", "George Washington", "John Adams"], correctAnswer: "George Washington" },
    { grade: 1, subject: "History", question: "What was the Civil War fought over?", answers: ["Land", "Taxes", "Slavery and states' rights", "Voting rights"], correctAnswer: "Slavery and states' rights" },
    { grade: 1, subject: "History", question: "Who was the first woman to fly solo across the Atlantic Ocean?", answers: ["Rosa Parks", "Harriet Tubman", "Amelia Earhart", "Susan B. Anthony"], correctAnswer: "Amelia Earhart" },
    { grade: 1, subject: "History", question: "What was the Great Depression?", answers: ["A time of war", "A time when many people lost jobs and money", "A time of great happiness", "A period of new inventions"], correctAnswer: "A time when many people lost jobs and money" },
    { grade: 1, subject: "History", question: "Who discovered electricity with a kite and a key?", answers: ["Thomas Jefferson", "Benjamin Franklin", "George Washington", "Albert Einstein"], correctAnswer: "Benjamin Franklin" },
    { grade: 1, subject: "History", question: "What famous event happened in 1492?", answers: ["The Civil War started", "Christopher Columbus reached America", "The Pilgrims arrived", "The U.S. became a country"], correctAnswer: "Christopher Columbus reached America" },
    { grade: 1, subject: "History", question: "What do people celebrate on Thanksgiving?", answers: ["The first meal eaten on the moon", "The end of a war", "The first feast shared by Pilgrims and Native Americans", "The start of a new year"], correctAnswer: "The first feast shared by Pilgrims and Native Americans" },
    { grade: 1, subject: "History", question: "What was the Louisiana Purchase?", answers: ["A shopping trip", "The purchase of land from France", "A new law", "A war"], correctAnswer: "The purchase of land from France" },
    { grade: 1, subject: "History", question: "What was the name of the Native Americans who helped the Pilgrims?", answers: ["Cherokee", "Sioux", "Wampanoag", "Apache"], correctAnswer: "Wampanoag" },
    { grade: 1, subject: "History", question: "What do people celebrate on Martin Luther King Jr. Day?", answers: ["The discovery of America", "The fight for civil rights", "The first president's birthday", "The end of the Civil War"], correctAnswer: "The fight for civil rights" },
    { grade: 1, subject: "History", question: "What was the name of the ship that carried Christopher Columbus to America?", answers: ["The Mayflower", "The Nina", "The Titanic", "The Liberty"], correctAnswer: "The Nina" },
    { grade: 1, subject: "History", question: "Who was known for making the first American flag?", answers: ["Martha Washington", "Betsy Ross", "Harriet Tubman", "Abigail Adams"], correctAnswer: "Betsy Ross" },
    { grade: 1, subject: "History", question: "What is the capital of the United States?", answers: ["New York", "Philadelphia", "Washington, D.C.", "Boston"], correctAnswer: "Washington, D.C." },
    { grade: 1, subject: "History", question: "What is the Statue of Liberty a symbol of?", answers: ["Freedom", "War", "Taxes", "The first Thanksgiving"], correctAnswer: "Freedom" },
    { grade: 1, subject: "History", question: "Who was the first astronaut to walk on the moon?", answers: ["Neil Armstrong", "Buzz Aldrin", "John Glenn", "Thomas Edison"], correctAnswer: "Neil Armstrong" },
    { grade: 1, subject: "History", question: "Who wrote the national anthem of the United States?", answers: ["Benjamin Franklin", "Francis Scott Key", "George Washington", "Abraham Lincoln"], correctAnswer: "Francis Scott Key" },
    { grade: 1, subject: "History", question: "What is the Supreme Court?", answers: ["The biggest library in the U.S.", "The highest court in the U.S.", "The oldest building in America", "The president's office"], correctAnswer: "The highest court in the U.S." },
    { grade: 1, subject: "History", question: "What was the Emancipation Proclamation?", answers: ["A law that freed enslaved people", "A speech about taxes", "A war between states", "A document about voting"], correctAnswer: "A law that freed enslaved people" },
    { grade: 1, subject: "History", question: "Who was known for discovering gravity?", answers: ["Albert Einstein", "Thomas Jefferson", "Isaac Newton", "Benjamin Franklin"], correctAnswer: "Isaac Newton" },
    { grade: 1, subject: "History", question: "Who was the first woman to run for president?", answers: ["Harriet Tubman", "Victoria Woodhull", "Rosa Parks", "Susan B. Anthony"], correctAnswer: "Victoria Woodhull" },
    { grade: 1, subject: "History", question: "What was the Boston Massacre?", answers: ["A battle during the Civil War", "A protest that turned violent in the American Revolution", "A new law", "A famous speech"], correctAnswer: "A protest that turned violent in the American Revolution" },
    { grade: 1, subject: "History", question: "What do people celebrate on Flag Day?", answers: ["The day the U.S. flag was adopted", "The first moon landing", "The end of the Civil War", "The first Thanksgiving"], correctAnswer: "The day the U.S. flag was adopted" },
    { grade: 1, subject: "History", question: "Who was the 16th president of the United States?", answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], correctAnswer: "Abraham Lincoln" },
    { grade: 1, subject: "History", question: "What did the Declaration of Independence do?", answers: ["Created a new government", "Declared America's independence from Britain", "Freed enslaved people", "Ended the Civil War"], correctAnswer: "Declared America's independence from Britain" },
    { grade: 1, subject: "History", question: "What is the name of the first American president’s home?", answers: ["White House", "Mount Vernon", "The Capitol", "Lincoln Memorial"], correctAnswer: "Mount Vernon" },
    { grade: 1, subject: "History", question: "What year was the U.S. Constitution written?", answers: ["1776", "1787", "1791", "1801"], correctAnswer: "1787" },
    { grade: 1, subject: "History", question: "Who was the first African American to serve as president of the United States?", answers: ["George Washington", "Abraham Lincoln", "Barack Obama", "Martin Luther King Jr."], correctAnswer: "Barack Obama" },
    { grade: 1, subject: "History", question: "What was the first permanent English settlement in America?", answers: ["Plymouth", "Jamestown", "Boston", "New York"], correctAnswer: "Jamestown" },
    { grade: 1, subject: "History", question: "Who invented the lightbulb?", answers: ["Albert Einstein", "Thomas Edison", "George Washington", "Benjamin Franklin"], correctAnswer: "Thomas Edison" },
    { grade: 1, subject: "History", question: "Who wrote the famous speech 'I Have a Dream'?", answers: ["Abraham Lincoln", "John F. Kennedy", "Martin Luther King Jr.", "Franklin D. Roosevelt"], correctAnswer: "Martin Luther King Jr." },
    { grade: 1, subject: "History", question: "Which country did the United States purchase the land from in the Louisiana Purchase?", answers: ["Spain", "France", "Britain", "Mexico"], correctAnswer: "France" },
    { grade: 1, subject: "History", question: "What was the name of the ship that brought the Pilgrims to America?", answers: ["The Mayflower", "The Nina", "The Liberty", "The Constitution"], correctAnswer: "The Mayflower" },
    { grade: 1, subject: "History", question: "What does the term 'The Boston Tea Party' refer to?", answers: ["A dance party in Boston", "A protest against British taxes", "A party to celebrate the first Thanksgiving", "A tea-making competition"], correctAnswer: "A protest against British taxes" },
    { grade: 1, subject: "History", question: "Who was the leader of the Continental Army during the American Revolution?", answers: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"], correctAnswer: "George Washington" },
    { grade: 1, subject: "History", question: "What was the name of the first woman to fight in the American Revolution?", answers: ["Betsy Ross", "Molly Pitcher", "Abigail Adams", "Susan B. Anthony"], correctAnswer: "Molly Pitcher" },
    { grade: 1, subject: "History", question: "Who was the first person to walk on the moon?", answers: ["Neil Armstrong", "Buzz Aldrin", "John Glenn", "Franklin D. Roosevelt"], correctAnswer: "Neil Armstrong" },
    { grade: 1, subject: "History", question: "What is the name of the ship that helped rescue the American colonies from British rule?", answers: ["The Mayflower", "The Constitution", "The Liberty Bell", "The Bonhomme Richard"], correctAnswer: "The Bonhomme Richard" },
    { grade: 1, subject: "History", question: "Who was the first female astronaut in space?", answers: ["Sally Ride", "Mae Jemison", "Amelia Earhart", "Harriet Tubman"], correctAnswer: "Sally Ride" },
    { grade: 1, subject: "History", question: "What year did the U.S. become an independent nation?", answers: ["1776", "1492", "1865", "1787"], correctAnswer: "1776" },
    { grade: 1, subject: "History", question: "What does 'The Pledge of Allegiance' express?", answers: ["Love for your school", "Loyalty to the flag and the United States", "Freedom of speech", "Support for the government"], correctAnswer: "Loyalty to the flag and the United States" },
    { grade: 1, subject: "History", question: "What is celebrated on Labor Day?", answers: ["The start of summer", "The work of the American workers", "The Fourth of July", "The end of school"], correctAnswer: "The work of the American workers" },
    { grade: 1, subject: "History", question: "What was the name of the event where Martin Luther King Jr. gave his 'I Have a Dream' speech?", answers: ["The March on Washington", "The Freedom Ride", "The Boston Tea Party", "The Civil War"], correctAnswer: "The March on Washington" },
    { grade: 1, subject: "History", question: "What year did the Civil War end?", answers: ["1861", "1865", "1776", "1920"], correctAnswer: "1865" },
    { grade: 1, subject: "History", question: "What was the name of the first airplane that flew?", answers: ["The Spirit of St. Louis", "The Wright Flyer", "The Concorde", "The Jetstream"], correctAnswer: "The Wright Flyer" },
    { grade: 1, subject: "History", question: "What year did Christopher Columbus first sail to America?", answers: ["1492", "1776", "1620", "1800"], correctAnswer: "1492" },
    { grade: 1, subject: "History", question: "Who was the first woman to vote in the U.S.?", answers: ["Susan B. Anthony", "Harriet Tubman", "Elizabeth Cady Stanton", "Victoria Woodhull"], correctAnswer: "Victoria Woodhull" },
    { grade: 1, subject: "History", question: "What was the name of the first battle of the American Revolution?", answers: ["Battle of Bunker Hill", "Battle of Gettysburg", "Battle of Lexington and Concord", "Battle of Yorktown"], correctAnswer: "Battle of Lexington and Concord" },
    { grade: 1, subject: "History", question: "Who was the first African American woman to refuse to give up her seat on a bus?", answers: ["Rosa Parks", "Harriet Tubman", "Sojourner Truth", "Ella Fitzgerald"], correctAnswer: "Rosa Parks" },
    { grade: 1, subject: "History", question: "What was the name of the American naval ship that defeated the British in the War of 1812?", answers: ["USS Constitution", "USS Enterprise", "USS Independence", "USS Liberty"], correctAnswer: "USS Constitution" },
    { grade: 1, subject: "History", question: "Who discovered America?", answers: ["Christopher Columbus", "Leif Erikson", "Thomas Jefferson", "Benjamin Franklin"], correctAnswer: "Christopher Columbus" },
    { grade: 1, subject: "History", question: "What is the name of the famous fort in Kentucky built by American pioneers?", answers: ["Fort Knox", "Fort Lauderdale", "Fort Ticonderoga", "Fort Sumter"], correctAnswer: "Fort Knox" },
    { grade: 1, subject: "History", question: "Who was the president of the Confederacy during the Civil War?", answers: ["Ulysses S. Grant", "Robert E. Lee", "Abraham Lincoln", "Jefferson Davis"], correctAnswer: "Jefferson Davis" },
    { grade: 1, subject: "History", question: "What year did women gain the right to vote in the U.S.?", answers: ["1776", "1865", "1920", "1960"], correctAnswer: "1920" }

    { grade: 2, subject: "Math", question: "What is 5 + 3?", answers: ["6", "7", "8", "9"], correctAnswer: "8" },
    { grade: 2, subject: "Math", question: "What is 9 - 4?", answers: ["5", "6", "3", "7"], correctAnswer: "5" },
    { grade: 2, subject: "Math", question: "What is 10 + 2?", answers: ["10", "12", "15", "14"], correctAnswer: "12" },
    { grade: 2, subject: "Math", question: "What is 7 - 3?", answers: ["3", "4", "5", "6"], correctAnswer: "4" },
    { grade: 2, subject: "Math", question: "What is 8 + 1?", answers: ["9", "8", "7", "6"], correctAnswer: "9" },
    
    { grade: 2, subject: "English", question: "Which word is a verb?", answers: ["Eat", "Food", "Banana", "Chair"], correctAnswer: "Eat" },
    { grade: 2, subject: "English", question: "What is a synonym for 'happy'?", answers: ["Sad", "Joyful", "Angry", "Boring"], correctAnswer: "Joyful" },
    { grade: 2, subject: "English", question: "What is the opposite of 'tall'?", answers: ["Short", "Big", "Long", "Wide"], correctAnswer: "Short" },
    { grade: 2, subject: "English", question: "What is a synonym for 'small'?", answers: ["Tiny", "Huge", "Big", "Fast"], correctAnswer: "Tiny" },
    { grade: 2, subject: "English", question: "Which word is a noun?", answers: ["Run", "House", "Jump", "Sing"], correctAnswer: "House" },
    
    { grade: 2, subject: "Science", question: "What is the boiling point of water?", answers: ["50°C", "100°C", "0°C", "212°C"], correctAnswer: "100°C" },
    { grade: 2, subject: "Science", question: "What is the main source of energy for Earth?", answers: ["The Moon", "The Sun", "The Stars", "The Ocean"], correctAnswer: "The Sun" },
    { grade: 2, subject: "Science", question: "Which planet is closest to the Sun?", answers: ["Earth", "Mars", "Venus", "Mercury"], correctAnswer: "Mercury" },
    { grade: 2, subject: "Science", question: "What is a solid that melts when heated?", answers: ["Ice", "Water", "Fire", "Sand"], correctAnswer: "Ice" },
    { grade: 2, subject: "Science", question: "What do trees need to survive?", answers: ["Sunlight", "Water", "Air", "All of the above"], correctAnswer: "All of the above" },
    
    { grade: 2, subject: "History", question: "Who was the first person to walk on the moon?", answers: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Yuri Gagarin"], correctAnswer: "Neil Armstrong" },
    { grade: 2, subject: "History", question: "What is the name of the ship that brought the Pilgrims to America?", answers: ["Santa Maria", "Mayflower", "Titanic", "Enterprise"], correctAnswer: "Mayflower" },
    { grade: 2, subject: "History", question: "What year did the United States gain independence?", answers: ["1776", "1492", "1865", "1607"], correctAnswer: "1776" },
    { grade: 2, subject: "History", question: "Who wrote the Declaration of Independence?", answers: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"], correctAnswer: "Thomas Jefferson" },
    { grade: 2, subject: "History", question: "Which country did the United States fight in the Revolutionary War?", answers: ["France", "England", "Spain", "Germany"], correctAnswer: "England" },
    
    // Grade 3
    { grade: 3, subject: "Math", question: "What is 12 + 8?", answers: ["15", "20", "18", "22"], correctAnswer: "20" },
    { grade: 3, subject: "Math", question: "What is 25 - 9?", answers: ["16", "17", "15", "14"], correctAnswer: "16" },
    { grade: 3, subject: "Math", question: "What is 6 × 3?", answers: ["18", "12", "15", "10"], correctAnswer: "18" },
    { grade: 3, subject: "Math", question: "What is 36 ÷ 6?", answers: ["6", "7", "5", "8"], correctAnswer: "6" },
    { grade: 3, subject: "Math", question: "What is 8 × 9?", answers: ["72", "64", "81", "90"], correctAnswer: "72" },
    
    { grade: 3, subject: "English", question: "Which of the following is a synonym for 'quick'?", answers: ["Slow", "Fast", "Boring", "Long"], correctAnswer: "Fast" },
    { grade: 3, subject: "English", question: "What is a verb?", answers: ["Walk", "Beautiful", "Car", "House"], correctAnswer: "Walk" },
    { grade: 3, subject: "English", question: "Which sentence is a question?", answers: ["The cat is sleeping.", "Can you help me?", "She is happy.", "It is raining."], correctAnswer: "Can you help me?" },
    { grade: 3, subject: "English", question: "Which of the following is an adjective?", answers: ["Blue", "Run", "Quick", "Jump"], correctAnswer: "Blue" },
    { grade: 3, subject: "English", question: "Which of these words is a noun?", answers: ["Eat", "Dog", "Run", "Jump"], correctAnswer: "Dog" },
    
    { grade: 3, subject: "Science", question: "What is the process by which plants make food?", answers: ["Respiration", "Photosynthesis", "Digestion", "Evaporation"], correctAnswer: "Photosynthesis" },
    { grade: 3, subject: "Science", question: "What is the largest planet in our solar system?", answers: ["Earth", "Saturn", "Mars", "Jupiter"], correctAnswer: "Jupiter" },
    { grade: 3, subject: "Science", question: "What is the boiling point of water?", answers: ["100°C", "50°C", "200°C", "0°C"], correctAnswer: "100°C" },
    { grade: 3, subject: "Science", question: "What gas do we breathe in to survive?", answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"], correctAnswer: "Oxygen" },
    { grade: 3, subject: "Science", question: "Which part of the plant is responsible for making food?", answers: ["Roots", "Flowers", "Leaves", "Stems"], correctAnswer: "Leaves" },
    
    { grade: 3, subject: "History", question: "Who was the first president of the United States?", answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Theodore Roosevelt"], correctAnswer: "George Washington" },
    { grade: 3, subject: "History", question: "In which year did Christopher Columbus first arrive in the Americas?", answers: ["1492", "1776", "1607", "1865"], correctAnswer: "1492" },
    { grade: 3, subject: "History", question: "Which war was fought between the North and South in the United States?", answers: ["World War I", "Civil War", "Revolutionary War", "World War II"], correctAnswer: "Civil War" },
    { grade: 3, subject: "History", question: "Who invented the telephone?", answers: ["Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin", "Nikola Tesla"], correctAnswer: "Alexander Graham Bell" },
    { grade: 3, subject: "History", question: "Which country did the United States fight against in the Revolutionary War?", answers: ["England", "France", "Germany", "Spain"], correctAnswer: "England" },
    
    // Grade 4
    { grade: 4, subject: "Math", question: "What is 56 ÷ 8?", answers: ["6", "7", "8", "9"], correctAnswer: "7" },
    { grade: 4, subject: "Math", question: "What is 14 × 4?", answers: ["56", "50", "60", "70"], correctAnswer: "56" },
    { grade: 4, subject: "Math", question: "What is 243 - 98?", answers: ["145", "150", "140", "160"], correctAnswer: "145" },
    { grade: 4, subject: "Math", question: "What is 25 × 12?", answers: ["300", "320", "350", "280"], correctAnswer: "300" },
    { grade: 4, subject: "Math", question: "What is 72 ÷ 9?", answers: ["6", "8", "7", "9"], correctAnswer: "8" },
    
    { grade: 4, subject: "English", question: "Which of the following is a conjunction?", answers: ["And", "Car", "Apple", "Swim"], correctAnswer: "And" },
    { grade: 4, subject: "English", question: "Which sentence is in the past tense?", answers: ["She eats lunch.", "She will eat lunch.", "She is eating lunch.", "She ate lunch."], correctAnswer: "She ate lunch." },
    { grade: 4, subject: "English", question: "Which of these is an adverb?", answers: ["Quickly", "Beautiful", "Dog", "Jump"], correctAnswer: "Quickly" },
    { grade: 4, subject: "English", question: "Which word is a synonym for 'smart'?", answers: ["Intelligent", "Dumb", "Slow", "Boring"], correctAnswer: "Intelligent" },
    { grade: 4, subject: "English", question: "Which of these words is an adjective?", answers: ["Quick", "Run", "Dog", "Blue"], correctAnswer: "Blue" },
    
    { grade: 4, subject: "Science", question: "What is the process by which water changes from a liquid to a gas?", answers: ["Freezing", "Condensation", "Evaporation", "Melting"], correctAnswer: "Evaporation" },
    { grade: 4, subject: "Science", question: "What part of the plant absorbs water and nutrients from the soil?", answers: ["Leaves", "Stem", "Roots", "Flowers"], correctAnswer: "Roots" },
    { grade: 4, subject: "Science", question: "What is the largest planet in the solar system?", answers: ["Earth", "Saturn", "Jupiter", "Mars"], correctAnswer: "Jupiter" },
    { grade: 4, subject: "Science", question: "What is the force that pulls objects towards the Earth?", answers: ["Magnetism", "Gravity", "Friction", "Momentum"], correctAnswer: "Gravity" },
    { grade: 4, subject: "Science", question: "What gas do plants take in during photosynthesis?", answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"], correctAnswer: "Carbon dioxide" },
    
    { grade: 4, subject: "History", question: "Who was the 16th president of the United States?", answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Franklin Roosevelt"], correctAnswer: "Abraham Lincoln" },
    { grade: 4, subject: "History", question: "In which year did the United States declare its independence?", answers: ["1776", "1607", "1865", "1492"], correctAnswer: "1776" },
    { grade: 4, subject: "History", question: "What was the name of the ship that carried the Pilgrims to America?", answers: ["Mayflower", "Santa Maria", "Titanic", "Nina"], correctAnswer: "Mayflower" },
    { grade: 4, subject: "History", question: "Which war was fought between the Northern and Southern states of the U.S.?", answers: ["Civil War", "Revolutionary War", "World War I", "World War II"], correctAnswer: "Civil War" },
    { grade: 4, subject: "History", question: "Who invented the light bulb?", answers: ["Nikola", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"], correctAnswer: "Thomas Edison" },
    
    // Grade 5
    { grade: 5, subject: "Math", question: "What is 56 × 7?", answers: ["392", "350", "400", "420"], correctAnswer: "392" },
    { grade: 5, subject: "Math", question: "What is 875 ÷ 25?", answers: ["30", "35", "25", "40"], correctAnswer: "35" },
    { grade: 5, subject: "Math", question: "What is 625 ÷ 25?", answers: ["25", "30", "20", "35"], correctAnswer: "25" },
    { grade: 5, subject: "Math", question: "What is 900 ÷ 36?", answers: ["25", "30", "20", "25"], correctAnswer: "25" },
    { grade: 5, subject: "Math", question: "What is 144 ÷ 12?", answers: ["14", "15", "12", "13"], correctAnswer: "12" },

    { grade: 5, subject: "English", question: "Which word is an example of a proper noun?", answers: ["Book", "Car", "New York", "Flower"], correctAnswer: "New York" },
    { grade: 5, subject: "English", question: "Which sentence is in the future tense?", answers: ["She will go to the store.", "She is going to the store.", "She went to the store.", "She goes to the store."], correctAnswer: "She will go to the store." },
    { grade: 5, subject: "English", question: "Which of these is an example of a preposition?", answers: ["On", "Walk", "Bright", "Sing"], correctAnswer: "On" },
    { grade: 5, subject: "English", question: "Which sentence is a compound sentence?", answers: ["I like apples and bananas.", "I like apples.", "She is reading a book.", "He went home."], correctAnswer: "I like apples and bananas." },
    { grade: 5, subject: "English", question: "What is a synonym for 'important'?", answers: ["Unimportant", "Vital", "Small", "Weak"], correctAnswer: "Vital" },

    { grade: 5, subject: "Science", question: "Which of the following is a renewable resource?", answers: ["Coal", "Wind", "Oil", "Natural gas"], correctAnswer: "Wind" },
    { grade: 5, subject: "Science", question: "What is the process by which plants make their food?", answers: ["Evaporation", "Photosynthesis", "Digestion", "Inhalation"], correctAnswer: "Photosynthesis" },
    { grade: 5, subject: "Science", question: "What is the chemical formula for water?", answers: ["H2O", "O2", "CO2", "H2O2"], correctAnswer: "H2O" },
    { grade: 5, subject: "Science", question: "What is the largest organ in the human body?", answers: ["Heart", "Brain", "Skin", "Liver"], correctAnswer: "Skin" },
    { grade: 5, subject: "Science", question: "What is the name of the process where a liquid changes into a gas?", answers: ["Evaporation", "Condensation", "Freezing", "Melting"], correctAnswer: "Evaporation" },

    { grade: 5, subject: "History", question: "Who was the first woman to fly solo across the Atlantic?", answers: ["Amelia Earhart", "Harriet Tubman", "Susan B. Anthony", "Marie Curie"], correctAnswer: "Amelia Earhart" },
    { grade: 5, subject: "History", question: "What year did the United States land a man on the moon?", answers: ["1969", "1959", "1975", "1963"], correctAnswer: "1969" },
    { grade: 5, subject: "History", question: "Which document declared the independence of the United States?", answers: ["Constitution", "Bill of Rights", "Declaration of Independence", "Emancipation Proclamation"], correctAnswer: "Declaration of Independence" },
    { grade: 5, subject: "History", question: "Who was the 18th president of the United States?", answers: ["Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Theodore Roosevelt"], correctAnswer: "Ulysses S. Grant" },
    { grade: 5, subject: "History", question: "Which battle is considered the turning point of the American Revolution?", answers: ["Battle of Saratoga", "Battle of Gettysburg", "Battle of Lexington", "Battle of Yorktown"], correctAnswer: "Battle of Saratoga" },

    // Grade 6
    { grade: 6, subject: "Math", question: "What is the least common multiple of 6 and 8?", answers: ["12", "24", "18", "30"], correctAnswer: "24" },
    { grade: 6, subject: "Math", question: "What is 3/4 + 2/5?", answers: ["17/20", "19/20", "23/20", "6/9"], correctAnswer: "23/20" },
    { grade: 6, subject: "Math", question: "What is the square root of 144?", answers: ["10", "12", "14", "16"], correctAnswer: "12" },
    { grade: 6, subject: "Math", question: "If a triangle has angles measuring 40° and 60°, what is the third angle?", answers: ["70°", "80°", "60°", "90°"], correctAnswer: "80°" },
    { grade: 6, subject: "Math", question: "What is 25% of 200?", answers: ["25", "50", "100", "75"], correctAnswer: "50" },

    { grade: 6, subject: "English", question: "Which of the following is a metaphor?", answers: ["As fast as lightning", "The world is a stage", "Like a gentle breeze", "Bright like the sun"], correctAnswer: "The world is a stage" },
    { grade: 6, subject: "English", question: "What is the plural of 'child'?", answers: ["Childs", "Childes", "Children", "Childrens"], correctAnswer: "Children" },
    { grade: 6, subject: "English", question: "Which of these words is an adjective?", answers: ["Run", "Happiness", "Bright", "Quickly"], correctAnswer: "Bright" },
    { grade: 6, subject: "English", question: "Which sentence is in the past perfect tense?", answers: ["She will have eaten.", "She had eaten before the movie.", "She eats dinner.", "She is eating now."], correctAnswer: "She had eaten before the movie." },
    { grade: 6, subject: "English", question: "What is a synonym for 'generous'?", answers: ["Selfish", "Kind", "Greedy", "Stingy"], correctAnswer: "Kind" },

    { grade: 6, subject: "Science", question: "What is the main gas found in the Earth's atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Nitrogen" },
    { grade: 6, subject: "Science", question: "Which part of a plant conducts photosynthesis?", answers: ["Root", "Leaf", "Stem", "Flower"], correctAnswer: "Leaf" },
    { grade: 6, subject: "Science", question: "What force keeps planets in orbit around the sun?", answers: ["Friction", "Magnetism", "Gravity", "Electricity"], correctAnswer: "Gravity" },
    { grade: 6, subject: "Science", question: "Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: "Mars" },
    { grade: 6, subject: "Science", question: "What is the basic unit of life?", answers: ["Atom", "Cell", "Molecule", "Organ"], correctAnswer: "Cell" },

    { grade: 6, subject: "History", question: "Who wrote the Declaration of Independence?", answers: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"], correctAnswer: "Thomas Jefferson" },
    { grade: 6, subject: "History", question: "What ancient civilization built the pyramids?", answers: ["Romans", "Greeks", "Egyptians", "Chinese"], correctAnswer: "Egyptians" },
    { grade: 6, subject: "History", question: "Who was the first president of the United States?", answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], correctAnswer: "George Washington" },
    { grade: 6, subject: "History", question: "In what year did World War II end?", answers: ["1942", "1945", "1950", "1939"], correctAnswer: "1945" },
    { grade: 6, subject: "History", question: "Which ancient empire was ruled by Julius Caesar?", answers: ["Greece", "Rome", "Persia", "China"], correctAnswer: "Rome" },

    // Grade 7
    { grade: 7, subject: "Math", question: "What is 3/5 × 2/3?", answers: ["1/5", "2/5", "3/5", "6/15"], correctAnswer: "2/5" },
    { grade: 7, subject: "Math", question: "What is the value of π (pi) rounded to two decimal places?", answers: ["3.10", "3.14", "3.16", "3.18"], correctAnswer: "3.14" },
    { grade: 7, subject: "Math", question: "What is the area of a triangle with base 10 cm and height 8 cm?", answers: ["40 cm²", "80 cm²", "20 cm²", "30 cm²"], correctAnswer: "40 cm²" },
    { grade: 7, subject: "Math", question: "Solve for x: 5x - 10 = 20", answers: ["6", "5", "8", "4"], correctAnswer: "6" },
    { grade: 7, subject: "Math", question: "What is the cube root of 27?", answers: ["2", "3", "4", "5"], correctAnswer: "3" },

    { grade: 7, subject: "English", question: "Which of the following is an example of alliteration?", answers: ["Peter Piper picked a peck of pickled peppers.", "The wind howled through the trees.", "Life is a rollercoaster.", "She is as fast as lightning."], correctAnswer: "Peter Piper picked a peck of pickled peppers." },
    { grade: 7, subject: "English", question: "Which of these sentences is in passive voice?", answers: ["The cat chased the mouse.", "The book was read by Sarah.", "She completed her homework.", "They built a sandcastle."], correctAnswer: "The book was read by Sarah." },
    { grade: 7, subject: "English", question: "What is the meaning of the word 'gregarious'?", answers: ["Shy", "Sociable", "Angry", "Lazy"], correctAnswer: "Sociable" },
    { grade: 7, subject: "English", question: "Which word means the same as 'benevolent'?", answers: ["Cruel", "Kind", "Selfish", "Angry"], correctAnswer: "Kind" },
    { grade: 7, subject: "English", question: "What type of sentence is this: 'If it rains, we will stay inside.'?", answers: ["Declarative", "Interrogative", "Conditional", "Imperative"], correctAnswer: "Conditional" },
    
    { grade: 7, subject: "Science", question: "What is the process of water changing from a gas to a liquid?", answers: ["Evaporation", "Condensation", "Sublimation", "Freezing"], correctAnswer: "Condensation" },
    { grade: 7, subject: "Science", question: "Which organelle is known as the powerhouse of the cell?", answers: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], correctAnswer: "Mitochondria" },
    { grade: 7, subject: "Science", question: "What is the main function of red blood cells?", answers: ["Fight infections", "Transport oxygen", "Digest food", "Produce energy"], correctAnswer: "Transport oxygen" },
    { grade: 7, subject: "Science", question: "What is the chemical symbol for sodium?", answers: ["Na", "S", "So", "N"], correctAnswer: "Na" },
    { grade: 7, subject: "Science", question: "Which of these is an example of a chemical change?", answers: ["Melting ice", "Boiling water", "Burning wood", "Breaking glass"], correctAnswer: "Burning wood" },

    { grade: 7, subject: "History", question: "Who was the first emperor of China?", answers: ["Qin Shi Huang", "Genghis Khan", "Confucius", "Sun Yat-sen"], correctAnswer: "Qin Shi Huang" },
    { grade: 7, subject: "History", question: "What year did World War I begin?", answers: ["1914", "1918", "1939", "1945"], correctAnswer: "1914" },
    { grade: 7, subject: "History", question: "Which ancient civilization invented democracy?", answers: ["Romans", "Egyptians", "Greeks", "Chinese"], correctAnswer: "Greeks" },
    { grade: 7, subject: "History", question: "Who was the U.S. president during the Civil War?", answers: ["George Washington", "Abraham Lincoln", "Theodore Roosevelt", "Andrew Jackson"], correctAnswer: "Abraham Lincoln" },
    { grade: 7, subject: "History", question: "What was the name of the ship that carried the Pilgrims to America?", answers: ["Santa Maria", "Titanic", "Mayflower", "Endeavour"], correctAnswer: "Mayflower" }, 
    
    // Grade 8
    { grade: 8, subject: "Math", question: "Solve for x: 2x + 5 = 15", answers: ["3", "5", "10", "15"], correctAnswer: "5" },
    { grade: 8, subject: "Math", question: "What is the volume of a cube with sides of length 4 cm?", answers: ["64 cm³", "16 cm³", "32 cm³", "8 cm³"], correctAnswer: "64 cm³" },
    { grade: 8, subject: "Math", question: "What is the Pythagorean Theorem?", answers: ["a² + b² = c²", "a + b = c", "a² - b² = c²", "a × b = c"], correctAnswer: "a² + b² = c²" },
    { grade: 8, subject: "Math", question: "What is the slope of a horizontal line?", answers: ["0", "Undefined", "1", "Infinity"], correctAnswer: "0" },
    { grade: 8, subject: "Math", question: "What is the value of 5! (5 factorial)?", answers: ["25", "120", "60", "10"], correctAnswer: "120" },

    { grade: 8, subject: "English", question: "Which of the following is a simile?", answers: ["He is a rock.", "She runs like the wind.", "Time is a thief.", "The stars danced."], correctAnswer: "She runs like the wind." },
    { grade: 8, subject: "English", question: "What is the theme of a story?", answers: ["The plot", "The setting", "The main idea or lesson", "The climax"], correctAnswer: "The main idea or lesson" },
    { grade: 8, subject: "English", question: "What is an antonym for 'optimistic'?", answers: ["Hopeful", "Pessimistic", "Cheerful", "Positive"], correctAnswer: "Pessimistic" },
    { grade: 8, subject: "English", question: "Which sentence is an example of irony?", answers: ["It rained on the day of the picnic.", "A fire station burned down.", "The dog barked at the cat.", "She wore a blue dress to the party."], correctAnswer: "A fire station burned down." },
    { grade: 8, subject: "English", question: "Which of these is an example of personification?", answers: ["The trees whispered in the wind.", "She ran as fast as a cheetah.", "His heart was a rock.", "The cat jumped onto the chair."], correctAnswer: "The trees whispered in the wind." },

    { grade: 8, subject: "Science", question: "What is the chemical symbol for gold?", answers: ["Au", "Ag", "Pb", "Fe"], correctAnswer: "Au" },
    { grade: 8, subject: "Science", question: "Which planet has the strongest gravity?", answers: ["Earth", "Mars", "Jupiter", "Venus"], correctAnswer: "Jupiter" },
    { grade: 8, subject: "Science", question: "What type of energy is produced from moving water?", answers: ["Solar", "Wind", "Hydroelectric", "Geothermal"], correctAnswer: "Hydroelectric" },
    { grade: 8, subject: "Science", question: "What is Newton's First Law of Motion also known as?", answers: ["Law of Acceleration", "Law of Inertia", "Law of Gravity", "Law of Motion"], correctAnswer: "Law of Inertia" },
    { grade: 8, subject: "Science", question: "What is the powerhouse of the cell?", answers: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], correctAnswer: "Mitochondria" },

    { grade: 8, subject: "History", question: "Who was the leader of the Soviet Union during World War II?", answers: ["Vladimir Lenin", "Joseph Stalin", "Mikhail Gorbachev", "Nikita Khrushchev"], correctAnswer: "Joseph Stalin" },
    { grade: 8, subject: "History", question: "Which war was fought between the North and South regions of the United States?", answers: ["Revolutionary War", "Civil War", "World War I", "Cold War"], correctAnswer: "Civil War" },
    { grade: 8, subject: "History", question: "Which country gifted the Statue of Liberty to the United States?", answers: ["France", "England", "Italy", "Spain"], correctAnswer: "France" },
    { grade: 8, subject: "History", question: "What was the name of the period of tension between the U.S. and the Soviet Union after WWII?", answers: ["The Cold War", "World War III", "The Great Depression", "The Space Race"], correctAnswer: "The Cold War" },
    { grade: 8, subject: "History", question: "Who was the first person to set foot on the moon?", answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], correctAnswer: "Neil Armstrong" }
];

let selectedQuestions = [];
let correctCount = 0;
let incorrectCount = 0;

function generateQuestions() {
    let subject = document.getElementById("subject").value;
    let grade = parseInt(document.getElementById("grade").value);
    correctCount = 0;
    incorrectCount = 0;
    document.getElementById("correctAnswers").innerText = "0";
    document.getElementById("incorrectAnswers").innerText = "0";
    document.getElementById("result").innerText = "";

    selectedQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].subject === subject && questions[i].grade === grade) {
            selectedQuestions.push(questions[i]);
        }
    }
    if (selectedQuestions.length === 0) {
        alert("No questions available for the selected subject and grade.");
    } else {
        currentQuestionIndex = 0;
        displayQuestion();
    }
}


function displayQuestion() {
    if (selectedQuestions.length > 0) {
        let currentQuestion = selectedQuestions[currentQuestionIndex];
        document.getElementById("Next").disabled = true;
        document.getElementById("textA").disabled = false;
        document.getElementById("textB").disabled = false;
        document.getElementById("textC").disabled = false;
        document.getElementById("textD").disabled = false;

        document.getElementById("question").innerText = currentQuestion.question;
        document.getElementById("textA").innerText = currentQuestion.answers[0];
        document.getElementById("textB").innerText = currentQuestion.answers[1];
        document.getElementById("textC").innerText = currentQuestion.answers[2];
        document.getElementById("textD").innerText = currentQuestion.answers[3];
    }
}

function handleClick(option) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    let selectedAnswer = currentQuestion.answers[option.charCodeAt(0) - 65];
    let correctAnswer = currentQuestion.correctAnswer;
    let resultText = document.getElementById("result");

    let buttonId = `text${option}`;
    let button = document.getElementById(buttonId);

    document.getElementById("textA").disabled = true;
    document.getElementById("textB").disabled = true;
    document.getElementById("textC").disabled = true;
    document.getElementById("textD").disabled = true;

    if (selectedAnswer === correctAnswer) {
        resultText.innerHTML = "Correct!";
        correctCount++;
        document.getElementById("correctAnswers").innerText = correctCount;
        button.style.backgroundColor = "green"; 
    } else {
        resultText.innerHTML = "Incorrect!";
        incorrectCount++;
        document.getElementById("incorrectAnswers").innerText = incorrectCount;
        button.style.backgroundColor = "red"; 

        let correctButtonIndex = currentQuestion.answers.indexOf(correctAnswer);
        let correctButtonId = `text${String.fromCharCode(65 + correctButtonIndex)}`;
        document.getElementById(correctButtonId).style.backgroundColor = "green";
    }
    document.getElementById("Next").disabled = false;
}

function updateScreen() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= selectedQuestions.length) {
        currentQuestionIndex = 0;
    }

    document.getElementById("Next").disabled = true;
    document.getElementById("textA").disabled = false;
    document.getElementById("textB").disabled = false;
    document.getElementById("textC").disabled = false;
    document.getElementById("textD").disabled = false;
    document.getElementById("result").innerHTML = "";

    document.getElementById("textA").style.backgroundColor = "";
    document.getElementById("textB").style.backgroundColor = "";
    document.getElementById("textC").style.backgroundColor = "";
    document.getElementById("textD").style.backgroundColor = "";

    displayQuestion();
}
