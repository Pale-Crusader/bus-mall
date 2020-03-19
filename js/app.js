'strict';

// Very first thing, we must detect if they have stored data, I pan on detecting two key values and ListOfAllImages
// only stores
// if detects 

var listOfAllImages = [];
var numberOfChancesToVote = 25;
var resultsListEl = document.getElementById('results');
var newTriesFormEl = document.getElementById('newTriesForm');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var imageLabelList = [];


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: imageLabelList,
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


function MallImageObjectGenerator(displayName, nameAttributeString, imagePathString) {
    this.ulDisplay = displayName;
    this.name = nameAttributeString;
    this.source = imagePathString;
    listOfAllImages.push(this);
    imageLabelList.push(this.ulDisplay);
}
MallImageObjectGenerator.prototype.numberOfClicks = 0;
MallImageObjectGenerator.prototype.timesRendered = 0;


new MallImageObjectGenerator('R2D2 Bag', 'bag', '/img/bag.jpg');
new MallImageObjectGenerator('Banana Slicer', 'banana', '/img/banana.jpg');
new MallImageObjectGenerator('Bathroom Tablet Stand', 'bathroom', '/img/bathroom.jpg');
new MallImageObjectGenerator('Toeless Rainboots', 'boots', '/img/boots.jpg');
new MallImageObjectGenerator('Breakfast All-in-One', 'breakfast', '/img/breakfast.jpg');
new MallImageObjectGenerator('Meatball Bubblegum', 'bubblegum', '/img/bubblegum.jpg');
new MallImageObjectGenerator('Posture Chair', 'chair', '/img/chair.jpg');
new MallImageObjectGenerator('Cthulhu Figurine', 'cthulhu', '/img/cthulhu.jpg');
new MallImageObjectGenerator('Duck Mask For Dogs', 'dog-duck', '/img/dog-duck.jpg');
new MallImageObjectGenerator('Canned Dragon Meat', 'dragon', '/img/dragon.jpg');
new MallImageObjectGenerator('Pencap Silverare', 'pen', '/img/pen.jpg');
new MallImageObjectGenerator('Pet Shoe Mops', 'pet-sweep', '/img/pet-sweep.jpg');
new MallImageObjectGenerator('Pizza Slice Scissors', 'scissors', '/img/scissors.jpg');
new MallImageObjectGenerator('Shark Sleeping Bag', 'shark', '/img/shark.jpg');
new MallImageObjectGenerator('Baby Onsie Mop', 'sweep', '/img/sweep.png');
new MallImageObjectGenerator('Starwars Taun-Taun Sleeping Bag', 'tauntuan', '/img/tauntaun.jpg');
new MallImageObjectGenerator('Canned Unicorn Meat', 'unicorn', '/img/unicorn.jpg');
new MallImageObjectGenerator('USB Tentacle', 'usb', '/img/usb.gif');
new MallImageObjectGenerator('Novelty Watering Can', 'water-can', '/img/water-can.jpg');
new MallImageObjectGenerator('Oblique Wine Glass', 'wine-glass', '/img/wine-glass.jpg');


function generateRandomImage() {
    var imageIndex = Math.floor(Math.random() * listOfAllImages.length);
    while (
        listOfAllImages[imageIndex].name === image1.name ||
        listOfAllImages[imageIndex].name === image2.name ||
        listOfAllImages[imageIndex].name === image3.name
    ) {
        imageIndex = Math.floor(Math.random() * listOfAllImages.length);
    }
    return listOfAllImages[imageIndex];
}
function displayCurrentVotesInUl() {
    for (var resultIndex = 0; resultIndex < listOfAllImages.length; resultIndex++) {
        var imageImageResult = listOfAllImages[resultIndex];
        var listChangedEl = document.createElement('li');
        var rewriteContentToList = (imageImageResult.ulDisplay + ': ' + imageImageResult.numberOfClicks + ' Vote(s).');
        listChangedEl.textContent = rewriteContentToList;
        resultsListEl.appendChild(listChangedEl);
   }
}

function displayThreeNewImages() {
    var randomlyReplaceImage1 = generateRandomImage();
    image1.src = randomlyReplaceImage1.source;
    image1.name = randomlyReplaceImage1.name;
    randomlyReplaceImage1.timesRendered++;

    var randomlyReplaceImage2 = generateRandomImage();
    image2.src = randomlyReplaceImage2.source;
    image2.name = randomlyReplaceImage2.name;
    randomlyReplaceImage2.timesRendered++;

    var randomlyReplaceImage3 = generateRandomImage();
    image3.src = randomlyReplaceImage3.source;
    image3.name = randomlyReplaceImage3.name;
    randomlyReplaceImage1.timesRendered++;
    
    displayCurrentVotesInUl()
    numberOfChancesToVote--;
}

function chartDisplayUpdater() {
    for (var chartIndex = 0; chartIndex < listOfAllImages.length; chartIndex++) {
        myChart.data.datasets[0].data.push(listOfAllImages[chartIndex].numberOfClicks);
    }
}

function storeSuveyInStorage() {
    localStorage.clear();
    localStorage.setItem("listofallimages", JSON.stringify(listOfAllImages));
}

function imageClickHandler(event) {
    resultsListEl.innerHTML = '';

    for (var checkIndex = 0; checkIndex < listOfAllImages.length; checkIndex++) {
        if (listOfAllImages[checkIndex].name === event.target.name) {
            listOfAllImages[checkIndex].numberOfClicks++;
        }
    }
    if (numberOfChancesToVote <= 0) {
        chartDisplayUpdater();
        myChart.update();
        storeSuveyInStorage();
        var clearArticleEl = document.getElementById('imageDisplayArea');
        var displayThanksParentEl = document.getElementById('thanks');
        clearArticleEl.innerHTML = '';
        var thanksForVotingEl = document.createElement('h1');
        thanksForVotingEl.textContent = ('Thank you for completing this market research survey of potential interest for these amazing products.');
        displayThanksParentEl.appendChild(thanksForVotingEl);
    }

    displayThreeNewImages();
}

function detectSuveyInStorage() {
    var storedListOfAllImages = localStorage.getItem("listofallimages");
    if (storedListOfAllImages) {
        listOfAllImages = JSON.parse(storedListOfAllImages);
        chartDisplayUpdater();
        myChart.update();
        displayCurrentVotesInUl()
    }
    // since we want to give extra chances after a refresh of page without loss of data
    if (storedListOfAllImages && (numberOfChancesToVote <= 0)) {
        numberOfChancesToVote = 25;
    }
}

displayThreeNewImages();

image1.addEventListener('click', imageClickHandler);
image2.addEventListener('click', imageClickHandler);
image3.addEventListener('click', imageClickHandler);

detectSuveyInStorage();
