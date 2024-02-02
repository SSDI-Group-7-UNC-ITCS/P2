'use strict';

function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function(dictionary) {
    return this.template.replace(/{{(.*?)}}/g, function(match, property) {
        return dictionary[property] || '';
        // comment to make change
    });
};