<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Click a button to get a random recipe suggestion from a diverse collection of cuisines. Start cooking with an instant random recipe generator.">
    <meta name="keywords" content="recipe generator, cooking, dinner, food">
    <meta name="author" content="ricky.wuaze.com">
    <meta property="og:title" content="Recipe Generator">
    <meta property="og:description"
        content="Click a button to get a random recipe suggestion from a diverse collection of cuisines. Start cooking with an instant random recipe generator.">
    <meta property="og:url" content="https://ricky.wuaze.com/projects/recipegenerator/">
    <meta property="og:type" content="website">
    <title>Recipe Generator</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="./assets/favicon.ico" type="image/x-icon">
    <script src="./getMeal.js" defer></script>

</head>

<body>
    <h1 class="sr-only">Start cooking with an instant random recipe generator.</h1>
    <div class="mealContainer siteWrapper">
        <div class="mainNav">
            <h1>
                What's' for dinner?
            </h1>
            <button id="cookDinner">Get Recipe🍜</button>
        </div>
        <div id="recipeContainer" class="recipeContainer"></div>
    </div>
    <footer>
        <div class="footerContainer siteWrapper">
            <small>&copy; <?php echo date("Y"); ?> Ricky Wu</small>
        </div>
    </footer>
</body>

</html>