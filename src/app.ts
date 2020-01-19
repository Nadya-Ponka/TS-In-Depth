import { Category } from "./enums";
import { ReferenceItem, UniversityLibrarian, RefBook, Shelf } from "./classes";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { BookProperties, PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from "./types";
import { getAllBooks, getBookAuthorByIndex, getBookByID, getTitles, getBookTitlesByCategory, getBookProp, purge, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions'
import Encyclopedia from "./classes/encyclopedia";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
	const elt = document.getElementById(divName);
	elt.innerText = `Hello from ${name}`;
}

// Task 02.01
// logFirstAvailable(getAllBooks());

// const titles = getBookTitlesByCategory(Category.Javascript);
// logBookTitles(titles);

// const titleAndAuthor = getBookAuthorByIndex(2);
// console.log(titleAndAuthor);

// console.log(calcTotalPages());

// Task 03.01
// const titles = getBookTitlesByCategory(Category.Javascript);
// titles.forEach((title: string, index: number) => console.log(title));

// console.log(getBookByID(1));

//  Task 03.02
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${name}${id}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 2));

// Task 03.03
// createCustomer('Ann');
// createCustomer('Ann', 20);
// createCustomer('Ann', 20, 'Kyiv');

// const titles = getBookTitlesByCategory();
// console.log(titles);

// logFirstAvailable();

// const myBooks: string[] = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.04
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// Task 03.05
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(10));

//Task 04.01
// const myBook: Book = {
// 	id: 5,
// 	title: 'Colors, Backgrounds, and Gradients',
// 	author: 'Eric A. Meyer',
// 	available: true,
// 	category: Category.CSS,
// 	pages: 200,
// 	markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)	
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const f = (damage: string) => console.log(`Damage reporter: ${damage}`);
// const logDamage: Logger = f;
// logDamage('missing back cover');

// task 04.03
// const favoriteAuthor: Author = {
// 	name: 'Anna',
// 	email: 'anna@gmail.com',
// 	numBooksPublished: 4 
// };
// const favoriteLibrarian: Librarian = {
// 	name: 'Boris',
// 	email: 'boris@gmail.com',
// 	department: 'Classics',
// 	assistCustomer(name: string) {
// 		console.timeLog(`Assist ${name}`);
// 	}
// }

// Task 04.04
// const offer: any = {
// 	book: {
// 		title: 'Essential TypeScript'
// 	}
// };
// console.log(offer?.magazine);

// Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

// Task 05.01
// const ref = new ReferenceItem('Our new title', 2020);
// ref.printItem();
// ref.publisher = 'Randon Publisher';
// console.log(ref.publisher);

// Task 05.02
// const refBook: Encyclopedia = new Encyclopedia('Title', 2020, 3);
// refBook.printItem();
// console.log(refBook);

// Task 05.03
// const refBook: Encyclopedia = new Encyclopedia('Title', 2020, 3);
// refBook.printCitation();
// console.log(refBook);

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
// 	name: 'Anna',
// 	email: 'anna@gmail.com',
// 	title: 'Introduction to Union Types',
// 	author: 'unknown',
// 	available: true,
// 	category: Category.TypeScript,
// 	id: 1
// };
// console.log(personBook);

// Task 06.03
// const refBook: RefBook = new RefBook('Title', 2020, 3);
// refBook.printItem();
// console.log(refBook);

// Task 06.05
// import('./classes').then(module => {
// 	const reader = new module.Reader();
// 	reader.name = 'Ann';
// 	reader.take(getAllBooks()[0]);
// 	console.log(reader);
// })

// Task 07.01
// const inventory: Array<Book> = [
// 	{ id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
// 	{ id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
// 	{ id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
// 	{ id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result = purge<Book>(inventory);
// console.log(result);

// const result2 = purge([1, 2, 3, 4, '5']);
// console.log(result2);

// Task 07.02
// const inventory: Array<Book> = [
// 	{ id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
// 	{ id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
// 	{ id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
// 	{ id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const book = bookShelf.getFirst();
// console.log(book);

// const magazines: Array<Magazine> = [
// 	{ title: 'Programming Language Monthly', publisher: 'Code Mags' },
// 	{ title: 'Literary Fiction Quarterly', publisher: 'College Press' },
// 	{ title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazineShelf.add(...magazines);
// const mag = magazineShelf.getFirst();
// console.log(mag);

// Task 07.03
// const magazines: Array<Magazine> = [
// 	{ title: 'Programming Language Monthly', publisher: 'Code Mags' },
// 	{ title: 'Literary Fiction Quarterly', publisher: 'College Press' },
// 	{ title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazineShelf.add(...magazines);
// magazineShelf.printTitles();
// const result = magazineShelf.find('Five Points');
// console.log(result);

// Task 07.04
// const book: BookRequiredFields = {
// 	id: 1,
// 	title: 'Book Title',
// 	author: 'Anna',
// 	available: false,
// 	category: Category.Angular,
// 	pages: 250,
// 	markDamaged: null
// };

// const updatedBook: UpdatedBook = {
// 	id: 1,
// 	title: 'Book Title'
// };

// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01
// const obj = new UniversityLibrarian();

// Task 08.02
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian);
// (fLibrarian as any).printLibrarian();
// fLibrarian['printLibrarian']();
// Object.getPrototypeOf(fLibrarian).printLibrarian();

// Task 08.03
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// Task 08.04
// const enc = new Encyclopedia('The Best Encyclopedia', 2020, 1);
// enc.printItem();

// Task 08.05
// const fLibrarian = new UniversityLibrarian();
// console.log('FLIBRARIAN: ', fLibrarian);
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');

// Task 08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);

// Task 08.07
// const enc = new Encyclopedia('The Best Encyclopedia', 2020, 1);
// enc.copies = -10;
// console.log(enc);

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.Javascript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.Javascript)
// .then(titles => {
// 	console.log(titles);
// 	return titles.length;
// })
// .then(num => console.log(num))
// .catch(reason => console.log(reason));
// console.log('End');

// getBooksByCategoryPromise(Category.Software)
// .then(titles => console.log(titles))
// .catch(reason => console.log(reason));

// Task 09.03
console.log('Begin');
logSearchResults(Category.Javascript)
.catch(reason => console.log(reason));
console.log('End');
