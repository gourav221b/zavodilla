
const about = document.getElementById('about');
const works = document.getElementById('works');
const aboutClick = document.getElementById('aboutClick');
const workClick = document.getElementById('workClick');
const closeaboutClick = document.getElementById('closeaboutClick');
const closeworkClick = document.getElementById('closeworkClick');


aboutClick.addEventListener('click',()=>
{
    // console.log(about)
    about.style.top="0%"

 
})

closeaboutClick.addEventListener('click',()=>
{
    // console.log(about)
    about.style.top="-200%"

 
})

workClick.addEventListener('click',()=>
{
    works.style.bottom="0%"
})
closeworkClick.addEventListener('click',()=>
{
    works.style.bottom="-200%"
})