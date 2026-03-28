// foundation of basic functions and variables
const library = [1,2,3];

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

const frame = document.querySelector('.frame')
const container = document.querySelector('.container')
const shelf = document.createElement('div')
shelf.className = ('shelf')
container.appendChild(shelf)
const shelfBg = document.createElement('div')
shelfBg.className = 'shelfBg'
container.appendChild(shelfBg)


// for loop to add library to display
for(let i=0; i<library.length; ++i){
    let bookCon = document.createElement('div')
    bookCon.className = 'bookCon'
    shelf.appendChild(bookCon)
    bookCon.textContent = library[i]
}
