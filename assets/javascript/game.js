var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentwordText = document.getElementById("currentword-text");
var guessesleftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");




var wordBank = ["almond", "anchovy", "anise", "appetizer", "appetite", "apple", "apricot", "artichoke", "asparagus", "aspic", "ate", "avocado", "bacon", "bagel", "bake", "banana", "barbecue", "barley", "basil", "batter", "beancurd", "beans", "beef", "beet", "bellpepper", "berry", "biscuit", "bitter", "blackberry", "blacktea", "bland", "blueberry", "boil", "bowl", "boysenberry", "bran", "bread", "breadfruit", "breakfast", "brisket", "broccoli", "broil", "brownie", "brunch", "buckwheat", "buns", "burrito", "butter", "butter bean", "cake", "calorie", "candy", "candyapple", "cantaloupe", "capers", "caramel", "caramelapple", "carrot", "cashew", "cassava", "casserole", "cater", "cauliflower", "caviar", "celery", "cereal", "chard", "cheddar", "cheese", "cheesecake", "chef", "cherry", "chew", "chicken", "chili", "chips", "chives", "chocolate", "chopsticks", "chow", "chutney", "cilantro", "cinnamon", "citron", "citrus", "clam", "cloves", "cobbler", "coconut", "cod", "coffee", "coleslaw", "collard greens", "comestibles", "cook", "cookbook", "cookie", "corn", "cornflakes", "cornmeal", "cottage cheese", "crab", "crackers", "cranberry", "cream", "cream cheese", "crepe", "crisp", "crunch", "crust", "cucumber", "cuisine", "cupboard", "cupcake", "curds", "currants", "curry", "custard", "daikon", "daily bread", "dairy", "dandelion greens", "Danish pastry", "dates", "dessert", "diet", "digest", "dill", "dine", "diner", "dinner", "dip", "dish", "dough", "doughnut", "dragonfruit", "dressing", "dried", "drink", "dry", "durian", "eat", "edible", "egg", "eggplant", "elderberry", "endive", "entree", "fat", "fava bans", "feast", "fed", "feed", "fennel", "fig", "fillet", "fire", "fish", "flan", "flax", "flour", "food", "foodstuffs", "fork", "freezer", "French fries", "fried", "fritter", "frosting", "fruit", "fry", "garlic", "gastronomy", "gelatin", "ginger", "gingerale", "gingerbread", "glasses", "Gouda cheese", "grain", "granola", "grape", "grapefruit", "grated", "gravy", "greenbean", "greens", "green tea", "grub", "guacamole", "guava", "gyro", "herbs", "halibut", "ham", "hamburger", "hash", "hazelnut", "herbs", "honey", "honeydew", "horseradish", "hot", "hot dog", "hot sauce", "hummus", "hunger", "hungry", "ice", "iced tea", "icing", "ice cream", "jackfruit", "jalapeno", "jam", "jelly", "jellybeans", "jicama", "jimmies", "Jordan almonds", "jug", "julienne", "juice", "junk food", "", "K", "kale", "kebab", "ketchup", "kettle", "kettle corn", "kidney beans", "kitchen", "kiwi", "knife", "kohlrabi", "kumquat", "ladle", "lamb", "lard", "lasagna", "legumes", "lemon", "lemonade", "lentils", "lettuce", "licorice", "lima beans", "lime", "liver", "loaf", "lobster", "lollipop", "loquat", "lox", "lunch", "lunch box", "lunchmeat", "lychee", "macaroni", "macaroon", "main course", "maize", "mandarin orange", "mango", "maple syrup", "margarine", "marionberry", "marmalade", "marshmallow", "mashed potatoes", "mayonnaise", "meat", "meatball", "meatloaf", "melon", "menu", "meringue", "micronutrient", "milk", "milkshake", "millet", "mincemeat", "minerals", "mint", "mints", "mochi", "molasses", "mole sauce", "mozzarella", "muffin", "mug", "munch", "mushroom", "mussels", "mustard", "mustard greens", "mutton", "napkin", "nectar", "nectarine", "nibble", "noodles", "nosh", "nourish", "nourishment", "nut", "nutmeg", "nutrient", "nutrition", "nutritious", "oats", "oatmeal", "oil", "okra", "oleo", "olive", "omelet", "omnivore", "onion", "orange", "order", "oregano", "oven", "oyster", "pan", "pancake", "papaya", "parsley", "parsnip", "pasta", "pastry", "pate", "patty", "pattypan squash", "peach", "peanut", "peanut butter", "pea", "pear", "pecan", "peapod", "pepper", "pepperoni", "persimmon", "pickle", "picnic", "pie", "pilaf", "pineapple", "pita bread", "pitcher", "pizza", "plate", "platter", "plum", "poached", "pomegranate", "pomelo", "pop", "popsicle", "popcorn", "popovers", "pork", "pork chops", "pot", "potato", "pot roast", "preserves", "pretzel", "prime rib", "protein", "provisions", "prune", "pudding", "pumpernickel", "pumpkin", "punch", "quiche", "quinoa", "radish", "raisin", "raspberry", "rations", "ravioli", "recipe", "refreshments", "refrigerator", "relish", "restaurant", "rhubarb", "ribs", "rice", "roast", "roll", "rolling pin", "romaine", "rosemary", "rye", "saffron", "sage", "salad", "salami", "salmon", "salsa", "salt", "sandwich", "sauce", "sauerkraut", "sausage", "savory", "scallops", "scrambled", "seaweed", "seeds", "sesame seed", "shallots", "sherbet", "shish kebab", "shrimp", "slaw", "slice", "smoked", "snack", "soda", "soda bread", "sole", "sorbet", "sorghum", "sorrel", "soup", "sour", "sour cream", "soy", "soybeans", "soysauce", "spaghetti", "spareribs", "spatula", "spices", "spicy", "spinach", "split peas", "spoon", "spork", "sprinkles", "sprouts", "spuds", "squash", "squid", "steak", "stew", "stir-fry", "stomach", "stove", "straw", "strawberry", "string bean", "stringy", "strudel", "sub sandwich", "submarine sandwich", "succotash", "suet", "sugar", "summer squash", "sundae", "sunflower", "supper", "sushi", "sustenance", "sweet", "sweet potato", "Swiss chard", "syrup", "taco", "take-out", "tamale", "tangerine", "tapioca", "taro", "tarragon", "tart", "tea", "teapot", "teriyaki", "thyme", "toast", "toaster", "toffee", "tofu", "tomatillo", "tomato", "torte", "tortilla", "tuber", "tuna", "turkey", "turmeric", "turnip", "unleavened", "utensils", "vanilla", "veal", "vegetable", "venison", "vinegar", "vitamin", "", "wafer", "waffle", "walnut", "wasabi", "water", "water chestnut", "watercress", "watermelon", "wheat", "whey", "whipped cream", "wok", "yam", "yeast", "yogurt", "yolk"];
var validInput =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(validInput);
var randomFood = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase().replace(" " , "");         //select a random word from our wordbank, 
                                                                                                                //makes it all lowercase & removes spaces if its two words, so you don't need to guess a space
var guessesLeft = Math.floor((randomFood.length * 1.5));                                                        // sets guesses to double the world length.
console.log(randomFood);

var guessFood = [];
for (var i = 0; i < randomFood.length; i++) {
    guessFood[i] = "_";
}
var blanks = document.getElementById("currentword-text"); //sets current word as the blanks
var lettersGuessed = [];
//------------------------------------------------------------------------------------
var wins = 0;
var winCount = document.getElementById("wins-text");




//-----------------------------------------------------------------------------------------------------------------------------//

document.onkeyup = function (event) { //run this function when the user chooses a letter, starts the game 
    
    console.log(randomFood);   
 

    var userGuess = event.key; // Determines which key was pressed.

    for (var j = 0; j < randomFood.length; j++) {
        if (randomFood[j] === userGuess) {     //checks if position j in randomFood === userGuess, if true, set
            guessFood[j] = userGuess;         // guessFood[j] to value of user guess.
        }
    }
    


    guessesLeft--; //decrements guessesLeft variable for every key pressed
    lettersGuessed.push(userGuess); //pushes user guess into an array called guessed, which we then display on letters guessed.
    lettersGuessedText.textContent = "Letters guessed: " + lettersGuessed; // displays guessed letters on the screen
    guessesleftText.textContent = "Number of guesses remaining: " + guessesLeft;
    blanks.textContent = "Current Word: " + guessFood.join(" ");
    
    
    if (guessFood.join("").toString()==randomFood){ // checks to see if guess=random, if so user wins
        
        alert("Winner Winner Chicken Dinner!");
        wins++;
        newGame();
    }
    winCount.textContent = "Wins: " + wins; // displays wins, need this below the check for wins

    if (guessesLeft===0){                           // if guesses are all out, the user lost.
        alert("Game Over :^(");
        newGame();
    }
    
    console.log(guessFood);
    console.log(randomFood);


} // this is the end of onkeyup function
function newGame (){
    var wordBank = ["almond", "anchovy", "anise", "appetizer", "appetite", "apple", "apricot", "artichoke", "asparagus", "aspic", "ate", "avocado", "bacon", "bagel", "bake", "banana", "barbecue", "barley", "basil", "batter", "beancurd", "beans", "beef", "beet", "bellpepper", "berry", "biscuit", "bitter", "blackberry", "blacktea", "bland", "blueberry", "boil", "bowl", "boysenberry", "bran", "bread", "breadfruit", "breakfast", "brisket", "broccoli", "broil", "brownie", "brunch", "buckwheat", "buns", "burrito", "butter", "butter bean", "cake", "calorie", "candy", "candyapple", "cantaloupe", "capers", "caramel", "caramelapple", "carrot", "cashew", "cassava", "casserole", "cater", "cauliflower", "caviar", "celery", "cereal", "chard", "cheddar", "cheese", "cheesecake", "chef", "cherry", "chew", "chicken", "chili", "chips", "chives", "chocolate", "chopsticks", "chow", "chutney", "cilantro", "cinnamon", "citron", "citrus", "clam", "cloves", "cobbler", "coconut", "cod", "coffee", "coleslaw", "collard greens", "comestibles", "cook", "cookbook", "cookie", "corn", "cornflakes", "cornmeal", "cottage cheese", "crab", "crackers", "cranberry", "cream", "cream cheese", "crepe", "crisp", "crunch", "crust", "cucumber", "cuisine", "cupboard", "cupcake", "curds", "currants", "curry", "custard", "daikon", "daily bread", "dairy", "dandelion greens", "Danish pastry", "dates", "dessert", "diet", "digest", "dill", "dine", "diner", "dinner", "dip", "dish", "dough", "doughnut", "dragonfruit", "dressing", "dried", "drink", "dry", "durian", "eat", "edible", "egg", "eggplant", "elderberry", "endive", "entree", "fat", "fava bans", "feast", "fed", "feed", "fennel", "fig", "fillet", "fire", "fish", "flan", "flax", "flour", "food", "foodstuffs", "fork", "freezer", "French fries", "fried", "fritter", "frosting", "fruit", "fry", "garlic", "gastronomy", "gelatin", "ginger", "gingerale", "gingerbread", "glasses", "Gouda cheese", "grain", "granola", "grape", "grapefruit", "grated", "gravy", "greenbean", "greens", "green tea", "grub", "guacamole", "guava", "gyro", "herbs", "halibut", "ham", "hamburger", "hash", "hazelnut", "herbs", "honey", "honeydew", "horseradish", "hot", "hot dog", "hot sauce", "hummus", "hunger", "hungry", "ice", "iced tea", "icing", "ice cream", "jackfruit", "jalapeno", "jam", "jelly", "jellybeans", "jicama", "jimmies", "Jordan almonds", "jug", "julienne", "juice", "junk food", "", "K", "kale", "kebab", "ketchup", "kettle", "kettle corn", "kidney beans", "kitchen", "kiwi", "knife", "kohlrabi", "kumquat", "ladle", "lamb", "lard", "lasagna", "legumes", "lemon", "lemonade", "lentils", "lettuce", "licorice", "lima beans", "lime", "liver", "loaf", "lobster", "lollipop", "loquat", "lox", "lunch", "lunch box", "lunchmeat", "lychee", "macaroni", "macaroon", "main course", "maize", "mandarin orange", "mango", "maple syrup", "margarine", "marionberry", "marmalade", "marshmallow", "mashed potatoes", "mayonnaise", "meat", "meatball", "meatloaf", "melon", "menu", "meringue", "micronutrient", "milk", "milkshake", "millet", "mincemeat", "minerals", "mint", "mints", "mochi", "molasses", "mole sauce", "mozzarella", "muffin", "mug", "munch", "mushroom", "mussels", "mustard", "mustard greens", "mutton", "napkin", "nectar", "nectarine", "nibble", "noodles", "nosh", "nourish", "nourishment", "nut", "nutmeg", "nutrient", "nutrition", "nutritious", "oats", "oatmeal", "oil", "okra", "oleo", "olive", "omelet", "omnivore", "onion", "orange", "order", "oregano", "oven", "oyster", "pan", "pancake", "papaya", "parsley", "parsnip", "pasta", "pastry", "pate", "patty", "pattypan squash", "peach", "peanut", "peanut butter", "pea", "pear", "pecan", "peapod", "pepper", "pepperoni", "persimmon", "pickle", "picnic", "pie", "pilaf", "pineapple", "pita bread", "pitcher", "pizza", "plate", "platter", "plum", "poached", "pomegranate", "pomelo", "pop", "popsicle", "popcorn", "popovers", "pork", "pork chops", "pot", "potato", "pot roast", "preserves", "pretzel", "prime rib", "protein", "provisions", "prune", "pudding", "pumpernickel", "pumpkin", "punch", "quiche", "quinoa", "radish", "raisin", "raspberry", "rations", "ravioli", "recipe", "refreshments", "refrigerator", "relish", "restaurant", "rhubarb", "ribs", "rice", "roast", "roll", "rolling pin", "romaine", "rosemary", "rye", "saffron", "sage", "salad", "salami", "salmon", "salsa", "salt", "sandwich", "sauce", "sauerkraut", "sausage", "savory", "scallops", "scrambled", "seaweed", "seeds", "sesame seed", "shallots", "sherbet", "shish kebab", "shrimp", "slaw", "slice", "smoked", "snack", "soda", "soda bread", "sole", "sorbet", "sorghum", "sorrel", "soup", "sour", "sour cream", "soy", "soybeans", "soysauce", "spaghetti", "spareribs", "spatula", "spices", "spicy", "spinach", "split peas", "spoon", "spork", "sprinkles", "sprouts", "spuds", "squash", "squid", "steak", "stew", "stir-fry", "stomach", "stove", "straw", "strawberry", "string bean", "stringy", "strudel", "sub sandwich", "submarine sandwich", "succotash", "suet", "sugar", "summer squash", "sundae", "sunflower", "supper", "sushi", "sustenance", "sweet", "sweet potato", "Swiss chard", "syrup", "taco", "take-out", "tamale", "tangerine", "tapioca", "taro", "tarragon", "tart", "tea", "teapot", "teriyaki", "thyme", "toast", "toaster", "toffee", "tofu", "tomatillo", "tomato", "torte", "tortilla", "tuber", "tuna", "turkey", "turmeric", "turnip", "unleavened", "utensils", "vanilla", "veal", "vegetable", "venison", "vinegar", "vitamin", "", "wafer", "waffle", "walnut", "wasabi", "water", "water chestnut", "watercress", "watermelon", "wheat", "whey", "whipped cream", "wok", "yam", "yeast", "yogurt", "yolk"];

    randomFood = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase().replace(" " , "");         //select a random word from our wordbank, 
                                                                                                                    //makes it all lowercase & removes spaces if its two words, so you don't need to guess a space
    guessesLeft = Math.floor((randomFood.length * 1.5));                                                        // sets guesses to double the world length.
    console.log(randomFood);
    
    guessFood = [];
    for (var i = 0; i < randomFood.length; i++) {
        guessFood[i] = "_";
    }
    blanks = document.getElementById("currentword-text"); //sets current word as the blanks
    lettersGuessed = [];
}






//issue - how do i keep the same random word from the wordbank for an entire game, currently
//it gets reset everytime i press a new letter.