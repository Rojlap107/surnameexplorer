// Comprehensive database of Indian surnames
const surnameDatabase = [
    // Original surnames
    {
        surname: "Sharma",
        origin: "Sanskrit",
        meaning: "Joy, happiness, comfort",
        caste_association: "Brahmin",
        regions: ["North India", "Nepal"],
        religions: ["Hinduism"],
        historical_significance: "Traditionally associated with scholarly and priestly duties. The surname comes from the Sanskrit word 'Sharman' meaning comfort or refuge.",
        notable_people: ["Rohit Sharma (cricketer)", "Anushka Sharma (actress)"]
    },
    
    // Additional surnames
    {
        surname: "Ahuja",
        origin: "Punjabi",
        meaning: "Descendant of Ahu",
        caste_association: "Khatri community",
        regions: ["Punjab", "Delhi", "North India"],
        religions: ["Hinduism", "Sikhism"],
        historical_significance: "A prominent Khatri clan name in Punjab with strong presence in business and trading communities.",
        notable_people: ["Govinda (actor)", "Waheeda Rehman (actress)"]
    },
    {
        surname: "Arora",
        origin: "Punjabi",
        meaning: "From the town of Aror (in modern Pakistan)",
        caste_association: "Khatri community",
        regions: ["Punjab", "Delhi", "Haryana"],
        religions: ["Hinduism", "Sikhism"],
        historical_significance: "Originated from the town of Aror (now in Sindh, Pakistan). Traditionally merchants and traders who migrated after partition.",
        notable_people: ["Malaika Arora (actress)", "Karan Arora (fashion designer)"]
    },
    {
        surname: "Bajaj",
        origin: "Punjabi",
        meaning: "Derived from 'bajwaha' (cloth trader)",
        caste_association: "Khatri community",
        regions: ["Punjab", "Rajasthan", "Delhi"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "Originally traders in cloth, the name is now prominently associated with one of India's largest business conglomerates.",
        notable_people: ["Rahul Bajaj (industrialist)", "Jamnalal Bajaj (freedom fighter and industrialist)"]
    },
    {
        surname: "Chakraborty",
        origin: "Bengali",
        meaning: "One who performs sacrificial rituals",
        caste_association: "Bengali Brahmin",
        regions: ["West Bengal", "Tripura", "Assam"],
        religions: ["Hinduism"],
        historical_significance: "A variation of Chakrabarti, traditionally designated Brahmins who conducted religious ceremonies and were scholars of sacred texts.",
        notable_people: ["Mithun Chakraborty (actor)", "Tantia Chakraborty (scholar)"]
    },
    {
        surname: "Deshmukh",
        origin: "Marathi",
        meaning: "Chief of a province",
        caste_association: "Maratha and other communities",
        regions: ["Maharashtra", "Karnataka"],
        religions: ["Hinduism"],
        historical_significance: "Historically a title given to provincial governors or administrators in the Maratha Empire, responsible for collecting revenue.",
        notable_people: ["Vilasrao Deshmukh (politician)", "Riteish Deshmukh (actor)"]
    },
    {
        surname: "Dubey",
        origin: "Sanskrit",
        meaning: "Knower of two Vedas",
        caste_association: "Brahmin",
        regions: ["Uttar Pradesh", "Bihar", "Madhya Pradesh"],
        religions: ["Hinduism"],
        historical_significance: "Traditionally referred to Brahmins who were scholars of two Vedas. Variations include Dube, Dwivedi, and Duvedi.",
        notable_people: ["Satyadev Dubey (theater director)", "Anand Dubey (musician)"]
    },
    {
        surname: "Goel",
        origin: "Hindi",
        meaning: "Derived from 'Goud' or 'Gauda'",
        caste_association: "Bania community",
        regions: ["Delhi", "Haryana", "Uttar Pradesh"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "A clan of the trading community that traditionally engaged in business, particularly in North India.",
        notable_people: ["Vijay Goel (politician)", "Savita Goel (author)"]
    },
    {
        surname: "Hegde",
        origin: "Kannada",
        meaning: "Leader or chief",
        caste_association: "Various communities in Karnataka",
        regions: ["Karnataka", "Maharashtra", "Goa"],
        religions: ["Hinduism"],
        historical_significance: "Common among various communities in Karnataka, particularly among Havyaka Brahmins and Lingayats.",
        notable_people: ["Ramakrishna Hegde (politician)", "Pooja Hegde (actress)"]
    },
    {
        surname: "Irani",
        origin: "Persian",
        meaning: "From Iran/Persia",
        caste_association: "Zoroastrian Parsi or Irani community",
        regions: ["Maharashtra", "Gujarat"],
        religions: ["Zoroastrianism", "Islam"],
        historical_significance: "Indicates Persian ancestry, used primarily by Zoroastrians who migrated from Iran to India in the 19th century, distinct from earlier Parsi immigrants.",
        notable_people: ["Boman Irani (actor)", "Smriti Irani (politician and actress)"]
    },
    {
        surname: "Jaitley",
        origin: "Punjabi",
        meaning: "Victory or victorious",
        caste_association: "Khatri community",
        regions: ["Punjab", "Delhi"],
        religions: ["Hinduism"],
        historical_significance: "A surname from the Khatri community, traditionally associated with administrative and business roles.",
        notable_people: ["Arun Jaitley (politician)", "Kabir Jaitley (author)"]
    },
    {
        surname: "Lal",
        origin: "Sanskrit/Hindi",
        meaning: "Beloved or dear",
        caste_association: "Used across various communities",
        regions: ["North India", "Bihar", "Uttar Pradesh"],
        religions: ["Hinduism"],
        historical_significance: "Often used as both a surname and middle name, particularly in North India. Signifies endearment or affection.",
        notable_people: ["Lal Bahadur Shastri (former Prime Minister)", "Bansi Lal (politician)"]
    },
    {
        surname: "Murthy",
        origin: "Telugu/Kannada",
        meaning: "Embodiment or personification",
        caste_association: "Various communities in South India",
        regions: ["Karnataka", "Andhra Pradesh", "Telangana"],
        religions: ["Hinduism"],
        historical_significance: "Common in South India, particularly among certain Brahmin communities. Often refers to the personification of a quality or deity.",
        notable_people: ["N. R. Narayana Murthy (co-founder of Infosys)", "Sudha Murty (author and philanthropist)"]
    },
    {
        surname: "Nayak",
        origin: "Sanskrit",
        meaning: "Leader or hero",
        caste_association: "Used across various communities",
        regions: ["Odisha", "Karnataka", "Maharashtra"],
        religions: ["Hinduism"],
        historical_significance: "Originally a title meaning 'leader' or 'hero', used across different regions and communities in India.",
        notable_people: ["Manohar Nayak (writer)", "Anushka Nayak (classical dancer)"]
    },
    {
        surname: "Ojha",
        origin: "Sanskrit",
        meaning: "Teacher of astronomy or priest",
        caste_association: "Brahmin",
        regions: ["Bihar", "Jharkhand", "Uttar Pradesh"],
        religions: ["Hinduism"],
        historical_significance: "Traditionally referred to Brahmins who were astrologers, teachers of astronomy, or practitioners of sacred rituals.",
        notable_people: ["Govind Ojha (historian)", "Shalini Ojha (scientist)"]
    },
    {
        surname: "Qureshi",
        origin: "Arabic",
        meaning: "From the Quraysh tribe",
        caste_association: "Muslim community",
        regions: ["Uttar Pradesh", "Bihar", "Delhi", "All across India"],
        religions: ["Islam"],
        historical_significance: "Indicates descent from the Quraysh tribe of Mecca, to which Prophet Muhammad belonged. Common among certain Muslim communities in India.",
        notable_people: ["Huma Qureshi (actress)", "Muzaffar Qureshi (poet)"]
    },
    {
        surname: "Birla",
        origin: "Rajasthani",
        meaning: "From Pilani village",
        caste_association: "Marwari Vaishya (Maheshwari)",
        regions: ["Rajasthan", "Mumbai", "Kolkata"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "One of India's most prominent business families, originating from the town of Pilani in Rajasthan. The Birla Group is among India's largest business conglomerates.",
        notable_people: ["G.D. Birla (industrialist)", "Kumar Mangalam Birla (businessman)"]
    },
    {
        surname: "Chaudhari",
        origin: "Sanskrit",
        meaning: "Holder of four (land divisions)",
        caste_association: "Used across various communities",
        regions: ["Gujarat", "Maharashtra", "Rajasthan"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "A variation of Choudhary/Chowdhury, traditionally denoting village heads, landowners or tax collectors responsible for four villages.",
        notable_people: ["Narendra Chaudhari (agricultural scientist)", "Rajesh Chaudhari (author)"]
    },
    {
        surname: "Dalal",
        origin: "Arabic/Persian",
        meaning: "Broker or middleman",
        caste_association: "Often associated with trading communities",
        regions: ["Gujarat", "Maharashtra", "Rajasthan"],
        religions: ["Hinduism", "Islam", "Jainism"],
        historical_significance: "Originally referred to those who worked as brokers or intermediaries in trade and business transactions.",
        notable_people: ["Suchitra Dalal (journalist)", "Hiten Dalal (cricketer)"]
    },
    {
        surname: "Dhaliwal",
        origin: "Punjabi",
        meaning: "From Dhaliwal village",
        caste_association: "Jat Sikh",
        regions: ["Punjab", "Haryana"],
        religions: ["Sikhism"],
        historical_significance: "A prominent Jat Sikh clan name that traces its origins to a village called Dhaliwal. Traditionally landowners and agriculturists.",
        notable_people: ["Gurbaksh Dhaliwal (writer)", "Diljit Dhaliwal (journalist)"]
    },
    {
        surname: "Mistry",
        origin: "Gujarati/Parsi",
        meaning: "Craftsman or artisan",
        caste_association: "Various communities, including Parsis",
        regions: ["Gujarat", "Maharashtra"],
        religions: ["Zoroastrianism", "Hinduism"],
        historical_significance: "Originally designated skilled artisans, craftsmen, or builders. The name gained prominence in the business world through the Shapoorji Pallonji Group.",
        notable_people: ["Cyrus Mistry (former chairman of Tata Group)", "Rohinton Mistry (author)"]
    },
    {
        surname: "Patel",
        origin: "Sanskrit",
        meaning: "Village headman or landowner",
        caste_association: "Historically associated with Koli and Kurmi communities",
        regions: ["Gujarat", "Central India"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "Often associated with agricultural landowners and village leaders. The title became a surname during British colonial rule.",
        notable_people: ["Sardar Vallabhbhai Patel (freedom fighter)", "Priti Patel (British politician)"]
    },
    {
        surname: "Khan",
        origin: "Turkic/Mongolian",
        meaning: "Leader or ruler",
        caste_association: "Not applicable (used across social groups)",
        regions: ["North India", "Pakistan", "Afghanistan"],
        religions: ["Islam", "Hinduism"],
        historical_significance: "Originally a title meaning 'leader' or 'ruler' in Turkic and Mongolian languages. Became common in South Asia with Islamic influences.",
        notable_people: ["Shah Rukh Khan (actor)", "Aamir Khan (actor)", "Imran Khan (former cricketer and politician)"]
    },
    {
        surname: "Reddy",
        origin: "Telugu",
        meaning: "King or ruler",
        caste_association: "Originally from agricultural warrior communities",
        regions: ["Andhra Pradesh", "Telangana", "Karnataka"],
        religions: ["Hinduism"],
        historical_significance: "Historically associated with rulers, landlords and warriors in southern India, particularly in the Telugu-speaking regions.",
        notable_people: ["Sania Mirza (tennis player)", "N. T. Rama Rao (actor and politician)"]
    },
    {
        surname: "Gupta",
        origin: "Sanskrit",
        meaning: "Protected or secret",
        caste_association: "Traditionally associated with Vaishya (merchant) communities",
        regions: ["North India", "Bengal"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "The name gained prominence during the Gupta Empire (320-550 CE), one of India's most prosperous periods often called the 'Golden Age'.",
        notable_people: ["Rajnish Gupta (entrepreneur)", "Dr. Sanjay Gupta (neurosurgeon and medical reporter)"]
    },
    {
        surname: "Iyer",
        origin: "Tamil",
        meaning: "Teacher or master",
        caste_association: "Tamil Brahmin (specifically Tamil-speaking Brahmins)",
        regions: ["Tamil Nadu", "Kerala"],
        religions: ["Hinduism"],
        historical_significance: "The Iyers are Tamil-speaking Brahmins, traditionally serving as priests, scholars, and teachers in South Indian temples.",
        notable_people: ["S. Srinivasa Iyer (mathematician)", "Mani Iyer (musician)"]
    },
    {
        surname: "Singh",
        origin: "Sanskrit",
        meaning: "Lion",
        caste_association: "Originally used by Rajputs, now widespread across many communities",
        regions: ["North India", "Punjab", "Rajasthan"],
        religions: ["Hinduism", "Sikhism"],
        historical_significance: "Originally a title meaning 'lion' adopted by warrior classes. In 1699, Guru Gobind Singh made it mandatory for all Sikh men to use Singh as their surname.",
        notable_people: ["Manmohan Singh (former Prime Minister)", "Harbhajan Singh (cricketer)"]
    },
    {
        surname: "Chatterjee",
        origin: "Bengali",
        meaning: "One who performs sacrifices",
        caste_association: "Bengali Brahmin",
        regions: ["West Bengal", "Bangladesh"],
        religions: ["Hinduism"],
        historical_significance: "Derived from Sanskrit 'Chattopadhyaya', the name was traditionally associated with learned Hindu Brahmins in Bengal who were scholars and priests.",
        notable_people: ["Sharmila Tagore (actress)", "Soumitra Chatterjee (actor)"]
    },
    {
        surname: "Nair",
        origin: "Malayalam",
        meaning: "Leader or warrior",
        caste_association: "Traditionally a martial and ruling class in Kerala",
        regions: ["Kerala"],
        religions: ["Hinduism"],
        historical_significance: "Historically warriors and landowners in Kerala, with a matrilineal system of inheritance. Served as military nobility in the kingdom of Travancore.",
        notable_people: ["Shobana Chandrakumar Nair (dancer and actress)", "M. T. Vasudevan Nair (author)"]
    },
    {
        surname: "Agarwal",
        origin: "Sanskrit",
        meaning: "Derived from Agroha, an ancient city",
        caste_association: "Merchant and trading community (Vaishya)",
        regions: ["Rajasthan", "North India"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "Originally from Agroha in Haryana, this mercantile community has roots dating back to the Agroha kingdom around 17th-18th century BCE.",
        notable_people: ["Anil Agarwal (businessman)", "Bhavna Agarwal (entrepreneur)"]
    },
    {
        surname: "Choudhary",
        origin: "Sanskrit",
        meaning: "Holder of four (land divisions)",
        caste_association: "Landowner/village head, used across many communities",
        regions: ["North India", "Rajasthan", "Haryana"],
        religions: ["Hinduism", "Islam"],
        historical_significance: "Originally a title for a village head, tax collector, or landlord who typically owned or managed four pieces of land.",
        notable_people: ["Mahendra Singh Choudhary (politician)", "Renuka Choudhary (politician)"]
    },
    {
        surname: "Desai",
        origin: "Sanskrit",
        meaning: "One from the country or provincial ruler",
        caste_association: "Various communities, often associated with administrative roles",
        regions: ["Gujarat", "Maharashtra"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "Originally a title given to provincial governors or administrators who collected revenue for the king.",
        notable_people: ["Morarji Desai (former Prime Minister)", "Anita Desai (author)"]
    },
    {
        surname: "Jain",
        origin: "Sanskrit",
        meaning: "Follower of Jainism",
        caste_association: "Not caste-specific, indicates religious affiliation",
        regions: ["Rajasthan", "Gujarat", "North India"],
        religions: ["Jainism"],
        historical_significance: "Indicates adherence to Jainism, one of the oldest religions in India that emphasizes non-violence and self-control.",
        notable_people: ["Sunny Jain (musician)", "Anshu Jain (business executive)"]
    },
    {
        surname: "Rao",
        origin: "Sanskrit/Dravidian",
        meaning: "King or chieftain",
        caste_association: "Used across various communities, often by ruling or warrior classes",
        regions: ["Andhra Pradesh", "Telangana", "Maharashtra", "Karnataka"],
        religions: ["Hinduism"],
        historical_significance: "Originally a royal title meaning 'king' or 'chieftain' that later became a common surname in southern India.",
        notable_people: ["P. V. Narasimha Rao (former Prime Minister)", "S. Ramanujan (mathematician)"]
    },
    {
        surname: "Malhotra",
        origin: "Punjabi",
        meaning: "Lord of the garden/property",
        caste_association: "Khatri community",
        regions: ["Punjab", "Delhi", "North India"],
        religions: ["Hinduism", "Sikhism"],
        historical_significance: "A prominent Khatri clan that traditionally engaged in trading and mercantile activities.",
        notable_people: ["Manish Malhotra (fashion designer)", "Sidharth Malhotra (actor)"]
    },
    {
        surname: "Kaur",
        origin: "Punjabi",
        meaning: "Princess",
        caste_association: "Not caste-specific, used by all Sikh women",
        regions: ["Punjab", "North India"],
        religions: ["Sikhism"],
        historical_significance: "Given to all Sikh women by Guru Gobind Singh as part of eliminating caste distinctions. It signifies dignity and equality of women.",
        notable_people: ["Harmanpreet Kaur (cricketer)", "Amrit Kaur (actress)"]
    },
    {
        surname: "Banerjee",
        origin: "Bengali",
        meaning: "Brahmin from Bandoghat",
        caste_association: "Bengali Brahmin",
        regions: ["West Bengal", "Bangladesh", "Eastern India"],
        religions: ["Hinduism"],
        historical_significance: "A prominent Bengali Brahmin surname believed to have originated from a place called Bandoghat.",
        notable_people: ["Mamata Banerjee (politician)", "Bibhutibhushan Bandyopadhyay (author)"]
    },
    {
        surname: "Chauhan",
        origin: "Sanskrit",
        meaning: "Four-armed one (reference to deity)",
        caste_association: "Rajput clan",
        regions: ["Rajasthan", "Uttar Pradesh", "Madhya Pradesh"],
        religions: ["Hinduism"],
        historical_significance: "A prominent Rajput clan that ruled parts of Northern India. Prithviraj Chauhan was one of the most famous kings from this clan who fought against Muhammad Ghori.",
        notable_people: ["Prithviraj Chauhan (medieval king)", "Anjum Chauhan (author)"]
    },
    {
        surname: "Pillai",
        origin: "Tamil/Malayalam",
        meaning: "Child or beloved one",
        caste_association: "Traditionally used by various communities in Kerala and Tamil Nadu",
        regions: ["Kerala", "Tamil Nadu"],
        religions: ["Hinduism", "Christianity"],
        historical_significance: "Originally a title of honor given by kings to distinguished individuals, later became a surname associated with landowners and administrators.",
        notable_people: ["G. D. Naidu Pillai (inventor)", "Sunny Wayne (actor)"]
    },
    {
        surname: "Menon",
        origin: "Malayalam",
        meaning: "Officer or administrator",
        caste_association: "Nair sub-group",
        regions: ["Kerala"],
        religions: ["Hinduism"],
        historical_significance: "Originally a title given to administrators and ministers in the princely states of Kerala.",
        notable_people: ["V.K. Krishna Menon (diplomat)", "V.P. Menon (civil servant)"]
    },
    {
        surname: "Kapoor",
        origin: "Punjabi",
        meaning: "Descendant of Kapa/Kapi",
        caste_association: "Khatri community",
        regions: ["Punjab", "Delhi", "North India"],
        religions: ["Hinduism"],
        historical_significance: "A prominent Punjabi Khatri surname with a strong presence in Bollywood and the Indian film industry.",
        notable_people: ["Raj Kapoor (actor/director)", "Kareena Kapoor (actress)"]
    },
    {
        surname: "Verma",
        origin: "Sanskrit",
        meaning: "Armor or shield",
        caste_association: "Used across various communities, especially Rajputs and Kayasthas",
        regions: ["Uttar Pradesh", "Bihar", "Madhya Pradesh"],
        religions: ["Hinduism"],
        historical_significance: "Originally meant 'armor' or 'protection' and was used as a title for warriors and protectors.",
        notable_people: ["Piyush Verma (author)", "Nirmal Verma (writer)"]
    },
    {
        surname: "Naidu",
        origin: "Telugu",
        meaning: "Elder or leader",
        caste_association: "Agricultural and warrior communities",
        regions: ["Andhra Pradesh", "Telangana", "Tamil Nadu"],
        religions: ["Hinduism"],
        historical_significance: "Originally a title of respect given to community leaders, later became a surname associated with landowners and village chiefs.",
        notable_people: ["Sarojini Naidu (freedom fighter and poet)", "Chandrababu Naidu (politician)"]
    },
    {
        surname: "Joshi",
        origin: "Sanskrit",
        meaning: "Astrologer or priest",
        caste_association: "Brahmin",
        regions: ["Maharashtra", "Gujarat", "North India", "Nepal"],
        religions: ["Hinduism"],
        historical_significance: "Traditionally associated with astrologers, scholars, and priests who studied the stars and calculated auspicious times for ceremonies.",
        notable_people: ["Murli Manohar Joshi (politician)", "Suhas Joshi (scientist)"]
    },
    {
        surname: "Malik",
        origin: "Arabic",
        meaning: "King or sovereign",
        caste_association: "Not caste-specific, used across communities",
        regions: ["North India", "Pakistan"],
        religions: ["Islam", "Hinduism", "Sikhism"],
        historical_significance: "Originally an Arabic title meaning 'king' or 'chieftain', adopted as a surname in the Indian subcontinent through Islamic influence.",
        notable_people: ["Anu Malik (music composer)", "Zayn Malik (singer)"]
    },
    {
        surname: "Pandit",
        origin: "Sanskrit",
        meaning: "Scholar or learned person",
        caste_association: "Brahmin (especially Kashmiri Brahmins)",
        regions: ["Kashmir", "North India"],
        religions: ["Hinduism"],
        historical_significance: "A title given to learned people and scholars, particularly associated with Kashmiri Brahmins after their migration from Kashmir.",
        notable_people: ["Vijaya Lakshmi Pandit (diplomat)", "Rajinder Pandit (author)"]
    },
    {
        surname: "Mukherjee",
        origin: "Bengali",
        meaning: "Chief or leader",
        caste_association: "Bengali Brahmin",
        regions: ["West Bengal", "Eastern India"],
        religions: ["Hinduism"],
        historical_significance: "One of the oldest Bengali Brahmin surnames, traditionally associated with scholarly pursuits and administrative positions.",
        notable_people: ["Pranab Mukherjee (former President of India)", "Hrishikesh Mukherjee (filmmaker)"]
    },
    {
        surname: "Das",
        origin: "Sanskrit",
        meaning: "Servant or devotee",
        caste_association: "Used across various communities",
        regions: ["Bengal", "Odisha", "Assam", "Eastern India"],
        religions: ["Hinduism"],
        historical_significance: "Originally indicated devotion to a deity or guru, implying 'servant of God'. Common among various communities in eastern India.",
        notable_people: ["Jatin Das (painter)", "Chittaranjan Das (freedom fighter)"]
    },
    {
        surname: "Parekh",
        origin: "Gujarati",
        meaning: "Stone carver or examiner",
        caste_association: "Traditionally associated with diamond and jewel traders",
        regions: ["Gujarat", "Maharashtra"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "Originally referred to those who examined and appraised jewelry and precious stones. Later became associated with trading communities.",
        notable_people: ["Deepak Parekh (banker)", "Asha Parekh (actress)"]
    },
    {
        surname: "Chowdhury",
        origin: "Bengali/Sanskrit",
        meaning: "Holder of four (land divisions)",
        caste_association: "Used across various communities",
        regions: ["Bengal", "Bangladesh", "Eastern India"],
        religions: ["Hinduism", "Islam"],
        historical_significance: "Similar to Choudhary, it was a title for landowners or village heads who typically owned or managed four pieces of land.",
        notable_people: ["Renuka Chowdhury (politician)", "Adhir Ranjan Chowdhury (politician)"]
    },
    {
        surname: "Mehra",
        origin: "Punjabi",
        meaning: "Chief or leader",
        caste_association: "Khatri community",
        regions: ["Punjab", "Delhi", "North India"],
        religions: ["Hinduism", "Sikhism"],
        historical_significance: "A clan of the Khatri community that traditionally engaged in administrative, scholarly, and trading professions.",
        notable_people: ["Rakeysh Omprakash Mehra (filmmaker)", "Vijay Mehra (cricketer)"]
    },
    
    // Added from Wikipedia
    {
        surname: "Acharya",
        origin: "Sanskrit",
        meaning: "Teacher or scholar",
        caste_association: "Brahmin",
        regions: ["Gujarat", "Karnataka", "Nepal", "Bengal"],
        religions: ["Hinduism"],
        historical_significance: "Traditionally referred to teachers of sacred knowledge and spiritual guides. The term comes from 'achar' meaning conduct, implying someone who teaches proper conduct and ethics.",
        notable_people: ["Nandalal Acharya (scholar)", "Dwarika Prasad Acharya (politician)"]
    },
    {
        surname: "Bhattacharya",
        origin: "Sanskrit/Bengali",
        meaning: "Learned Brahmin who teaches",
        caste_association: "Bengali Brahmin",
        regions: ["West Bengal", "Assam", "Tripura"],
        religions: ["Hinduism"],
        historical_significance: "Denotes a Brahmin scholar who performs religious ceremonies and teaches Vedic texts. Highly respected in Bengali communities for their scholarly tradition.",
        notable_people: ["Sukumar Bhattacharya (philosopher)", "Mamata Bhattacharya (classical dancer)"]
    },
    {
        surname: "Chopra",
        origin: "Punjabi",
        meaning: "From Chopa/Chopar region",
        caste_association: "Khatri",
        regions: ["Punjab", "Haryana", "Delhi"],
        religions: ["Hinduism", "Sikhism"],
        historical_significance: "Belongs to the influential Khatri community that traditionally engaged in administrative and commercial activities. The name may be derived from an ancestral village.",
        notable_people: ["Priyanka Chopra (actress)", "Deepak Chopra (author and alternative medicine advocate)"]
    },
    {
        surname: "Gandhi",
        origin: "Gujarati",
        meaning: "Perfume seller or grocer",
        caste_association: "Bania (merchant) community",
        regions: ["Gujarat", "Maharashtra", "Rajasthan"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "Originally referred to merchants who dealt in groceries and perfumes. Gained worldwide recognition through Mahatma Gandhi, though not all Gandhis are related.",
        notable_people: ["Mahatma Gandhi (freedom fighter)", "Indira Gandhi (former Prime Minister)"]
    },
    {
        surname: "Khanna",
        origin: "Punjabi",
        meaning: "Quarter or segment",
        caste_association: "Khatri",
        regions: ["Punjab", "Delhi", "North India"],
        religions: ["Hinduism", "Sikhism"],
        historical_significance: "A prominent Khatri clan with strong presence in business, entertainment, and politics in North India.",
        notable_people: ["Rajesh Khanna (actor)", "Vinod Khanna (actor and politician)"]
    },
    {
        surname: "Kumar",
        origin: "Sanskrit",
        meaning: "Prince or boy",
        caste_association: "Used across various communities",
        regions: ["All across India"],
        religions: ["Hinduism", "Jainism", "Buddhism"],
        historical_significance: "Originally a title meaning 'prince' or 'youth', now widely used as both a first name and surname across India. Often adopted as a surname by those who wanted to break away from caste-identifying surnames.",
        notable_people: ["Akshay Kumar (actor)", "Dilip Kumar (actor)"]
    },
    {
        surname: "Nehru",
        origin: "Kashmiri",
        meaning: "One who lives near a canal (nehar)",
        caste_association: "Kashmiri Brahmin (Pandit)",
        regions: ["Kashmir", "Uttar Pradesh"],
        religions: ["Hinduism"],
        historical_significance: "Gained prominence through the Nehru-Gandhi political family that has produced three Prime Ministers of India. Originally Kashmiri Pandits who moved to Uttar Pradesh.",
        notable_people: ["Jawaharlal Nehru (first Prime Minister of India)", "Motilal Nehru (freedom fighter)"]
    },
    {
        surname: "Shah",
        origin: "Persian",
        meaning: "King or monarch",
        caste_association: "Prominent among Jain and Hindu merchant communities",
        regions: ["Gujarat", "Maharashtra", "Rajasthan"],
        religions: ["Jainism", "Hinduism", "Islam"],
        historical_significance: "Derived from Persian word for 'king', commonly adopted by merchant communities in western India, particularly among Jains and certain Hindu groups.",
        notable_people: ["Amit Shah (politician)", "Naseeruddin Shah (actor)"]
    },
    {
        surname: "Tata",
        origin: "Parsi",
        meaning: "Father (in some interpretations)",
        caste_association: "Parsi community",
        regions: ["Maharashtra", "Gujarat"],
        religions: ["Zoroastrianism"],
        historical_significance: "Associated with one of India's most prominent industrial families who founded the Tata Group, one of India's largest conglomerates.",
        notable_people: ["Jamsetji Tata (founder of Tata Group)", "Ratan Tata (industrialist)"]
    },
    {
        surname: "Bhatt",
        origin: "Sanskrit",
        meaning: "Scholar or learned man",
        caste_association: "Brahmin (especially in Gujarat and Kashmir)",
        regions: ["Gujarat", "Kashmir", "Rajasthan", "Uttarakhand"],
        religions: ["Hinduism"],
        historical_significance: "Derived from 'Bhatta' meaning 'scholar', traditionally used by learned Brahmins who specialized in Sanskrit and philosophy.",
        notable_people: ["Alia Bhatt (actress)", "Mahesh Bhatt (filmmaker)"]
    },
    {
        surname: "Kulkarni",
        origin: "Marathi",
        meaning: "Accountant of a village",
        caste_association: "Brahmin (especially Deshastha Brahmin)",
        regions: ["Maharashtra", "Karnataka"],
        religions: ["Hinduism"],
        historical_significance: "Historically designated the village accountant and record-keeper. Kulkarnis maintained land and revenue records and were important village officials.",
        notable_people: ["Sonali Kulkarni (actress)", "D. K. Kulkarni (mathematician)"]
    },
    {
        surname: "Yadav",
        origin: "Sanskrit",
        meaning: "Descendant of Yadu (a mythological king)",
        caste_association: "Traditionally pastoral and agricultural communities",
        regions: ["Uttar Pradesh", "Bihar", "Haryana", "Rajasthan"],
        religions: ["Hinduism"],
        historical_significance: "Claim descent from the Yadu dynasty, to which Lord Krishna belonged. Traditionally associated with cattle herding and agriculture.",
        notable_people: ["Mulayam Singh Yadav (politician)", "Surya Kumar Yadav (cricketer)"]
    },
    {
        surname: "Bose",
        origin: "Bengali",
        meaning: "A specific Kayastha clan name",
        caste_association: "Kayastha (traditional scribes and administrators)",
        regions: ["West Bengal", "Bangladesh"],
        religions: ["Hinduism"],
        historical_significance: "A prominent Bengali Kayastha surname. The Boses were traditionally writers, administrators, and intellectuals in Bengal.",
        notable_people: ["Subhas Chandra Bose (freedom fighter)", "Satyendranath Bose (physicist)"]
    },
    {
        surname: "Shetty",
        origin: "Tulu/Kannada",
        meaning: "Leader or elder",
        caste_association: "Bunt community (landlords of Tulu Nadu)",
        regions: ["Karnataka", "Kerala", "Maharashtra"],
        religions: ["Hinduism"],
        historical_significance: "Originally landlords and warriors from the coastal Karnataka region. Many migrated to Mumbai and became successful entrepreneurs.",
        notable_people: ["Shilpa Shetty (actress)", "Sunil Shetty (actor)"]
    },
    {
        surname: "Saxena",
        origin: "Sanskrit",
        meaning: "Related to the Saksena region",
        caste_association: "Kayastha",
        regions: ["Uttar Pradesh", "Bihar", "Madhya Pradesh"],
        religions: ["Hinduism"],
        historical_significance: "A prominent Kayastha surname. Kayasthas traditionally served as scribes, administrators, and record-keepers in various Indian kingdoms.",
        notable_people: ["Sharmila Saxena (author)", "Vivek Saxena (entrepreneur)"]
    },
    {
        surname: "Mittal",
        origin: "Sanskrit/Hindi",
        meaning: "Friend or friendly",
        caste_association: "Agarwal community (mercantile)",
        regions: ["Rajasthan", "Haryana", "Punjab"],
        religions: ["Hinduism", "Jainism"],
        historical_significance: "A clan of the Agarwal community, traditionally engaged in business and trading. In recent decades, associated with global steel and telecom industries.",
        notable_people: ["Lakshmi Mittal (steel magnate)", "Sunil Mittal (telecom entrepreneur)"]
    },
    {
        surname: "Deshpande",
        origin: "Marathi",
        meaning: "Provincial governor or district administrator",
        caste_association: "Brahmin (especially Deshastha Brahmin)",
        regions: ["Maharashtra", "Karnataka"],
        religions: ["Hinduism"],
        historical_significance: "Historically designated a high-ranking official who administered a 'desh' (province or district) under various Maratha rulers.",
        notable_people: ["P. L. Deshpande (author and humorist)", "Sudha Murty (née Deshpande, philanthropist)"]
    },
    {
        surname: "Patil",
        origin: "Marathi",
        meaning: "Village headman or chieftain",
        caste_association: "Used across various communities in Maharashtra",
        regions: ["Maharashtra", "Karnataka", "Goa"],
        religions: ["Hinduism"],
        historical_significance: "Similar to Patel, it was a title given to village headmen who were responsible for revenue collection and administration at the village level.",
        notable_people: ["Pratibha Patil (former President of India)", "Smita Patil (actress)"]
    }
];