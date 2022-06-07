function findAuthorById(authors, id) {
  let found = authors.find(author => author.id === id);
  return found;
}

function findBookById(books, id) {
   let found = books.find(book => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
 let result=[];
 const borrowed = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true); 
  result.push(borrowed, returned);
  return result;
}

function getBorrowersForBook(book, accounts) {
   const account = book.borrows.map(borrow => {
      let borrowedAccount = accounts.find(account => account.id === borrow.id)
    let result = {...borrowedAccount, ...borrow}
    return result;
  });
 
  return account.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
