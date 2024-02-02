'use strict';
function MakeMultiFilter(originalArray) {
    var currentArray = originalArray.slice();

    function arrayFilterer(filterCriteria = undefined, callback = undefined) {
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }

        currentArray = currentArray.filter(filterCriteria);

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;
    }

    return arrayFilterer;
}

