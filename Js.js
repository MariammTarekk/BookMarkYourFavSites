var bookmarks=[];

function checkName(name) {
    if (name == null || name == "") {
        return false;
    }
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].name === name)
            return false;
    }
    return true;
}

function checkUrl(url) {
    if (url == null || url == "") {
        return false;
    }
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url === url)
            return false;
    }
    return true;
}

function clear() {
    for (var i = 0; i < bookmarks.length; i++){
        bookmarks[i].value ="";
    }
}

function display(){
    var cartoona="";
    for(var i=0; i < bookmarks.length ; i++){
        cartoona+= `<tr>
        <td>${bookmarks[i].name}</td>
        <td> <td>
         <a href="${bookmarks[i].url}"  target=”_blank”>
        <button class="btn btn-info">visit</button>
        </a>
        </td><td><button  onclick="deleteBookmark(${i})"  class="btn btn-danger">delete</button>
        </td>
        </tr>`
        
    }
    document.getElementById('tbody').innerHTML=cartoona;
}

var siteName = document.querySelector("#BookName");
var siteUrl = document.querySelector("#url");

function add(){
    if(checkName(siteName.value) && checkUrl(siteUrl.value))
    {
        var bookmark = {
            name: siteName.value,
            url: siteUrl.value
        }

        bookmarks.push(bookmark);
       // localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        clear();
        display();
    }
    else
    {
        if (!checkName(siteName.value)) {
            showNameError("this bookmark already exist");
        }
        if (!checkUrl(siteUrl.value)) {
            showNameError("this url already exist");
        }
        if (siteName.value == null || siteName.value == "") {
            showNameError("Name is required");
        }
        if (siteUrl.value == null || siteUrl.value == "") {
            showUrlError("Url Field is required");
        }
    }
    
}
function visit(){
    
}
function deleteBookmark(x){
    bookmarks.splice(x,1);
    display();
}
function submit() {
    add();

}