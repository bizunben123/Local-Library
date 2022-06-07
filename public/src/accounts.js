function findAccountById(accounts, id) {
  let found = accounts.find(account => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((a, b )=> {
  var nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
   let count = 0;
  books.forEach(book => { 
     for (let i = 0; i < book.borrows.length; i++) { 
       // add up the books that given account id has borrowed
       if (book.borrows[i].id === account.id) { 
         count += 1; } 
     } 
   });
  return count;
}

function getBooksPossessedByAccount(account, books, authors){

	  
  let result = books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false));
  
  books.map(book => { 
    let author = authors.find(author => author.id === book.authorId) 
    book.author = author; 
           return book;
  })
  
  return result;
  
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
