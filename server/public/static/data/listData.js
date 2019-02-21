var path = require('path')
console.log(`path is ${process.cwd()}`);

const fictionBookData = {
    "items": [
        {
            "key": '001',
            "id": 1,
            "name": "Harry Potter and the Half Blood Prince",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_1.jpg",
            "shortDescription": "A #1 New York Times Bestselling SeriesHarry Potter Series (Book 6)It's the darkest year yet for Harry Potter, J. K. Rowling's hero in the Harry Potter series",
            "quantity": 10,
            "price": "Rs. 680"
        },
        {
            "key": '002',
            "id": 2,
            "name": "Harry Potter Magical Creatures Postcard Book",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "A #1 New York Times Bestselling SeriesHarry Potter Series (Book 6)It's the darkest year yet for Harry Potter, J. K. Rowling's hero in the Harry Potter series",
            "quantity": 4,
            "price": "Rs. 750"
        },
        {
            "key": '003',
            "id": 2,
            "name": "Harry Potter and the Cursed Child",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "Harry Potter and the Cursed Child is a two-part West End stage play. It was written by Jack Thorne, based on a story by J. K. Rowling",
            "quantity": 6,
            "price": "Rs. 900"
        },
        {
            "key": '004',
            "id": 2,
            "name": "Harry Potter and The Order of the Phoenix",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic.",
            "quantity": 8,
            "price": "Rs. 1200"
        },
        {
            "key": '005',
            "id": 2,
            "name": "Harry Potter and The Goblet of Fire",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
            "quantity": 2,
            "price": "Rs. 550"
        }
    ]
}

const biographyBooksData = {
    "items": [
        {
            "key": '001',
            "id": 1,
            "name": "The Autobiography of Malcolm X: As Told to Alex Haley",
            "imageUrl": "/Images/projectImages/biograpghy/b_1.jpg",
            "shortDescription": "ONE OF TIME’S TEN MOST IMPORTANT NONFICTION BOOKS OF THE TWENTIETH CENTURYIn the searing pages of this classic autobiography, originally published in 1964, Malcolm X, the Muslim leader, firebrand, and anti-integrationist, tells the extraordinary story of his life and the growth of the Black Muslim movement. His fascinating perspective on the lies and limitations of the American Dream, and the inherent racism in a society that denies its nonwhite citizens the opportunity to dream, gives extraordinary insight into the most urgent issues of our own time. ",
            "quantity": 10,
            "price": "Rs. 378"
        },
        {
            "key": '002',
            "id": 2,
            "name": "The Autobiography of Martin Luther King, Jr.",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "With knowledge, spirit, good humor, and passion, THE AUTOBIOGRAPHY OF MARTIN LUTHER KING, JR. brings to life a remarkable man whose thoughts and actions speak to our most burning contemporary issues and still inspire the desires, hopes, and dreams of us all.Written in his own words, this history-making autobiography is Martin Luther King: the mild-mannered, inquisitive child and student who chafed under and eventually rebelled against segregation; the dedicated young minister who continually questioned the depths of his faith and the limits of his wisdom; the loving husband and father who sought to balance his family's needs with those of a growing, nationwide movement; and the reflective, world-famous leader who was fired by a vision of equality for people everywhere. Relevant and insightful, THE AUTOBIOGRAPHY OF MARTIN LUTHER KING, JR. offers King's seldom disclosed views on some of the world's greatest and most controversial figures: John F. Kennedy, Malcolm X, Lyndon B. Johnson, Mahatma Gandhi, and Richard Nixon. It also paints a rich and moving portrait of a people, a time, and a nation in the face of powerful change. Finally, it shows how everyday Americans from all walks of life confronted themselves, each other, and the burden of the past-and how their fears and courage helped shape our future.",
            "quantity": 4,
            "price": "Rs. 750"
        },
        {
            "key": '003',
            "id": 2,
            "name": "My Bondage and My Freedom",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "Ex-slave Frederick Douglass's second autobiography-written after ten years of reflection following his legal emancipation in 1846 and his break with his mentor William Lloyd Garrison-catapulted Douglass into the international spotlight as the foremost spokesman for American blacks, both freed and slave. Written during his celebrated career as a speaker and newspaper editor, My Bondage and My Freedom reveals the author of the Narrative of the Life of Frederick Douglass (1845) grown more mature, forceful, analytical, and complex with a deepened commitment to the fight for equal rights and liberties. Edited with an Introduction and Notes by John David Smith",
            "quantity": 6,
            "price": "Rs. 900"
        },
        {
            "key": '004',
            "id": 2,
            "name": "American Passage : The History of Ellis Island",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "By bringing us the inspiring and sometimes unsettling tales of Ellis Island, Vincent Cannato's American Passage helps us understand who we are as a nation. -- Walter Isaacson Never before has Ellis Island been written about with such scholarly care and historical wisdom. Highly recommended Douglas Brinkley, bestselling author of The Wilderness Warrior The remarkable saga of America's landmark port of entry, from immigration post to deportation center to mythical icon.",
            "quantity": 8,
            "price": "Rs. 1200"
        },
        {
            "key": '005',
            "id": 2,
            "name": "An Unfinished Life : John F. Kennedy, 1917-1963",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "The #1 bestseller that forever changed how we thought about JFK, published with a new epilogue in time for the 50th anniversary of Kennedy's assassination. When it was originally published in 2003, AN UNFINISHED LIFE brought to light new revelations about JFK's health, his love affairs, his brothers and father, and the path JFK would have taken in the Vietnam entanglement if he had survived. A blockbuster bestseller, the book was embraced by critics and readers as a landmark assessment of our 35thpresident. Now, in time for what promises to be remarkable media attention on Kennedy's death and legacy, AN UNFINISHED LIFE returns with a new, strikingly incisive examination by Robert Dallek in which he further assesses JFK's impact and hold on American culture.",
            "quantity": 2,
            "price": "Rs. 550"
        }
    ]
}


const sciFiBooksData = {
    "items": [
        {
            "key": '001',
            "id": 1,
            "name": "Harry Potter and the Half Blood Prince",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_1.jpg",
            "shortDescription": "A #1 New York Times Bestselling SeriesHarry Potter Series (Book 6)It's the darkest year yet for Harry Potter, J. K. Rowling's hero in the Harry Potter series",
            "quantity": 10,
            "price": "Rs. 680"
        },
        {
            "key": '002',
            "id": 2,
            "name": "Harry Potter Magical Creatures Postcard Book",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "A #1 New York Times Bestselling SeriesHarry Potter Series (Book 6)It's the darkest year yet for Harry Potter, J. K. Rowling's hero in the Harry Potter series",
            "quantity": 4,
            "price": "Rs. 750"
        },
        {
            "key": '003',
            "id": 2,
            "name": "Harry Potter and the Cursed Child",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "Harry Potter and the Cursed Child is a two-part West End stage play. It was written by Jack Thorne, based on a story by J. K. Rowling",
            "quantity": 6,
            "price": "Rs. 900"
        },
        {
            "key": '004',
            "id": 2,
            "name": "Harry Potter and The Order of the Phoenix",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic.",
            "quantity": 8,
            "price": "Rs. 1200"
        },
        {
            "key": '005',
            "id": 2,
            "name": "Harry Potter and The Goblet of Fire",
            "imageUrl": "https://amptalk-api-555fd.firebaseapp.com/images/green/green_2.jpg",
            "shortDescription": "Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
            "quantity": 2,
            "price": "Rs. 550"
        }
    ]
}

module.exports = {fictionBookData, biographyBooksData, sciFiBooksData};