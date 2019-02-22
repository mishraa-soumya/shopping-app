const serverPath="http://localhost:3001";
const fictionBookData = {
    "items": [
        {
            "key": '001',
            "id": "F1",
            "name": "Harry Potter and the Half Blood Prince",
            "imageUrl": `${serverPath}/projectImages/fantasy/f_1.jpg`,
            "shortDescription": "A #1 New York Times Bestselling SeriesHarry Potter Series (Book 6)It's the darkest year yet for Harry Potter, J. K. Rowling's hero in the Harry Potter series",
            "quantity": 10,
            "price": "Rs. 680"
        },
        {
            "key": '002',
            "id": "F2",
            "name": "Harry Potter Magical Creatures Postcard Book",
            "imageUrl": `${serverPath}/projectImages/fantasy/Harry_Potter_Magical_Creatures_Postcard_Book.jpg`,
            "shortDescription": "A #1 New York Times Bestselling SeriesHarry Potter Series (Book 6)It's the darkest year yet for Harry Potter, J. K. Rowling's hero in the Harry Potter series",
            "quantity": 4,
            "price": "Rs. 750"
        },
        {
            "key": '003',
            "id": "F3",
            "name": "Harry Potter and the Sorcerer's Stone",
            "imageUrl": `${serverPath}/projectImages/fantasy/f_3.jpg`,
            "shortDescription": "Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility. All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley - a great big swollen spoiled bully. ",
            "quantity": 6,
            "price": "Rs. 900"
        },
        {
            "key": '004',
            "id": "F4",
            "name": "Harry Potter and The Order of the Phoenix",
            "imageUrl": `${serverPath}/projectImages/fantasy/Harry_Potter.jpg`,
            "shortDescription": "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic.",
            "quantity": 8,
            "price": "Rs. 1200"
        },
        {
            "key": '005',
            "id": "F5",
            "name": "Harry Potter and The Goblet of Fire",
            "imageUrl": `${serverPath}/projectImages/fantasy/f_5.jpg`,
            "shortDescription": "Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
            "quantity": 2,
            "price": "Rs. 550"
        },
        {
            "key": '006',
            "id": "F6",
            "name": "Harry Potter and the Deathly Hallows",
            "imageUrl": `${serverPath}/projectImages/fantasy/f_6.jpg`,
            "shortDescription": "His hand closed automatically around the fake Horcrux, but in spite of everything, in spite of the dark and twisting path he saw stretching ahead for himself, in spite of the final meeting with Voldemort he knew must come, whether in a month, in a year, or in ten, he felt his heart lift at the thought that there was still one last golden day of peace left to enjoy with Ron and Hermione.' With these words Harry Potter and the Half-Blood Prince draws to a close. And here, in this seventh and final book, Harry discovers what fate truly has in store for him as he inexorably makes his way to that final meeting with Voldemort. In this thrilling climax to the phenomenally bestselling series, J.K. Rowling will reveal all to her eagerly waiting readers.",
            "quantity": 10,
            "price": "Rs. 680"
        },
        {
            "key": '007',
            "id": "F7",
            "name": "A Game of Thrones (A Song of Ice and Fire, Book 1)",
            "imageUrl": `${serverPath}/projectImages/fantasy/f_7.jpg`,
            "shortDescription": "NOW THE ACCLAIMED HBO SERIES GAME OF THRONESNominated as one of America’s best-loved novels by PBS’s The Great American ReadFrom a master of contemporary fantasy comes the first novel of a landmark series unlike any you’ve ever read before. With A Game of Thrones, George R. R. Martin has launched a genuine masterpiece, bringing together the best the genre has to offer. Mystery, intrigue, romance, and adventure fill the pages of this magnificent saga, the first volume in an epic series sure to delight fantasy fans everywhere.",
            "quantity": 4,
            "price": "Rs. 750"
        },
        {
            "key": '008',
            "id": "F8",
            "name": "Harry Potter and the Prisoner of Azkaban",
            "imageUrl": `${serverPath}/projectImages/fantasy/f_8.jpg`,
            "shortDescription": "Another thrilling year at Hogwarts is followed by yet another awful stay with the Dursleys. When he mistakenly casts a magic spell on one of their guests, Harry runs away and ends up spending the summer at the Leaky Cauldron Inn. His third year at Hogwarts brings more perilous adventures when an escaped convict tries to track him down.",
            "quantity": 6,
            "price": "Rs. 900"
        },
        {
            "key": '009',
            "id": "F9",
            "name": "Harry Potter and the Chamber of Secrets",
            "imageUrl": `${serverPath}/projectImages/fantasy/f_9.jpg`,
            "shortDescription": "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike.And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockhart, a spirit named Moaning Myrtle who haunts the girls' bathroom, and the unwanted attentions of Ron Weasley's younger sister, Ginny.But each of these seem minor annoyances when the real trouble begins, and someone - or something - starts turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever?",
            "quantity": 8,
            "price": "Rs. 1200"
        },
        {
            "key": '010',
            "id": "F10",
            "name": "The Return of the King : Being TheThird Part of the Lord of the Rings",
            "imageUrl": `${serverPath}/projectImages/fantasy/f_10.jpg`,
            "shortDescription": "The third volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS.One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them As the Shadow of Mordor grows across the land, the Companions of the Ring have become involved in separate adventures. Aragorn, revealed as the hidden heir of the ancient Kings of the West, has joined with the Riders of Rohan against the forces of Isengard, and takes part in the desperate victory of the Hornburg. Merry and Pippin, captured by Orcs, escape into Fangorn Forest and there encounter the Ents. Gandalf has miraculously returned and defeated the evil wizard, Saruman.",
            "quantity": 2,
            "price": "Rs. 550"
        }
    ]
}

const biographyBooksData = {
    "items": [
        {
            "key": '001',
            "id": "B1",
            "name": "The Autobiography of Malcolm X: As Told to Alex Haley",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_1.jpg`,
            "shortDescription": "ONE OF TIME’S TEN MOST IMPORTANT NONFICTION BOOKS OF THE TWENTIETH CENTURYIn the searing pages of this classic autobiography, originally published in 1964, Malcolm X, the Muslim leader, firebrand, and anti-integrationist, tells the extraordinary story of his life and the growth of the Black Muslim movement. His fascinating perspective on the lies and limitations of the American Dream, and the inherent racism in a society that denies its nonwhite citizens the opportunity to dream, gives extraordinary insight into the most urgent issues of our own time. ",
            "quantity": 10,
            "price": "Rs. 378"
        },
        {
            "key": '002',
            "id": "B2",
            "name": "The Autobiography of Martin Luther King, Jr.",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_2.jpg`,
            "shortDescription": "With knowledge, spirit, good humor, and passion, THE AUTOBIOGRAPHY OF MARTIN LUTHER KING, JR. brings to life a remarkable man whose thoughts and actions speak to our most burning contemporary issues and still inspire the desires, hopes, and dreams of us all.Written in his own words, this history-making autobiography is Martin Luther King: the mild-mannered, inquisitive child and student who chafed under and eventually rebelled against segregation; the dedicated young minister who continually questioned the depths of his faith and the limits of his wisdom; the loving husband and father who sought to balance his family's needs with those of a growing, nationwide movement; and the reflective, world-famous leader who was fired by a vision of equality for people everywhere. ",
            "quantity": 4,
            "price": "Rs. 750"
        },
        {
            "key": '003',
            "id": "B3",
            "name": "My Bondage and My Freedom",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_3.jpg`,
            "shortDescription": "Ex-slave Frederick Douglass's second autobiography-written after ten years of reflection following his legal emancipation in 1846 and his break with his mentor William Lloyd Garrison-catapulted Douglass into the international spotlight as the foremost spokesman for American blacks, both freed and slave. Written during his celebrated career as a speaker and newspaper editor, My Bondage and My Freedom reveals the author of the Narrative of the Life of Frederick Douglass (1845) grown more mature, forceful, analytical, and complex with a deepened commitment to the fight for equal rights and liberties. Edited with an Introduction and Notes by John David Smith",
            "quantity": 6,
            "price": "Rs. 900"
        },
        {
            "key": '004',
            "id": "B4",
            "name": "American Passage : The History of Ellis Island",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_4.jpg`,
            "shortDescription": "By bringing us the inspiring and sometimes unsettling tales of Ellis Island, Vincent Cannato's American Passage helps us understand who we are as a nation. -- Walter Isaacson Never before has Ellis Island been written about with such scholarly care and historical wisdom. Highly recommended Douglas Brinkley, bestselling author of The Wilderness Warrior The remarkable saga of America's landmark port of entry, from immigration post to deportation center to mythical icon.",
            "quantity": 8,
            "price": "Rs. 1200"
        },
        {
            "key": '005',
            "id": "B5",
            "name": "An Unfinished Life : John F. Kennedy, 1917-1963",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_5.jpg`,
            "shortDescription": "The #1 bestseller that forever changed how we thought about JFK, published with a new epilogue in time for the 50th anniversary of Kennedy's assassination. When it was originally published in 2003, AN UNFINISHED LIFE brought to light new revelations about JFK's health, his love affairs, his brothers and father, and the path JFK would have taken in the Vietnam entanglement if he had survived. A blockbuster bestseller, the book was embraced by critics and readers as a landmark assessment of our 35thpresident. Now, in time for what promises to be remarkable media attention on Kennedy's death and legacy, AN UNFINISHED LIFE returns with a new, strikingly incisive examination by Robert Dallek in which he further assesses JFK's impact and hold on American culture.",
            "quantity": 2,
            "price": "Rs. 550"
        },
        {
            "key": '006',
            "id": "B6",
            "name": "Wild : From Lost to Found on the Pacific Crest Trail",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_6.jpg`,
            "shortDescription": "#1 NATIONAL BESTSELLER At twenty-two, Cheryl Strayed thought she had lost everything. In the wake of her mother s death, her family scattered and her own marriage was soon destroyed. Four years later, with nothing more to lose, she made the most impulsive decision of her life. With no experience or training, driven only by blind will, she would hike more than a thousand miles of the Pacific Crest Trail from the Mojave Desert through California and Oregon to Washington State and she would do it alone. Told with suspense and style, sparkling with warmth and humor, Wild powerfully captures the terrors and pleasures of one young woman forging ahead against all odds on a journey that maddened, strengthened, and ultimately healed her. NOW A MAJOR MOTION PICTURE One of the Best Books of the Year: NPR, The Boston Globe , Entertainment Weekly, Vogue, St. Louis Dispatch",
            "quantity": 10,
            "price": "Rs. 378"
        },
        {
            "key": '007',
            "id": "B7",
            "name": "A Sand County Almanac (Outdoor Essays & Reflections)",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_7.jpg`,
            "shortDescription": "The environmental classic that redefined the way we think about the natural world—an urgent call for preservation that’s more timely than ever. “We can place this book on the shelf that holds the writings of Thoreau and John Muir.”—San Francisco Chronicle These astonishing portraits of the natural world explore the breathtaking diversity of the unspoiled American landscape—the mountains and the prairies, the deserts and the coastlines. Conjuring up one extraordinary vision after another, Aldo Leopold takes readers with him on the road and through the seasons on a fantastic tour of our priceless natural resources, explaining the destructive effects humankind has had on the land and issuing a bold challenge to protect the world we love.",
            "quantity": 4,
            "price": "Rs. 750"
        },
        {
            "key": '008',
            "id": "B8",
            "name": "Into Thin Air : A Personal Account of the Mt. Everest Disaster",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_8.jpg`,
            "shortDescription": "National Bestseller A bank of clouds was assembling on the not-so-distant horizon, but journalist-mountaineer Jon Krakauer, standing on the summit of Mt. Everest, saw nothing that suggested that a murderous storm was bearing down. He was wrong. The storm, which claimed five lives and left countless more--including Krakauer's--in guilt-ridden disarray, would also provide the impetus for Into Thin Air , Krakauer's epic account of the May 1996 disaster. By writing Into Thin Air , Krakauer may have hoped to exorcise some of his own demons and lay to rest some of the painful questions that still surround the event. He takes great pains to provide a balanced picture of the people and events he witnessed and gives due credit to the tireless and dedicated Sherpas.",
            "quantity": 6,
            "price": "Rs. 900"
        },
        {
            "key": '009',
            "id": "B9",
            "name": "Merle's Door - Lessons From A Freethinking Dog",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_9.jpg`,
            "shortDescription": "Now including a wonderful new photo insert chronicling Merle’s life, this national bestseller explores the relationship between humans and dogs. How would dogs live if they were free? Would they stay with their human friends? Merle and Ted found each other in the Utah desert— Merle was living wild and Ted was looking for a pup to keep him company. As their bond grew, Ted taught Merle how to live around wildlife, and Merle taught Ted about the benefits of letting a dog make his own decisions. Using the latest in wolf research and exploring issues of animal consciousness and leadership and the origins of the human-dog relationship, Ted Kerasote takes us on the journey he and Merle shared. As much a love story as a story of independence and partnership, Merle’s Door is tender, funny, and ultimately illuminating.",
            "quantity": 8,
            "price": "Rs. 1200"
        },
        {
            "key": '010',
            "id": "B10",
            "name": "Soul Surfer: A True Story of Faith, Family, and Fighting to Get Back on the Board",
            "imageUrl": `${serverPath}/projectImages/biograpghy/b_10.jpg`,
            "shortDescription": "In this moving personal account of faith and fortitude, internationally ranked surfer Bethany Hamilton tells how she survived a shark attack that cost her arm--but not her spirit.Soul Surfer is a moving account of Bethany’s life as a young surfer, her recovery after the attack, the adjustments she’s made to her unique surfing style, her unprecedented bid for a top showing in the World Surfing Championships, and, most fundamentally, her belief in God. It is a story of girl power and spiritual grit that shows the body is no more essential to surfing—perhaps even less so—than the soul.",
            "quantity": 2,
            "price": "Rs. 550"
        }
    ]
}


const sciFiBooksData = {
    "items": [
        {
            "key": '001',
            "id": "S1",
            "name": "Armageddon : The Cosmic Battle of the Ages",
            "imageUrl": `${serverPath}/projectImages/scifi/s_1.jpg`,
            "shortDescription": "The scattered Tribulation Force is drawn inexorably toward the Middle East, as are all the armies of the world, when human history culminates in the battle of the ages. During the last year of the Great Tribulation, safe houses are no longer safe, and the cast of characters dramatically changes. By the time of the war of the great day of God the Almighty, the globe has become a powder keg of danger. Except those already in Petra, everyone has been forced to relocate as Antichrist ratchets up the pressure in the world's most treacherous game. Who will be left standing when the battle leaves the Tribulation Force on the brink of the end of time and the Glorious Appearing?",
            "quantity": 10,
            "price": "Rs. 680"
        },
        {
            "key": '002',
            "id": "S2",
            "name": "Dark Force Rising",
            "imageUrl": `${serverPath}/projectImages/scifi/s_2.jpg`,
            "shortDescription": "The dying Empire's most cunning and ruthless warlord--Grand Admiral Thrawn--has taken command of the remnants of the Imperial fleet and launched a massive campaign aimed at the New Republic's destruction. With the aid of unimaginable weapons long hidden away by the Emperor on a backwater planet, Thrawn plans to turn the tide of battle, overwhelm the New Republic, and impose his iron rule throughout the galaxy. Meanwhile, Han and Lando Calrissian race against time to find proof of treason inside the highest Republican Council--only to discover instead a ghostly fleet of warships that could bring doom to their friends and victory to their enemies. Yet most dangerous of all is a new Dark Jedi, risen from the ashes of a shrouded past, consumed by bitterness... and scheming to corrupt Luke Skywalker to the Dark Side.",
            "quantity": 4,
            "price": "Rs. 750"
        },
        {
            "key": '003',
            "id": "S3",
            "name": "Heir to the Empire",
            "imageUrl": `${serverPath}/projectImages/scifi/s_3.jpg`,
            "shortDescription": "It's five years afterReturn of the Jedi:the Rebel Alliance has destroyed the Death Star, defeated Darth Vader and the Emperor, and driven out the remnants of the old Imperial Starlfleet to a distant corner of the galaxy. Princess Leia and Han Solo are married and expecting Jedi Twins. And Luke Skywalker has become the first in a long-awaited line of Jedi Knights.",
            "quantity": 6,
            "price": "Rs. 900"
        },
        {
            "key": '004',
            "id": "S4",
            "name": "2001 - Space Odyssey 2001",
            "imageUrl": `${serverPath}/projectImages/scifi/s_4.jpg`,
            "shortDescription": "THE CLASSIC SCIENCE FICTION NOVEL THAT CHANGED THE WAY WE LOOKED AT THE STARS AND OURSELVES From the savannas of Africa at the dawn of mankind to the rings of Saturn as man ventures to the outer rim of our solar system, 2001: A Space Odyssey is a journey unlike any other. This allegory about humanity's exploration of their universe, and the universe's reaction to humanity was the basis for director Stanley Kubrick's immortal film, and lives on as a hallmark achievement in storytelling.",
            "quantity": 8,
            "price": "Rs. 1200"
        },
        {
            "key": '005',
            "id": "S5",
            "name": "Blue Mars",
            "imageUrl": `${serverPath}/projectImages/scifi/s_5.jpg`,
            "shortDescription": "On the brink of completing the terraforming effort on Mars, colonists find their work complicated by a crisis on Earth, new colonization projects on Jupiter and Saturn, and the onset of a Martian ice age.Yet what the Sisterhood doesn't know is that the child Jessica is carrying is not the girl they are expecting, but a boy. Jessica's act of disobedience is an act of love her attempt to provide her Duke with a male heir to House Atreides but an act that, when discovered, could kill both mother and baby. Like the Bene Gesserit, Shaddam Corrino is also concerned with making a plan for the future securing his legacy. Blinded by his need for power, the Emperor will launch a plot against Dune, the only natural source of true spice.",
            "quantity": 2,
            "price": "Rs. 550"
        },
        {
            "key": '006',
            "id": "S6",
            "name": "Centaur Aisle",
            "imageUrl": `${serverPath}/projectImages/scifi/s_6.jpg`,
            "shortDescription": "Dor agreed to act as King of Xanth so long as Trent was gone for a week. But the weeks passed and Trent did not return. Dor knew he had to rescue his king but with no magic powers, how could it be done.Meanwhile, Duke Leto's consort, the beautiful Lady Jessica, obeying the orders of her superiors in the Bene Gesserit Sisterhood, has conceived a child that the Sisterhood intends to be the penultimate step in the creation of an all-powerful being.If he succeeds, his madness will result in a cataclysmic tragedy not even he foresees: the end of space travel, the Imperium, and civilization itself. With Duke Leto and other renegades and revolutionaries fighting to stem the tide of darkness that threatens to engulf their universe, the stage is set for a showdown unlike any seen before. ",
            "quantity": 10,
            "price": "Rs. 680"
        },
        {
            "key": '007',
            "id": "S7",
            "name": "Dune : House Corrino",
            "imageUrl": `${serverPath}/projectImages/scifi/s_7.jpg`,
            "shortDescription": "The triumphant conclusion to the blockbuster trilogy that made science fiction history! InDune: House CorrinoBrian Herbert and Kevin J. Anderson bring us the magnificent final chapter in the unforgettable saga begun inDune: House Atreidesand continued inDune: House Harkonnen. Here nobles and commoners, soldiers and slaves, wives and courtesans shape the amazing destiny of a tumultuous universe. An epic saga of love and war, crime and politics, religion and revolution, this magnificent novel is a fitting conclusion to a great science fiction trilogy ... and an invaluable addition to the thrilling world of Frank Herbert's immortalDune. Dune: House Corrino Fearful of losing his precarious hold on the Golden Lion Throne, Shaddam IV, Emperor of a Million Worlds, has devised a radical scheme to develop an alternative to melange, the addictive spice that binds the Imperium together and that can be found only on the desert world of Dune.",
            "quantity": 4,
            "price": "Rs. 750"
        },
        {
            "key": '008',
            "id": "S8",
            "name": "Endymion",
            "imageUrl": `${serverPath}/projectImages/scifi/s_8.jpg`,
            "shortDescription": "A multifaceted tale of the far future picks up where the Hugo Award-winning Hyperion left off, bringing readers to a richly imaginative world of technological achievement, excitement, fear, love, and triumph.In subterranean labs on the machine planet Ix, cruel Tleilaxu overlords use slaves and prisoners as part of a horrific plan to manufacture a synthetic form of melange known as amal. If amal can supplant the spice from Dune, it will give Shaddam what he seeks: absolute power. But Duke Leto Atreides, grief-stricken yet unbowed by the tragic death of his son Victor, determined to restore the honor and prestige of his House, has his own plans for Ix. He will free the Ixians from their oppressive conquerors and restore his friend Prince Rhombur, injured scion of the disgraced House Vernius, to his rightful place as Ixian ruler. It is a bold and risky venture, for House Atreides has limited military resources and many ruthless enemies, including the sadistic Baron Harkonnen, despotic master of Dune.",
            "quantity": 6,
            "price": "Rs. 900"
        },
        {
            "key": '009',
            "id": "S9",
            "name": "Have Space Suit - Will Travel",
            "imageUrl": `${serverPath}/projectImages/scifi/s_9.jpg`,
            "shortDescription": "A classic novel from the mind of the storyteller who captures the imagination of readers from around the world, and across two generations First prize in the Skyway Soap slogan contest was an all-expenses-paid trip to the Moon. The consolation prize was an authentic space suit, and when scientifically minded high school senior Kip Russell won it, he knew for certain he would use it one day to make a sojourn of his own to the stars. But one day comes sooner than he thinks when he tries on the suit in his backyard -- and finds himself worlds away, a prisoner aboard a space pirate's ship, and heading straight for what could be his final destination",
            "quantity": 8,
            "price": "Rs. 1200"
        },
        {
            "key": '010',
            "id": "S10",
            "name": "2061 : Odyssey Three",
            "imageUrl": `${serverPath}/projectImages/scifi/s_10.jpg`,
            "shortDescription": "Arthur C. Clark, creator of one of the world's best-loved science fiction tales, revisits the most famous future ever imagined in this NEW YORK TIMES bestseller, as two expeditions into space become inextricably tangled. Heywood Floyd, survivor of two previous encounters with the mysterious monloiths, must again confront Dave Bowman, HAL, and an alien race that has decided that Mankind is to play a part in the evolution of the galaxy whether it wishes to or not.",
            "quantity": 2,
            "price": "Rs. 550"
        }
    ]
}

module.exports = {fictionBookData, biographyBooksData, sciFiBooksData};