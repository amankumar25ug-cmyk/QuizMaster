// AI assistance acknowledgement:
// Questions and code were created with ChatGPT assistance.

function makeQuestions(category, difficulty, data, startId) {
  return data.map((item, index) => ({
    id: startId + index,
    category,
    difficulty,
    question: item[0],
    options: item[1],
    answer: item[1][item[2]],
    explanation: item[3],
  }));
}

const questions = [
  // GENERAL KNOWLEDGE - EASY
  ...makeQuestions("General Knowledge", "Easy", [
    ["What is the capital of India?", ["Mumbai", "New Delhi", "Kolkata", "Chennai"], 1, "New Delhi is the capital of India."],
    ["Which is the national animal of India?", ["Lion", "Elephant", "Tiger", "Leopard"], 2, "The Bengal Tiger is India's national animal."],
    ["How many days are there in a week?", ["5", "6", "7", "8"], 2, "A week has seven days."],
    ["Which planet do we live on?", ["Mars", "Earth", "Venus", "Jupiter"], 1, "We live on planet Earth."],
    ["What is the national flower of India?", ["Rose", "Sunflower", "Lotus", "Lily"], 2, "The Lotus is India's national flower."],
    ["Which is the largest continent?", ["Africa", "Europe", "Asia", "Australia"], 2, "Asia is the largest continent."],
    ["How many colours are there in a rainbow?", ["5", "6", "7", "8"], 2, "A rainbow has seven colours."],
    ["Which animal is known as the Ship of the Desert?", ["Horse", "Camel", "Elephant", "Donkey"], 1, "The camel is called the Ship of the Desert."]
  ], 1),

  // GENERAL KNOWLEDGE - MEDIUM
  ...makeQuestions("General Knowledge", "Medium", [
    ["Which is the largest ocean?", ["Atlantic", "Indian", "Pacific", "Arctic"], 2, "The Pacific is the largest ocean."],
    ["Which country has the most natural lakes?", ["India", "Canada", "Brazil", "China"], 1, "Canada has more natural lakes than any other country."],
    ["Which is the smallest continent?", ["Europe", "Australia", "Africa", "Asia"], 1, "Australia is the smallest continent."],
    ["What is the currency of Japan?", ["Dollar", "Yuan", "Yen", "Won"], 2, "Japan uses the Yen."],
    ["Which is the longest river in India?", ["Yamuna", "Godavari", "Ganga", "Narmada"], 2, "The Ganga is commonly recognised as India's longest river."],
    ["Which country is called the Land of the Rising Sun?", ["China", "Japan", "Thailand", "Nepal"], 1, "Japan is known as the Land of the Rising Sun."],
    ["How many players are there in a cricket team?", ["9", "10", "11", "12"], 2, "A cricket team has eleven players."],
    ["Which gas is most abundant in Earth's atmosphere?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], 1, "Nitrogen makes up about 78% of the atmosphere."]
  ], 9),

  // GENERAL KNOWLEDGE - HARD
  ...makeQuestions("General Knowledge", "Hard", [
    ["Which country has the longest coastline?", ["Russia", "Canada", "Australia", "India"], 1, "Canada has the world's longest coastline."],
    ["Which is the deepest ocean trench?", ["Java Trench", "Tonga Trench", "Mariana Trench", "Puerto Rico Trench"], 2, "The Mariana Trench is the deepest known ocean trench."],
    ["Which is the largest hot desert?", ["Gobi", "Sahara", "Kalahari", "Arabian"], 1, "The Sahara is the largest hot desert."],
    ["Which strait separates Asia and North America?", ["Strait of Hormuz", "Bering Strait", "Malacca Strait", "Gibraltar Strait"], 1, "The Bering Strait separates Asia and North America."],
    ["Which country was formerly known as Abyssinia?", ["Ethiopia", "Egypt", "Sudan", "Kenya"], 0, "Ethiopia was formerly known as Abyssinia."],
    ["Which is the world's largest island?", ["Madagascar", "Greenland", "Borneo", "New Guinea"], 1, "Greenland is the world's largest island."],
    ["Which line divides Earth into Northern and Southern Hemispheres?", ["Tropic of Cancer", "Prime Meridian", "Equator", "Arctic Circle"], 2, "The Equator divides the two hemispheres."],
    ["Which country has the city of Timbuktu?", ["Nigeria", "Mali", "Niger", "Chad"], 1, "Timbuktu is in Mali."]
  ], 17),

  // SCIENCE - EASY
  ...makeQuestions("Science", "Easy", [
    ["Which planet is known as the Red Planet?", ["Earth", "Mars", "Jupiter", "Venus"], 1, "Mars is called the Red Planet."],
    ["What do plants absorb from the atmosphere?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], 2, "Plants absorb carbon dioxide during photosynthesis."],
    ["How many legs does a spider have?", ["4", "6", "8", "10"], 2, "A spider has eight legs."],
    ["Which organ pumps blood?", ["Brain", "Heart", "Lungs", "Kidney"], 1, "The heart pumps blood around the body."],
    ["What is H2O commonly known as?", ["Salt", "Water", "Oxygen", "Hydrogen"], 1, "H2O is the chemical formula for water."],
    ["Which part of a plant absorbs water?", ["Leaves", "Flowers", "Roots", "Stem"], 2, "Roots absorb water from the soil."],
    ["Which star is closest to Earth?", ["Sirius", "Sun", "Polaris", "Vega"], 1, "The Sun is the closest star to Earth."],
    ["What do humans use to breathe?", ["Stomach", "Lungs", "Heart", "Liver"], 1, "Humans use their lungs to breathe."]
  ], 25),

  // SCIENCE - MEDIUM
  ...makeQuestions("Science", "Medium", [
    ["What is the chemical symbol for Gold?", ["Ag", "Au", "Fe", "Cu"], 1, "Au comes from the Latin word Aurum."],
    ["What is the approximate speed of light?", ["150,000 km/s", "300,000 km/s", "450,000 km/s", "600,000 km/s"], 1, "Light travels at approximately 300,000 km/s."],
    ["Which gas do plants release during photosynthesis?", ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], 2, "Plants release oxygen during photosynthesis."],
    ["What is the SI unit of force?", ["Joule", "Newton", "Watt", "Pascal"], 1, "Force is measured in Newtons."],
    ["Which vitamin is produced in skin by sunlight?", ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], 3, "Sunlight helps the body produce Vitamin D."],
    ["What is the pH of pure water at room temperature?", ["5", "7", "9", "11"], 1, "Pure water has a pH of approximately 7."],
    ["Which blood cells help fight infections?", ["Red blood cells", "White blood cells", "Platelets", "Plasma"], 1, "White blood cells help protect the body from infections."],
    ["Which metal is liquid at room temperature?", ["Iron", "Mercury", "Copper", "Aluminium"], 1, "Mercury is liquid at room temperature."]
  ], 33),

  // SCIENCE - HARD
  ...makeQuestions("Science", "Hard", [
    ["Which particle has a negative electric charge?", ["Proton", "Neutron", "Electron", "Photon"], 2, "Electrons carry a negative charge."],
    ["What is the SI unit of electric resistance?", ["Volt", "Ampere", "Ohm", "Watt"], 2, "Resistance is measured in Ohms."],
    ["Which organelle is called the powerhouse of the cell?", ["Nucleus", "Ribosome", "Mitochondrion", "Golgi body"], 2, "Mitochondria produce much of the cell's usable energy."],
    ["What is the atomic number of carbon?", ["4", "6", "8", "12"], 1, "Carbon has six protons."],
    ["Which law states that energy cannot be created or destroyed?", ["Newton's first law", "Conservation of energy", "Ohm's law", "Hooke's law"], 1, "The conservation of energy principle states this."],
    ["Which scientist proposed the uncertainty principle?", ["Newton", "Einstein", "Heisenberg", "Bohr"], 2, "Werner Heisenberg proposed the uncertainty principle."],
    ["What is the approximate value of Avogadro's constant?", ["6.022 × 10²³", "3.14 × 10⁸", "9.8", "1.6 × 10⁻¹⁹"], 0, "Avogadro's constant is approximately 6.022 × 10²³ per mole."],
    ["Which type of bond involves sharing electron pairs?", ["Ionic", "Covalent", "Metallic", "Hydrogen"], 1, "Covalent bonds involve sharing electrons."]
  ], 41),

  // HISTORY - EASY
  ...makeQuestions("History", "Easy", [
    ["Who was the first Prime Minister of India?", ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "B. R. Ambedkar"], 1, "Jawaharlal Nehru became India's first Prime Minister."],
    ["When did India become independent?", ["1945", "1946", "1947", "1950"], 2, "India became independent on 15 August 1947."],
    ["Who is known as the Father of the Nation in India?", ["Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh", "Jawaharlal Nehru"], 1, "Mahatma Gandhi is widely known by this title."],
    ["Who built the Taj Mahal?", ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"], 1, "Shah Jahan commissioned the Taj Mahal."],
    ["Who was the first President of India?", ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "V. V. Giri"], 0, "Dr. Rajendra Prasad was India's first President."],
    ["In which year did the Quit India Movement begin?", ["1920", "1930", "1942", "1947"], 2, "The Quit India Movement began in 1942."],
    ["Who led the Salt March in 1930?", ["Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh", "Sardar Patel"], 1, "Mahatma Gandhi led the Salt March."],
    ["Which ancient civilisation built the pyramids at Giza?", ["Roman", "Greek", "Egyptian", "Persian"], 2, "The ancient Egyptians built the pyramids at Giza."]
  ], 49),

  // HISTORY - MEDIUM
  ...makeQuestions("History", "Medium", [
    ["In which year did World War II end?", ["1942", "1943", "1945", "1947"], 2, "World War II ended in 1945."],
    ["Who founded the Maurya Empire?", ["Ashoka", "Chandragupta Maurya", "Harsha", "Akbar"], 1, "Chandragupta Maurya founded the Maurya Empire."],
    ["Who was the first Mughal emperor?", ["Akbar", "Humayun", "Babur", "Shah Jahan"], 2, "Babur founded the Mughal Empire in India."],
    ["In which year was the Battle of Plassey fought?", ["1757", "1764", "1857", "1707"], 0, "The Battle of Plassey took place in 1757."],
    ["Who founded the Indian National Congress?", ["A. O. Hume", "Mahatma Gandhi", "Bal Gangadhar Tilak", "Dadabhai Naoroji"], 0, "A. O. Hume helped establish the Indian National Congress in 1885."],
    ["Which emperor embraced Buddhism after the Kalinga War?", ["Chandragupta", "Ashoka", "Harsha", "Samudragupta"], 1, "Ashoka embraced Buddhism after the Kalinga War."],
    ["Who was known as the Iron Man of India?", ["Nehru", "Sardar Vallabhbhai Patel", "Bose", "Tilak"], 1, "Sardar Patel was known as the Iron Man of India."],
    ["The French Revolution began in which year?", ["1776", "1789", "1815", "1848"], 1, "The French Revolution began in 1789."]
  ], 57),

  // HISTORY - HARD
  ...makeQuestions("History", "Hard", [
    ["Which treaty ended World War I between Germany and the Allies?", ["Treaty of Paris", "Treaty of Versailles", "Treaty of Rome", "Treaty of Vienna"], 1, "The Treaty of Versailles was signed in 1919."],
    ["Who was the last ruler of the Maurya dynasty?", ["Ashoka", "Dasharatha", "Brihadratha", "Bindusara"], 2, "Brihadratha was the last Maurya ruler."],
    ["Which year is associated with the fall of Constantinople?", ["1204", "1453", "1492", "1526"], 1, "Constantinople fell to the Ottomans in 1453."],
    ["Who wrote the Arthashastra?", ["Kalidasa", "Kautilya", "Banabhatta", "Tulsidas"], 1, "Kautilya is traditionally credited with the Arthashastra."],
    ["Which dynasty built the Brihadeeswarar Temple at Thanjavur?", ["Pallava", "Chola", "Gupta", "Mughal"], 1, "Rajaraja Chola I commissioned the temple."],
    ["Who was the first woman ruler of the Delhi Sultanate?", ["Nur Jahan", "Razia Sultan", "Chand Bibi", "Rani Durgavati"], 1, "Razia Sultan ruled the Delhi Sultanate in the 13th century."],
    ["The Battle of Talikota took place in which year?", ["1526", "1556", "1565", "1576"], 2, "The Battle of Talikota took place in 1565."],
    ["Who was the founder of the Gupta Empire?", ["Chandragupta I", "Sri Gupta", "Samudragupta", "Skandagupta"], 1, "Sri Gupta is generally regarded as the founder of the Gupta dynasty."]
  ], 65),

  // TECHNOLOGY - EASY
  ...makeQuestions("Technology", "Easy", [
    ["What does CPU stand for?", ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"], 0, "CPU stands for Central Processing Unit."],
    ["Which language is used to structure web pages?", ["Python", "HTML", "C", "Java"], 1, "HTML structures content on web pages."],
    ["Which device is used to type text?", ["Monitor", "Mouse", "Keyboard", "Speaker"], 2, "A keyboard is used to type text."],
    ["What does WWW stand for?", ["World Wide Web", "World Web Window", "Wide World Wire", "Web World Work"], 0, "WWW stands for World Wide Web."],
    ["Which device displays computer output?", ["Keyboard", "Monitor", "Mouse", "Microphone"], 1, "A monitor displays visual output."],
    ["Which of these is an operating system?", ["Windows", "Google", "HTML", "Intel"], 0, "Windows is an operating system."],
    ["What does USB stand for?", ["Universal Serial Bus", "United System Board", "Universal System Backup", "User Service Bus"], 0, "USB stands for Universal Serial Bus."],
    ["Which device is used to move the pointer on a computer?", ["Printer", "Mouse", "Scanner", "Speaker"], 1, "A mouse controls the pointer."]
  ], 73),

  // TECHNOLOGY - MEDIUM
  ...makeQuestions("Technology", "Medium", [
    ["Which data structure follows LIFO?", ["Queue", "Array", "Stack", "Tree"], 2, "A stack follows Last In, First Out."],
    ["Which language is mainly used for styling web pages?", ["HTML", "CSS", "SQL", "C"], 1, "CSS is used to style web pages."],
    ["What does RAM stand for?", ["Read Access Memory", "Random Access Memory", "Run Active Memory", "Remote Access Module"], 1, "RAM stands for Random Access Memory."],
    ["Which protocol is commonly used to browse secure websites?", ["FTP", "HTTP", "HTTPS", "SMTP"], 2, "HTTPS secures communication between browser and website."],
    ["What does SQL help us do?", ["Edit images", "Manage databases", "Create animations", "Design hardware"], 1, "SQL is used to manage and query databases."],
    ["Which number system uses only 0 and 1?", ["Decimal", "Octal", "Binary", "Hexadecimal"], 2, "Binary uses only zero and one."],
    ["What does URL stand for?", ["Uniform Resource Locator", "Universal Record Link", "User Reference Location", "Uniform Read Language"], 0, "URL stands for Uniform Resource Locator."],
    ["Which company developed the Java programming language?", ["Microsoft", "Sun Microsystems", "Apple", "IBM"], 1, "Java was originally developed at Sun Microsystems."]
  ], 81),

  // TECHNOLOGY - HARD
  ...makeQuestions("Technology", "Hard", [
    ["Which protocol provides reliable, ordered data delivery?", ["UDP", "TCP", "IP", "DNS"], 1, "TCP provides reliable and ordered delivery."],
    ["What is the time complexity of binary search?", ["O(n)", "O(log n)", "O(n²)", "O(1)"], 1, "Binary search has logarithmic time complexity."],
    ["Which data structure is commonly used in breadth-first search?", ["Stack", "Queue", "Heap", "Tree"], 1, "Breadth-first search commonly uses a queue."],
    ["What does DNS translate?", ["IP addresses into passwords", "Domain names into IP addresses", "Files into folders", "HTML into CSS"], 1, "DNS translates domain names into IP addresses."],
    ["Which layer of the OSI model handles routing?", ["Physical", "Data Link", "Network", "Application"], 2, "The Network layer handles routing."],
    ["Which algorithm is used to find the shortest path with non-negative edge weights?", ["Bubble Sort", "Dijkstra's algorithm", "Binary Search", "Quick Sort"], 1, "Dijkstra's algorithm finds shortest paths with non-negative weights."],
    ["What does API stand for?", ["Application Programming Interface", "Advanced Program Internet", "Applied Process Integration", "Application Protocol Input"], 0, "API stands for Application Programming Interface."],
    ["Which Git command creates a new branch?", ["git push", "git branch", "git clone", "git status"], 1, "The git branch command can create a new branch."]
  ], 89),
];

export default questions;