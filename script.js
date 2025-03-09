let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;

let questions = [
    // Grade 1
    { grade: 1, subject: "Math", question: "What is 1 + 1?", answers: ["1", "2", "3", "4"], correctAnswer: "2" },
    { grade: 1, subject: "Math", question: "What is 2 + 2?", answers: ["1", "2", "3", "4"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 3 + 1?", answers: ["2", "3", "4", "5"], correctAnswer: "4" },
    { grade: 1, subject: "Math", question: "What is 5 - 2?", answers: ["1", "2", "3", "4"], correctAnswer: "3" },
    { grade: 1, subject: "Math", question: "What is 6 - 3?", answers: ["2", "3", "4", "5"], correctAnswer: "3" },

    { grade: 1, subject: "Science", question: "What is the color of the sky?", answers: ["Red", "Blue", "Green", "Yellow"], correctAnswer: "Blue" },
    { grade: 1, subject: "Science", question: "What do plants need to grow?", answers: ["Water", "Food", "Air", "Sleep"], correctAnswer: "Water" },
    { grade: 1, subject: "Science", question: "What do animals breathe?", answers: ["Water", "Food", "Air", "Soil"], correctAnswer: "Air" },
    { grade: 1, subject: "Science", question: "Which animal is known as the king of the jungle?", answers: ["Elephant", "Lion", "Tiger", "Bear"], correctAnswer: "Lion" },
    { grade: 1, subject: "Science", question: "What is the shape of the Earth?", answers: ["Square", "Round", "Triangular", "Oval"], correctAnswer: "Round" },
    
    { grade: 1, subject: "English", question: "What is the opposite of hot?", answers: ["Cold", "Warm", "Cool", "Boiling"], correctAnswer: "Cold" },
    { grade: 1, subject: "English", question: "Which word is a fruit?", answers: ["Apple", "Table", "Dog", "Chair"], correctAnswer: "Apple" },
    { grade: 1, subject: "English", question: "How many days are in a week?", answers: ["5", "6", "7", "8"], correctAnswer: "7" },
    { grade: 1, subject: "English", question: "Which is the correct spelling?", answers: ["Cat", "Cta", "Act", "Tac"], correctAnswer: "Cat" },
    { grade: 1, subject: "Science", question: "What is the color of the sun?", answers: ["Red", "Yellow", "Green", "Blue"], correctAnswer: "Yellow" },
    
    { grade: 1, subject: "History", question: "Who was the first president of the United States?", answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Theodore Roosevelt"], correctAnswer: "George Washington" },
    { grade: 1, subject: "History", question: "Who discovered America?", answers: ["Christopher Columbus", "Marco Polo", "Leonardo Da Vinci", "Thomas Edison"], correctAnswer: "Christopher Columbus" },
    { grade: 1, subject: "History", question: "What year did the Titanic sink?", answers: ["1912", "1900", "1899", "1920"], correctAnswer: "1912" },
    { grade: 1, subject: "History", question: "Who was the first woman to fly solo across the Atlantic?", answers: ["Amelia Earhart", "Susan B. Anthony", "Harriet Tubman", "Rosa Parks"], correctAnswer: "Amelia Earhart" },
    { grade: 1, subject: "History", question: "Who invented the lightbulb?", answers: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"], correctAnswer: "Thomas Edison" },

    // Grade 2
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
