require('dotenv').config()

const {API_SECRET} = process.env;

var convertapi = require('convertapi')(API_SECRET);
convertapi.convert('compress', {
    File: 'comp_science.pdf',
    ColorImageQuality: '20',
    RemoveBookmarks: 'true',
    RemoveAnnotations: 'true',
    RemoveForms: 'true',
    RemovePageLabels: 'true'
}, 'pdf').then(function(result) {
    result.saveFiles('result_compressed.pdf');
});