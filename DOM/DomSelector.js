/*

//Do this inside console of index.html


document.getElemntById

>document.getElemntById('title').id //Gives id
<title

>document.getElemntById('title').className //Gives class name
<heading

>document.getElemntById('title').getAttribute(id)
<title

>document.getElemntById('title').getAttribute(class)
<heading

>document.getElementById('title').setAttribute('class','test');

>document.getElementById('title')
< <h1 id="title" class="test">DOM learning</h1>

>const title = document.getElementById('title')

>title
< <h1 id="title" class="test">DOM learning</h1>

>title.style.backgroundColor ="red"
<'red'

>title.style.padding ="15px"
<'15px'

>title.style.borderRadius ="15px";
<'15px'

>title.textContent
<'DOM learning Test Text'

>title.innerHTML
<'DOM learning'

>title.innerText
<DOM learning <spam style="display:none";>  Test Text</spam>

<document.querySelector('h2') //Gives only first h2
><h2>lorem ipsum dolor sit</h2>

<document.querySelector('#title')
><h1 id="title" class="heading">DOM learning <spam style="display:none";>  Test Text</spam></h1>

<document.querySelector('.heading')
><h1 id="title" class="heading">DOM learning <spam style="display:none";>  Test Text</spam></h1>

<document.querySelector('input[type="password"]')
><input type="password" name="" id="">

<const myUl=document.querySelector('ul')

<myUl.querySelector('li')
><li></li>

<const turnGreen=myUl.querySelector('li')

<turnGreen.style.backgroundColor="green"
>green


<document.querySelectorAll('li')
>nodelist(3) [li,li,li]

<const tempList=document.querySelectorAll('li')

<tempList[0].style.color="red"
>red
*/