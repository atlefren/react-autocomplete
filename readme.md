ReactAutocomplete
--------

An autocomplete-dropdown component for react.js. Based on Bootstrap for styling.

Supports selection using keyboard and mouse.


Usage
----------

* bower install react-autocomplete
* Include ```dist/react-autocomplete.min.js``` and ```dist/react-autocomplete.min.css``` in your page.
* Do something like:

```javascript    
<Autocomplete 
    select={itemSelected}
    displayAttribute='beerName'
    autocompleteSearch={autocompleteSearch}/>
}
```
* where:
    - ```select``` is the callback function when the user selects an element
    - ```displayAttribute``` is the attribute of each result to display in the list
    - ```autocompleteSearch``` is the search function: takes values (POJO) and callback function, callback expects to be called with an array of POJOS
    - ```extraParams``` is an optional POJO with extra attributes to the autocompleteSearch function
* see index.html for example usage

Demo
----
See http://code.atlefren.net/react-map/index.html
