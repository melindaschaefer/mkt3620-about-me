// Current year in footer
2
document.getElementById("year").textContent =
3
new Date().getFullYear();
4
 
5
// Smooth scrolling
6
document.querySelectorAll('a[href^="#"]').forEach(link => {
7
 
8
link.addEventListener("click", function(e){
9
 
10
e.preventDefault();
11
 
12
const target = document.querySelector(
13
this.getAttribute("href")
14
);
15
 
16
target.scrollIntoView({
17
behavior: "smooth"
18
});
19
 
20
});
21
 
22
});
