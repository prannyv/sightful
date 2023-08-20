// checkboxes
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');

window.addEventListener('DOMContentLoaded', () => {
    const savedCheckbox1State = localStorage.getItem('checkbox1');
    const savedCheckbox2State = localStorage.getItem('checkbox2');
    const savedCheckbox3State = localStorage.getItem('checkbox3');

    if (savedCheckbox1State) {
        checkbox1.checked = JSON.parse(savedCheckbox1State);
    }

    if (savedCheckbox2State) {
        checkbox2.checked = JSON.parse(savedCheckbox2State);
    }

    if (savedCheckbox3State) {
        checkbox3.checked = JSON.parse(savedCheckbox3State);
    }
});

checkbox1.addEventListener('change', () => {
    localStorage.setItem('checkbox1', checkbox1.checked);
});

checkbox2.addEventListener('change', () => {
    localStorage.setItem('checkbox2', checkbox2.checked);
});


checkbox3.addEventListener('change', () => {
    localStorage.setItem('checkbox3', checkbox3.checked);
});

// textfield
// const textInput = document.getElementById('text-input');
// const saveButton = document.getElementById('save-button');
// const savedText = document.getElementById('saved-text');

// window.addEventListener('DOMContentLoaded', () => {
//     const savedTextValue = localStorage.getItem('savedText');

//     if (savedTextValue) {
//         savedText.textContent = `Saved Text: ${savedTextValue}`;
//         console.log('Saved Text:', savedTextValue);
//     }
// });

// saveButton.addEventListener('click', () => {
//     const enteredText = textInput.value;
//     localStorage.setItem('savedText', enteredText);
//     savedText.textContent = `Saved Text: ${enteredText}`;
//     console.log('Saved Text:', enteredText);
// });


const textInput = document.getElementById('text-input');
const appendButton = document.getElementById('append-button');
const appendedText = document.getElementById('appended-text');

let appendedString = ''; // Initialize an empty string to store appended text

appendButton.addEventListener('click', () => {
    const enteredText = textInput.value.trim();

    if (enteredText !== '') {
        // Append entered text to the string and add a comma if needed
        if (appendedString !== '') {
            appendedString += ', ';
        }
        appendedString += enteredText;

        // Update the displayed appended text
        appendedText.textContent = `Appended Text: ${appendedString}`;

        console.log('Appended String:', appendedString); // Print in console

        textInput.value = ''; // Clear the input field
    }
});

const commaSeparatedString = appendedString;

// Split the string into an array using commas as the delimiter
const appendList = commaSeparatedString.split(',');
console.log(appendList);




  





// content.js

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
  
    const url = tabs[0].url;
    console.log('URL of active tab:', url);
    appendedString += url
  });
  
