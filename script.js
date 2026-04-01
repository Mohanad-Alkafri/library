// alert('Add your books to the library using the + sign on the top left.')
// foundation of basic functions and variables
const library = [];

function Book(title, author, pages, read){
    this.title = title,
    this.id = crypto.randomUUID(),
    this.author = author,
    this.pages = pages,
    this.read = read
};

Book.prototype.status = function () {return `${this.title}, by ${this.author}, 
            has ${this.pages} pages and I've ${this.read}`
        };

function addBookToLibrary(book){
    library.push(book)
};

const container = document.querySelector('.container')
let shelf = document.createElement('div')
shelf.className = ('shelf')
container.appendChild(shelf)
let shelfBg = document.createElement('div')
shelfBg.className = 'shelfBg'
container.appendChild(shelfBg)

function newShelf (){
        shelf = document.createElement('div')
        shelf.className = ('shelf')
        container.appendChild(shelf)
        shelfBg = document.createElement('div')
        shelfBg.className = 'shelfBg'
        container.appendChild(shelfBg)
}


// creat book covers and show info on screen
function showBook (i){

    let cover = document.createElement('div')
    cover.className = 'cover'
    if(library.length > 10 && library.length<20){
        shelf = document.querySelector('.container > :nth-child(3)')
        if(!shelf){
            newShelf()
        }
        shelf.appendChild(cover)
    }
    else if(library.length > 20){
        shelf = document.querySelector('.container > :nth-child(5)')
        if(!shelf){
            newShelf()
        }
        shelf.appendChild(cover)
    }
    else{
        shelf = document.querySelector('.container :first-child')
        if(!shelf){newShelf()}
        shelf.appendChild(cover)
    }
    // create info containers in cover
    const authorCon = document.createElement('p')
    authorCon.className = 'authorCon'
    cover.appendChild(authorCon)
    const titleCon = document.createElement('p')
    titleCon.className = 'titleCon'
    cover.appendChild(titleCon)
    const pagesCon = document.createElement('p')
    pagesCon.className = 'pagesCon'
    cover.appendChild(pagesCon)
    const readCon = document.createElement('div')
    readCon.className = 'readCon'
    cover.appendChild(readCon)
    authorCon.textContent = library[i].author
    titleCon.textContent = library[i].title
    readCon.textContent = library[i].read
    pagesCon.textContent = `${library[i].pages} pages`
    // color
    let color1 = Math.round((Math.random() * 255))
    let color2 = Math.round((Math.random() * 255))
    let color3 = Math.round((Math.random() * 255))
    let color11 = Math.round((Math.random() * 255))
    let color22 = Math.round((Math.random() * 255))
    let color33 = Math.round((Math.random() * 255))
    let rgbcolor = `RGB(${color1},${color2},${color3})`
    let rgbcolor2 = `RGB(${color11},${color22},${color33})`
    cover.style.background = `linear-gradient(60deg, ${rgbcolor}, ${rgbcolor2})`
}


// add book btn
const addBtn = document.querySelector('.addBtn')
addBtn.addEventListener('click', e => {
    const addPage = document.createElement('div')
    addPage.className = 'addPage'
    document.querySelector('body').appendChild(addPage)
    const form = document.createElement('form')
    form.className = 'form'
    addPage.appendChild(form)
    const titlel = document.createElement('lable')
    const titlei = document.createElement('input')
    const authorl = document.createElement('label')
    const authori = document.createElement('input')
    const pagesl = document.createElement('label')
    const pagesi = document.createElement('input')
    const readOps = document.createElement('div')
    const readl = document.createElement('label')
    const readOpCon = document.createElement('div')
    const readl1 = document.createElement('label')
    const readl2 = document.createElement('label')
    const readl3 = document.createElement('label')
    const readi1 = document.createElement('input')
    const readi2 = document.createElement('input')
    const readi3 = document.createElement('input')
    const submit = document.createElement('button')
    const close = document.createElement('div')
    const closeBtn = document.createElement('button')
    // input types and ids and names
    titlei.type = 'text'
    authori.type = 'text'
    pagesi.type = 'number'
    readi1.type = 'radio'
    readi2.type = 'radio'
    readi3.type = 'radio'
    titlei.name = 'title'
    authori.name = 'author'
    pagesi.name = 'pages'
    readi1.name = 'readStatus'
    readi2.name = 'readStatus'
    readi3.name = 'readStatus'
    titlei.id = 'title'
    authori.id = 'author'
    pagesi.id = 'pages'
    readi1.value = 'yes'
    readi2.value = 'no'
    readi3.value = 'reading'
    readOps.className = 'readOps'
    readOpCon.className = 'readOpCon'
    submit.type = 'submit'
    close.className = 'close'
    // appending
    form.appendChild(titlel)
    form.appendChild(titlei)
    form.appendChild(authorl)
    form.appendChild(authori)
    form.appendChild(pagesl)
    form.appendChild(pagesi)
    form.appendChild(readOps)
    readOps.appendChild(readl)
    readOps.appendChild(readOpCon)
    readOpCon.appendChild(readi1)
    readOpCon.appendChild(readl1)
    readOpCon.appendChild(readi2)
    readOpCon.appendChild(readl2)
    readOpCon.appendChild(readi3)
    readOpCon.appendChild(readl3)
    form.appendChild(submit)
    form.appendChild(close)
    close.appendChild(closeBtn)
    // text continet for labels
    titlel.textContent = 'Title'
    authorl.textContent = 'The Authour'
    pagesl.textContent = 'The Number of Pages'
    readl.textContent = 'Have you read the book?'
    readl1.textContent = 'Yes'
    readl2.textContent = 'No'
    readl3.textContent = 'Reading it'
    submit.textContent = 'Add Book'
    closeBtn.textContent = 'X'
    // required fields
    titlei.required = true
    authori.required = true
    pagesi.required = true
    readi1.required = true
    // submitting the data
    form.addEventListener('submit', e =>{
        e.preventDefault()
        const subBook = {
            title : document.getElementById('title').value,
            author : document.getElementById('author').value,
            pages : document.getElementById('pages').value,
            read : document.querySelector('input[name="readStatus"]:checked').value
        }
        addBookToLibrary(subBook)
        addPage.remove()
        showBook(library.length-1)
    })
    // close the page
    closeBtn.addEventListener('click', e=>{
        addPage.remove()
    })
})
