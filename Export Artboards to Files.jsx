// artboards to files

var document = app.activeDocument;
var boards = document.artboards;

// loop through all artboards, make each one active and render before moving onto the next
for(var i = 0; i < boards.length; i++) {
    document.artboards.setActiveArtboardIndex(i);
    var saveOptions = new IllustratorSaveOptions();
    var aiDoc = new File("~/Documents/artboard_"+(i+1).toString());
    saveOptions.saveMultipleArtboards = true;
    saveOptions.artboardRange = (i+1).toString();
    document.saveAs(aiDoc, saveOptions);
    }