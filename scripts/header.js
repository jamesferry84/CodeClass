/**
 * Created by James on 03/12/2015.
 */

function loadHeader() {
    var placeholder = document.getElementById("placeholder");
    var title = document.createElement("div");
    title.setAttribute("class","title");
    placeholder.appendChild(title);

    var h1 = document.createElement("h1");
    h1.innerHTML = "CodeClass";
    title.appendChild(h1);

    var nav = document.createElement("nav");
    nav.setAttribute("class","clear");
    placeholder.appendChild(nav);

    var navMenu = document.createElement("div");
    navMenu.setAttribute("class", "menu");
    navMenu.setAttribute("id", "NavigationMenu");
    navMenu.setAttribute("style", "float:left");
    nav.appendChild(navMenu);

    var navMenuList = document.createElement("ul");
    navMenuList.setAttribute("style", "position: relative; width: auto; float: left;")
    navMenu.appendChild(navMenuList);

    var navMenuHomeItem = document.createElement("li");
    navMenuHomeItem.setAttribute("style", "position: relative; float: left;");
    navMenuList.appendChild(navMenuHomeItem);

    var HomeLink = document.createElement("a");
    HomeLink.setAttribute("href", "index.html");
    HomeLink.innerHTML = "Home";
    navMenuHomeItem.appendChild(HomeLink);

    var navMenuStudentItem = document.createElement("li");
    navMenuStudentItem.setAttribute("style", "position: relative; float: left;");
    navMenuList.appendChild(navMenuStudentItem);

    var StudentLink = document.createElement("a");
    StudentLink.setAttribute("href", '#');
    StudentLink.innerHTML = "Learn to code";
    navMenuStudentItem.appendChild(StudentLink);

    var StudentLinkMenuList = document.createElement("ul");
    navMenuStudentItem.appendChild(StudentLinkMenuList);

    var StudentLinkMenuListItem = document.createElement("li");
    StudentLinkMenuList.appendChild(StudentLinkMenuListItem);

    var StudentStringsMenuListItem = document.createElement("a");
    StudentStringsMenuListItem.setAttribute("href", "variables.html");
    StudentStringsMenuListItem.innerHTML = "Variables";
    StudentLinkMenuListItem.appendChild(StudentStringsMenuListItem);

    var StudentLinkMenuListItem = document.createElement("li");
    StudentLinkMenuList.appendChild(StudentLinkMenuListItem);

    var StudentStringsMenuListItem = document.createElement("a");
    StudentStringsMenuListItem.setAttribute("href", "condition.html");
    StudentStringsMenuListItem.innerHTML = "Condition Statements";
    StudentLinkMenuListItem.appendChild(StudentStringsMenuListItem);

    var StudentLinkMenuListItem = document.createElement("li");
    StudentLinkMenuList.appendChild(StudentLinkMenuListItem);

    var StudentStringsMenuListItem = document.createElement("a");
    StudentStringsMenuListItem.setAttribute("href", "loops.html");
    StudentStringsMenuListItem.innerHTML = "Loops";
    StudentLinkMenuListItem.appendChild(StudentStringsMenuListItem);

    var StudentLinkMenuListItem = document.createElement("li");
    StudentLinkMenuList.appendChild(StudentLinkMenuListItem);

    var StudentStringsMenuListItem = document.createElement("a");
    StudentStringsMenuListItem.setAttribute("href", "arrays.html");
    StudentStringsMenuListItem.innerHTML = "Arrays";
    StudentLinkMenuListItem.appendChild(StudentStringsMenuListItem);

    var StudentLinkMenuListItem = document.createElement("li");
    StudentLinkMenuList.appendChild(StudentLinkMenuListItem);

    var StudentStringsMenuListItem = document.createElement("a");
    StudentStringsMenuListItem.setAttribute("href", "functions.html");
    StudentStringsMenuListItem.innerHTML = "Functions";
    StudentLinkMenuListItem.appendChild(StudentStringsMenuListItem);

    var StudentLinkMenuListItem = document.createElement("li");
    StudentLinkMenuList.appendChild(StudentLinkMenuListItem);

    var StudentStringsMenuListItem = document.createElement("a");
    StudentStringsMenuListItem.setAttribute("href", "objects.html");
    StudentStringsMenuListItem.innerHTML = "Objects";
    StudentLinkMenuListItem.appendChild(StudentStringsMenuListItem);

    var StudentLinkMenuListItem = document.createElement("li");
    StudentLinkMenuList.appendChild(StudentLinkMenuListItem);

    var StudentStringsMenuListItem = document.createElement("a");
    StudentStringsMenuListItem.setAttribute("href", "pong.html");
    StudentStringsMenuListItem.innerHTML = "Pong Challenge";
    StudentLinkMenuListItem.appendChild(StudentStringsMenuListItem);

    var navMenuStudentItem = document.createElement("li");
    navMenuStudentItem.setAttribute("style", "position: relative; float: left;")
    navMenuList.appendChild(navMenuStudentItem);

    var studentLink = document.createElement("a");
    studentLink.setAttribute("href", "sandbox.html");
    studentLink.innerHTML = "Sandbox";
    navMenuStudentItem.appendChild(studentLink);

    var navMenuStudentItem = document.createElement("li");
    navMenuStudentItem.setAttribute("style", "position: relative; float: left;")
    navMenuList.appendChild(navMenuStudentItem);

    var studentLink = document.createElement("a");
    studentLink.setAttribute("href", "codingStandards.html");
    studentLink.innerHTML = "Coding Standards";
    navMenuStudentItem.appendChild(studentLink);

    var clearDiv = document.createElement("div");
    clearDiv.setAttribute("style", "clear:left;");
    nav.appendChild(clearDiv);

    document.getElementById("version").innerHTML="Version 1.0";
}