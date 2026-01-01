import { TestSegment } from './types';

// Curated data based on the provided text
export const TEST_DATA: TestSegment[] = [
  {
    id: "intro",
    title: "Introduction",
    type: "intro",
    transcriptText: "What's going on test takers? My name is Josh from TST Prep, and this is a brand new TOEFL listening practice test. The test is changing on January 21st, 2026. This practice test includes the new tasks like Listen and Choose, short conversations, and announcements. I'll guide you through it. Good luck!",
    speakerType: "male",
    questions: []
  },
  // Module 1 - Discrete Questions
  {
    id: "m1-q1",
    title: "Listen and Choose - Question 1",
    type: "discrete",
    transcriptText: "The deadline's coming up sooner than I expected.",
    speakerType: "female",
    questions: [{
      id: 1,
      questionText: "Choose the best response:",
      options: [
        { label: "A", text: "The printer should be fixed by tomorrow." },
        { label: "B", text: "The new manager is waiting." },
        { label: "C", text: "I haven't seen the agenda yet." },
        { label: "D", text: "Then we'd better get started tonight." }
      ],
      correctAnswerIndex: 3,
      explanation: "The speaker is expressing urgency about a deadline. Option D ('Then we'd better get started tonight') suggests an action to meet that urgent deadline."
    }]
  },
  {
    id: "m1-q2",
    title: "Listen and Choose - Question 2",
    type: "discrete",
    transcriptText: "Looks like the meeting's running late.",
    speakerType: "male",
    questions: [{
      id: 2,
      questionText: "Choose the best response:",
      options: [
        { label: "A", text: "I didn't see the meeting notes." },
        { label: "B", text: "Want to grab a quick coffee while we wait?" },
        { label: "C", text: "It's every Tuesday afternoon." },
        { label: "D", text: "The conference room is upstairs." }
      ],
      correctAnswerIndex: 1,
      explanation: "Since the meeting is delayed, suggesting a quick activity to pass the time (grabbing coffee) is a logical and natural response."
    }]
  },
  {
    id: "m1-q3",
    title: "Listen and Choose - Question 3",
    type: "discrete",
    transcriptText: "Would you remind me to call my sister later?",
    speakerType: "female",
    questions: [{
      id: 3,
      questionText: "Choose the best response:",
      options: [
        { label: "A", text: "She called me yesterday." },
        { label: "B", text: "I'll text you this evening." },
        { label: "C", text: "The call was about ten minutes." },
        { label: "D", text: "I think he's traveling now." }
      ],
      correctAnswerIndex: 1,
      explanation: "The request is for a reminder. 'I'll text you this evening' is a way of confirming they will provide that reminder at a later time."
    }]
  },
  {
    id: "m1-q4",
    title: "Listen and Choose - Question 4",
    type: "discrete",
    transcriptText: "Could you water my plants while I'm away?",
    speakerType: "male",
    questions: [{
      id: 4,
      questionText: "Choose the best response:",
      options: [
        { label: "A", text: "The plants look really healthy right now." },
        { label: "B", text: "I'll stop by every morning on my way to work." },
        { label: "C", text: "It hasn't rained much this week." },
        { label: "D", text: "Here would be great because this window gets plenty of light." }
      ],
      correctAnswerIndex: 1,
      explanation: "The speaker is asking for a favor. Option B accepts the responsibility and specifies when they will do it."
    }]
  },
  // Conversation 1
  {
    id: "conv-1",
    title: "Conversation: Laundry",
    type: "conversation",
    transcriptText: "The laundry basket's overflowing again. Didn't you say you'd do it yesterday? I did, but I ran out of detergent halfway through the first load. You could have told me; I passed the store on my way home. I figured I'd go this morning, but then I got caught up finishing that report for work. I'll grab some detergent after lunch and do a double load this afternoon. Please do, otherwise we'll have nothing to wear tomorrow.",
    speakerType: "duo",
    questions: [
      {
        id: 9,
        questionText: "What reason does the man give for not finishing the laundry?",
        options: [
          { label: "A", text: "The washing machine stopped working properly." },
          { label: "B", text: "He ran out of detergent before completing it." },
          { label: "C", text: "He forgot to start it after finishing up a book report." },
          { label: "D", text: "He was waiting for clean clothes to dry first." }
        ],
        correctAnswerIndex: 1,
        explanation: "The man explicitly states: 'I did, but I ran out of detergent halfway through the first load.'"
      },
      {
        id: 10,
        questionText: "Why does the man mention his report for work?",
        options: [
          { label: "A", text: "It explains why he didn't go to the store earlier." },
          { label: "B", text: "He wants to show that he was being productive." },
          { label: "C", text: "He needs to print it before doing chores." },
          { label: "D", text: "He hopes the woman will help with the laundry." }
        ],
        correctAnswerIndex: 0,
        explanation: "He says: 'I figured I'd go this morning, but then I got caught up finishing that report for work.' This explains why he hasn't bought detergent yet."
      }
    ]
  },
  // Conversation 2
  {
    id: "conv-2",
    title: "Conversation: Phone Battery",
    type: "conversation",
    transcriptText: "My phone keeps dying just a few hours after it's fully charged. You probably need a new battery. How long have you had it? Almost four years. It used to last all day, but now I charge it twice before dinner. I read online that once a battery starts losing power, it can even damage the phone if you ignore it for too long. Then you'd better replace it soon. There's a repair shop near the library that does same day service. Oh, I didn't know that. I'll head over there after work.",
    speakerType: "duo",
    questions: [
      {
        id: 11,
        questionText: "What does the man say about his phone battery?",
        options: [
          { label: "A", text: "It overheats whenever he plugs it in." },
          { label: "B", text: "It stops charging when it reaches half capacity." },
          { label: "C", text: "It loses power quickly after being fully charged." },
          { label: "D", text: "It takes several hours to recharge completely." }
        ],
        correctAnswerIndex: 2,
        explanation: "The man starts by saying: 'My phone keeps dying just a few hours after it's fully charged.'"
      },
      {
        id: 12,
        questionText: "What does the woman advise the man to do?",
        options: [
          { label: "A", text: "Reduce how often he uses the phone in the afternoon." },
          { label: "B", text: "Carry a portable charger for emergencies." },
          { label: "C", text: "Replace the battery before it causes more damage." },
          { label: "D", text: "Wait until the weekend to get repairs done." }
        ],
        correctAnswerIndex: 2,
        explanation: "The woman says: 'Then you'd better replace it soon,' citing potential damage to the phone."
      }
    ]
  },
  // Announcement 1
  {
    id: "ann-1",
    title: "Announcement: Academic Advising",
    type: "announcement",
    transcriptText: "Good morning students. The academic advising office will offer extended walk-in hours next week for anyone planning to register for summer courses. Advisers will be available from 9 a.m. to 4 p.m. Monday through Thursday. No appointment is necessary, but please arrive early to avoid long wait times.",
    speakerType: "female",
    questions: [
      {
        id: 13,
        questionText: "What is the main purpose of the announcement?",
        options: [
          { label: "A", text: "To inform students about changes to advising hours" },
          { label: "B", text: "To announce the deadline for summer registration" },
          { label: "C", text: "To remind students of the advising office's normal hours" },
          { label: "D", text: "To encourage students to attend an advising workshop" }
        ],
        correctAnswerIndex: 0,
        explanation: "The announcement focuses on 'extended walk-in hours next week' for summer registration."
      },
      {
        id: 14,
        questionText: "What are students encouraged to do?",
        options: [
          { label: "A", text: "Arrive early to avoid long waits" },
          { label: "B", text: "Schedule their appointments online" },
          { label: "C", text: "Email advisors for registration forms" },
          { label: "D", text: "Extend their hours to register for courses" }
        ],
        correctAnswerIndex: 0,
        explanation: "The speaker explicitly states: 'please arrive early to avoid long wait times.'"
      }
    ]
  },
  // Talk 1
  {
    id: "talk-1",
    title: "Biology Lecture: Monarch Butterflies",
    type: "lecture",
    transcriptText: "Every autumn, millions of monarch butterflies travel from the northern United States and Canada to the mountain forests of central Mexico. Their bright orange wings make the sky seem alive with motion. What makes this journey remarkable is its length and accuracy. Monarchs travel thousands of kilometers, yet the butterflies that arrive in Mexico are not the same ones that left the North. The journey takes several generations to complete, with each new group continuing the route their ancestors started. Scientists have been fascinated by how monarchs know where to go. Studies suggest they use the position of the sun as a kind of compass. They also appear to rely on an internal clock that adjusts for the sun's movement during the day. Some experiments show that when the butterflies' antennae are covered, they lose their sense of direction, suggesting that light sensors there play an important role. Despite their endurance, monarch populations have declined sharply in recent years. The biggest threats are habitat loss and the disappearance of milkweed plants, which are the only food source for monarch caterpillars. Conservation groups now encourage people to plant milkweed and create resting spots along the migration route.",
    speakerType: "lecturer",
    imageUrl: "https://picsum.photos/800/400",
    questions: [
      {
        id: 17,
        questionText: "What is the main topic of the talk?",
        options: [
          { label: "A", text: "The remarkable lives of monarch butterflies" },
          { label: "B", text: "How monarch butterflies adapt to environmental changes" },
          { label: "C", text: "The structure of butterfly wings and their colors" },
          { label: "D", text: "The effects of climate change on monarch butterflies" }
        ],
        correctAnswerIndex: 0,
        explanation: "The talk covers migration, navigation, and conservation, summarizing their remarkable life cycle and journey."
      },
      {
        id: 18,
        questionText: "Why does the speaker mention that multiple generations complete the migration?",
        options: [
          { label: "A", text: "To compare monarchs with other long-distance species" },
          { label: "B", text: "To suggest that migration patterns constantly change" },
          { label: "C", text: "To highlight how extraordinary the monarchs' life cycle and navigation are" },
          { label: "D", text: "To explain why scientists cannot study the full journey" }
        ],
        correctAnswerIndex: 2,
        explanation: "The fact that butterflies who have never flown the route can find their way highlights the extraordinary nature of their instinctual navigation."
      },
      {
        id: 19,
        questionText: "According to the speaker, what helps monarch butterflies navigate during migration?",
        options: [
          { label: "A", text: "The scent of milkweed plants along their route" },
          { label: "B", text: "Landmarks they recognize from previous generations" },
          { label: "C", text: "The position of the sun combined with an internal clock" },
          { label: "D", text: "Temperature changes that guide their flight path" }
        ],
        correctAnswerIndex: 2,
        explanation: "The text says: 'Studies suggest they use the position of the sun as a kind of compass. They also appear to rely on an internal clock...'"
      },
      {
        id: 20,
        questionText: "What can be inferred about monarch migration?",
        options: [
          { label: "A", text: "It varies dramatically each year depending on the weather." },
          { label: "B", text: "It depends on inherited biological mechanisms." },
          { label: "C", text: "It can occur under constant wind conditions." },
          { label: "D", text: "It is identical to the migration patterns of other insects." }
        ],
        correctAnswerIndex: 1,
        explanation: "Since new generations continue a route they've never seen, the knowledge is inherited biologically (instinctual/genetic)."
      }
    ]
  },
  // Module 2 - Discrete
  {
    id: "m2-q21",
    title: "Listen and Choose - Question 21",
    type: "discrete",
    transcriptText: "Who approved the new advertising budget?",
    speakerType: "male",
    questions: [{
      id: 21,
      questionText: "Choose the best response:",
      options: [
        { label: "A", text: "I spoke with the finance team about making a change." },
        { label: "B", text: "It's due by the end of the quarter." },
        { label: "C", text: "The marketing director signed off on it." },
        { label: "D", text: "There's a meeting about it scheduled for tomorrow." }
      ],
      correctAnswerIndex: 2,
      explanation: "The question asks 'Who approved...'. Option C provides the person ('The marketing director') and the action ('signed off on it' which means approved)."
    }]
  },
  {
    id: "m2-q23",
    title: "Listen and Choose - Question 23",
    type: "discrete",
    transcriptText: "The hallway lights aren't working again.",
    speakerType: "female",
    questions: [{
      id: 23,
      questionText: "Choose the best response:",
      options: [
        { label: "A", text: "They were installed last year." },
        { label: "B", text: "I'll ask maintenance to take a look." },
        { label: "C", text: "The lights are brighter earlier in the day." },
        { label: "D", text: "It's about time to look for a new apartment." }
      ],
      correctAnswerIndex: 1,
      explanation: "This is a report of a problem. Option B offers a solution: contacting maintenance."
    }]
  },
  // Conversation 3
  {
    id: "conv-3",
    title: "Conversation: Office Supplies",
    type: "conversation",
    transcriptText: "The shipment of office supplies still hasn't arrived. It's been almost a week since we placed that order. I called the supplier this morning, and they said the delivery truck broke down outside the city. They're sending another one tomorrow. That explains it. I'll let the team know to go easy on the printing until then.",
    speakerType: "duo",
    questions: [
      {
        id: 24,
        questionText: "What can be inferred about the man's workplace?",
        options: [
          { label: "A", text: "They plan to change suppliers soon." },
          { label: "B", text: "They received an extra delivery last week." },
          { label: "C", text: "They are running low on certain supplies." },
          { label: "D", text: "They have recently put limits on their printing." }
        ],
        correctAnswerIndex: 2,
        explanation: "Since the shipment is late and the man says he'll tell the team to 'go easy on the printing', it implies they are running low on paper or ink."
      },
      {
        id: 25,
        questionText: "What will happen tomorrow?",
        options: [
          { label: "A", text: "A replacement delivery will arrive" },
          { label: "B", text: "The supplier will issue a refund" },
          { label: "C", text: "The office will run out of supplies" },
          { label: "D", text: "The team will cancel all print jobs" }
        ],
        correctAnswerIndex: 0,
        explanation: "The woman says: 'They're sending another one tomorrow' referring to the delivery truck."
      }
    ]
  },
  // Talk 2
  {
    id: "talk-2",
    title: "Marine Biology: Bioluminescence",
    type: "lecture",
    transcriptText: "In the dark depths of the ocean, where sunlight never reaches, many organisms have developed the ability to produce their own light. This natural glow, known as bioluminescence, serves a variety of purposes. Some species use it to attract prey, while others rely on it to hide from predators. But one of the most intriguing uses is communication. For many deep sea creatures, light is their language. Certain squid, for example, flash rhythmic pulses of blue light from their bodies to signal to potential mates or to coordinate movement within a group. Other animals, such as the lanternfish, have glowing spots arranged along their sides that may help them recognize members of their own species in the darkness. Researchers studying these organisms have discovered that light production is not always controlled by the animal alone. In some cases, bacteria living inside the creature's body produce the glow. This cooperation between host and microbe shows how even in extreme environments, life depends on partnerships. Next, let's look at how these biological light systems might inspire new forms of communication technology.",
    speakerType: "lecturer",
    imageUrl: "https://picsum.photos/800/401",
    questions: [
      {
        id: 28,
        questionText: "What is the main topic of the talk?",
        options: [
          { label: "A", text: "How bioluminescence affects ecosystems in the ocean depths" },
          { label: "B", text: "How deep-sea organisms use bioluminescence to survive" },
          { label: "C", text: "How scientists discovered bioluminescence in shallow waters" },
          { label: "D", text: "How light pollution interferes with the bioluminescence of marine animals" }
        ],
        correctAnswerIndex: 1,
        explanation: "The talk describes various uses of bioluminescence (attracting prey, hiding, communication) helping organisms survive in the deep ocean."
      },
      {
        id: 29,
        questionText: "All of the following are mentioned as ways deep-sea animals use bioluminescence EXCEPT:",
        options: [
          { label: "A", text: "To navigate using reflected light from the ocean surface" },
          { label: "B", text: "To attract prey in the dark" },
          { label: "C", text: "To recognize others of the same species" },
          { label: "D", text: "To signal to potential mates" }
        ],
        correctAnswerIndex: 0,
        explanation: "The talk mentions B (attract prey), C (recognize members), and D (signal mates). It does not mention using reflected light from the surface (which doesn't reach the depths)."
      },
      {
        id: 30,
        questionText: "What can be inferred about the relationship between bacteria and bioluminescent animals?",
        options: [
          { label: "A", text: "The light from the bacteria can only be produced in shallow water." },
          { label: "B", text: "The bacteria weaken the animal's immune system over time." },
          { label: "C", text: "Both organisms benefit from the light they produce together." },
          { label: "D", text: "The bacteria rely on the animal's nervous system to create electricity." }
        ],
        correctAnswerIndex: 2,
        explanation: "The speaker refers to it as 'cooperation between host and microbe', implying a symbiotic relationship where both likely benefit."
      },
      {
        id: 31,
        questionText: "What will the speaker most likely discuss next?",
        options: [
          { label: "A", text: "How bioluminescent systems could inspire communication technologies" },
          { label: "B", text: "How scientists study light production in land-based animals" },
          { label: "C", text: "How climate change affects bioluminescent organisms" },
          { label: "D", text: "How ocean currents influence the movement of light-producing bacteria" }
        ],
        correctAnswerIndex: 0,
        explanation: "The last sentence says: 'Next, let's look at how these biological light systems might inspire new forms of communication technology.'"
      }
    ]
  },
  // Talk 3
  {
    id: "talk-3",
    title: "History Lecture: Early Agriculture",
    type: "lecture",
    transcriptText: "Around 10,000 years ago, in a region of the Middle East once known as the Fertile Crescent, a group of people began an experiment that would change human history. They were not building cities or empires yet. They were simply trying to survive in a landscape of grasslands and rivers that flooded each spring. Archaeological evidence from sites near the Tigris and Euphrates rivers shows that small communities began gathering wild grains that grew after the floods. Over time, they noticed that seeds dropped near their camps sprouted again the next season. This observation marked the beginning of agriculture. One of the best studied settlements from this period is Jericho. Located near the Jordan River, the people there constructed circular houses from mud and built stone walls to protect their crops. Storage pits found beneath the floors suggest that they were saving food from one harvest to the next. This ability to store grain gave them security through harsh seasons and allowed the population to grow. Families no longer needed to move constantly in search of food, and social roles began to change as some members specialized in tool making and food preparation. These early farmers could not have known the long-term consequences of their innovation. Yet their decision to plant and protect grain set in motion the rise of complex societies. In the next section, we will look at how similar communities laid the groundwork for the first civilizations.",
    speakerType: "lecturer",
    imageUrl: "https://picsum.photos/800/402",
    questions: [
      {
        id: 32,
        questionText: "What is the main focus of the talk?",
        options: [
          { label: "A", text: "How early farmers domesticated animals to grow crops and build communities" },
          { label: "B", text: "How ancient empires expanded trade routes in the Middle East" },
          { label: "C", text: "How climate change forced ancient peoples to change the way they gathered food" },
          { label: "D", text: "How early communities in the Fertile Crescent developed agriculture" }
        ],
        correctAnswerIndex: 3,
        explanation: "The talk focuses on the Fertile Crescent and the beginnings of gathering grains and planting seeds (agriculture)."
      },
      {
        id: 33,
        questionText: "What evidence suggests that people in Jericho stored food?",
        options: [
          { label: "A", text: "Archaeologists found storage pits beneath the floors of houses." },
          { label: "B", text: "Large clay jars were discovered near irrigation canals." },
          { label: "C", text: "Stone carvings showed baskets filled with harvested grain." },
          { label: "D", text: "Written records described the process of preserving food." }
        ],
        correctAnswerIndex: 0,
        explanation: "The speaker states: 'Storage pits found beneath the floors suggest that they were saving food from one harvest to the next.'"
      },
      {
        id: 34,
        questionText: "Why does the speaker mention specialization in toolmaking and food preparation?",
        options: [
          { label: "A", text: "To describe how farming weakened traditional family structures" },
          { label: "B", text: "To explain why communities abandoned older hunting traditions" },
          { label: "C", text: "To show how stable food supplies made new forms of labor possible" },
          { label: "D", text: "To suggest that early agriculture caused social conflict" }
        ],
        correctAnswerIndex: 2,
        explanation: "The talk connects the ability to store grain (security) to the fact that they no longer needed to move, allowing social roles to change and specialization to occur."
      },
      {
        id: 35,
        questionText: "What will the speaker most likely discuss next?",
        options: [
          { label: "A", text: "How farming communities contributed to the rise of early civilizations" },
          { label: "B", text: "How modern agriculture differs from ancient techniques" },
          { label: "C", text: "How trade spread agricultural ideas to other continents" },
          { label: "D", text: "How early farmers adapted to colder climates in northern regions" }
        ],
        correctAnswerIndex: 0,
        explanation: "The final sentence is: 'In the next section, we will look at how similar communities laid the groundwork for the first civilizations.'"
      }
    ]
  }
];