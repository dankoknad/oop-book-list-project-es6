// Book Constructor
function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI Constructor
function UI() {}

// Event Listeners
var formEl = document.getElementById('book-form'),
  titleInputEl = document.getElementById('title'),
  authorInputEl = document.getElementById('author'),
  isbnInputEl = document.getElementById('isbn')

formEl.addEventListener('submit', function(e) {
  e.preventDefault()
  var title = titleInputEl.value,
    author = authorInputEl.value,
    isbn = isbnInputEl.value

  console.log({ title, author, isbn })
})
