/** 
 * Author: [Aaron Melocik, github.com/SterlingVi],
 * 30 Jan 2016
 *  
 * A matching game to master flexbox properties
 **/

var Quiz = function () {
    // DOM elements
    this.parentSelectorContainer = document.querySelector('.parent-inputs');
    this.childSelectorContainer = document.querySelector('.child-inputs');

    this.flexContainer = {
        "display": ['flex', 'inline-flex'],
        "flex-direction": ['row', 'row-reverse', 'column', 'column-reverse'],
        "flex-wrap": ['nowrap', 'wrap', 'wrap-reverse'],
//        "flex-flow": [ < 'flex-direction' > || < 'flex-wrap' > ],
        "flex-flow": ['flex-direction', 'flex-wrap'],
        "justify-content": ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
        "align-items": ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
        "align-content": ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
    };

    this.flexItem = {
        "order": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "flex-grow": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "flex-shrink": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "flex-basis": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'auto'],
        //        "flex": ['none' | [ < 'flex-grow' > < 'flex-shrink' > ? || < 'flex-basis' > ]],
        "align-self": ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    };

    this.flexContainerTestSelectors = {};
    this.flexItemTestSelectors = {};
    
    this.populateInputContainer(this.parentSelectorContainer, this.flexContainer);
    this.populateInputContainer(this.childSelectorContainer, this.flexItem);
}; // end Quiz()

Quiz.prototype.initialize = function () {

}; // end initialize()


/**
 * Create flex options and selectors 
 **/
Quiz.prototype.populateInputContainer = function (containerElement, properties) {
    containerElement.selectionElementContainers = [];

    for (var key in properties) {
        containerElement.selectionElementContainers.push(this.createSelectionContainer(key, properties[key]));
        containerElement.appendChild(containerElement.selectionElementContainers[(containerElement.selectionElementContainers.length - 1)]);
    }
}; // end populateInputContainer(containerElement, properties)


/**
 * Creates container for selection buttons
 **/
Quiz.prototype.createSelectionContainer = function (key, value) {
    var thisSelectionContainer = document.createElement('div');
    thisSelectionContainer.setAttribute('class', 'btn-group selection-container flex-container');
    thisSelectionContainer.setAttribute('role', 'group');
    thisSelectionContainer.buttonElements = [];
    
    var thisSelectionLabel = document.createElement('h4');
    thisSelectionLabel.setAttribute('class', 'selection-label');
    thisSelectionLabel.textContent = key;
    thisSelectionContainer.appendChild(thisSelectionLabel);
    
    console.log('createSelectionContainer ==> typeof value ===', typeof value, value, 'key ===', key);
        
     for (var key2 in value) {
        thisSelectionContainer.buttonElements.push(this.createSelectionButton(key2, value[key2]));
        thisSelectionContainer.appendChild(thisSelectionContainer.buttonElements[(thisSelectionContainer.buttonElements.length - 1)]);
     }
    
    return thisSelectionContainer;
}; // createSelectionContainer()


/**
 * Creates selection buttons
 **/
Quiz.prototype.createSelectionButton = function (key, value) {
    var selectionButton = document.createElement('button');
    selectionButton.setAttribute('type', 'button');
    selectionButton.setAttribute('class', 'btn btn-default selection-btn flex-item');
    selectionButton.textContent = value;
    selectionButton.dataset.flexkey = key;
    selectionButton.dataset.flexvalue = value;
    
    console.log('createSelectionButton ==> value =', value, 'key =', key, 'value[key] =', value[key]);
    
    return selectionButton;
}; // createSelectionButton()


/**
 * Returns random value from an array
 **/
Quiz.prototype.getRandomValue = function (valueArray) {
    var randomIndex = parseInt(Math.random() * (valueArray.length));
                       
    if (valueArray.isArray()) {
        return valueArray[randomIndex];
    } else if (valueArray.isObject()) {
        var iteration = 0;
        
        for (var key in valueArray) {
            randomIndex--;
            
            if (randomIndex === 0) {
                return valueArray[key];
            }
        }
    } else {
        console.error('Error: valueArray is neither an array nor object:', valueArray);
    }
}; // end getRandomValue(valueArray)


/**
 * Styles for Test Container
 **/
Quiz.prototype.createTestContainerStyleString = function () {
    for (var key in this.flexContainer) {
        this.flexContainerTestSelectors.key = {};
        this.flexContainerTestSelectors.key = this.getRandomValue();
        
    }
}; // end createTestContainerStyleString(valueArray)


/**
 * 
 **/
Quiz.prototype.createTestItemStyleString = function () {

//    this.flexItem
    
    
    this.flexItemTestSelectors = {};
}; // end createTestItemStyleString(valueArray)











