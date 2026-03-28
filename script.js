// foundation of basic functions and variables
const library = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

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
if(library.length > 10 && library.length <= 20){
    newShelf()
}
if(library.length > 20 && library.length <= 30){
    newShelf()
    newShelf()
}





// creat book covers
for(i = 0; i<library.length; i++){
    let cover = document.createElement('div')
    cover.className = 'cover'
    if(i >= 10 && i<20){
        shelf = document.querySelector('.container > :nth-child(3)')
        shelf.appendChild(cover)
    }
    else if(i >= 20){
        shelf = document.querySelector('.container > :nth-child(5)')
        shelf.appendChild(cover)
    }
    else{
        shelf = document.querySelector('.container :first-child')
        shelf.appendChild(cover)
    }
}

// create info containers in cover
const authorCon = document.createElement('p')
authorCon.className = 'authorCon'
const titleCon = document.createElement('p')
titleCon.className = 'titleCon'
const pagesCon = document.createElement('p')
pagesCon.className = 'pagesCon'
const readCon = document.createElement('div')
readCon.className = 'readCon'

// for loop to add library to display
for(let i=0; i<library.length; ++i){
    function showBook () {
        
    }
    if(i >= 10 && i<20){
        shelf = document.querySelector('.container > :nth-child(3)')
        showBook()
    }
    else if(i >= 20){
        shelf = document.querySelector('.container > :nth-child(5)')
        showBook()
    }
    else{
        shelf = document.querySelector('.container :first-child')
        showBook()
    }
    }
