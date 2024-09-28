function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('input[name="read"]:checked');
  
  let isRead;
  if (read.value === 'true') {
    isRead = true;
  }
  else {
    isRead = false;
  }
  
  let newBook = new Book(title.value, author.value, pages.value, isRead, myLibrary.length);
  
  myLibrary.push(newBook);
}

function creatBookCard() {
  let newBook = myLibrary[myLibrary.length - 1];
  let newCard = originalBook.cloneNode(true);

  newCard.id = `book${container.childElementCount}`;

  container.appendChild(newCard);
  newCard.classList.toggle('add');

  let bookTitle = document.querySelector(`#${newCard.id} h1`);
  let authorName = document.querySelector(`#${newCard.id} .author-name`);
  let numberOfPages = document.querySelector(`#${newCard.id} .page-number`);

  let readButton = document.querySelector(`#${newCard.id} .read`);
  readButton.addEventListener("click", (e) => {
    if (readButton.textContent === 'Read') {
      readButton.textContent = 'Not Read';
      readButton.style.backgroundColor = 'var(--remove)';
    }
    else {
      readButton.textContent = 'Read';
      readButton.style.backgroundColor = 'var(--submit)';
    }
  })

  let removeButton = document.querySelector(`#${newCard.id} .remove`);
  removeButton.addEventListener("click", (e) => {
    newCard.remove();
  })

  if (newBook.read === false) {
    readButton.textContent = 'Not Read';
    readButton.style.backgroundColor = 'var(--remove)';
  }

  bookTitle.textContent = newBook.title;
  authorName.textContent = `By ${newBook.author}`;
  numberOfPages.textContent = `Pages: ${newBook.pages}`
}

const myLibrary = [];

const originalBook = document.getElementById('book0');
const form = document.querySelector('form');
const container = document.querySelector('.card-container');

document.querySelector('.add-button').addEventListener("click", (e) => {
  addBookToLibrary();
  creatBookCard();
  e.preventDefault();
  
  form.reset();
});
