var containerEl = document.getElementById('container'),
  formEl = document.getElementById('book-form'),
  titleInputEl = document.getElementById('title'),
  authorInputEl = document.getElementById('author'),
  isbnInputEl = document.getElementById('isbn'),
  bookListEl = document.getElementById('book-list')

// Book Constructor
class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

// UI Constructor
class UI {
  addBook(book) {
    var bookRowEl = document.createElement('tr')

    // insert columns
    bookRowEl.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>`

    bookListEl.appendChild(bookRowEl)
  }

  clearFields() {
    titleInputEl.value = ''
    authorInputEl.value = ''
    isbnInputEl.value = ''
    titleInputEl.focus()
  }

  showAlert(msg, className) {
    var divEl = document.createElement('div')

    divEl.innerHTML = msg
    divEl.className = 'alert ' + className

    containerEl.insertBefore(divEl, formEl)
    setTimeout(() => {
      document.querySelector('.alert').remove()
    }, 3000)
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }
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
    // error alert
    ui.showAlert('Please fill all form fields', 'error')
  } else {
    // add book to list
    ui.addBook(book)

    // success alert
    ui.showAlert('A book has been added', 'success')

    // clear form fields
    ui.clearFields()
  }

  // console.log(book)
})

bookListEl.addEventListener('click', function(e) {
  // console.log(e.target)

  // instantiate ui
  var ui = new UI()

  // delete book
  ui.deleteBook(e.target)

  // success alert
  ui.showAlert('A book has been deleted', 'success')
})
