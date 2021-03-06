document.addEventListener("deviceready", init, false);
function init() {
    
    //This alias is a read-only pointer to the app itself
    //window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/index.html", gotFile, fail);
      window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError ); 
      console.log("demo");
    /* Yes, this works too for our specific example...
    $.get("index.html", function(res) {
        console.log("index.html", res);
    });
    */

}

function fail(e) {
    console.log("FileSystem Error");
    console.dir(e);
}

function gotFile(fileEntry) {
console.log("GOT FILE");
    fileEntry.file(function(file) {
        var reader = new FileReader();

        reader.onloadend = function(e) {
            console.log("Text is: "+this.result);
            document.querySelector("#textArea").innerHTML = this.result;
        }

        reader.readAsText(file);
    });

}