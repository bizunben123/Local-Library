function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  return borrowed.length;
}

function getMostCommonGenres(books) {
  const commonGenres =[];
  for(let book of books){
    const genre = commonGenres.find( (currentGenre) => currentGenre.name === book.genre );
    if (genre){
      genre.count++;
    }
    else{
      commonGenres.push({name: book.genre, count: 1});
    }
  }
 let result = commonGenres.sort((a,b) => b.count - a.count).slice(0, 5);
  return result;
}


function getMostPopularBooks(books) {
  const result =[];
  const borrows = books.reduce((acc, book)=>  { 
    result.push({ name: book.title, count: book.borrows.length 
                }); }
  , []);
 return result.sort((a,b) => b.count - a.count).slice(0, 5);
  
  
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  
  let bookWithNMatchAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
  bookWithNMatchAuthor.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId)
    result.push({name: `${author.name.first} ${author.name.last}`, count: book.borrows.length})
  });
  return result.sort((a,b)=>(b.count - a.count)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
