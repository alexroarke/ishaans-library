const bookForm = document.querySelector('.modal-form')
const submitBtn = document.querySelector('.modal-form-btn')
const addNewBookBtn = document.querySelector('.new-book-btn')
const modal = document.querySelector('.bg-modal')
const modalContent = document.querySelector('.modal-content')

const booksContainer = document.querySelector('.books-container')

let myLibrary = [];

function Book(title, pages, author, isRead) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.isRead = isRead
}

const displayAddNewBookModal = () => {
    modal.classList.add('active')
}

const closeAddNewBookModal = () => {
    modal.classList.remove('active')
}

const addBookToLibrary = (e) => {
    e.preventDefault()

    console.log('working ')
    data = []
    for (let i = 0; i < bookForm.elements.length - 2; i++) {
        const value = bookForm.elements[i].value;
        data.push(value)
    }

    const value = bookForm.elements.isRead.checked ? 'Read' : 'Not Read'
    data.push(value)

    book = new Book(...data)
    myLibrary.push(book)
    bookForm.reset()

    closeAddNewBookModal()
    displayBooks(book)
    
}


const displayBooks = (book) => {
    const {title, author, pages, isRead} = book  

    const bookDiv = document.createElement('div')
    bookDiv.classList.add('book')

    const bookMetadata = document.createElement('div')

    const titleEl = document.createElement('h2')
    const pagesEl = document.createElement('p')
    const authorEl = document.createElement('p')
    const readingStatusEl = document.createElement('p')

    bookMetadata.classList.add('book-metadata')
    titleEl.classList.add('book-title')
    pagesEl.classList.add('book-author')
    authorEl.classList.add('book-pages')
    readingStatusEl.classList.add('book-reading-status')

    if (isRead == 'Read') {
        readingStatusEl.classList.add('read')
    } else {
        readingStatusEl.classList.add('not-read')
    }
    
    titleEl.append(title)
    authorEl.append('by ' + author)
    pagesEl.append(pages + ' pages')
    readingStatusEl.append(isRead)
    bookMetadata.append(titleEl, authorEl, pagesEl, readingStatusEl)
    bookDiv.append(bookMetadata)


    // console.log(bookMetadata)
    // console.log(bookDiv)
    // console.log(booksContainer)
    booksContainer.appendChild(bookDiv)
}

bookForm.onsubmit = addBookToLibrary

addNewBookBtn.onclick = displayAddNewBookModal
modal.onclick = (e) => {
    if ([...e.target.classList].includes('bg-modal')) closeAddNewBookModal();
  }