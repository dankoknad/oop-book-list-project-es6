var formEl = document.getElementById('book-form'),
  titleInputEl = document.getElementById('title'),
  authorInputEl = document.getElementById('author'),
  isbnInputEl = document.getElementById('isbn'),
  bookListEl = document.getElementById('book-list')

// Book Constructor
function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI Constructor
function UI() {}

UI.prototype.addBook = function(book) {
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

UI.prototype.clearFields = function() {
  titleInputEl.value = ''
  authorInputEl.value = ''
  isbnInputEl.value = ''
  titleInputEl.focus()
}

// Event Listeners

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

  // validate
  if (!title || !author || !isbn) {
    console.log('something is wrong!!')
  } else {
    // add book to list
    ui.addBook(book)

    // clear form fields
    ui.clearFields()
  }

  // console.log(book)
})
