var cartItems = localStorage.getItem("cartItems");
var favList = document.getElementById("item-list");
var count = document.getElementById("fav-count");
if(cartItems !== null && cartItems.length > 2) {
	cartItems = JSON.parse(cartItems);
	document.getElementById("emptyList").style.display = "none";

	for(var i=0;i<cartItems.length;i++) {
		var para = document.createElement("p");
        para.classList += "favItem";
        para.innerHTML = cartItems[i] + " <button onclick='javascript:removeItem('\"+productName+\"')'>X</button>";
		/*var node = document.createTextNode(cartItems[i]);
		para.appendChild(node);*/
		favList.appendChild(para);
	}

	count.innerHTML = cartItems.length;
}
else {
	cartItems = [];
    document.getElementById("emptyList").style.display = "block";
}

function addToFav() {
		var productName = document.getElementById("productName").innerHTML;
		for(i=0;i<cartItems.length;i++) {
			if(cartItems[i] === productName) {
				return;
			}
		}
		cartItems.push(productName);
		count.innerHTML = cartItems.length;

		var para = document.createElement("p");
		para.classList += "favItem";
		para.innerHTML = productName + " <button onclick='javascript:removeItem('"+productName+"')'>X</button>";
		/*var node = document.createTextNode(productName);
		para.prependChild(node);
		element.appendChild(para);*/
		favList.innerHTML = productName + " <button onclick='javascript:removeItem('"+productName+"')'>X</button>";
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
    	document.getElementById("emptyList").style.display = "none";
}

function removeItem(pr) {
    for(i=0;i<cartItems.length;i++) {
        if(cartItems[i] === pr) {
            cartItems.splice(i,1);
            break;
        }
    }

    // Get the <ul> element with id="myList"
    var elements = document.getElementsByClassName("fav-list");
    for(var i=0; i<elements.length; i++) {
        elements.splice(i,1);
    }

    for(var i=0;i<cartItems.length;i++) {
        var para = document.createElement("p");
        var node = document.createTextNode(cartItems[i]);
        para.appendChild(node);
        element.appendChild(para);
    }

    count.innerHTML = cartItems.length;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function openPopup(){
    document.getElementById('fav-added-popup').style.display = "block";
    addToFav();
}
function closePopup(){
    document.getElementById('fav-added-popup').style.display = "none";
}

function emptyCart(){
    cartItems = [];
    favList.innerHTML = "";
    count.innerHTML = "0";
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    document.getElementById("emptyList").style.display = "block";
}

function expandPDF(){
    var pdf = document.getElementById("pdf");
    document.getElementById("pdf-wrapper").style.display = "block";
    pdf.classList -= " large-hookup normal";
    pdf.classList += " fullscreen";
}

function closePDF(){
    var pdf = document.getElementById("pdf");
    document.getElementById("pdf-wrapper").style.display = "none";
    pdf.classList -= " fullscreen";
    pdf.classList += " large-hookup normal";
}

function swapPDF(url){
    var pdf = document.getElementById('pdf');
    var parent = pdf.parentNode;
    var pdf2 = document.createElement("embed");
    pdf2.src = url;
    pdf2.classList += "large-hookup normal";
    pdf2.id = "pdf";
    //"<embed class='large-hookup' src='"+url+"' id='pdf' style='width:536px;height:693px;'>";
    pdf.parentNode.removeChild(pdf);
    parent.appendChild(pdf2);
    //pdf.getElementById('pdf').outerHTML = pdf.outerHTML.replace(/src="(.+?)"/, 'src="' + url + '"');
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}