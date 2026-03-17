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


const book1 = new Book('A Thousand Splendid suns', 'Khalid Husainy', 350, 'read it');
addBookToLibrary(book1);
const book2 = new Book('Sahih Muslim', 'Imam Muslim', 3000, 'not read it');
addBookToLibrary(book2);
const book3 = new Book('Sahih Bukhari', 'Imam Bukhari', 3500, 'not read it');
addBookToLibrary(book3);
const book4 = new Book('Sir Aalam Al Nubalaa', 'Imam Al Dahabi', 10000, 'not read it');
addBookToLibrary(book4);

library.forEach(i=>console.log(i.status()));

const grid = document.querySelector('.grid');

for(let i=0; i<library.length; ++i){
    let shelf = document.createElement('div')
    shelf.className = 'shelf'
    grid.appendChild(shelf)
    shelf.textContent = library[i].status()
};