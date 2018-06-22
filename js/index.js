// Book Constructor
function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI Constructor
function UI() {}

UI.prototype.addBook = function(book) {
  var bookListEl = document.getElementById('book-list')
  // create new row el
  var bookRowEl = document.createElement('tr')

  // insert columns
  bookRowEl.innerHTML =
    '<td>' +
    book.title +
    '</td>' +
    '<td>' +
    book.author +
    '</td>' +
    '<td>' +
    book.isbn +
    '</td>' +
    '<td><a href="#" class="delete">X</a></td>'

  bookListEl.appendChild(bookRowEl)
}

// Event Listeners
var formEl = document.getElementById('book-form'),
  titleInputEl = document.getElementById('title'),
  authorInputEl = document.getElementById('author'),
  isbnInputEl = document.getElementById('isbn')

formEl.addEventListener('submit', function(e) {
  e.preventDefault()

  // get form values
  var title = titleInputEl.value,
    author = authorInputEl.value,
    isbn = isbnInputEl.value

  // instantiate book
  var book = new Book(title, author, isbn)

  // instantiate ui
  var ui = new UI()

  // add book to list
  ui.addBook(book)

  // console.log(book)
})
