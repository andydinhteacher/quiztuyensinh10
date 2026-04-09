const ALL_QUESTIONS = [
  {
    "id": 1,
    "question": "You ______ start your homework right away because it's not due until next week, so you can take your time.",
    "options": {
      "A": "mustn't",
      "B": "don't",
      "C": "needn't",
      "D": "couldn't"
    },
    "key": "C",
    "explanation": "Căn cứ vào vế sau \"có thể thong thả\", ta dùng \"needn't\" để chỉ sự không cần thiết."
  },
  {
    "id": 2,
    "question": "I wish I ______ better at playing the guitar so that I could perform in front of my friends and family.",
    "options": {
      "A": "am",
      "B": "was",
      "C": "were",
      "D": "have been"
    },
    "key": "C",
    "explanation": "Câu ước cho hiện tại dùng cấu trúc \"wish + S + V-ed/were\"."
  },
  {
    "id": 3,
    "question": "If my sister ______ here with us today, I'm sure she would help us with the project.",
    "options": {
      "A": "were",
      "B": "is",
      "C": "has been",
      "D": "would be"
    },
    "key": "A",
    "explanation": "Câu điều kiện loại 2 diễn tả giả thiết không có thật ở hiện tại, mệnh đề If chia quá khứ giả định (were)."
  },
  {
    "id": 4,
    "question": "I ______ the dishes every evening while my family is away on vacation this week, making sure the house stays tidy.",
    "options": {
      "A": "do",
      "B": "am doing",
      "C": "did",
      "D": "have done"
    },
    "key": "B",
    "explanation": "Hành động mang tính tạm thời trong một khoảng thời gian cụ thể (tuần này) nên dùng thì Hiện tại tiếp diễn."
  },
  {
    "id": 5,
    "question": "Don't believe what Sarah says; she often makes ______ stories to entertain us at gatherings.",
    "options": {
      "A": "real",
      "B": "imaginary",
      "C": "strange",
      "D": "inventing"
    },
    "key": "B",
    "explanation": "Tính từ \"imaginary\" (hư cấu/tưởng tượng) phù hợp để mô tả những câu chuyện không có thật."
  },
  {
    "id": 6,
    "question": "Many students dislike ______ homework on weekends because they prefer to have their leisure time to relax.",
    "options": {
      "A": "doing",
      "B": "making",
      "C": "producing",
      "D": "working"
    },
    "key": "A",
    "explanation": "Kết hợp từ (Collocation): do homework."
  },
  {
    "id": 7,
    "question": "This park is always ______ with children during the summer months.",
    "options": {
      "A": "full",
      "B": "crowded",
      "C": "pressed",
      "D": "lively"
    },
    "key": "B",
    "explanation": "Cấu trúc \"be crowded with\": đông đúc với cái gì/ai."
  },
  {
    "id": 8,
    "question": "– “Hi, Kevin! How are you doing today? I hope everything is going well.” – “______”",
    "options": {
      "A": "I'm fine, thank you! It's a good day.",
      "B": "Not much, just busy this week.",
      "C": "No way! Are you keeping up?",
      "D": "Yeah, thanks for asking!"
    },
    "key": "A",
    "explanation": "Đáp lại lời hỏi thăm sức khỏe và lời chúc một cách lịch sự."
  },
  {
    "id": 9,
    "question": "His parents encouraged him ______ for a scholarship to support his education abroad.",
    "options": {
      "A": "apply",
      "B": "to apply",
      "C": "to applying",
      "D": "applying"
    },
    "key": "B",
    "explanation": "Cấu trúc \"encourage somebody to do something\": khuyến khích ai làm gì."
  },
  {
    "id": 10,
    "question": "If they had the correct map, they ______ lost in the forest.",
    "options": {
      "A": "will not get",
      "B": "will get",
      "C": "would not get",
      "D": "would get"
    },
    "key": "C",
    "explanation": "Câu điều kiện loại 2 (mệnh đề If chia quá khứ), mệnh đề chính dùng \"would (not) + V-inf\"."
  },
  {
    "id": 11,
    "question": "There is ______ information available online, so researching for the project won't be a problem.",
    "options": {
      "A": "a large number of",
      "B": "a lot of",
      "C": "a small bit",
      "D": "a little bit"
    },
    "key": "B",
    "explanation": "\"Information\" là danh từ không đếm được, \"a lot of\" đi được với cả danh từ đếm được và không đếm được."
  },
  {
    "id": 12,
    "question": "Recently, she ______ all her assignments and is ready for her final exams.",
    "options": {
      "A": "has completed",
      "B": "is completing",
      "C": "completes",
      "D": "will complete"
    },
    "key": "A",
    "explanation": "Dấu hiệu \"recently\" (gần đây) đi với thì Hiện tại hoàn thành để diễn tả hành động vừa mới xảy ra."
  },
  {
    "id": 13,
    "question": "To ______ fit, it's beneficial to begin stretching exercises every morning before starting your daily activities.",
    "options": {
      "A": "begin",
      "B": "stay",
      "C": "start",
      "D": "practise"
    },
    "key": "B",
    "explanation": "Cụm từ \"stay fit\" mang nghĩa là giữ cho cơ thể cân đối, khỏe mạnh."
  },
  {
    "id": 14,
    "question": "Mark: What's your opinion on taking evening classes to improve my language skills? John: ______",
    "options": {
      "A": "That sounds like a good idea.",
      "B": "Evening classes are too much effort.",
      "C": "If you were sure, you could balance it.",
      "D": "Evening classes are exhausting."
    },
    "key": "A",
    "explanation": "Đáp lại lời hỏi ý kiến bằng một lời tán đồng hoặc nhận xét tích cực."
  },
  {
    "id": 15,
    "question": "He has a keen interest ______ history and spends hours reading about ancient civilisations.",
    "options": {
      "A": "with",
      "B": "on",
      "C": "in",
      "D": "for"
    },
    "key": "C",
    "explanation": "Cấu trúc \"have an interest in something\": có hứng thú với cái gì."
  },
  {
    "id": 16,
    "question": "Drinking enough water every day is one of the important ______ for maintaining good health.",
    "options": {
      "A": "requirements",
      "B": "advantages",
      "C": "benefits",
      "D": "difficulties"
    },
    "key": "A",
    "explanation": "\"Requirements\" (yêu cầu/điều kiện cần thiết) phù hợp với ngữ cảnh các yếu tố để duy trì sức khỏe."
  },
  {
    "id": 17,
    "question": "The coach told the team to stay focused; doing so would be crucial ______ their success.",
    "options": {
      "A": "with",
      "B": "on",
      "C": "for",
      "D": "in"
    },
    "key": "C",
    "explanation": "Cấu trúc \"crucial for something/somebody\" mang nghĩa là cực kỳ quan trọng đối với cái gì/ai."
  },
  {
    "id": 18,
    "question": "The man to whom we handed the forms said that they had not been ______ filled in.",
    "options": {
      "A": "consequently",
      "B": "regularly",
      "C": "comprehensively",
      "D": "properly"
    },
    "key": "D",
    "explanation": "Trạng từ \"properly\" (một cách đúng đắn/hợp thức) dùng để mô tả việc điền biểu mẫu đúng quy định."
  },
  {
    "id": 19,
    "question": "As everyone knows, the first and last ______ of the shuttle mission were both remarkable events in space exploration history.",
    "options": {
      "A": "journeys",
      "B": "trips",
      "C": "travels",
      "D": "outings"
    },
    "key": "A",
    "explanation": "\"Journey\" dùng để chỉ một hành trình dài, thường là chuyến đi thám hiểm hoặc đi từ nơi này đến nơi khác."
  },
  {
    "id": 20,
    "question": "If the sun shines brightly, you can ______ your sunglasses to protect your eyes from the glare.",
    "options": {
      "A": "keep on",
      "B": "put on",
      "C": "take off",
      "D": "get along"
    },
    "key": "B",
    "explanation": "Cụm động từ \"put on\" mang nghĩa là mặc vào/đeo vào (kính)."
  },
  {
    "id": 21,
    "question": "He ______ his homework before dinner yesterday so that he could relax and enjoy the evening with his family.",
    "options": {
      "A": "finishes",
      "B": "finished",
      "C": "was finishing",
      "D": "is finishing"
    },
    "key": "B",
    "explanation": "Dấu hiệu \"yesterday\" chỉ một hành động đã xảy ra và kết thúc trong quá khứ nên dùng thì Quá khứ đơn."
  },
  {
    "id": 22,
    "question": "______ my mother gets home, I will go to the party.",
    "options": {
      "A": "During",
      "B": "As soon as",
      "C": "Until",
      "D": "Whenever"
    },
    "key": "B",
    "explanation": "Liên từ \"As soon as\" (ngay khi) dùng để nối hai hành động xảy ra nối tiếp nhau."
  },
  {
    "id": 23,
    "question": "Where do you get the news from? Does it come from a ______ source?",
    "options": {
      "A": "depending",
      "B": "dependent",
      "C": "dependable",
      "D": "depended"
    },
    "key": "C",
    "explanation": "Cần một tính từ mang nghĩa \"đáng tin cậy\" để bổ nghĩa cho danh từ \"source\"."
  },
  {
    "id": 24,
    "question": "\"It was wonderful to meet you at the concert last week.\" - \"______\"",
    "options": {
      "A": "I was so happy too.",
      "B": "Yes, why not?",
      "C": "So am I.",
      "D": "I do, too."
    },
    "key": "A",
    "explanation": "Đáp lại một lời bày tỏ cảm xúc về sự việc trong quá khứ một cách tương xứng."
  },
  {
    "id": 25,
    "question": "Many trees ______ in the park every year to maintain the environment.",
    "options": {
      "A": "are planted",
      "B": "were planted",
      "C": "are planting",
      "D": "have planted"
    },
    "key": "A",
    "explanation": "Câu bị động ở thì Hiện tại đơn (dấu hiệu \"every year\") diễn tả một sự việc lặp đi lặp lại."
  },
  {
    "id": 26,
    "question": "Video classes give students the opportunity to ______ their speaking skills.",
    "options": {
      "A": "perform",
      "B": "act",
      "C": "practise",
      "D": "apply"
    },
    "key": "C",
    "explanation": "Kết hợp từ (Collocation): practise skills (thực hành kỹ năng)."
  },
  {
    "id": 27,
    "question": "This is the school ______ advertisement you watched on TV yesterday.",
    "options": {
      "A": "whose",
      "B": "of which",
      "C": "which",
      "D": "for which"
    },
    "key": "A",
    "explanation": "Đại từ quan hệ \"whose\" thay thế cho tính từ sở hữu, đứng trước danh từ \"advertisement\"."
  },
  {
    "id": 28,
    "question": "Books are expensive now. I wish they ______ cheaper.",
    "options": {
      "A": "are",
      "B": "were",
      "C": "will be",
      "D": "have been"
    },
    "key": "B",
    "explanation": "Câu ước cho hiện tại dùng cấu trúc \"wish + S + V-ed/were\"."
  },
  {
    "id": 29,
    "question": "He was very ______ about his ideas during the meeting, which impressed everyone.",
    "options": {
      "A": "shy",
      "B": "confident",
      "C": "quiet",
      "D": "nervous"
    },
    "key": "B",
    "explanation": "Tính từ \"confident\" (tự tin) phù hợp với ngữ cảnh gây ấn tượng tốt với mọi người."
  },
  {
    "id": 30,
    "question": "The gallery has a fascinating ______ on modern art that I really want to visit.",
    "options": {
      "A": "presentation",
      "B": "showcase",
      "C": "competition",
      "D": "exhibition"
    },
    "key": "D",
    "explanation": "\"Exhibition\" (cuộc triển lãm) là danh từ phù hợp nhất khi nói về các tác phẩm nghệ thuật trong một phòng trưng bày."
  },
  {
    "id": 31,
    "question": "I'm not used to ______ in front of large audiences.",
    "options": {
      "A": "speak",
      "B": "speaking",
      "C": "spoke",
      "D": "spoken"
    },
    "key": "B",
    "explanation": "Cấu trúc \"be used to + V-ing\" diễn tả việc đang dần quen với điều gì đó."
  },
  {
    "id": 32,
    "question": "\"Did Mark pass the exam?\" - \"______\"",
    "options": {
      "A": "I'm hopeful!",
      "B": "I don't hope so.",
      "C": "He would not.",
      "D": "I hope so!"
    },
    "key": "D",
    "explanation": "Cụm từ \"I hope so!\" được dùng để trả lời khi hy vọng điều gì đó là sự thật."
  },
  {
    "id": 33,
    "question": "Practising good posture can ______ reduce back pain and improve your overall well-being.",
    "options": {
      "A": "significantly",
      "B": "narrowly",
      "C": "rarely",
      "D": "especially"
    },
    "key": "A",
    "explanation": "Trạng từ \"significantly\" (đáng kể) dùng để nhấn mạnh mức độ giảm đau."
  },
  {
    "id": 34,
    "question": "\"We're sorry we haven't completed the research ______.\"",
    "options": {
      "A": "already",
      "B": "yet",
      "C": "just",
      "D": "ever"
    },
    "key": "B",
    "explanation": "\"Yet\" dùng trong câu phủ định của thì Hiện tại hoàn thành, đứng cuối câu."
  },
  {
    "id": 35,
    "question": "If I ______ more time, I would join the painting class.",
    "options": {
      "A": "had",
      "B": "have",
      "C": "will have",
      "D": "am having"
    },
    "key": "A",
    "explanation": "Câu điều kiện loại 2 diễn tả giả thiết trái với hiện tại, mệnh đề If chia quá khứ đơn."
  },
  {
    "id": 36,
    "question": "The film \"Red Rain\" was so ______ that everyone was talking about it for weeks.",
    "options": {
      "A": "excite",
      "B": "excited",
      "C": "exciting",
      "D": "excitingly"
    },
    "key": "C",
    "explanation": "Dùng tính từ đuôi -ing (exciting) để miêu tả tính chất của vật (bộ phim)."
  },
  {
    "id": 37,
    "question": "The restaurant is quite popular; even so, we were able to get a table without a(n) ______.",
    "options": {
      "A": "organisation",
      "B": "arrangement",
      "C": "booking",
      "D": "reservation"
    },
    "key": "D",
    "explanation": "Cụm từ \"make a reservation\" hoặc \"without a reservation\" dùng khi đặt chỗ trước tại nhà hàng."
  },
  {
    "id": 38,
    "question": "She's the person ______ I told you about yesterday.",
    "options": {
      "A": "that",
      "B": "whom",
      "C": "which",
      "D": "whose"
    },
    "key": "B",
    "explanation": "\"Whom\" làm tân ngữ thay thế cho danh từ chỉ người (the person)."
  },
  {
    "id": 39,
    "question": "She promised to send the report to her manager ______ it was finished.",
    "options": {
      "A": "during",
      "B": "whenever",
      "C": "until",
      "D": "as soon as"
    },
    "key": "D",
    "explanation": "\"As soon as\" dùng để chỉ một hành động sẽ thực hiện ngay lập tức sau khi hành động kia hoàn thành."
  },
  {
    "id": 40,
    "question": "\"Is Tom going to join us for dinner this Saturday?\" - \"______\"",
    "options": {
      "A": "I hope not",
      "B": "I don't think so",
      "C": "I don't want it",
      "D": "No, he might come"
    },
    "key": "B",
    "explanation": "\"I don't think so\" là cách trả lời lịch sự để bày tỏ sự nghi ngờ hoặc không chắc chắn về một dự định."
  },
  {
    "id": 41,
    "question": "I was so tired that I could hardly ______ awake during the meeting.",
    "options": {
      "A": "stay",
      "B": "keep",
      "C": "hold",
      "D": "remain"
    },
    "key": "A",
    "explanation": "Cụm từ \"stay awake\" mang nghĩa là giữ cho bản thân tỉnh táo, không buồn ngủ."
  },
  {
    "id": 42,
    "question": "Mary doesn't seem to like horror movies, ______?",
    "options": {
      "A": "has she",
      "B": "didn't she",
      "C": "is she",
      "D": "does she"
    },
    "key": "D",
    "explanation": "Câu hỏi đuôi: mệnh đề chính có \"doesn't seem\" (phủ định) nên phần đuôi dùng \"does she\" (khẳng định)."
  },
  {
    "id": 43,
    "question": "The team celebrated their ______ success after winning the championship.",
    "options": {
      "A": "tremendous",
      "B": "less tremendous",
      "C": "tremendously",
      "D": "more tremendous"
    },
    "key": "A",
    "explanation": "Cần một tính từ đứng trước danh từ \"success\" để miêu tả mức độ thành công to lớn."
  },
  {
    "id": 44,
    "question": "The manager was impressed by her ______ attitude during the interview.",
    "options": {
      "A": "professional",
      "B": "profession",
      "C": "professionally",
      "D": "professor"
    },
    "key": "A",
    "explanation": "Cần một tính từ (professional) để bổ nghĩa cho danh từ \"attitude\" (thái độ chuyên nghiệp)."
  },
  {
    "id": 45,
    "question": "We need to ______ a solution to this problem before it gets worse.",
    "options": {
      "A": "come up with",
      "B": "put up with",
      "C": "get away",
      "D": "look down"
    },
    "key": "A",
    "explanation": "Cụm động từ \"come up with\" mang nghĩa là nảy ra, tìm ra (một ý tưởng hoặc giải pháp)."
  },
  {
    "id": 46,
    "question": "Public transport in the city is very ______, with buses and trains running frequently.",
    "options": {
      "A": "limited",
      "B": "convenient",
      "C": "difficult",
      "D": "expensive"
    },
    "key": "B",
    "explanation": "Tính từ \"convenient\" (tiện lợi) phù hợp với ngữ cảnh xe buýt và tàu chạy thường xuyên."
  },
  {
    "id": 47,
    "question": "The book, ______ cover is red, contains many interesting stories.",
    "options": {
      "A": "who",
      "B": "whose",
      "C": "which",
      "D": "that"
    },
    "key": "B",
    "explanation": "Đại từ quan hệ \"whose\" dùng để chỉ sở hữu cho danh từ chỉ vật (cuốn sách) đứng trước nó."
  },
  {
    "id": 48,
    "question": "\"Hi, Alex! Did you see the game last night?\" - \"______\"",
    "options": {
      "A": "Games are always exciting.",
      "B": "I don't like staying out late.",
      "C": "Yes, it was amazing!",
      "D": "Why do you ask me?"
    },
    "key": "C",
    "explanation": "Đáp lại câu hỏi về một sự kiện đã xảy ra bằng cách xác nhận và đưa ra cảm nhận."
  },
  {
    "id": 49,
    "question": "You ______ forget your passport if you're travelling internationally.",
    "options": {
      "A": "shouldn't",
      "B": "mustn't",
      "C": "couldn't",
      "D": "wouldn't"
    },
    "key": "B",
    "explanation": "\"Mustn't\" dùng để chỉ một sự cấm đoán hoặc một việc tuyệt đối không được làm (quên hộ chiếu)."
  },
  {
    "id": 50,
    "question": "The new bridge ______ next month, which will greatly improve traffic flow.",
    "options": {
      "A": "complete",
      "B": "will complete",
      "C": "will be completed",
      "D": "has been completed"
    },
    "key": "C",
    "explanation": "Câu bị động ở thì Tương lai đơn (dấu hiệu \"next month\") diễn tả sự việc sẽ được hoàn thành."
  },
  {
    "id": 51,
    "question": "The company is offering a special discount to ______ customers.",
    "options": {
      "A": "loyal",
      "B": "loyalty",
      "C": "loyalist",
      "D": "loyally"
    },
    "key": "A",
    "explanation": "Cần một tính từ (loyal - trung thành) để bổ nghĩa cho danh từ \"customers\"."
  },
  {
    "id": 52,
    "question": "The athlete trained hard every day to ______ her dream of competing at the Olympics.",
    "options": {
      "A": "carry",
      "B": "achieve",
      "C": "gain",
      "D": "receive"
    },
    "key": "B",
    "explanation": "Kết hợp từ (Collocation): achieve a dream (đạt được ước mơ)."
  },
  {
    "id": 53,
    "question": "Learning a new language can be ______ at first, but it's very rewarding in the long run.",
    "options": {
      "A": "bored",
      "B": "challenging",
      "C": "relaxed",
      "D": "easy"
    },
    "key": "B",
    "explanation": "Dùng tính từ đuôi -ing (challenging) để miêu tả tính chất gây khó khăn, thử thách của việc học ngoại ngữ."
  },
  {
    "id": 54,
    "question": "She ______ her chores before going to school yesterday so that she wouldn't have to worry later.",
    "options": {
      "A": "finishes",
      "B": "was finishing",
      "C": "finished",
      "D": "is finishing"
    },
    "key": "C",
    "explanation": "Dấu hiệu \"yesterday\" chỉ hành động đã hoàn thành trong quá khứ nên dùng thì Quá khứ đơn."
  },
  {
    "id": 55,
    "question": "He is a talented designer ______ work has been featured in many magazines.",
    "options": {
      "A": "who",
      "B": "which",
      "C": "that",
      "D": "whose"
    },
    "key": "D",
    "explanation": "\"Whose\" dùng để chỉ sở hữu, thay thế cho tính từ sở hữu của người thiết kế (designer's work)."
  },
  {
    "id": 56,
    "question": "\"I'm really struggling with this essay.\" - \"______\"",
    "options": {
      "A": "That's too bad.",
      "B": "You should work harder.",
      "C": "No, don't worry about it.",
      "D": "Would you like some help?"
    },
    "key": "D",
    "explanation": "Đáp lại một lời phàn nàn về khó khăn bằng một lời đề nghị giúp đỡ lịch sự."
  },
  {
    "id": 57,
    "question": "Many people find it difficult to ______ a new language, especially as adults.",
    "options": {
      "A": "learn",
      "B": "teach",
      "C": "know",
      "D": "understand"
    },
    "key": "A",
    "explanation": "Cấu trúc \"find it difficult to do something\", động từ \"learn\" phù hợp nhất với ngữ cảnh học ngôn ngữ."
  },
  {
    "id": 58,
    "question": "The documentary, noted for its ______ content, captured many viewers' interest.",
    "options": {
      "A": "inform",
      "B": "informative",
      "C": "information",
      "D": "uninformative"
    },
    "key": "B",
    "explanation": "Cần một tính từ (informative - nhiều thông tin/bổ ích) để miêu tả tính chất của nội dung phim."
  },
  {
    "id": 59,
    "question": "Many kids enjoy playing with toys ______ various shapes and colours during their free time.",
    "options": {
      "A": "on",
      "B": "for",
      "C": "of",
      "D": "at"
    },
    "key": "C",
    "explanation": "Giới từ \"of\" dùng để chỉ đặc điểm, tính chất (đồ chơi có nhiều hình dạng và màu sắc)."
  },
  {
    "id": 60,
    "question": "After months of hard work, the project finally began to ______ and show promising results.",
    "options": {
      "A": "turn down",
      "B": "give up",
      "C": "carry out",
      "D": "take off"
    },
    "key": "D",
    "explanation": "Cụm động từ \"take off\" trong ngữ cảnh này mang nghĩa là bắt đầu trở nên thành công/khởi sắc."
  },
  {
    "id": 61,
    "question": "The children were excited about the trip, ______ the bad weather.",
    "options": {
      "A": "because of",
      "B": "in spite of",
      "C": "although",
      "D": "unless"
    },
    "key": "B",
    "explanation": "\"In spite of\" + cụm danh từ dùng để chỉ sự nhượng bộ (mặc dù thời tiết xấu)."
  },
  {
    "id": 62,
    "question": "If you want to say ______ opposite of \"difficult,\" which word would you choose?",
    "options": {
      "A": "the",
      "B": "a",
      "C": "an",
      "D": "Ø"
    },
    "key": "A",
    "explanation": "Sử dụng mạo từ xác định \"the\" vì \"opposite\" là danh từ đã được xác định rõ ràng."
  },
  {
    "id": 63,
    "question": "My dog doesn't put up with other animals invading his space; he barks ______.",
    "options": {
      "A": "after leaving",
      "B": "when he leaves",
      "C": "until they leave",
      "D": "or they leave"
    },
    "key": "C",
    "explanation": "Liên từ \"until\" (cho đến khi) phù hợp để diễn tả hành động sủa kéo dài tới khi các con vật khác rời đi."
  },
  {
    "id": 64,
    "question": "\"Hi, Sarah! How was your weekend?\" - \"______\"",
    "options": {
      "A": "The weather was fine, thanks.",
      "B": "I didn't do much.",
      "C": "I'm planning for next weekend.",
      "D": "It was great! How about yours?"
    },
    "key": "D",
    "explanation": "Cách đáp lại câu hỏi về kỳ nghỉ cuối tuần một cách tự nhiên và hỏi ngược lại đối phương."
  },
  {
    "id": 65,
    "question": "I ______ my friends over for dinner this Saturday while my parents are out.",
    "options": {
      "A": "invited",
      "B": "invite",
      "C": "am inviting",
      "D": "was inviting"
    },
    "key": "C",
    "explanation": "Thì Hiện tại tiếp diễn dùng để diễn tả một kế hoạch hoặc dự định đã được sắp xếp trong tương lai gần."
  },
  {
    "id": 66,
    "question": "It's vital for applicants to ______ all the required documents before the deadline to be considered for the position.",
    "options": {
      "A": "offer",
      "B": "submit",
      "C": "refer",
      "D": "mention"
    },
    "key": "B",
    "explanation": "Động từ \"submit\" (nộp) là từ phù hợp nhất khi nói về việc gửi các hồ sơ, tài liệu cần thiết."
  },
  {
    "id": 67,
    "question": "In developing countries, many people use wood for cooking, ______ has a bad influence on the environment.",
    "options": {
      "A": "which",
      "B": "when",
      "C": "what",
      "D": "that"
    },
    "key": "A",
    "explanation": "Đại từ quan hệ \"which\" dùng để thay thế cho cả mệnh đề đứng trước nó."
  },
  {
    "id": 68,
    "question": "She was very ______ about her plans for the summer vacation, which surprised her friends.",
    "options": {
      "A": "honest",
      "B": "open",
      "C": "clear",
      "D": "secretive"
    },
    "key": "D",
    "explanation": "Tính từ \"secretive\" (kín tiếng/giữ bí mật) phù hợp với ngữ cảnh gây bất ngờ cho bạn bè vì không ai biết kế hoạch."
  },
  {
    "id": 69,
    "question": "Tam's decision to move abroad was influenced by his desire to seek ______ opportunities.",
    "options": {
      "A": "the",
      "B": "a",
      "C": "an",
      "D": "Ø"
    },
    "key": "D",
    "explanation": "Không dùng mạo từ trước danh từ số nhiều (opportunities) khi đang nói về các cơ hội chung chung."
  },
  {
    "id": 70,
    "question": "The teacher encouraged us to be more ______ in our presentations.",
    "options": {
      "A": "engage",
      "B": "engaging",
      "C": "engaged",
      "D": "engagement"
    },
    "key": "B",
    "explanation": "Cần một tính từ (engaging - lôi cuốn/hấp dẫn) để miêu tả tính chất của bài thuyết trình."
  },
  {
    "id": 71,
    "question": "My sister, who often gives good advice, suggested that I ______ meditation to reduce stress.",
    "options": {
      "A": "try",
      "B": "trying",
      "C": "was trying",
      "D": "will try"
    },
    "key": "A",
    "explanation": "Cấu trúc giả định với động từ \"suggest\": suggest (that) + S + (should) + V-inf."
  },
  {
    "id": 72,
    "question": "\"Hello, Lisa. How's your project going?\" - \"______\"",
    "options": {
      "A": "I started it only last week.",
      "B": "It's going well, thanks!",
      "C": "It's a bit challenging, I guess.",
      "D": "Everyone is working hard, thank you."
    },
    "key": "B",
    "explanation": "Đây là câu trả lời trực tiếp và phổ biến nhất cho câu hỏi về tiến độ của một công việc."
  },
  {
    "id": 73,
    "question": "The Lunar New Year is the most important holiday; it is marked by family ______, traditional food, and fireworks.",
    "options": {
      "A": "gatherings",
      "B": "grouping",
      "C": "collections",
      "D": "crowding"
    },
    "key": "A",
    "explanation": "Cụm từ \"family gatherings\" (đoàn viên/tụ họp gia đình) là cách diễn đạt chuẩn trong ngữ cảnh lễ tết."
  },
  {
    "id": 74,
    "question": "Fish sauce, a key ingredient in Vietnamese cooking, ______ a unique taste to many dishes.",
    "options": {
      "A": "serves",
      "B": "collects",
      "C": "adds",
      "D": "combines"
    },
    "key": "C",
    "explanation": "Động từ \"add\" (thêm vào/mang lại) thường đi với cấu trúc \"add something to something\"."
  },
  {
    "id": 75,
    "question": "The teacher's words of ______ really encouraged me to believe in myself and try again.",
    "options": {
      "A": "motivate",
      "B": "motivation",
      "C": "motivating",
      "D": "motivational"
    },
    "key": "B",
    "explanation": "Cần một danh từ đứng sau giới từ \"of\" để tạo thành cụm danh từ (lời động viên)."
  },
  {
    "id": 76,
    "question": "Mai: \"I failed the English speaking contest yesterday.\" Nam: \"______\"",
    "options": {
      "A": "Don't give up, you'll do better next time.",
      "B": "Maybe you had to practise more before joining again.",
      "C": "I think your debate teacher will encourage you.",
      "D": "That's why you shouldn't join it."
    },
    "key": "A",
    "explanation": "\"Don't give up\" là cách an ủi và khích lệ phù hợp nhất khi ai đó vừa thất bại."
  },
  {
    "id": 77,
    "question": "Despite many obstacles, Minh never ______ his dream of studying abroad.",
    "options": {
      "A": "took away",
      "B": "gave up",
      "C": "turned off",
      "D": "broke out"
    },
    "key": "B",
    "explanation": "Cụm động từ \"give up\" mang nghĩa là từ bỏ (ước mơ)."
  },
  {
    "id": 78,
    "question": "Can you show me how ______ my time better when exams are coming soon?",
    "options": {
      "A": "to manage",
      "B": "to managing",
      "C": "managing",
      "D": "manage"
    },
    "key": "A",
    "explanation": "Cấu trúc từ để hỏi + to-V (how to manage) dùng để chỉ cách thức thực hiện hành động."
  },
  {
    "id": 79,
    "question": "The Trung Sisters are worshipped for ______ the country from foreign invaders.",
    "options": {
      "A": "defending",
      "B": "improving",
      "C": "widening",
      "D": "preserving"
    },
    "key": "A",
    "explanation": "Động từ \"defend\" (bảo vệ/phòng thủ) phù hợp với ngữ cảnh chống lại kẻ thù xâm lược."
  },
  {
    "id": 80,
    "question": "Hoa studied ______ she raised her average score remarkably.",
    "options": {
      "A": "so her final test that hard",
      "B": "so hard that for her final test",
      "C": "her final test so that hard",
      "D": "so hard for her final test that"
    },
    "key": "D",
    "explanation": "Cấu trúc \"so + adj/adv + that\": quá đến nỗi mà (học quá chăm chỉ cho kỳ thi đến nỗi đã tăng điểm)."
  },
  {
    "id": 81,
    "question": "Recently, many schools ______ online learning platforms to make lessons more flexible.",
    "options": {
      "A": "introduce",
      "B": "have introduced",
      "C": "introduced",
      "D": "introduces"
    },
    "key": "B",
    "explanation": "Dấu hiệu \"recently\" đi với thì Hiện tại hoàn thành để diễn tả hành động vừa mới xảy ra."
  },
  {
    "id": 82,
    "question": "Nam: \"Some people still think girls shouldn't play sports.\" Mary: \"______\"",
    "options": {
      "A": "That's an outdated idea - everyone has the same chance.",
      "B": "Maybe you should play sports with him.",
      "C": "Who's your favourite female athlete by the way?",
      "D": "Well, that's not true - sports are not for girls."
    },
    "key": "A",
    "explanation": "Câu trả lời phản bác một quan niệm cũ kỹ một cách lịch sự và hợp lý."
  },
  {
    "id": 83,
    "question": "The tour ______ a cooking class where you can learn basic Thai cuisine.",
    "options": {
      "A": "includes",
      "B": "consists",
      "C": "relates",
      "D": "affects"
    },
    "key": "A",
    "explanation": "Động từ \"include\" (bao gồm) dùng để liệt kê một phần của chương trình tour."
  },
  {
    "id": 84,
    "question": "My brother decided ______ a gap year before going to university.",
    "options": {
      "A": "take",
      "B": "taking",
      "C": "to take",
      "D": "took"
    },
    "key": "C",
    "explanation": "Cấu trúc \"decide to do something\": quyết định làm việc gì."
  },
  {
    "id": 85,
    "question": "Drinking more water can help ______ tiredness during the day.",
    "options": {
      "A": "save",
      "B": "reduce",
      "C": "cure",
      "D": "shorten"
    },
    "key": "B",
    "explanation": "Động từ \"reduce\" (giảm bớt) thường đi với các danh từ chỉ trạng thái tiêu cực như sự mệt mỏi, đau đớn."
  },
  {
    "id": 86,
    "question": "The ______ you spend learning from mistakes, the ______ you become.",
    "options": {
      "A": "most time - wiser",
      "B": "more time - wiser",
      "C": "most time - more wiser",
      "D": "more time - more wise"
    },
    "key": "B",
    "explanation": "Cấu trúc so sánh càng... càng...: The + comparative + S + V, the + comparative + S + V."
  },
  {
    "id": 87,
    "question": "The Amazon rainforest, the largest tropical rainforest in the world, ______ 20% of the world's oxygen.",
    "options": {
      "A": "causes",
      "B": "produces",
      "C": "exists",
      "D": "constructs"
    },
    "key": "B",
    "explanation": "Động từ \"produce\" (sản sinh/tạo ra) phù hợp để nói về quá trình tạo ra oxy của rừng."
  },
  {
    "id": 88,
    "question": "TripAdvisor reviewers advised that travellers should ______ out Phong Nha Cave while in central Viet Nam.",
    "options": {
      "A": "set",
      "B": "get",
      "C": "check",
      "D": "go"
    },
    "key": "C",
    "explanation": "Cụm động từ \"check out\" có nghĩa là tìm hiểu, tham quan hoặc trải nghiệm một địa điểm nào đó."
  },
  {
    "id": 89,
    "question": "The busy streets of Ho Chi Minh City offer a(n) ______ of flavours, from delicious street food to international cuisine, making it a paradise for foodies.",
    "options": {
      "A": "extent",
      "B": "shortage",
      "C": "variety",
      "D": "amount"
    },
    "key": "C",
    "explanation": "Cụm từ \"a variety of\" dùng để chỉ sự đa dạng, phong phú của các loại hương vị."
  },
  {
    "id": 90,
    "question": "Huy: \"I feel like I can't handle all the homework this week.\" Linh: \"______\"",
    "options": {
      "A": "You should take one step at a time; it'll feel easier.",
      "B": "Just skip everything and rest all week and it was fine.",
      "C": "Put your homework back and think of lying on the beach.",
      "D": "You'll probably fail anyway so no need to put any effort."
    },
    "key": "A",
    "explanation": "Lời khuyên \"take one step at a time\" (làm từng bước một) là cách phản hồi tích cực và phù hợp để khích lệ bạn bè."
  },
  {
    "id": 91,
    "question": "Before using your new phone, remember to ______ all your important data.",
    "options": {
      "A": "back up",
      "B": "send off",
      "C": "lock down",
      "D": "put away"
    },
    "key": "A",
    "explanation": "Cụm động từ \"back up\" mang nghĩa là sao lưu dữ liệu để tránh bị mất."
  },
  {
    "id": 92,
    "question": "While I ______ through the park yesterday morning, my phone suddenly rang loudly.",
    "options": {
      "A": "jogged",
      "B": "was jogging",
      "C": "have jogged",
      "D": "jogging"
    },
    "key": "B",
    "explanation": "Dùng thì Quá khứ tiếp diễn để diễn tả một hành động đang xảy ra (jogging) thì có hành động khác xen vào (rang)."
  },
  {
    "id": 93,
    "question": "The ______ you speak, the ______ you earn from others.",
    "options": {
      "A": "much honest - more trusting",
      "B": "much honestly - more trust",
      "C": "more honest - much trusted",
      "D": "more honestly - more trust"
    },
    "key": "D",
    "explanation": "Cấu trúc so sánh càng... càng... với trạng từ \"honestly\" bổ nghĩa cho động từ \"speak\" và danh từ \"trust\"."
  },
  {
    "id": 94,
    "question": "She has become somewhat addicted ______ online shopping, buying things she didn't really need.",
    "options": {
      "A": "with",
      "B": "at",
      "C": "to",
      "D": "on"
    },
    "key": "C",
    "explanation": "Cấu trúc \"be addicted to something\" mang nghĩa là bị nghiện hoặc lệ thuộc vào cái gì."
  },
  {
    "id": 95,
    "question": "The teacher advised that everyone ______ careful when sharing personal information online.",
    "options": {
      "A": "is",
      "B": "be",
      "C": "was",
      "D": "being"
    },
    "key": "B",
    "explanation": "Cấu trúc giả định với động từ \"advise\": advise that + S + (should) + V-inf."
  },
  {
    "id": 96,
    "question": "Phu Quoc ______ sandy beaches, clear blue waters, and beautiful coral reefs.",
    "options": {
      "A": "expresses",
      "B": "boasts",
      "C": "admires",
      "D": "delivers"
    },
    "key": "B",
    "explanation": "Động từ \"boast\" thường được dùng để nói về một địa danh sở hữu những đặc điểm/vẻ đẹp đáng tự hào."
  },
  {
    "id": 97,
    "question": "Anna always checks online reviews before buying anything, ______ she doesn't waste her money on poor-quality products.",
    "options": {
      "A": "because of",
      "B": "although",
      "C": "so that",
      "D": "unless"
    },
    "key": "C",
    "explanation": "Liên từ \"so that\" dùng để chỉ mục đích (để cho/nhằm mục đích không lãng phí tiền)."
  },
  {
    "id": 98,
    "question": "After three weeks ______ the ship, they finally reached the coast of South America.",
    "options": {
      "A": "at",
      "B": "in",
      "C": "over",
      "D": "on"
    },
    "key": "D",
    "explanation": "Giới từ \"on\" được dùng khi nói về việc ở trên tàu (on a ship/on board)."
  },
  {
    "id": 99,
    "question": "To get promoted in this company, you need to work really ______ to show your dedication.",
    "options": {
      "A": "more harder",
      "B": "hardly ever",
      "C": "more hardly",
      "D": "much harder"
    },
    "key": "D",
    "explanation": "Sử dụng \"much\" để nhấn mạnh cho hình thức so sánh hơn của trạng từ \"hard\"."
  },
  {
    "id": 100,
    "question": "The doctor ______ clinic is located near the shopping mall is famous for treating rare skin conditions.",
    "options": {
      "A": "who",
      "B": "which",
      "C": "whose",
      "D": "whom"
    },
    "key": "C",
    "explanation": "Đại từ quan hệ \"whose\" thay thế cho tính từ sở hữu để chỉ phòng khám của vị bác sĩ đó."
  },
  {
    "id": 101,
    "question": "This board game takes a lot ______ to finish than the one we played last weekend.",
    "options": {
      "A": "longest",
      "B": "as long",
      "C": "long enough",
      "D": "longer"
    },
    "key": "D",
    "explanation": "Dựa vào từ \"than\", ta cần dùng hình thức so sánh hơn \"longer\"."
  },
  {
    "id": 102,
    "question": "Good learners often make a plan to ______ difficult tasks and stay on track.",
    "options": {
      "A": "deal with",
      "B": "catch up",
      "C": "take off",
      "D": "come over"
    },
    "key": "A",
    "explanation": "Cụm động từ \"deal with\" mang nghĩa là giải quyết hoặc đối phó với những nhiệm vụ khó khăn."
  },
  {
    "id": 103,
    "question": "Do you ______ helping with cleaning the campsite before we leave the park?",
    "options": {
      "A": "want",
      "B": "mind",
      "C": "have",
      "D": "need"
    },
    "key": "B",
    "explanation": "Cấu trúc \"mind + V-ing\" dùng để hỏi xem ai đó có phiền khi làm việc gì không."
  },
  {
    "id": 104,
    "question": "Alice is surprised by An's decision. Alice: \"You want to become a doctor? Really?\" An: \"______\"",
    "options": {
      "A": "No, I just went to the hospital once.",
      "B": "Yes, it's been my dream for a long time.",
      "C": "Doctors always have a lot of work.",
      "D": "Maybe you can be a doctor too."
    },
    "key": "B",
    "explanation": "Câu trả lời khẳng định và giải thích lý do ước mơ phù hợp nhất với sự ngạc nhiên của đối phương."
  },
  {
    "id": 105,
    "question": "Mai said that her sister had bought a new car ______.",
    "options": {
      "A": "yesterday",
      "B": "last weekend",
      "C": "the day before",
      "D": "the following week"
    },
    "key": "C",
    "explanation": "Trong câu tường thuật, trạng từ chỉ thời gian \"yesterday\" phải được chuyển thành \"the day before\"."
  },
  {
    "id": 106,
    "question": "They usually ______ their weekly grocery shopping early in the morning, when the store is less crowded.",
    "options": {
      "A": "do",
      "B": "take",
      "C": "go",
      "D": "deal"
    },
    "key": "A",
    "explanation": "Kết hợp từ (Collocation): do the shopping (đi mua sắm)."
  },
  {
    "id": 107,
    "question": "People ______ to care much about saving water, but now it's a big concern.",
    "options": {
      "A": "aren't used",
      "B": "didn't used",
      "C": "didn't use",
      "D": "not used"
    },
    "key": "C",
    "explanation": "Cấu trúc \"didn't use to + V-inf\" diễn tả một thói quen hoặc trạng thái trong quá khứ nay không còn nữa."
  },
  {
    "id": 108,
    "question": "______ you practice, ______ you will become at playing the piano.",
    "options": {
      "A": "The most - the better",
      "B": "The more - the better",
      "C": "The better - the most",
      "D": "The most - the best"
    },
    "key": "B",
    "explanation": "Cấu trúc so sánh càng... càng...: The more + S + V, the better + S + V."
  },
  {
    "id": 109,
    "question": "______ did the tsunami hit the coast without any warning?",
    "options": {
      "A": "Who",
      "B": "How",
      "C": "Which",
      "D": "Where"
    },
    "key": "B",
    "explanation": "Từ để hỏi \"How\" (như thế nào) dùng để hỏi về cách thức hoặc tính chất của sự việc sóng thần ập đến."
  },
  {
    "id": 110,
    "question": "That travel journal belongs to a close friend of ______. We shared many experiences during our backpacking trip.",
    "options": {
      "A": "I",
      "B": "my",
      "C": "me",
      "D": "mine"
    },
    "key": "D",
    "explanation": "Sử dụng đại từ sở hữu \"mine\" trong cấu trúc \"a friend of mine\" (một người bạn của tôi)."
  },
  {
    "id": 111,
    "question": "Linh is really ______ gardening because it helps her relax after work.",
    "options": {
      "A": "fond of",
      "B": "keen at",
      "C": "interested to",
      "D": "excited by"
    },
    "key": "A",
    "explanation": "Cấu trúc \"be fond of something\" mang nghĩa là yêu thích cái gì (các phương án khác sai giới từ hoặc cấu trúc)."
  },
  {
    "id": 112,
    "question": "Andy is talking to Duy. Andy: \"I hope our team wins the final match tomorrow.\" Duy: \"______\"",
    "options": {
      "A": "Many happy returns to the day!",
      "B": "The same to you, Andy!",
      "C": "I hope so too. Let's do our best!",
      "D": "Why don't you try harder this time?"
    },
    "key": "C",
    "explanation": "Câu trả lời thể hiện sự đồng tình với hy vọng của bạn và đưa ra lời cổ vũ."
  },
  {
    "id": 113,
    "question": "The film's message about family and loss really ______ a deep impression on me.",
    "options": {
      "A": "fell",
      "B": "made",
      "C": "gave",
      "D": "brought"
    },
    "key": "B",
    "explanation": "Cấu trúc \"make an impression on someone\" mang nghĩa là tạo ấn tượng với ai đó."
  },
  {
    "id": 114,
    "question": "The Sydney Opera House, ______ was built in 1957, is one of the city's most famous landmarks.",
    "options": {
      "A": "where",
      "B": "that",
      "C": "which",
      "D": "when"
    },
    "key": "C",
    "explanation": "Đại từ quan hệ \"which\" dùng để thay thế cho danh từ chỉ vật đứng trước và bắt đầu một mệnh đề quan hệ không xác định (sau dấu phẩy)."
  },
  {
    "id": 115,
    "question": "Everyone enjoyed the nature hike, ______?",
    "options": {
      "A": "didn't he",
      "B": "weren't they",
      "C": "didn't they",
      "D": "wasn't it"
    },
    "key": "C",
    "explanation": "Với đại từ bất định \"Everyone\", đại từ ở câu hỏi đuôi phải là \"they\" và động từ chia ở phủ định quá khứ."
  },
  {
    "id": 116,
    "question": "He looks pale and tired. He ______ be coming down with the flu.",
    "options": {
      "A": "should",
      "B": "mustn't",
      "C": "could",
      "D": "wouldn't"
    },
    "key": "C",
    "explanation": "\"Could\" dùng để chỉ một khả năng có thể xảy ra ở hiện tại dựa trên các dấu hiệu quan sát được."
  },
  {
    "id": 117,
    "question": "My uncle works as ______ editor for a popular science magazine.",
    "options": {
      "A": "a",
      "B": "Ø",
      "C": "the",
      "D": "an"
    },
    "key": "D",
    "explanation": "Dùng mạo từ \"an\" trước danh từ chỉ nghề nghiệp bắt đầu bằng một nguyên âm (editor)."
  },
  {
    "id": 118,
    "question": "I need to ______ my phone before the battery dies.",
    "options": {
      "A": "turn",
      "B": "share",
      "C": "charge",
      "D": "upload"
    },
    "key": "C",
    "explanation": "Động từ \"charge\" (sạc điện) phù hợp nhất với ngữ cảnh điện thoại sắp hết pin."
  },
  {
    "id": 119,
    "question": "She spoke too softly, so the audience at the back was unable ______ her.",
    "options": {
      "A": "to hear",
      "B": "hearing",
      "C": "heard",
      "D": "to hearing"
    },
    "key": "A",
    "explanation": "Cấu trúc \"be unable + to-V\" mang nghĩa là không thể làm gì."
  },
  {
    "id": 120,
    "question": "Nick looks sad and he talks to Linh. Nick: \"It's unbelievable! Someone took my bicycle.\" Linh: \"______\"",
    "options": {
      "A": "That's awful! I'm so sorry that happened to you.",
      "B": "Too bad, I am unavailable to join you today.",
      "C": "I disagree, it's not safe to cycle in these conditions.",
      "D": "Perhaps you could try a different activity, Nick."
    },
    "key": "A",
    "explanation": "Đây là lời thể hiện sự đồng cảm và chia sẻ khi bạn mình gặp chuyện không may."
  },
  {
    "id": 121,
    "question": "When the alarm went off, it took me a few minutes to ______ myself to get up.",
    "options": {
      "A": "make",
      "B": "motivate",
      "C": "advance",
      "D": "focus"
    },
    "key": "B",
    "explanation": "Động từ \"motivate\" (thúc đẩy/tạo động lực) phù hợp với việc cố gắng để rời khỏi giường."
  },
  {
    "id": 122,
    "question": "How do you find out about local events? Do you rely on a ______ source that provides reliable information?",
    "options": {
      "A": "depending",
      "B": "dependent",
      "C": "dependable",
      "D": "depended"
    },
    "key": "C",
    "explanation": "Tính từ \"dependable\" (đáng tin cậy) dùng để chỉ tính chất của nguồn thông tin."
  },
  {
    "id": 123,
    "question": "To stay healthy, it's important to ______ enough fruits and vegetables every day.",
    "options": {
      "A": "consume",
      "B": "ignore",
      "C": "digest",
      "D": "cook"
    },
    "key": "A",
    "explanation": "Động từ \"consume\" (tiêu thụ/ăn uống) thường dùng trong các lời khuyên về dinh dưỡng."
  },
  {
    "id": 124,
    "question": "Mark: \"How was the movie last night?\" Daniel: \"It was so ______ that everyone in the theatre was laughing and clapping.\"",
    "options": {
      "A": "conductive",
      "B": "confusing",
      "C": "entertaining",
      "D": "pretty"
    },
    "key": "C",
    "explanation": "Tính từ \"entertaining\" (có tính giải trí/hay) phù hợp với phản ứng cười và vỗ tay của khán giả."
  },
  {
    "id": 125,
    "question": "Even though he can be quite annoying, I have to ______ him because he's my roommate.",
    "options": {
      "A": "look for",
      "B": "get away from",
      "C": "find out",
      "D": "put up with"
    },
    "key": "D",
    "explanation": "Cụm động từ \"put up with\" mang nghĩa là chịu đựng ai đó/cái gì đó."
  },
  {
    "id": 126,
    "question": "When people live together in a(n) ______, they have to agree on certain rules to follow.",
    "options": {
      "A": "activity",
      "B": "gathering",
      "C": "population",
      "D": "community"
    },
    "key": "D",
    "explanation": "Danh từ \"community\" (cộng đồng) chỉ một nhóm người sống chung và tuân thủ các quy tắc chung."
  },
  {
    "id": 127,
    "question": "He made a few mistakes during the presentation; ______, his overall performance was impressive.",
    "options": {
      "A": "even though",
      "B": "even so",
      "C": "therefore",
      "D": "although"
    },
    "key": "B",
    "explanation": "Trạng từ liên kết \"even so\" (tuy vậy) dùng để nối hai ý trái ngược nhau trong hai câu riêng biệt."
  },
  {
    "id": 128,
    "question": "Phan: \"What has happened to you?\" May: \"A bee stung me when it ______ honey.\"",
    "options": {
      "A": "is collecting",
      "B": "collected",
      "C": "has collected",
      "D": "was collecting"
    },
    "key": "D",
    "explanation": "Dùng thì Quá khứ tiếp diễn để diễn tả hành động đang diễn ra (con ong đang hút mật) thì có hành động khác xen vào (đốt)."
  },
  {
    "id": 129,
    "question": "Minh: \"Hi, San! How was your Sunday?\" San: \"______\"",
    "options": {
      "A": "My family stay at home. Thanks.",
      "B": "I didn't do my homework.",
      "C": "I'm looking forward to next Sunday.",
      "D": "It was great! How about yours?"
    },
    "key": "D",
    "explanation": "Lời lịch sự và tự nhiên nhất cho câu hỏi thăm về ngày nghỉ cuối tuần."
  },
  {
    "id": 130,
    "question": "Lisa: \"______?\" Clara: \"I'm a hundred sixty centimetres tall.\"",
    "options": {
      "A": "How high are you",
      "B": "How tall are you",
      "C": "How heavy are you",
      "D": "What is your weight"
    },
    "key": "B",
    "explanation": "Cấu trúc \"How tall + be + S?\" dùng để hỏi về chiều cao của người."
  },
  {
    "id": 131,
    "question": "Even though they had disagreements, they chose to ______ each other for the sake of the team.",
    "options": {
      "A": "take care of",
      "B": "get on with",
      "C": "run out of",
      "D": "hang out with"
    },
    "key": "B",
    "explanation": "Cụm động từ \"get on with\" mang nghĩa là hòa thuận/hòa hợp với ai đó."
  },
  {
    "id": 132,
    "question": "Foreign languages like English, French, Chinese or Russian are ______ subjects for students in schools in Viet Nam.",
    "options": {
      "A": "compulsory",
      "B": "forbidden",
      "C": "requiring",
      "D": "unavoidable"
    },
    "key": "A",
    "explanation": "Tính từ \"compulsory\" (bắt buộc) dùng để chỉ các môn học bắt buộc trong chương trình giáo dục."
  },
  {
    "id": 133,
    "question": "Youngsters sometimes paint or embroider their jeans to make them ______ fashionable.",
    "options": {
      "A": "see",
      "B": "turn",
      "C": "look",
      "D": "notice"
    },
    "key": "C",
    "explanation": "Động từ nối \"look\" đi kèm với tính từ để chỉ vẻ bề ngoài của sự vật."
  },
  {
    "id": 134,
    "question": "They reached no agreement in the discussion as neither side would give way to ______.",
    "options": {
      "A": "the other",
      "B": "any other",
      "C": "another",
      "D": "others"
    },
    "key": "A",
    "explanation": "Cụm từ \"the other\" dùng để chỉ đối phương (phía còn lại) trong một cuộc tranh luận giữa hai bên."
  },
  {
    "id": 135,
    "question": "Once we ______ the environment, it takes many years for the system to recover.",
    "options": {
      "A": "damage",
      "B": "are damaging",
      "C": "have damaged",
      "D": "will damage"
    },
    "key": "C",
    "explanation": "Dùng thì Hiện tại hoàn thành sau liên từ \"Once\" để chỉ một hành động đã hoàn tất dẫn đến hệ quả."
  },
  {
    "id": 136,
    "question": "I couldn't find ______, and so I took this one.",
    "options": {
      "A": "a blanket large enough",
      "B": "an enough large blanket",
      "C": "a large blanket enough",
      "D": "a blanket enough large"
    },
    "key": "A",
    "explanation": "Cấu trúc: Adj + enough + Noun hoặc Noun + Adj + enough (a blanket large enough)."
  },
  {
    "id": 137,
    "question": "If they had the correct map with them during their hike, they ______ lost in the forest.",
    "options": {
      "A": "will not get",
      "B": "will get",
      "C": "would not get",
      "D": "would get"
    },
    "key": "C",
    "explanation": "Câu điều kiện loại 2 (mệnh đề If chia quá khứ), mệnh đề chính dùng \"would not + V-inf\"."
  },
  {
    "id": 138,
    "question": "Mai: \"How is the air in big cities in your country?\" Alex: \"It is heavily ______: there is so much traffic and industry.\"",
    "options": {
      "A": "pollute",
      "B": "polluted",
      "C": "polluting",
      "D": "unpolluted"
    },
    "key": "B",
    "explanation": "Tính từ \"polluted\" (bị ô nhiễm) dùng để miêu tả tình trạng của không khí."
  },
  {
    "id": 139,
    "question": "Max: \"Hey, Emily. How's your family?\" Emily: \"______\"",
    "options": {
      "A": "They are doing nothing, thanks.",
      "B": "I don't know how they are.",
      "C": "They are busy with work.",
      "D": "Everyone is okay, thank you."
    },
    "key": "D",
    "explanation": "Lời phổ biến và lịch sự khi được hỏi thăm về sức khỏe/tình hình gia đình."
  },
  {
    "id": 140,
    "question": "Lewis: \"Hi, John. Are you ready for the interview?\" John: \"______\"",
    "options": {
      "A": "I'm very happy just now!",
      "B": "No, I'm well-prepared.",
      "C": "Everyone is really excited.",
      "D": "Yes, I'm all set."
    },
    "key": "D",
    "explanation": "Cụm từ \"I'm all set\" mang nghĩa là tôi đã sẵn sàng/đã chuẩn bị xong hết rồi."
  },
  {
    "id": 141,
    "question": "Emma: \"This maths problem is really confusing.\" Liam: \"Don't worry, I can ______ it step by step if you want.\"",
    "options": {
      "A": "take off",
      "B": "take through",
      "C": "take after",
      "D": "take up"
    },
    "key": "B",
    "explanation": "Cụm động từ \"take (someone) through (something)\" nghĩa là hướng dẫn chi tiết cho ai đó."
  },
  {
    "id": 142,
    "question": "Sarah: \"Where should we meet before the concert?\" Jake: \"Let's wait ______ the front gate so that it's easy to find each other.\"",
    "options": {
      "A": "on",
      "B": "in",
      "C": "at",
      "D": "from"
    },
    "key": "C",
    "explanation": "Sử dụng giới từ \"at\" để chỉ một địa điểm cụ thể (cổng trước)."
  },
  {
    "id": 143,
    "question": "Tom: \"My phone is almost out of battery.\" Mia: \"You can borrow my charger if you ______ it back before class ends.\"",
    "options": {
      "A": "bring",
      "B": "will bring",
      "C": "are bringing",
      "D": "brought"
    },
    "key": "A",
    "explanation": "Trong mệnh đề điều kiện loại 1 (If clause), động từ được chia ở thì Hiện tại đơn."
  },
  {
    "id": 144,
    "question": "If you don't know which evening class to take, I'd ______ the Advanced Speaking Class. It helps a lot with confidence.",
    "options": {
      "A": "support",
      "B": "notice",
      "C": "encourage",
      "D": "recommend"
    },
    "key": "D",
    "explanation": "Động từ \"recommend\" (gợi ý/giới thiệu) dùng khi đưa ra lời khuyên về một sự lựa chọn tốt."
  },
  {
    "id": 145,
    "question": "The members of this cooking club are super friendly. ______, they often share free snacks after each session.",
    "options": {
      "A": "Besides",
      "B": "Because",
      "C": "Meanwhile",
      "D": "However"
    },
    "key": "A",
    "explanation": "Trạng từ \"Besides\" (ngoài ra) dùng để thêm thông tin bổ trợ cho ý trước đó."
  },
  {
    "id": 146,
    "question": "Lan: \"Our new English teacher seems really strict.\" Marry: \"She is, but she's also very ______ and explains lessons clearly.\"",
    "options": {
      "A": "well-prepared",
      "B": "well-prepare",
      "C": "good-prepared",
      "D": "good-preparing"
    },
    "key": "A",
    "explanation": "Tính từ ghép \"well-prepared\" (chuẩn bị bài kỹ lưỡng) phù hợp để miêu tả một giáo viên giỏi."
  },
  {
    "id": 147,
    "question": "Mark: \"Our field trip is next Friday.\" Alice: \"Have you made your ______ yet? It's peak season, so everything will be full.\"",
    "options": {
      "A": "permission",
      "B": "reservation",
      "C": "explanation",
      "D": "decision"
    },
    "key": "B",
    "explanation": "Danh từ \"reservation\" (việc đặt chỗ trước) phù hợp với ngữ cảnh chuẩn bị cho chuyến đi vào mùa cao điểm."
  },
  {
    "id": 148,
    "question": "John: \"I finally borrowed ______ book you recommended for the literature project.\" Lisa: \"Nice! I think you'll enjoy it – the plot is amazing.\"",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Dùng mạo từ \"the\" vì cuốn sách đã được xác định cụ thể (cuốn sách mà bạn đã giới thiệu)."
  },
  {
    "id": 149,
    "question": "Danny: \"I'm thinking of joining the dance club this semester. What do you think?\" Tom: \"______\"",
    "options": {
      "A": "That sounds great! You should totally try it.",
      "B": "Yes, I joined it yesterday evening.",
      "C": "I don't know the schedule. Ask the librarian.",
      "D": "Wait for me here; I'll be back tomorrow."
    },
    "key": "A",
    "explanation": "Lời thể hiện sự ủng hộ và khuyến khích đối với ý định của bạn."
  },
  {
    "id": 150,
    "question": "Anna: \"______\" Ben: \"Sure. I'll help you review the last two chapters.\"",
    "options": {
      "A": "Have you finished reading the book?",
      "B": "Are you done with your revision?",
      "C": "Do you know where my notebook is?",
      "D": "Can you help me study for the test?"
    },
    "key": "D",
    "explanation": "Câu hỏi nhờ vả (Can you help me...) phù hợp với lời đồng ý giúp đỡ ôn tập."
  },
  {
    "id": 151,
    "question": "She ______ her homework when the phone rang.",
    "options": {
      "A": "does",
      "B": "was doing",
      "C": "has done",
      "D": "is doing"
    },
    "key": "B",
    "explanation": "Dùng quá khứ tiếp diễn cho hành động đang xảy ra thì bị xen ngang."
  },
  {
    "id": 152,
    "question": "By the time we arrived, the movie ******.",
    "options": {
      "A": "already started",
      "B": "had already started",
      "C": "has already started",
      "D": "was already starting"
    },
    "key": "B",
    "explanation": "Quá khứ hoàn thành cho hành động xảy ra trước một hành động khác."
  },
  {
    "id": 153,
    "question": "They ______ to Ha Long Bay three times so far.",
    "options": {
      "A": "go",
      "B": "went",
      "C": "have gone",
      "D": "are going"
    },
    "key": "C",
    "explanation": "Hiện tại hoàn thành dùng với \"so far\"."
  },
  {
    "id": 154,
    "question": "If it ______ tomorrow, we will stay home and watch movies.",
    "options": {
      "A": "rains",
      "B": "rained",
      "C": "will rain",
      "D": "would rain"
    },
    "key": "A",
    "explanation": "Câu điều kiện loại 1 dùng hiện tại đơn sau \"if\"."
  },
  {
    "id": 155,
    "question": "I wish I ______ taller so I could play basketball better.",
    "options": {
      "A": "am",
      "B": "was",
      "C": "were",
      "D": "will be"
    },
    "key": "C",
    "explanation": "Wish dùng \"were\" cho điều không có thật ở hiện tại."
  },
  {
    "id": 156,
    "question": "This phone is ______ expensive than the one I bought last year.",
    "options": {
      "A": "more",
      "B": "most",
      "C": "much",
      "D": "many"
    },
    "key": "A",
    "explanation": "So sánh hơn với tính từ dài dùng \"more\"."
  },
  {
    "id": 157,
    "question": "The more you practise, ______ your English will become.",
    "options": {
      "A": "good",
      "B": "better",
      "C": "the better",
      "D": "the best"
    },
    "key": "C",
    "explanation": "Cấu trúc càng... càng: The more... the better."
  },
  {
    "id": 158,
    "question": "She prefers ______ books to watching TV in the evening.",
    "options": {
      "A": "read",
      "B": "to read",
      "C": "reading",
      "D": "reads"
    },
    "key": "C",
    "explanation": "Prefer + V-ing để nói sở thích chung."
  },
  {
    "id": 159,
    "question": "My father promised ______ me to the zoo next weekend.",
    "options": {
      "A": "take",
      "B": "to take",
      "C": "taking",
      "D": "took"
    },
    "key": "B",
    "explanation": "Promise + to V."
  },
  {
    "id": 160,
    "question": "He is very good ______ solving math problems quickly.",
    "options": {
      "A": "in",
      "B": "at",
      "C": "on",
      "D": "for"
    },
    "key": "B",
    "explanation": "Good at + V-ing."
  },
  {
    "id": 161,
    "question": "We usually have dinner ______ 7 o’clock in the evening.",
    "options": {
      "A": "on",
      "B": "in",
      "C": "at",
      "D": "by"
    },
    "key": "C",
    "explanation": "Dùng \"at\" với giờ cụ thể."
  },
  {
    "id": 162,
    "question": "This is the village ______ my grandparents were born.",
    "options": {
      "A": "which",
      "B": "who",
      "C": "where",
      "D": "whose"
    },
    "key": "C",
    "explanation": "Where chỉ nơi chốn."
  },
  {
    "id": 163,
    "question": "The girl ______ bag was stolen called the police immediately.",
    "options": {
      "A": "who",
      "B": "whom",
      "C": "whose",
      "D": "which"
    },
    "key": "C",
    "explanation": "Whose chỉ sở hữu."
  },
  {
    "id": 164,
    "question": "The book ______ I borrowed from the library is very interesting.",
    "options": {
      "A": "who",
      "B": "whom",
      "C": "which",
      "D": "whose"
    },
    "key": "C",
    "explanation": "Which thay thế cho vật."
  },
  {
    "id": 165,
    "question": "Many old houses ______ in my neighbourhood last year.",
    "options": {
      "A": "pulled down",
      "B": "were pulled down",
      "C": "have pulled down",
      "D": "are pulled down"
    },
    "key": "B",
    "explanation": "Bị động quá khứ đơn: was/were + V3."
  },
  {
    "id": 166,
    "question": "The teacher asked us ______ we had finished the test yet.",
    "options": {
      "A": "if",
      "B": "that",
      "C": "what",
      "D": "whether"
    },
    "key": "A",
    "explanation": "Câu hỏi Yes/No dùng \"if\"."
  },
  {
    "id": 167,
    "question": "Although it was raining heavily, ______ we still went cycling.",
    "options": {
      "A": "but",
      "B": "however",
      "C": "∅",
      "D": "so"
    },
    "key": "C",
    "explanation": "Although không đi với \"but\"."
  },
  {
    "id": 168,
    "question": "There isn’t ______ milk left in the fridge.",
    "options": {
      "A": "many",
      "B": "much",
      "C": "few",
      "D": "a few"
    },
    "key": "B",
    "explanation": "Much dùng với danh từ không đếm được."
  },
  {
    "id": 169,
    "question": "****** people came to the concert because of the bad weather.",
    "options": {
      "A": "Few",
      "B": "Little",
      "C": "Much",
      "D": "Any"
    },
    "key": "A",
    "explanation": "Few dùng với danh từ đếm được."
  },
  {
    "id": 170,
    "question": "She ______ very hard because she wants to pass the exam.",
    "options": {
      "A": "study",
      "B": "studies",
      "C": "is studying",
      "D": "studied"
    },
    "key": "B",
    "explanation": "Hiện tại đơn cho thói quen."
  },
  {
    "id": 171,
    "question": "If I ______ you, I would apologise to her right now.",
    "options": {
      "A": "am",
      "B": "was",
      "C": "were",
      "D": "will be"
    },
    "key": "C",
    "explanation": "Điều kiện loại 2 dùng \"were\"."
  },
  {
    "id": 172,
    "question": "The children enjoy ______ in the park every afternoon.",
    "options": {
      "A": "play",
      "B": "to play",
      "C": "playing",
      "D": "played"
    },
    "key": "C",
    "explanation": "Enjoy + V-ing."
  },
  {
    "id": 173,
    "question": "This city is becoming more and more ______. There are too many cars.",
    "options": {
      "A": "pollute",
      "B": "polluted",
      "C": "pollution",
      "D": "polluting"
    },
    "key": "B",
    "explanation": "Sau become dùng tính từ."
  },
  {
    "id": 174,
    "question": "Many young people choose ______ jobs because they want to start earning early.",
    "options": {
      "A": "vocation",
      "B": "vocational",
      "C": "vocationalist",
      "D": "vocationally"
    },
    "key": "B",
    "explanation": "Vocational là tính từ."
  },
  {
    "id": 175,
    "question": "We should ______ plastic bags to protect the environment.",
    "options": {
      "A": "reuse",
      "B": "recycle",
      "C": "reduce",
      "D": "refuse"
    },
    "key": "B",
    "explanation": "Recycle là tái chế."
  },
  {
    "id": 176,
    "question": "Ha Long Bay is one of the most famous ______ attractions in Vietnam.",
    "options": {
      "A": "tour",
      "B": "tourist",
      "C": "tourism",
      "D": "touristic"
    },
    "key": "C",
    "explanation": "Tourism là danh từ ngành du lịch."
  },
  {
    "id": 177,
    "question": "She always buys local ______ when she travels to different provinces.",
    "options": {
      "A": "special",
      "B": "specialty",
      "C": "specially",
      "D": "specialised"
    },
    "key": "B",
    "explanation": "Specialty là đặc sản."
  },
  {
    "id": 178,
    "question": "Living in the countryside is usually ______ than living in big cities.",
    "options": {
      "A": "peace",
      "B": "peaceful",
      "C": "peacefully",
      "D": "peacefulness"
    },
    "key": "B",
    "explanation": "Sau \"is\" dùng tính từ."
  },
  {
    "id": 179,
    "question": "The government should improve public ______ to make cities more liveable.",
    "options": {
      "A": "transport",
      "B": "transportation",
      "C": "transporter",
      "D": "transportable"
    },
    "key": "B",
    "explanation": "Transportation là hệ thống giao thông."
  },
  {
    "id": 180,
    "question": "He is a very ______ student and always finishes his work on time.",
    "options": {
      "A": "care",
      "B": "careful",
      "C": "carefully",
      "D": "careless"
    },
    "key": "B",
    "explanation": "Careful là tính từ chỉ người."
  },
  {
    "id": 181,
    "question": "The air ______ in this area is getting worse every year. (POLLUTE)",
    "options": {
      "A": "pollute",
      "B": "polluted",
      "C": "pollution",
      "D": "polluting"
    },
    "key": "C",
    "explanation": "Air pollution là cụm danh từ."
  },
  {
    "id": 182,
    "question": "Many rare animals are in danger of ______ . (EXTINCT)",
    "options": {
      "A": "extinct",
      "B": "extinction",
      "C": "extinctive",
      "D": "extinctly"
    },
    "key": "B",
    "explanation": "Danger of + danh từ."
  },
  {
    "id": 183,
    "question": "We need more ______ information about how to save energy. (EDUCATE)",
    "options": {
      "A": "educate",
      "B": "education",
      "C": "educational",
      "D": "educationally"
    },
    "key": "C",
    "explanation": "Trước danh từ dùng tính từ."
  },
  {
    "id": 184,
    "question": "She speaks English very ______ now after two years of practice. (FLUENT)",
    "options": {
      "A": "fluent",
      "B": "fluency",
      "C": "fluently",
      "D": "fluented"
    },
    "key": "C",
    "explanation": "Sau động từ dùng trạng từ."
  },
  {
    "id": 185,
    "question": "The ______ of the new bridge will help reduce traffic jams. (CONSTRUCT)",
    "options": {
      "A": "construct",
      "B": "construction",
      "C": "constructive",
      "D": "constructively"
    },
    "key": "B",
    "explanation": "Cần danh từ làm chủ ngữ."
  },
  {
    "id": 186,
    "question": "Many people believe that ______ tourism can harm the environment. (MASS)",
    "options": {
      "A": "mass",
      "B": "massive",
      "C": "massively",
      "D": "massy"
    },
    "key": "A",
    "explanation": "Mass tourism là cụm cố định."
  },
  {
    "id": 187,
    "question": "We should eat more ______ food instead of fast food. (HEALTH)",
    "options": {
      "A": "health",
      "B": "healthy",
      "C": "healthily",
      "D": "healthier"
    },
    "key": "B",
    "explanation": "Trước danh từ dùng tính từ."
  },
  {
    "id": 188,
    "question": "The teacher praised him for his ______ in class. (ACTIVE)",
    "options": {
      "A": "active",
      "B": "actively",
      "C": "activity",
      "D": "activism"
    },
    "key": "C",
    "explanation": "Sau \"his\" dùng danh từ."
  },
  {
    "id": 189,
    "question": "Solar energy is a very ______ source of power for the future. (RENEW)",
    "options": {
      "A": "renew",
      "B": "renewable",
      "C": "renewal",
      "D": "renewed"
    },
    "key": "B",
    "explanation": "Trước danh từ dùng tính từ."
  },
  {
    "id": 190,
    "question": "She felt very ______ after helping clean up the beach. (PRIDE)",
    "options": {
      "A": "pride",
      "B": "proud",
      "C": "proudly",
      "D": "prided"
    },
    "key": "B",
    "explanation": "Sau \"feel\" dùng tính từ."
  },
  {
    "id": 191,
    "question": "By the time we arrived at the cinema, the movie __________.",
    "options": {
      "A": "has already started",
      "B": "had already started",
      "C": "already started",
      "D": "was already starting"
    },
    "key": "B",
    "explanation": "Dùng thì Quá khứ hoàn thành cho hành động xảy ra trước một hành động quá khứ khác."
  },
  {
    "id": 192,
    "question": "She suggested ___________ early so that we could avoid the traffic jam.",
    "options": {
      "A": "to leave",
      "B": "leaving",
      "C": "leave",
      "D": "left"
    },
    "key": "B",
    "explanation": "Cấu trúc \"suggest + V-ing\" dùng để đưa ra một lời đề nghị."
  },
  {
    "id": 193,
    "question": "My parents always encourage me ___________ hard before important exams.",
    "options": {
      "A": "study",
      "B": "studying",
      "C": "to study",
      "D": "studied"
    },
    "key": "C",
    "explanation": "Cấu trúc \"encourage someone to do something\" (khuyến khích ai đó làm gì)."
  },
  {
    "id": 194,
    "question": "We have lived in this neighbourhood ___________ more than ten years.",
    "options": {
      "A": "since",
      "B": "for",
      "C": "in",
      "D": "from"
    },
    "key": "B",
    "explanation": "Dùng \"for\" đi kèm với một khoảng thời gian trong thì Hiện tại hoàn thành."
  },
  {
    "id": 195,
    "question": "The teacher reminded the students ___________ their homework before tomorrow morning.",
    "options": {
      "A": "hand in",
      "B": "to hand in",
      "C": "handing in",
      "D": "handed in"
    },
    "key": "B",
    "explanation": "Cấu trúc \"remind someone to do something\" (nhắc nhở ai làm gì)."
  },
  {
    "id": 196,
    "question": "He is very good ___________ repairing electronic devices.",
    "options": {
      "A": "at",
      "B": "in",
      "C": "on",
      "D": "with"
    },
    "key": "A",
    "explanation": "Cụm từ \"be good at\" có nghĩa là giỏi về lĩnh vực gì đó."
  },
  {
    "id": 197,
    "question": "By next month, she ___________ English in Australia for six months.",
    "options": {
      "A": "will study",
      "B": "will have studied",
      "C": "studies",
      "D": "has studied"
    },
    "key": "B",
    "explanation": "Thì Tương lai hoàn thành diễn tả hành động hoàn tất trước một thời điểm tương lai."
  },
  {
    "id": 198,
    "question": "I look forward ___________ you again at the school festival next week.",
    "options": {
      "A": "to see",
      "B": "to seeing",
      "C": "see",
      "D": "seeing"
    },
    "key": "B",
    "explanation": "Cấu trúc \"look forward to + V-ing\" mang nghĩa mong đợi làm việc gì."
  },
  {
    "id": 199,
    "question": "The children enjoy ___________ kites in the park on windy days.",
    "options": {
      "A": "fly",
      "B": "to fly",
      "C": "flying",
      "D": "flew"
    },
    "key": "C",
    "explanation": "Sau động từ \"enjoy\" ta luôn sử dụng danh động từ V-ing."
  },
  {
    "id": 200,
    "question": "She has been interested ___________ traditional Vietnamese music since she was a child.",
    "options": {
      "A": "on",
      "B": "at",
      "C": "in",
      "D": "with"
    },
    "key": "C",
    "explanation": "Cụm từ \"be interested in\" có nghĩa là quan tâm hoặc thích thú điều gì."
  },
  {
    "id": 201,
    "question": "The book ___________ you lent me last week is very interesting.",
    "options": {
      "A": "who",
      "B": "whose",
      "C": "which",
      "D": "whom"
    },
    "key": "C",
    "explanation": "Dùng đại từ quan hệ \"which\" để thay thế cho danh từ chỉ vật (The book)."
  },
  {
    "id": 202,
    "question": "This is the village ___________ my grandparents were born and grew up.",
    "options": {
      "A": "which",
      "B": "where",
      "C": "whose",
      "D": "who"
    },
    "key": "B",
    "explanation": "Dùng trạng từ quan hệ \"where\" để chỉ nơi chốn (the village)."
  },
  {
    "id": 203,
    "question": "The more you practise speaking English, ___________ your pronunciation becomes.",
    "options": {
      "A": "the better",
      "B": "better",
      "C": "the best",
      "D": "best"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh càng... càng...: \"The + comparative, the + comparative\"."
  },
  {
    "id": 204,
    "question": "Life in the countryside is usually ___________ peaceful than life in big cities.",
    "options": {
      "A": "more",
      "B": "most",
      "C": "much",
      "D": "many"
    },
    "key": "A",
    "explanation": "Sử dụng \"more\" trong cấu trúc so sánh hơn với tính từ dài (peaceful)."
  },
  {
    "id": 205,
    "question": "Please ___________ the music. The baby is sleeping.",
    "options": {
      "A": "turn up",
      "B": "turn down",
      "C": "turn on",
      "D": "turn off"
    },
    "key": "B",
    "explanation": "Cụm động từ \"turn down\" có nghĩa là vặn nhỏ âm lượng lại."
  },
  {
    "id": 206,
    "question": "We decided to ___________ the picnic because of the heavy rain.",
    "options": {
      "A": "call off",
      "B": "put on",
      "C": "look after",
      "D": "run out"
    },
    "key": "A",
    "explanation": "Cụm động từ \"call off\" có nghĩa là hủy bỏ một sự kiện."
  },
  {
    "id": 207,
    "question": "The girl ___________ bag was stolen is reporting to the police now.",
    "options": {
      "A": "who",
      "B": "whose",
      "C": "which",
      "D": "whom"
    },
    "key": "B",
    "explanation": "Dùng \"whose\" để chỉ sở hữu cho danh từ đứng trước (The girl)."
  },
  {
    "id": 208,
    "question": "This smartphone is ___________ expensive than the one I bought last year.",
    "options": {
      "A": "more",
      "B": "most",
      "C": "much",
      "D": "many"
    },
    "key": "A",
    "explanation": "Tiếp tục sử dụng cấu trúc so sánh hơn \"more + adj + than\"."
  },
  {
    "id": 209,
    "question": "They had to ___________ sugar because the doctor said it was bad for health.",
    "options": {
      "A": "cut down on",
      "B": "look forward to",
      "C": "take care of",
      "D": "give up"
    },
    "key": "A",
    "explanation": "Cụm động từ \"cut down on\" có nghĩa là cắt giảm lượng tiêu thụ."
  },
  {
    "id": 210,
    "question": "The house ___________ we are going to buy is located near the river.",
    "options": {
      "A": "who",
      "B": "whose",
      "C": "which",
      "D": "where"
    },
    "key": "C",
    "explanation": "Dùng \"which\" làm tân ngữ thay thế cho danh từ chỉ vật \"The house\"."
  },
  {
    "id": 211,
    "question": "___________ it was raining heavily, they still went jogging in the park.",
    "options": {
      "A": "Because",
      "B": "Although",
      "C": "So",
      "D": "Therefore"
    },
    "key": "B",
    "explanation": "Dùng \"Although\" để nối hai mệnh đề mang ý nghĩa tương phản nhau."
  },
  {
    "id": 212,
    "question": "Many old houses ___________ to make way for the new highway last year.",
    "options": {
      "A": "pulled down",
      "B": "were pulled down",
      "C": "have pulled down",
      "D": "pull down"
    },
    "key": "B",
    "explanation": "Sử dụng câu bị động ở thì Quá khứ đơn (were + V3/ed)."
  },
  {
    "id": 213,
    "question": "The government should take measures to ___________ plastic waste in the oceans.",
    "options": {
      "A": "reduce",
      "B": "reduction",
      "C": "reductive",
      "D": "reducing"
    },
    "key": "A",
    "explanation": "Sau \"to\" trong cấu trúc mục đích, ta sử dụng động từ nguyên mẫu (reduce)."
  },
  {
    "id": 214,
    "question": "She is very ___________ about joining the school’s environmental club.",
    "options": {
      "A": "excite",
      "B": "excited",
      "C": "exciting",
      "D": "excitement"
    },
    "key": "B",
    "explanation": "Dùng tính từ đuôi -ed (excited) để diễn tả cảm xúc của con người."
  },
  {
    "id": 215,
    "question": "___________ the traffic is heavy, people still prefer riding motorbikes in the city.",
    "options": {
      "A": "Despite",
      "B": "Although",
      "C": "Because",
      "D": "So"
    },
    "key": "B",
    "explanation": "Mệnh đề sau là một câu hoàn chỉnh nên ta dùng liên từ \"Although\"."
  },
  {
    "id": 216,
    "question": "This traditional dish ___________ mainly of rice, herbs and grilled pork.",
    "options": {
      "A": "consists",
      "B": "includes",
      "C": "contains",
      "D": "belongs"
    },
    "key": "A",
    "explanation": "Cụm động từ \"consist of\" có nghĩa là bao gồm các thành phần."
  },
  {
    "id": 217,
    "question": "The new law aims to protect endangered animals from ___________ hunting.",
    "options": {
      "A": "illegal",
      "B": "legally",
      "C": "legality",
      "D": "legal"
    },
    "key": "A",
    "explanation": "Cần một tính từ (illegal) đứng trước danh từ (hunting) để bổ nghĩa."
  },
  {
    "id": 218,
    "question": "The teacher asked the students ___________ the meaning of the new word.",
    "options": {
      "A": "look up",
      "B": "to look up",
      "C": "looking up",
      "D": "looked up"
    },
    "key": "B",
    "explanation": "Cấu trúc \"ask someone to do something\" (yêu cầu ai làm việc gì)."
  },
  {
    "id": 219,
    "question": "If we ___________ more trees, air pollution will decrease significantly.",
    "options": {
      "A": "plant",
      "B": "planted",
      "C": "will plant",
      "D": "had planted"
    },
    "key": "A",
    "explanation": "Câu điều kiện loại 1: Mệnh đề If dùng thì Hiện tại đơn."
  },
  {
    "id": 220,
    "question": "Solar energy is a clean and ___________ source of power for the future.",
    "options": {
      "A": "renew",
      "B": "renewable",
      "C": "renewal",
      "D": "renewed"
    },
    "key": "B",
    "explanation": "Sử dụng tính từ \"renewable\" để chỉ nguồn năng lượng có thể tái tạo."
  },
  {
    "id": 221,
    "question": "A: \"Would you like to join our volunteer group this weekend?\" B: \"__________. I’m free on Sunday.\"",
    "options": {
      "A": "That sounds great",
      "B": "Never mind",
      "C": "You’re welcome",
      "D": "I’m sorry to hear that"
    },
    "key": "A",
    "explanation": "Lời đáp lịch sự để đồng ý với một lời mời."
  },
  {
    "id": 222,
    "question": "You have visited Ha Long Bay twice, ___________?",
    "options": {
      "A": "haven’t you",
      "B": "have you",
      "C": "didn’t you",
      "D": "don’t you"
    },
    "key": "A",
    "explanation": "Câu hỏi đuôi: Mệnh đề chính khẳng định thì phần đuôi phủ định."
  },
  {
    "id": 223,
    "question": "I wish I ___________ better at drawing so I could join the art club.",
    "options": {
      "A": "am",
      "B": "was",
      "C": "were",
      "D": "will be"
    },
    "key": "C",
    "explanation": "Câu ước ở hiện tại: Dùng \"were\" cho tất cả các ngôi."
  },
  {
    "id": 224,
    "question": "If it ___________ tomorrow, we will cancel the outdoor activity.",
    "options": {
      "A": "rains",
      "B": "rained",
      "C": "will rain",
      "D": "would rain"
    },
    "key": "A",
    "explanation": "Câu điều kiện loại 1 diễn tả khả năng có thể xảy ra ở tương lai."
  },
  {
    "id": 225,
    "question": "Nam: \"Thanks for lending me your notes.\" Lan: \"___________.\"",
    "options": {
      "A": "Never mind",
      "B": "You’re welcome",
      "C": "Good luck",
      "D": "Congratulations"
    },
    "key": "B",
    "explanation": "\"You're welcome\" là câu trả lời phổ biến nhất cho lời cảm ơn."
  },
  {
    "id": 226,
    "question": "She wishes she ___________ more time to spend with her grandparents.",
    "options": {
      "A": "has",
      "B": "had",
      "C": "will have",
      "D": "have had"
    },
    "key": "B",
    "explanation": "Cấu trúc ước ở hiện tại: Lùi thì về Quá khứ đơn (had)."
  },
  {
    "id": 227,
    "question": "The earlier we start, ___________ we can finish the project.",
    "options": {
      "A": "the sooner",
      "B": "sooner",
      "C": "the soonest",
      "D": "soon"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh kép: \"The earlier..., the sooner...\"."
  },
  {
    "id": 228,
    "question": "Minh: \"I’m sorry I broke your pen.\" Hoa: \"___________ It was old anyway.\"",
    "options": {
      "A": "Don’t worry",
      "B": "That’s great",
      "C": "You’re right",
      "D": "I agree"
    },
    "key": "A",
    "explanation": "\"Don't worry\" dùng để đáp lại lời xin lỗi một cách thân thiện."
  },
  {
    "id": 229,
    "question": "If everyone ___________ the rules, the environment would be much cleaner.",
    "options": {
      "A": "obeys",
      "B": "obeyed",
      "C": "will obey",
      "D": "obey"
    },
    "key": "B",
    "explanation": "Câu điều kiện loại 2 (giả định): Mệnh đề If dùng Quá khứ đơn."
  },
  {
    "id": 230,
    "question": "We really appreciate all the help you have given us. ___________!",
    "options": {
      "A": "You’re welcome",
      "B": "Good luck",
      "C": "Congratulations",
      "D": "Have a nice day"
    },
    "key": "B",
    "explanation": "Dựa vào ngữ cảnh, lời chúc \"Good luck\" thường phù hợp sau lời cảm ơn."
  },
  {
    "id": 231,
    "question": "I don't have enough money to buy that laptop. I wish I _______ more money.",
    "options": {
      "A": "have",
      "B": "had",
      "C": "will have",
      "D": "am having"
    },
    "key": "B",
    "explanation": "Câu ước ở hiện tại dùng cấu trúc \"wish + Quá khứ đơn\" để diễn tả mong muốn."
  },
  {
    "id": 232,
    "question": "Young people _______ obey their parents to make better decisions and learn important values.",
    "options": {
      "A": "must",
      "B": "may",
      "C": "can",
      "D": "will"
    },
    "key": "A",
    "explanation": "Dùng \"must\" để chỉ sự cần thiết hoặc bổn phận phải thực hiện."
  },
  {
    "id": 233,
    "question": "My friend and I _______ our homework to the teacher now.",
    "options": {
      "A": "have submitted",
      "B": "submitted",
      "C": "are submitting",
      "D": "was submitting"
    },
    "key": "C",
    "explanation": "Trạng từ \"now\" là dấu hiệu của thì Hiện tại tiếp diễn (am/is/are + V-ing)."
  },
  {
    "id": 234,
    "question": "The man _______ dog barks all night lives next to my apartment.",
    "options": {
      "A": "who",
      "B": "which",
      "C": "whose",
      "D": "that"
    },
    "key": "C",
    "explanation": "Dùng \"whose\" để thay thế cho danh từ chỉ sở hữu (con chó của người đàn ông)."
  },
  {
    "id": 235,
    "question": "Oceans, seas, rivers and lakes are different types of water bodies _______ Earth.",
    "options": {
      "A": "at",
      "B": "on",
      "C": "under",
      "D": "in"
    },
    "key": "B",
    "explanation": "Cụm từ cố định \"on Earth\" mang nghĩa là trên Trái Đất."
  },
  {
    "id": 236,
    "question": "My old friend started working on that farm _______ 2018.",
    "options": {
      "A": "on",
      "B": "at",
      "C": "between",
      "D": "in"
    },
    "key": "D",
    "explanation": "Sử dụng giới từ \"in\" trước các mốc thời gian là năm."
  },
  {
    "id": 237,
    "question": "The _______ you exercise, the healthier you become.",
    "options": {
      "A": "hardest",
      "B": "harder",
      "C": "more hard",
      "D": "hard"
    },
    "key": "B",
    "explanation": "Cấu trúc so sánh kép \"The + comparative..., the + comparative...\"."
  },
  {
    "id": 238,
    "question": "The school counsellor advised us _______ carefully before the exam.",
    "options": {
      "A": "preparing",
      "B": "prepare",
      "C": "to prepare",
      "D": "prepared"
    },
    "key": "C",
    "explanation": "Cấu trúc \"advise + somebody + to V\" nghĩa là khuyên ai đó làm gì."
  },
  {
    "id": 239,
    "question": "The doctor recommended _______ more vegetables and drinking plenty of water.",
    "options": {
      "A": "to eat",
      "B": "eat",
      "C": "eating",
      "D": "ate"
    },
    "key": "C",
    "explanation": "Sau động từ \"recommend\" ta sử dụng dạng V-ing khi không có tân ngữ."
  },
  {
    "id": 240,
    "question": "The porter asked the tourist _______.",
    "options": {
      "A": "if she needs any help with her luggage",
      "B": "that she needed any help with her luggage",
      "C": "if she need any help with her luggage",
      "D": "whether she needed any help with her luggage"
    },
    "key": "D",
    "explanation": "Trong câu tường thuật dạng câu hỏi Yes/No, ta lùi thì động từ sang quá khứ."
  },
  {
    "id": 241,
    "question": "If people _______ action to protect the environment, climate change will be worse.",
    "options": {
      "A": "won’t take",
      "B": "took",
      "C": "take",
      "D": "don't take"
    },
    "key": "D",
    "explanation": "Câu điều kiện loại 1, mệnh đề \"if\" chia ở thì Hiện tại đơn."
  },
  {
    "id": 242,
    "question": "The red squirrel is in danger of becoming _______ in England.",
    "options": {
      "A": "charming",
      "B": "extinct",
      "C": "domestic",
      "D": "fluent"
    },
    "key": "B",
    "explanation": "Dùng tính từ \"extinct\" (tuyệt chủng) phù hợp với ngữ cảnh bảo vệ động vật."
  },
  {
    "id": 243,
    "question": "Her _______ smile helped me get back my confidence.",
    "options": {
      "A": "attractive",
      "B": "attract",
      "C": "attraction",
      "D": "attractively"
    },
    "key": "A",
    "explanation": "Cần một tính từ (attractive) đứng trước danh từ \"smile\" để bổ nghĩa."
  },
  {
    "id": 244,
    "question": "My sister _______ as a teacher in Bangkok since 2003.",
    "options": {
      "A": "has taught",
      "B": "was teaching",
      "C": "will teach",
      "D": "taught"
    },
    "key": "A",
    "explanation": "Dấu hiệu \"since + mốc thời gian\" yêu cầu sử dụng thì Hiện tại hoàn thành."
  },
  {
    "id": 245,
    "question": "The _______ the weather becomes, the more people go to the beach.",
    "options": {
      "A": "more good",
      "B": "best",
      "C": "good",
      "D": "better"
    },
    "key": "D",
    "explanation": "So sánh kép với tính từ ngắn \"good\" chuyển thành \"the better\"."
  },
  {
    "id": 246,
    "question": "My grandmother is finding it harder to _______ these days.",
    "options": {
      "A": "pass down",
      "B": "turn off",
      "C": "get around",
      "D": "give up"
    },
    "key": "C",
    "explanation": "Cụm động từ \"get around\" có nghĩa là đi lại hoặc di chuyển."
  },
  {
    "id": 247,
    "question": "I am looking for a book ________ tells about traditional festivals of Asian people.",
    "options": {
      "A": "who",
      "B": "which",
      "C": "whom",
      "D": "whose"
    },
    "key": "B",
    "explanation": "Đại từ quan hệ \"which\" dùng để thay thế cho danh từ chỉ vật (book)."
  },
  {
    "id": 248,
    "question": "The city council is working on a new plan to improve the local ________ system.",
    "options": {
      "A": "transport",
      "B": "transported",
      "C": "transportation",
      "D": "transporting"
    },
    "key": "A",
    "explanation": "Cụm danh từ ghép \"transport system\" nghĩa là hệ thống giao thông."
  },
  {
    "id": 249,
    "question": "A fire-fighter was injured severely while he ________ to put out a fire.",
    "options": {
      "A": "was helping",
      "B": "helped",
      "C": "has helped",
      "D": "helps"
    },
    "key": "A",
    "explanation": "Dùng quá khứ tiếp diễn để diễn tả hành động đang xảy ra thì có hành động khác xen vào."
  },
  {
    "id": 250,
    "question": "He decided ________ an English course before going to work in America.",
    "options": {
      "A": "taking",
      "B": "to take",
      "C": "take",
      "D": "takes"
    },
    "key": "B",
    "explanation": "Cấu trúc \"decide + to V\" có nghĩa là quyết định làm một việc gì đó."
  },
  {
    "id": 251,
    "question": "It was raining heavily, ________ the concert hall was full of people.",
    "options": {
      "A": "because",
      "B": "and",
      "C": "so",
      "D": "but"
    },
    "key": "D",
    "explanation": "Liên từ \"but\" dùng để nối hai mệnh đề có ý nghĩa tương phản."
  },
  {
    "id": 252,
    "question": "Every time Parkas sees a movie made in India, he ________ homesick.",
    "options": {
      "A": "is feeling",
      "B": "felt",
      "C": "feels",
      "D": "have felt"
    },
    "key": "C",
    "explanation": "Dùng thì Hiện tại đơn để diễn tả một thói quen hoặc sự thật lặp đi lặp lại."
  },
  {
    "id": 253,
    "question": "Your brother passed his driving test last week, ________?",
    "options": {
      "A": "does he",
      "B": "did he",
      "C": "didn't he",
      "D": "doesn't he"
    },
    "key": "C",
    "explanation": "Câu hỏi đuôi ở quá khứ đơn, mệnh đề chính khẳng định nên đuôi phủ định."
  },
  {
    "id": 254,
    "question": "I'm interested in ________ to my grandfather. He always tells me great stories.",
    "options": {
      "A": "talk",
      "B": "to talk",
      "C": "to talking",
      "D": "talking"
    },
    "key": "D",
    "explanation": "Sau giới từ \"in\" ta sử dụng danh động từ (V-ing)."
  },
  {
    "id": 255,
    "question": "Vietnamese Independence Day, which is celebrated annually ________ September 2nd, holds great significance for all Vietnamese people.",
    "options": {
      "A": "on",
      "B": "in",
      "C": "at",
      "D": "from"
    },
    "key": "A",
    "explanation": "Sử dụng giới từ \"on\" trước các ngày cụ thể trong tháng."
  },
  {
    "id": 256,
    "question": "I ________ my best friend again since I went abroad five years ago.",
    "options": {
      "A": "don't meet",
      "B": "didn't meet",
      "C": "haven't met",
      "D": "had hadn't met"
    },
    "key": "C",
    "explanation": "Mệnh đề với \"since + Quá khứ đơn\" thường đi kèm thì Hiện tại hoàn thành."
  },
  {
    "id": 257,
    "question": "The computer I bought last week was a bit ________ than I expected, but it was very nice.",
    "options": {
      "A": "more expensive",
      "B": "most expensive",
      "C": "expensive",
      "D": "as expensive"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh hơn với tính từ dài: \"more + adj + than\"."
  },
  {
    "id": 258,
    "question": "She said she ________ her grandparents the following week.",
    "options": {
      "A": "will visit",
      "B": "visited",
      "C": "visits",
      "D": "would visit"
    },
    "key": "D",
    "explanation": "Trong câu tường thuật, \"will\" được lùi thì thành \"would\"."
  },
  {
    "id": 259,
    "question": "I wish I ________ an electric bike. I'm tired of riding to school every day.",
    "options": {
      "A": "have",
      "B": "will have",
      "C": "had",
      "D": "have had"
    },
    "key": "C",
    "explanation": "Câu ước ở hiện tại dùng thì Quá khứ đơn (had) để diễn đạt."
  },
  {
    "id": 260,
    "question": "If we ________ global warming, more natural disasters will occur.",
    "options": {
      "A": "didn't prevent",
      "B": "don't prevent",
      "C": "won't prevent",
      "D": "would wouldn't prevent"
    },
    "key": "B",
    "explanation": "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra, mệnh đề if chia hiện tại đơn."
  },
  {
    "id": 261,
    "question": "Canada, the USA, and Russia are big countries, but Russia is ________.",
    "options": {
      "A": "bigger",
      "B": "the bigger",
      "C": "biggest",
      "D": "the biggest"
    },
    "key": "D",
    "explanation": "So sánh nhất được dùng khi so sánh từ 3 đối tượng trở lên."
  },
  {
    "id": 262,
    "question": "David: \"Why don't we go swimming?\" – Tony: \"________. It's too hot here.\"",
    "options": {
      "A": "That's a good idea",
      "B": "Never mind",
      "C": "You're welcome",
      "D": "I'm glad you like it"
    },
    "key": "A",
    "explanation": "Lời đáp lịch sự để đồng ý với một lời đề nghị hoặc gợi ý."
  },
  {
    "id": 263,
    "question": "The city looks like a ________ jungle with ugly buildings and almost no parks.",
    "options": {
      "A": "green",
      "B": "loveable",
      "C": "tropical",
      "D": "concrete"
    },
    "key": "D",
    "explanation": "Cụm từ \"concrete jungle\" dùng để chỉ khu đô thị chật chội, nhiều bê tông."
  },
  {
    "id": 264,
    "question": "The local authority tried to ________ private car use but they didn't succeed.",
    "options": {
      "A": "cut down on",
      "B": "look for",
      "C": "carry out",
      "D": "hang out with"
    },
    "key": "A",
    "explanation": "Cụm động từ \"cut down on\" có nghĩa là cắt giảm hoặc giảm bớt."
  },
  {
    "id": 265,
    "question": "Find the error: The woman which is wearing the T-shirt is my friend.",
    "options": {
      "A": "The",
      "B": "which",
      "C": "wearing",
      "D": "is"
    },
    "key": "B",
    "explanation": "Sai ở \"which\" vì đại từ quan hệ dùng cho người phải là \"who\"."
  },
  {
    "id": 266,
    "question": "Find the error: One of the biggest problems facing our society are unemployment.",
    "options": {
      "A": "One of",
      "B": "biggest problems",
      "C": "our",
      "D": "are"
    },
    "key": "D",
    "explanation": "Chủ ngữ là \"One of...\" nên động từ phải chia số ít (is)."
  },
  {
    "id": 267,
    "question": "Find the error: I am learning to garnish different dishes to make them more attractively.",
    "options": {
      "A": "am",
      "B": "to garnish",
      "C": "them",
      "D": "attractively"
    },
    "key": "D",
    "explanation": "Sau cấu trúc \"make + object\" ta phải dùng tính từ (attractive)."
  },
  {
    "id": 268,
    "question": "It's the house __________ door is painted pink.",
    "options": {
      "A": "which",
      "B": "who",
      "C": "whom",
      "D": "whose"
    },
    "key": "D",
    "explanation": "Dùng \"whose\" để chỉ sở hữu cho cả người và vật (cánh cửa của ngôi nhà)."
  },
  {
    "id": 269,
    "question": "I would love _________ with you, but I have to go now.",
    "options": {
      "A": "stay",
      "B": "to stay",
      "C": "staying",
      "D": "to staying"
    },
    "key": "B",
    "explanation": "Cấu trúc \"would love + to V\" dùng để diễn đạt ý muốn làm gì."
  },
  {
    "id": 270,
    "question": "The doctor recommended he __________ more exercise.",
    "options": {
      "A": "get",
      "B": "gets",
      "C": "got",
      "D": "to get"
    },
    "key": "A",
    "explanation": "Sử dụng thức giả định sau \"recommend\", động từ ở dạng nguyên mẫu không to."
  },
  {
    "id": 271,
    "question": "________ they are unable to answer, perhaps we should ask someone else.",
    "options": {
      "A": "Since",
      "B": "However",
      "C": "Although",
      "D": "But"
    },
    "key": "A",
    "explanation": "Từ \"Since\" ở đây mang nghĩa là \"Bởi vì\", dùng để chỉ nguyên nhân."
  },
  {
    "id": 272,
    "question": "She didn't know __________ he was telling the truth or not.",
    "options": {
      "A": "whether",
      "B": "where",
      "C": "what",
      "D": "who"
    },
    "key": "A",
    "explanation": "Cấu trúc \"whether... or not\" dùng để diễn đạt ý liệu có hay không."
  },
  {
    "id": 273,
    "question": "She found a gold ring while she ________ her cupboards.",
    "options": {
      "A": "cleans",
      "B": "cleaned",
      "C": "was cleaning",
      "D": "has cleaned"
    },
    "key": "C",
    "explanation": "Dùng thì Quá khứ tiếp diễn để chỉ hành động kéo dài đang diễn ra."
  },
  {
    "id": 274,
    "question": "If the weather ________, we'll go for a walk.",
    "options": {
      "A": "improve",
      "B": "improves",
      "C": "improved",
      "D": "will improve"
    },
    "key": "B",
    "explanation": "Mệnh đề \"if\" trong câu điều kiện loại 1 chia ở thì Hiện tại đơn."
  },
  {
    "id": 275,
    "question": "___________ is 4.5 billion years old, is about 384,400 km from Earth.",
    "options": {
      "A": "The moon which",
      "B": "The moon that",
      "C": "The moon, which",
      "D": "The moon, that"
    },
    "key": "C",
    "explanation": "Mệnh đề quan hệ không xác định cần có dấu phẩy và dùng \"which\"."
  },
  {
    "id": 276,
    "question": "Traffic is ____________ in the city than in the countryside.",
    "options": {
      "A": "slower and more stressful",
      "B": "more slower and stressful",
      "C": "more stressful and slower",
      "D": "stressful and more slower"
    },
    "key": "C",
    "explanation": "Sắp xếp đúng các tính từ so sánh hơn theo ngữ cảnh giao thông."
  },
  {
    "id": 277,
    "question": "The room was light and decorated in a modern style. The word \"light\" is OPPOSITE in meaning to __________.",
    "options": {
      "A": "heavy",
      "B": "strong",
      "C": "serious",
      "D": "dark"
    },
    "key": "D",
    "explanation": "Từ trái nghĩa với \"light\" (sáng) trong ngữ cảnh này là \"dark\" (tối)."
  },
  {
    "id": 278,
    "question": "Tim: ______ was your trip like? – Nick: It was awful. The train didn’t arrive until 3 a.m.",
    "options": {
      "A": "How",
      "B": "Where",
      "C": "What",
      "D": "Which"
    },
    "key": "C",
    "explanation": "Cấu trúc \"What was... like?\" dùng để hỏi về tính chất của sự việc."
  },
  {
    "id": 279,
    "question": "In modern classrooms, students often use various electronic ______ such as tablets and laptops to help with their learning.",
    "options": {
      "A": "furniture",
      "B": "equipment",
      "C": "methods",
      "D": "devices"
    },
    "key": "D",
    "explanation": "Cụm từ \"electronic devices\" nghĩa là các thiết bị điện tử."
  },
  {
    "id": 280,
    "question": "We used ______ martial arts, but now we don’t have time.",
    "options": {
      "A": "do",
      "B": "to do",
      "C": "did",
      "D": "doing"
    },
    "key": "B",
    "explanation": "Cấu trúc \"used to + V\" dùng để nói về một thói quen trong quá khứ."
  },
  {
    "id": 281,
    "question": "The new department store is ______ than the old one.",
    "options": {
      "A": "nice",
      "B": "the nicest",
      "C": "nicer",
      "D": "as nice"
    },
    "key": "C",
    "explanation": "Sử dụng cấu trúc so sánh hơn với tính từ ngắn (nice + er)."
  },
  {
    "id": 282,
    "question": "Sorry, I have a terrible ______ for names. I've forgotten what your daughter is called.",
    "options": {
      "A": "memory",
      "B": "memorable",
      "C": "memorize",
      "D": "memorably"
    },
    "key": "A",
    "explanation": "Cần một danh từ (memory - trí nhớ) sau tính từ \"terrible\"."
  },
  {
    "id": 283,
    "question": "I wish I ______ enough money to visit all the natural wonders of the world.",
    "options": {
      "A": "have",
      "B": "had",
      "C": "will have",
      "D": "having"
    },
    "key": "B",
    "explanation": "Câu ước ở hiện tại dùng thì Quá khứ đơn để diễn tả."
  },
  {
    "id": 284,
    "question": "Find the error: The doctor suggested that he takes the medicine every day to get over his illness more quickly.",
    "options": {
      "A": "takes",
      "B": "get",
      "C": "more",
      "D": "more quickly"
    },
    "key": "A",
    "explanation": "Sau \"suggest that\" động từ phải ở dạng nguyên mẫu không to."
  },
  {
    "id": 285,
    "question": "Find the error: She rang James, which was a really good friend as well as the family doctor.",
    "options": {
      "A": "rang",
      "B": "which",
      "C": "really",
      "D": "well"
    },
    "key": "B",
    "explanation": "Sử dụng \"who\" thay cho \"which\" khi bổ nghĩa cho danh từ chỉ người."
  },
  {
    "id": 286,
    "question": "My mother suggested ________ a robotic vacuum cleaner.",
    "options": {
      "A": "buy",
      "B": "buying",
      "C": "to buy",
      "D": "buys"
    },
    "key": "B",
    "explanation": "Cấu trúc \"suggest + V-ing\" dùng để đưa ra lời đề nghị."
  },
  {
    "id": 287,
    "question": "I __________ this film several times with my mother.",
    "options": {
      "A": "have seen",
      "B": "see",
      "C": "saw",
      "D": "sees"
    },
    "key": "A",
    "explanation": "Dấu hiệu \"several times\" yêu cầu sử dụng thì Hiện tại hoàn thành."
  },
  {
    "id": 288,
    "question": "Parents want to help their children make a good __________ about their future jobs.",
    "options": {
      "A": "decision",
      "B": "decide",
      "C": "decisive",
      "D": "decides"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"make a decision\" có nghĩa là đưa ra quyết định."
  },
  {
    "id": 289,
    "question": "Rapid changes in society and lifestyle have made the ___________ in many families wider.",
    "options": {
      "A": "family reunion",
      "B": "generation gap",
      "C": "family values",
      "D": "gap year"
    },
    "key": "B",
    "explanation": "Cụm từ \"generation gap\" dùng để chỉ khoảng cách giữa các thế hệ."
  },
  {
    "id": 290,
    "question": "After you _________ word in the dictionary, remember to make an example with it.",
    "options": {
      "A": "look out",
      "B": "look after",
      "C": "look up",
      "D": "look into"
    },
    "key": "C",
    "explanation": "Cụm động từ \"look up\" có nghĩa là tra cứu thông tin (từ điển)."
  },
  {
    "id": 291,
    "question": "The __________ the house is, the more comfortable she feels.",
    "options": {
      "A": "larger",
      "B": "largest",
      "C": "large",
      "D": "as large"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh kép \"The + so sánh hơn, the + so sánh hơn\"."
  },
  {
    "id": 292,
    "question": "My mum dinner ______ in the kitchen when I arrived home from school.",
    "options": {
      "A": "cooks",
      "B": "cooked",
      "C": "is cooking",
      "D": "was cooking"
    },
    "key": "D",
    "explanation": "Dùng quá khứ tiếp diễn cho hành động đang xảy ra trong quá khứ."
  },
  {
    "id": 293,
    "question": "Mai ______ her beloved teacher since she left school.",
    "options": {
      "A": "hasn’t met",
      "B": "won’t meet",
      "C": "doesn't meet",
      "D": "didn’t meet"
    },
    "key": "A",
    "explanation": "Mệnh đề chính dùng Hiện tại hoàn thành khi có \"since\" và quá khứ đơn."
  },
  {
    "id": 294,
    "question": "Students ______ communicate either by look or by voice in the exam room, it’s strictly prohibited.",
    "options": {
      "A": "should",
      "B": "must",
      "C": "would",
      "D": "mustn’t"
    },
    "key": "D",
    "explanation": "Dùng \"mustn't\" để diễn tả một lệnh cấm tuyệt đối."
  },
  {
    "id": 295,
    "question": "If the weather is fine tomorrow, I ______ the new fruit farm in the countryside.",
    "options": {
      "A": "visited",
      "B": "will visit",
      "C": "would visit",
      "D": "would have visited"
    },
    "key": "B",
    "explanation": "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở tương lai."
  },
  {
    "id": 296,
    "question": "After finishing their homework, many teenagers like to ______ their friends at the café.",
    "options": {
      "A": "cut down on",
      "B": "come down with",
      "C": "look down on",
      "D": "hang out with"
    },
    "key": "D",
    "explanation": "Cụm động từ \"hang out with\" có nghĩa là đi chơi cùng ai đó."
  },
  {
    "id": 297,
    "question": "We should avoid ______ alcohol because it is harmful to our health.",
    "options": {
      "A": "drink",
      "B": "drinking",
      "C": "drank",
      "D": "to drinking"
    },
    "key": "B",
    "explanation": "Sau động từ \"avoid\" luôn sử dụng danh động từ (V-ing)."
  },
  {
    "id": 298,
    "question": "Students ______ only revise the night before the exam don’t usually get good grades.",
    "options": {
      "A": "who",
      "B": "whom",
      "C": "whose",
      "D": "which"
    },
    "key": "A",
    "explanation": "Đại từ quan hệ \"who\" thay thế cho chủ ngữ chỉ người (students)."
  },
  {
    "id": 299,
    "question": "To save energy, we should remember ______ the lights before going out.",
    "options": {
      "A": "turn off",
      "B": "turning off",
      "C": "to turn off",
      "D": "to turning off"
    },
    "key": "C",
    "explanation": "Cấu trúc \"remember to V\" nghĩa là nhớ phải làm việc gì đó."
  },
  {
    "id": 300,
    "question": "My dad is always busy with his work. I wish he ______ more free time to play with me.",
    "options": {
      "A": "has",
      "B": "had",
      "C": "had had",
      "D": "is having"
    },
    "key": "B",
    "explanation": "Câu ước cho điều không có thật ở hiện tại dùng thì Quá khứ đơn."
  },
  {
    "id": 301,
    "question": "______ April 30th 2025, a grand parade was held in Ho Chi Minh City to celebrate the 50th anniversary of reunification.",
    "options": {
      "A": "In",
      "B": "Of",
      "C": "At",
      "D": "On"
    },
    "key": "D",
    "explanation": "Sử dụng giới từ \"on\" cho các ngày cụ thể trong tháng."
  },
  {
    "id": 302,
    "question": "Hoa is 1.60 metres tall, and her sister is 1.65 metres tall. Hoa is ______ than her sister.",
    "options": {
      "A": "shorter",
      "B": "taller",
      "C": "older",
      "D": "younger"
    },
    "key": "A",
    "explanation": "Dựa vào số liệu chiều cao, 1.60m thấp hơn (shorter) 1.65m."
  },
  {
    "id": 303,
    "question": "Minh asked me ______ to visit Son Doong Cave.",
    "options": {
      "A": "if I want",
      "B": "that you wanted",
      "C": "whether I wanted",
      "D": "whether you want"
    },
    "key": "C",
    "explanation": "Câu tường thuật dạng câu hỏi Yes/No lùi thì về Quá khứ đơn."
  },
  {
    "id": 304,
    "question": "Last Sunday, we ______ vegetables in our school's organic garden together.",
    "options": {
      "A": "plant",
      "B": "planted",
      "C": "are planting",
      "D": "will plant"
    },
    "key": "B",
    "explanation": "Dấu hiệu \"Last Sunday\" yêu cầu sử dụng thì Quá khứ đơn."
  },
  {
    "id": 305,
    "question": "My new cell phone is ______ than the old one but the battery drains quickly.",
    "options": {
      "A": "more smart",
      "B": "smartest",
      "C": "smarter",
      "D": "as smart"
    },
    "key": "C",
    "explanation": "Tính từ ngắn (smart) trong cấu trúc so sánh hơn thêm hậu tố -er."
  },
  {
    "id": 306,
    "question": "My sister is keen ______ cooking, and she wants to become a master chef.",
    "options": {
      "A": "in",
      "B": "on",
      "C": "at",
      "D": "of"
    },
    "key": "B",
    "explanation": "Cấu trúc cố định \"be keen on\" có nghĩa là say mê điều gì."
  },
  {
    "id": 307,
    "question": "Grandparents often enjoy ______ stories.",
    "options": {
      "A": "tell",
      "B": "telling",
      "C": "to tell",
      "D": "to telling"
    },
    "key": "B",
    "explanation": "Sau động từ \"enjoy\" ta sử dụng dạng danh động từ V-ing."
  },
  {
    "id": 308,
    "question": "Kevin has been impressed by Halong Bay, ______ he wants to visit it this summer.",
    "options": {
      "A": "so",
      "B": "because",
      "C": "for",
      "D": "or"
    },
    "key": "A",
    "explanation": "Liên từ \"so\" dùng để chỉ kết quả của một hành động trước đó."
  },
  {
    "id": 309,
    "question": "You ______ eat so much junk food.",
    "options": {
      "A": "might",
      "B": "shouldn't",
      "C": "should",
      "D": "must"
    },
    "key": "B",
    "explanation": "Dùng \"shouldn't\" để đưa ra lời khuyên không nên làm điều gì."
  },
  {
    "id": 310,
    "question": "Teenagers should have a ______ diet to grow strong and stay healthy.",
    "options": {
      "A": "balanced",
      "B": "fast",
      "C": "spicy",
      "D": "oily"
    },
    "key": "A",
    "explanation": "Cụm từ \"balanced diet\" nghĩa là chế độ ăn uống cân bằng."
  },
  {
    "id": 311,
    "question": "The Tower of London is one of the top tourist ______ in the UK.",
    "options": {
      "A": "sectors",
      "B": "industries",
      "C": "offices",
      "D": "attractions"
    },
    "key": "D",
    "explanation": "Cụm từ \"tourist attractions\" chỉ những địa điểm thu hút khách du lịch."
  },
  {
    "id": 312,
    "question": "To help protect our planet, we should ______ the use of single-use products.",
    "options": {
      "A": "reduce",
      "B": "force",
      "C": "confuse",
      "D": "increase"
    },
    "key": "A",
    "explanation": "Động từ \"reduce\" (giảm thiểu) phù hợp với ngữ cảnh bảo vệ môi trường."
  },
  {
    "id": 313,
    "question": "Our English teacher uses activities to attract our ______. ",
    "options": {
      "A": "attend",
      "B": "attentive",
      "C": "attention",
      "D": "attentively"
    },
    "key": "C",
    "explanation": "Cần một danh từ sau tính từ sở hữu \"our\" (attention - sự chú ý)."
  },
  {
    "id": 314,
    "question": "Giving lucky money at Tet is a common ______.",
    "options": {
      "A": "hobby",
      "B": "religion",
      "C": "action",
      "D": "practice"
    },
    "key": "D",
    "explanation": "Cụm từ \"common practice\" dùng để chỉ một thói quen hoặc phong tục."
  },
  {
    "id": 315,
    "question": "This museum exhibits objects that ______ the lives of people in the past.",
    "options": {
      "A": "preserve",
      "B": "maintain",
      "C": "express",
      "D": "represent"
    },
    "key": "D",
    "explanation": "Động từ \"represent\" mang nghĩa tiêu biểu cho hoặc đại diện cho."
  },
  {
    "id": 316,
    "question": "I will always remember that journey. It was a/an ______ experience.",
    "options": {
      "A": "forget",
      "B": "forgettable",
      "C": "unforgettable",
      "D": "forgetfulness"
    },
    "key": "C",
    "explanation": "Tính từ \"unforgettable\" (không thể quên) mang nghĩa tích cực cho trải nghiệm."
  },
  {
    "id": 317,
    "question": "These projects bring social and ______ benefits to the community.",
    "options": {
      "A": "economic",
      "B": "economical",
      "C": "economics",
      "D": "economy"
    },
    "key": "A",
    "explanation": "Sử dụng tính từ \"economic\" (thuộc về kinh tế) để bổ nghĩa cho danh từ."
  },
  {
    "id": 318,
    "question": "The artisans often ______ their skills to their children.",
    "options": {
      "A": "hand down",
      "B": "hand in",
      "C": "turn down",
      "D": "turn in"
    },
    "key": "A",
    "explanation": "Cụm động từ \"hand down\" nghĩa là truyền lại cho thế hệ sau."
  },
  {
    "id": 319,
    "question": "Like everyone else, she has her ______, but she is satisfied with life.",
    "options": {
      "A": "ups and downs",
      "B": "ins and outs",
      "C": "safe and sound",
      "D": "odds and ends"
    },
    "key": "A",
    "explanation": "Thành ngữ \"ups and downs\" chỉ những thăng trầm, vui buồn trong cuộc sống."
  },
  {
    "id": 320,
    "question": "Find the error: Mary spend her free time visiting galleries every Sunday.",
    "options": {
      "A": "spend",
      "B": "free",
      "C": "visiting",
      "D": "and"
    },
    "key": "A",
    "explanation": "Chủ ngữ số ít (Mary) yêu cầu động từ chia ở dạng số ít (spends)."
  },
  {
    "id": 321,
    "question": "Find the error: All the students must bring his own water bottles.",
    "options": {
      "A": "must",
      "B": "his",
      "C": "bring",
      "D": "bottles"
    },
    "key": "B",
    "explanation": "Chủ ngữ số nhiều (all the students) nên dùng tính từ sở hữu \"their\"."
  },
  {
    "id": 322,
    "question": "Find the error: Because my brother was sick, so he couldn’t join the match.",
    "options": {
      "A": "was",
      "B": "so",
      "C": "couldn’t",
      "D": "join"
    },
    "key": "B",
    "explanation": "Trong tiếng Anh không sử dụng đồng thời cả \"Because\" và \"so\" trong một câu."
  },
  {
    "id": 323,
    "question": "Laura: Thank you so much for your help! Dave: ______",
    "options": {
      "A": "No, I don’t like helping people",
      "B": "Yes, I agree",
      "C": "You’re welcome! Anytime.",
      "D": "That’s your problem"
    },
    "key": "C",
    "explanation": "Đây là câu trả lời lịch sự phổ biến nhất khi nhận được lời cảm ơn."
  },
  {
    "id": 324,
    "question": "The student ______ won the competition is my brother.",
    "options": {
      "A": "whom",
      "B": "which",
      "C": "who",
      "D": "whose"
    },
    "key": "C",
    "explanation": "Sử dụng đại từ quan hệ \"who\" làm chủ ngữ thay thế cho người."
  },
  {
    "id": 325,
    "question": "He often ______ coffee in the morning.",
    "options": {
      "A": "drink",
      "B": "drinking",
      "C": "drank",
      "D": "drinks"
    },
    "key": "D",
    "explanation": "Thì hiện tại đơn diễn tả thói quen, chủ ngữ số ít động từ thêm \"s\"."
  },
  {
    "id": 326,
    "question": "The teacher gave the students a useful ______ on writing.",
    "options": {
      "A": "lessons",
      "B": "notes",
      "C": "advice",
      "D": "tip"
    },
    "key": "D",
    "explanation": "Dùng danh từ đếm được số ít \"tip\" (mẹo) phù hợp với mạo từ \"a\"."
  },
  {
    "id": 327,
    "question": "The students ______ noisily when the teacher came in.",
    "options": {
      "A": "were talking",
      "B": "talked",
      "C": "are talking",
      "D": "talk"
    },
    "key": "A",
    "explanation": "Hành động đang diễn ra trong quá khứ thì một hành động khác xen vào."
  },
  {
    "id": 328,
    "question": "My grandfather ______ a newspaper in the living room now.",
    "options": {
      "A": "reading",
      "B": "reads",
      "C": "is reading",
      "D": "read"
    },
    "key": "C",
    "explanation": "Dấu hiệu \"now\" cho thấy hành động đang diễn ra ở hiện tại."
  },
  {
    "id": 329,
    "question": "Teenagers ______ a diary in the past, now they post online.",
    "options": {
      "A": "was used to keeping",
      "B": "used to keep",
      "C": "used to keeping",
      "D": "was used to keep"
    },
    "key": "B",
    "explanation": "Cấu trúc \"used to + V\" chỉ một thói quen đã kết thúc trong quá khứ."
  },
  {
    "id": 330,
    "question": "I suggest ______ showers to save water.",
    "options": {
      "A": "taking",
      "B": "to taking",
      "C": "to take",
      "D": "take"
    },
    "key": "A",
    "explanation": "Sau động từ \"suggest\" ta sử dụng dạng V-ing để đưa ra lời khuyên."
  },
  {
    "id": 331,
    "question": "If you _________ enough, you can focus on your learning better.",
    "options": {
      "A": "sleeping",
      "B": "sleep",
      "C": "slept",
      "D": "sleeps"
    },
    "key": "B",
    "explanation": "Câu điều kiện loại 1 dùng thì Hiện tại đơn (sleep) ở mệnh đề \"if\"."
  },
  {
    "id": 332,
    "question": "We live in ________ big house _______ in the middle of the village.",
    "options": {
      "A": "a/a",
      "B": "a/an",
      "C": "a/the",
      "D": "a/∅"
    },
    "key": "C",
    "explanation": "Dùng \"a\" cho vật chưa xác định và \"the\" cho cụm từ chỉ vị trí xác định."
  },
  {
    "id": 333,
    "question": "Mom said that she __________ home late that evening.",
    "options": {
      "A": "will go",
      "B": "would go",
      "C": "went",
      "D": "go"
    },
    "key": "B",
    "explanation": "Trong câu tường thuật, \"will\" được lùi thì thành \"would\" để phù hợp ngữ cảnh."
  },
  {
    "id": 334,
    "question": "It is important to be __________ when you speak to elderly people.",
    "options": {
      "A": "respectfully",
      "B": "respect",
      "C": "respectful",
      "D": "respecting"
    },
    "key": "C",
    "explanation": "Sử dụng tính từ \"respectful\" (lễ phép) để bổ nghĩa sau động từ \"be\"."
  },
  {
    "id": 335,
    "question": "Students in my class ________ a lot of books and old clothes last month.",
    "options": {
      "A": "donates",
      "B": "donated",
      "C": "donating",
      "D": "donate"
    },
    "key": "B",
    "explanation": "Dấu hiệu \"last month\" yêu cầu sử dụng thì Quá khứ đơn (donated)."
  },
  {
    "id": 336,
    "question": "The students should _______ the meaning of new words in a dictionary.",
    "options": {
      "A": "point out",
      "B": "look up",
      "C": "check in",
      "D": "look out"
    },
    "key": "B",
    "explanation": "Cụm động từ \"look up\" có nghĩa là tra cứu từ điển."
  },
  {
    "id": 337,
    "question": "We have to finish this project _________ the end of this week.",
    "options": {
      "A": "at",
      "B": "until",
      "C": "on",
      "D": "in"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"at the end of\" dùng để chỉ một thời điểm cụ thể."
  },
  {
    "id": 338,
    "question": "The song has become popular __________ young people.",
    "options": {
      "A": "on",
      "B": "for",
      "C": "from",
      "D": "with"
    },
    "key": "D",
    "explanation": "Cấu trúc \"popular with somebody\" nghĩa là được ai đó yêu thích, phổ biến với ai."
  },
  {
    "id": 339,
    "question": "Playing _________ violin requires a lot of patience.",
    "options": {
      "A": "the",
      "B": "an",
      "C": "∅",
      "D": "a"
    },
    "key": "A",
    "explanation": "Luôn sử dụng mạo từ \"the\" trước tên các loại nhạc cụ khi chơi chúng."
  },
  {
    "id": 340,
    "question": "It's important to __________ the new rules before using the facilities.",
    "options": {
      "A": "get along",
      "B": "take up",
      "C": "set up",
      "D": "check out"
    },
    "key": "D",
    "explanation": "Cụm động từ \"check out\" có nghĩa là kiểm tra hoặc tìm hiểu thông tin."
  },
  {
    "id": 341,
    "question": "Tonny __________ his favorite program when the lights went out.",
    "options": {
      "A": "watched",
      "B": "watches",
      "C": "was watching",
      "D": "is watching"
    },
    "key": "C",
    "explanation": "Dùng quá khứ tiếp diễn cho hành động đang diễn ra thì có hành động khác xen vào."
  },
  {
    "id": 342,
    "question": "When my father retires, he will look back over a brilliant _________.",
    "options": {
      "A": "job",
      "B": "career",
      "C": "work",
      "D": "occupation"
    },
    "key": "B",
    "explanation": "Từ \"career\" dùng để chỉ sự nghiệp cả đời, phù hợp với ngữ cảnh nghỉ hưu."
  },
  {
    "id": 343,
    "question": "Reading a book is __________ than playing a video game.",
    "options": {
      "A": "most educational",
      "B": "the most educational",
      "C": "as educational",
      "D": "more educational"
    },
    "key": "D",
    "explanation": "Cấu trúc so sánh hơn với tính từ dài: \"more + adj + than\"."
  },
  {
    "id": 344,
    "question": "My students decided _________ natural materials.",
    "options": {
      "A": "to use",
      "B": "using",
      "C": "to using",
      "D": "use"
    },
    "key": "A",
    "explanation": "Sau động từ \"decide\" ta luôn sử dụng động từ dạng \"to V\"."
  },
  {
    "id": 345,
    "question": "“__________ do you go to school?” – “By bike.”",
    "options": {
      "A": "Which",
      "B": "How often",
      "C": "Where",
      "D": "How"
    },
    "key": "D",
    "explanation": "Dùng từ hỏi \"How\" để hỏi về phương tiện hoặc cách thức di chuyển."
  },
  {
    "id": 346,
    "question": "Skydiving is a(n) ________ sport.",
    "options": {
      "A": "danger",
      "B": "dangerously",
      "C": "dangerous",
      "D": "endanger"
    },
    "key": "C",
    "explanation": "Sử dụng tính từ \"dangerous\" để bổ nghĩa cho danh từ \"sport\"."
  },
  {
    "id": 347,
    "question": "School __________ must be worn by all students.",
    "options": {
      "A": "suits",
      "B": "uniforms",
      "C": "costumes",
      "D": "clothes"
    },
    "key": "B",
    "explanation": "Cụm danh từ \"school uniforms\" có nghĩa là đồng phục trường học."
  },
  {
    "id": 348,
    "question": "I don't have a computer. I wish I __________ a new one.",
    "options": {
      "A": "have",
      "B": "will have",
      "C": "have had",
      "D": "had"
    },
    "key": "D",
    "explanation": "Câu ước ở hiện tại dùng thì Quá khứ đơn (had) để diễn đạt."
  },
  {
    "id": 349,
    "question": "If it rains tomorrow, we ___________ the picnic.",
    "options": {
      "A": "will cancel",
      "B": "would cancel",
      "C": "cancelled",
      "D": "cancel"
    },
    "key": "A",
    "explanation": "Câu điều kiện loại 1 diễn tả khả năng xảy ra, mệnh đề chính dùng \"will\"."
  },
  {
    "id": 350,
    "question": "My sister loves playing _______ guitar.",
    "options": {
      "A": "∅",
      "B": "an",
      "C": "the",
      "D": "a"
    },
    "key": "C",
    "explanation": "Tương tự câu 9, dùng \"the\" trước tên nhạc cụ khi nói về việc chơi chúng."
  },
  {
    "id": 351,
    "question": "It's important to have a _______ friend you can trust.",
    "options": {
      "A": "ambitious",
      "B": "sociable",
      "C": "confident",
      "D": "reliable"
    },
    "key": "D",
    "explanation": "Tính từ \"reliable\" (đáng tin cậy) phù hợp với ngữ cảnh \"tin tưởng\" (trust)."
  },
  {
    "id": 352,
    "question": "My mum made _______ for my birthday.",
    "options": {
      "A": "delicious a cake",
      "B": "a cake delicious",
      "C": "a delicious cake",
      "D": "cake a delicious"
    },
    "key": "C",
    "explanation": "Trật tự đúng trong cụm danh từ: Mạo từ + Tính từ + Danh từ."
  },
  {
    "id": 353,
    "question": "He _______ in a small village.",
    "options": {
      "A": "set up",
      "B": "got up",
      "C": "gave up",
      "D": "grew up"
    },
    "key": "D",
    "explanation": "Cụm động từ \"grow up\" có nghĩa là lớn lên, trưởng thành."
  },
  {
    "id": 354,
    "question": "My brother fell while he _______ on the street.",
    "options": {
      "A": "skated",
      "B": "skate",
      "C": "had skated",
      "D": "was skating"
    },
    "key": "D",
    "explanation": "Hành động \"trượt\" (was skating) đang diễn ra thì hành động \"ngã\" (fell) xen vào."
  },
  {
    "id": 355,
    "question": "He wishes he _______ how to cook well.",
    "options": {
      "A": "knows",
      "B": "knew",
      "C": "will know",
      "D": "has known"
    },
    "key": "B",
    "explanation": "Câu ước không có thật ở hiện tại lùi động từ về thì Quá khứ đơn."
  },
  {
    "id": 356,
    "question": "If you _______ the house now, you won’t be late.",
    "options": {
      "A": "will leave",
      "B": "would leave",
      "C": "leave",
      "D": "leaves"
    },
    "key": "C",
    "explanation": "Câu điều kiện loại 1, mệnh đề \"if\" chia ở thì Hiện tại đơn."
  },
  {
    "id": 357,
    "question": "You _______ finish your homework before bed.",
    "options": {
      "A": "shouldn’t",
      "B": "ought",
      "C": "should",
      "D": "mustn’t"
    },
    "key": "C",
    "explanation": "Dùng \"should\" để đưa ra lời khuyên nên làm một việc gì đó tốt cho mình."
  },
  {
    "id": 358,
    "question": "Either the manager or his assistants _______ responsible.",
    "options": {
      "A": "be",
      "B": "are",
      "C": "was",
      "D": "is"
    },
    "key": "B",
    "explanation": "Cấu trúc \"Either... or...\" động từ chia theo danh từ đứng gần nó nhất."
  },
  {
    "id": 359,
    "question": "Making soup is just a matter of following the ______.",
    "options": {
      "A": "recipe",
      "B": "ingredient",
      "C": "design",
      "D": "spice"
    },
    "key": "A",
    "explanation": "Cụm từ \"follow the recipe\" có nghĩa là làm theo công thức nấu ăn."
  },
  {
    "id": 360,
    "question": "The man driving an _______ car is my father’s boss.",
    "options": {
      "A": "blue Japanese expensive",
      "B": "expensive Japanese blue",
      "C": "Japanese expensive blue",
      "D": "expensive blue Japanese"
    },
    "key": "D",
    "explanation": "Trật tự tính từ: Ý kiến (expensive) -> Màu sắc (blue) -> Nguồn gốc (Japanese)."
  },
  {
    "id": 361,
    "question": "The people _______ work here are very kind.",
    "options": {
      "A": "what",
      "B": "who",
      "C": "whose",
      "D": "which"
    },
    "key": "B",
    "explanation": "Đại từ quan hệ \"who\" dùng để thay thế cho danh từ chỉ người làm chủ ngữ."
  },
  {
    "id": 362,
    "question": "He hasn’t finished the book, _______?",
    "options": {
      "A": "has he",
      "B": "hasn’t he",
      "C": "doesn’t he",
      "D": "didn’t he"
    },
    "key": "A",
    "explanation": "Câu hỏi đuôi ở thì Hiện tại hoàn thành, mệnh đề phủ định nên đuôi khẳng định."
  },
  {
    "id": 363,
    "question": "This laptop is much ______ than mine.",
    "options": {
      "A": "the fastest",
      "B": "fast",
      "C": "faster",
      "D": "fastest"
    },
    "key": "C",
    "explanation": "Sử dụng tính từ ngắn ở dạng so sánh hơn (faster) khi có từ \"than\"."
  },
  {
    "id": 364,
    "question": "It is difficult _______ English fluently in a short time.",
    "options": {
      "A": "learn",
      "B": "learns",
      "C": "learning",
      "D": "to learn"
    },
    "key": "D",
    "explanation": "Cấu trúc giả định \"It is + adj + to V\" dùng để nhận xét việc gì đó."
  },
  {
    "id": 365,
    "question": "She decided to _______ advantage of the opportunity.",
    "options": {
      "A": "take",
      "B": "make",
      "C": "get",
      "D": "catch"
    },
    "key": "A",
    "explanation": "Thành ngữ \"take advantage of\" có nghĩa là tận dụng cơ hội."
  },
  {
    "id": 366,
    "question": "It was such a hard cake _______ Mary couldn’t eat it.",
    "options": {
      "A": "though",
      "B": "since",
      "C": "that",
      "D": "whether"
    },
    "key": "C",
    "explanation": "Cấu trúc \"such + cụm danh từ + that\" dùng để chỉ kết quả quá mức."
  },
  {
    "id": 367,
    "question": "Artificial Intelligence is a wonderful ______ of modern life.",
    "options": {
      "A": "invent",
      "B": "inventively",
      "C": "inventive",
      "D": "invention"
    },
    "key": "D",
    "explanation": "Cần một danh từ (invention - sự phát minh) sau tính từ \"wonderful\"."
  },
  {
    "id": 368,
    "question": "The ______ in our street comes every evening.",
    "options": {
      "A": "firefighter",
      "B": "police officer",
      "C": "garbage collector",
      "D": "delivery person"
    },
    "key": "C",
    "explanation": "Danh từ \"garbage collector\" dùng để chỉ người đi thu gom rác."
  },
  {
    "id": 369,
    "question": "Sam Son beach is crowded in ______ seasons.",
    "options": {
      "A": "low",
      "B": "peak",
      "C": "dry",
      "D": "wet"
    },
    "key": "B",
    "explanation": "Cụm từ \"peak season\" chỉ mùa cao điểm du lịch khi khách rất đông."
  },
  {
    "id": 370,
    "question": "We must protect ______ resources.",
    "options": {
      "A": "natural",
      "B": "naturalize",
      "C": "naturally",
      "D": "nature"
    },
    "key": "A",
    "explanation": "Cụm danh từ \"natural resources\" có nghĩa là tài nguyên thiên nhiên."
  },
  {
    "id": 371,
    "question": "Many species are on the ______ of extinction.",
    "options": {
      "A": "margin",
      "B": "danger",
      "C": "verge",
      "D": "border"
    },
    "key": "C",
    "explanation": "Cấu trúc \"on the verge of\" dùng để diễn tả việc sắp sửa xảy ra."
  },
  {
    "id": 372,
    "question": "She planned her trip very ______. ",
    "options": {
      "A": "thoroughly",
      "B": "sustainably",
      "C": "amazingly",
      "D": "beautifully"
    },
    "key": "A",
    "explanation": "Trạng từ \"thoroughly\" (kỹ lưỡng) bổ nghĩa cho cách thức lên kế hoạch."
  },
  {
    "id": 373,
    "question": "You should listen and try to ______ native speakers.",
    "options": {
      "A": "guess",
      "B": "understand",
      "C": "imitate",
      "D": "translate"
    },
    "key": "C",
    "explanation": "Động từ \"imitate\" (bắt chước) phù hợp với ngữ cảnh học phát âm từ người bản xứ."
  },
  {
    "id": 374,
    "question": "Parents should help teenagers ______ their own decisions.",
    "options": {
      "A": "hold",
      "B": "pay",
      "C": "make",
      "D": "take"
    },
    "key": "C",
    "explanation": "Tương tự câu 8, \"make decisions\" là cụm động từ chỉ việc quyết định."
  },
  {
    "id": 375,
    "question": "I accidentally ______ an old friend yesterday.",
    "options": {
      "A": "caught sight of",
      "B": "gave priority to",
      "C": "made effort to",
      "D": "lost touch with"
    },
    "key": "A",
    "explanation": "Cụm từ \"catch sight of\" nghĩa là tình cờ trông thấy ai đó."
  },
  {
    "id": 376,
    "question": "You should ______ your shoes before entering the house.",
    "options": {
      "A": "give up",
      "B": "take off",
      "C": "look for",
      "D": "turn down"
    },
    "key": "B",
    "explanation": "Cụm động từ \"take off\" (shoes) có nghĩa là cởi giày ra."
  },
  {
    "id": 377,
    "question": "She ______ in Hoa Lu City since April 2025.",
    "options": {
      "A": "lives",
      "B": "has lived",
      "C": "was living",
      "D": "lived"
    },
    "key": "B",
    "explanation": "Dấu hiệu \"since + mốc thời gian\" yêu cầu sử dụng thì Hiện tại hoàn thành."
  },
  {
    "id": 378,
    "question": "Millions of people enjoyed ______ the parade.",
    "options": {
      "A": "watch",
      "B": "to watch",
      "C": "watching",
      "D": "to watching"
    },
    "key": "C",
    "explanation": "Sau động từ \"enjoy\" ta sử dụng danh động từ (V-ing)."
  },
  {
    "id": 379,
    "question": "If you want to pass the exam, you ______ study harder.",
    "options": {
      "A": "should",
      "B": "would",
      "C": "might",
      "D": "could"
    },
    "key": "A",
    "explanation": "Sử dụng \"should\" để đưa ra lời khuyên thiết thực để đạt mục tiêu."
  },
  {
    "id": 380,
    "question": "The symptoms were ______ than we expected.",
    "options": {
      "A": "more serious",
      "B": "serious",
      "C": "more seriously",
      "D": "most serious"
    },
    "key": "A",
    "explanation": "Dạng so sánh hơn của tính từ dài: \"more + adj + than\"."
  },
  {
    "id": 381,
    "question": "We wish we ______ a discussion with the local authorities about the project to transform Hoa Lu City into a millennium heritage city.",
    "options": {
      "A": "will have",
      "B": "have",
      "C": "had",
      "D": "has"
    },
    "key": "C",
    "explanation": "Dùng thì Quá khứ đơn (had) cho câu ước trái với hiện tại."
  },
  {
    "id": 382,
    "question": "He said that he ______ to take part in the \"Go Green\" campaign to clean up the Day River.",
    "options": {
      "A": "wanted",
      "B": "wants",
      "C": "want",
      "D": "wanting"
    },
    "key": "A",
    "explanation": "Trong câu tường thuật, động từ phải lùi thì từ Hiện tại đơn sang Quá khứ đơn."
  },
  {
    "id": 383,
    "question": "There were ______ people expecting to attend Trang An Festival 2025.",
    "options": {
      "A": "much",
      "B": "many",
      "C": "any",
      "D": "little"
    },
    "key": "B",
    "explanation": "Dùng \"many\" vì \"people\" là danh từ đếm được số nhiều."
  },
  {
    "id": 384,
    "question": "My sister will join a food tour in Ninh Binh next month ______ she loves different local dishes there.",
    "options": {
      "A": "because",
      "B": "because of",
      "C": "although",
      "D": "in spite of"
    },
    "key": "A",
    "explanation": "Dùng liên từ \"because\" để nối với một mệnh đề chỉ nguyên nhân."
  },
  {
    "id": 385,
    "question": "They want to know ______ to preserve the natural beauty of their region.",
    "options": {
      "A": "where",
      "B": "how",
      "C": "what",
      "D": "who"
    },
    "key": "B",
    "explanation": "Dùng từ hỏi \"how\" để hỏi về cách thức thực hiện hành động."
  },
  {
    "id": 386,
    "question": "The local food was delicious, ______ we chose to go to Sa Dec City again.",
    "options": {
      "A": "because",
      "B": "but",
      "C": "although",
      "D": "so"
    },
    "key": "D",
    "explanation": "Dùng liên từ \"so\" để diễn tả kết quả của sự việc trước đó."
  },
  {
    "id": 387,
    "question": "My mother gets ______ the town easily thanks to the apps on her phone.",
    "options": {
      "A": "down",
      "B": "up",
      "C": "around",
      "D": "through"
    },
    "key": "C",
    "explanation": "Cụm động từ \"get around\" có nghĩa là di chuyển xung quanh khu vực."
  },
  {
    "id": 388,
    "question": "The extended family with three or four ______ remains popular in her village.",
    "options": {
      "A": "performances",
      "B": "generations",
      "C": "anniversaries",
      "D": "customs"
    },
    "key": "B",
    "explanation": "Dùng danh từ \"generations\" (thế hệ) phù hợp với ngữ cảnh gia đình."
  },
  {
    "id": 389,
    "question": "Many people exercise regularly to ______ stress and keep fit.",
    "options": {
      "A": "achieve",
      "B": "reduce",
      "C": "increase",
      "D": "create"
    },
    "key": "B",
    "explanation": "Cụm từ \"reduce stress\" có nghĩa là giảm bớt căng thẳng."
  },
  {
    "id": 390,
    "question": "Com Lang Vong, ______ is well known in Viet Nam, is a speciality of Ha Noi.",
    "options": {
      "A": "whose",
      "B": "who",
      "C": "which",
      "D": "that"
    },
    "key": "C",
    "explanation": "Dùng đại từ quan hệ \"which\" để thay thế cho danh từ chỉ vật (Cốm)."
  },
  {
    "id": 391,
    "question": "If he gets a scholarship, he ______ abroad to complete his degree.",
    "options": {
      "A": "studied",
      "B": "will study",
      "C": "would study",
      "D": "studies"
    },
    "key": "B",
    "explanation": "Câu điều kiện loại 1 dùng thì Tương lai đơn ở mệnh đề chính."
  },
  {
    "id": 392,
    "question": "The more efficient the train system is, ______ it is to travel across the city.",
    "options": {
      "A": "the easier",
      "B": "easier than",
      "C": "the easiest",
      "D": "easier"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh kép \"The + comparative..., the + comparative...\"."
  },
  {
    "id": 393,
    "question": "I met Susan while she ______ volunteer work at a blood donation event.",
    "options": {
      "A": "did",
      "B": "was doing",
      "C": "does",
      "D": "has done"
    },
    "key": "B",
    "explanation": "Dùng quá khứ tiếp diễn cho hành động đang xảy ra thì có hành động khác xen vào."
  },
  {
    "id": 394,
    "question": "In our project, we hope ______ people’s awareness of reducing plastic use.",
    "options": {
      "A": "raised",
      "B": "raise",
      "C": "raising",
      "D": "to raise"
    },
    "key": "D",
    "explanation": "Cấu trúc \"hope + to V\" dùng để diễn đạt hy vọng làm gì đó."
  },
  {
    "id": 395,
    "question": "David: \"Congratulations on winning second prize!\" Lan: ______",
    "options": {
      "A": "Thank you",
      "B": "Not at all",
      "C": "Good job",
      "D": "Absolutely"
    },
    "key": "A",
    "explanation": "Đây là cách đáp lại lời chúc mừng phổ biến và lịch sự nhất."
  },
  {
    "id": 396,
    "question": "Our teacher recommended ______ all the materials before doing the research.",
    "options": {
      "A": "should read",
      "B": "to read",
      "C": "read",
      "D": "reading"
    },
    "key": "D",
    "explanation": "Sau động từ \"recommend\" ta sử dụng dạng V-ing khi không có tân ngữ."
  },
  {
    "id": 397,
    "question": "Find the error: I suggest that we taking part in a campaign to protect the environment.",
    "options": {
      "A": "to protect",
      "B": "the",
      "C": "taking",
      "D": "that"
    },
    "key": "C",
    "explanation": "Trong cấu trúc \"suggest that + S + V-inf\", động từ phải ở dạng nguyên mẫu."
  },
  {
    "id": 398,
    "question": "Find the error: Barbara have taken care of her younger brother since she was ten years old.",
    "options": {
      "A": "years",
      "B": "of",
      "C": "younger",
      "D": "have"
    },
    "key": "D",
    "explanation": "Chủ ngữ số ít (Barbara) đi với trợ động từ \"has\", không dùng \"have\"."
  },
  {
    "id": 399,
    "question": "Find the error: I come from a city who is located in the southern part of the country.",
    "options": {
      "A": "located",
      "B": "from",
      "C": "who",
      "D": "southern"
    },
    "key": "C",
    "explanation": "Dùng đại từ quan hệ \"which\" hoặc \"that\" cho danh từ chỉ vật (city)."
  },
  {
    "id": 400,
    "question": "Find the error: Although it was very cold outside, but we decided to go for a walk.",
    "options": {
      "A": "to go",
      "B": "was",
      "C": "outside",
      "D": "but"
    },
    "key": "D",
    "explanation": "Trong tiếng Anh không dùng cả \"Although\" và \"but\" trong cùng một câu."
  },
  {
    "id": 401,
    "question": "To reduce waste, our community has decided to ______ on single-use plastics.",
    "options": {
      "A": "cut back",
      "B": "cut up",
      "C": "cut off",
      "D": "cut down"
    },
    "key": "D",
    "explanation": "Cụm động từ \"cut down on\" có nghĩa là cắt giảm việc sử dụng."
  },
  {
    "id": 402,
    "question": "We ______ him for many years.",
    "options": {
      "A": "didn't see",
      "B": "wouldn't see",
      "C": "haven't seen",
      "D": "don't see"
    },
    "key": "C",
    "explanation": "Dấu hiệu \"for many years\" yêu cầu sử dụng thì Hiện tại hoàn thành."
  },
  {
    "id": 403,
    "question": "This shopping mall, which ______ years ago, attracts a lot of shoppers.",
    "options": {
      "A": "was built",
      "B": "will be built",
      "C": "was building",
      "D": "built"
    },
    "key": "A",
    "explanation": "Dùng thể bị động ở thì Quá khứ đơn (was built) vì có \"years ago\"."
  },
  {
    "id": 404,
    "question": "She practices speaking English daily ______ she wants to improve her pronunciation.",
    "options": {
      "A": "although",
      "B": "unless",
      "C": "but",
      "D": "because"
    },
    "key": "D",
    "explanation": "Dùng liên từ \"because\" để giải thích lý do cô ấy luyện tập mỗi ngày."
  },
  {
    "id": 405,
    "question": "She bought ______ apple at the market.",
    "options": {
      "A": "the",
      "B": "an",
      "C": "a",
      "D": "∅"
    },
    "key": "B",
    "explanation": "Dùng mạo từ \"an\" trước danh từ bắt đầu bằng nguyên âm \"a\"."
  },
  {
    "id": 406,
    "question": "They are wondering what ______ for their grandmother on her birthday.",
    "options": {
      "A": "to buy",
      "B": "buy",
      "C": "bought",
      "D": "buying"
    },
    "key": "A",
    "explanation": "Cấu trúc \"Wh-word + to V\" dùng để diễn đạt sự băn khoăn."
  },
  {
    "id": 407,
    "question": "This movie is ______ than the one we watched last week.",
    "options": {
      "A": "as exciting",
      "B": "the most exciting",
      "C": "exciting",
      "D": "more exciting"
    },
    "key": "D",
    "explanation": "Cấu trúc so sánh hơn với tính từ dài: \"more + adj + than\"."
  },
  {
    "id": 408,
    "question": "She suggested ______ a yoga class to improve flexibility.",
    "options": {
      "A": "to take",
      "B": "took",
      "C": "taking",
      "D": "take"
    },
    "key": "C",
    "explanation": "Sau động từ \"suggest\" ta sử dụng dạng V-ing để đưa ra lời đề nghị."
  },
  {
    "id": 409,
    "question": "The students listened ______ as the teacher was explaining the new lesson.",
    "options": {
      "A": "attentive",
      "B": "attention",
      "C": "attentively",
      "D": "attend"
    },
    "key": "C",
    "explanation": "Cần trạng từ \"attentively\" để bổ nghĩa cho động từ hành động \"listen\"."
  },
  {
    "id": 410,
    "question": "During the meeting, everyone listened ______ to the manager’s instructions.",
    "options": {
      "A": "attentive",
      "B": "attention",
      "C": "attentively",
      "D": "attend"
    },
    "key": "C",
    "explanation": "Trạng từ \"attentively\" bổ sung ý nghĩa cho cách thức lắng nghe."
  },
  {
    "id": 411,
    "question": "If you study hard, you ______ get good grades.",
    "options": {
      "A": "could",
      "B": "must",
      "C": "should",
      "D": "will"
    },
    "key": "D",
    "explanation": "Trong câu điều kiện loại 1, \"will\" dùng ở mệnh đề chính chỉ kết quả."
  },
  {
    "id": 412,
    "question": "I ______ some of my friends to my birthday party yesterday.",
    "options": {
      "A": "invite",
      "B": "invited",
      "C": "was inviting",
      "D": "have invited"
    },
    "key": "B",
    "explanation": "Dấu hiệu \"yesterday\" yêu cầu sử dụng động từ ở thì Quá khứ đơn."
  },
  {
    "id": 413,
    "question": "Ha Giang, ______ beauty and history are appealing, is a must-go destination.",
    "options": {
      "A": "whose",
      "B": "which",
      "C": "who",
      "D": "whom"
    },
    "key": "A",
    "explanation": "Dùng đại từ quan hệ \"whose\" để thay cho sở hữu (vẻ đẹp của Hà Giang)."
  },
  {
    "id": 414,
    "question": "This restaurant is ______ for its excellent dishes and service.",
    "options": {
      "A": "certain",
      "B": "different",
      "C": "proud",
      "D": "famous"
    },
    "key": "D",
    "explanation": "Cụm từ cố định \"be famous for\" có nghĩa là nổi tiếng về điều gì."
  },
  {
    "id": 415,
    "question": "She is very fond ______ reading novels.",
    "options": {
      "A": "on",
      "B": "of",
      "C": "in",
      "D": "about"
    },
    "key": "B",
    "explanation": "Cấu trúc cố định \"be fond of\" dùng để nói về sở thích của ai đó."
  },
  {
    "id": 416,
    "question": "It was a truly ______ experience to visit the ancient temple.",
    "options": {
      "A": "memory",
      "B": "memorable",
      "C": "memorized",
      "D": "memorizing"
    },
    "key": "B",
    "explanation": "Dùng tính từ \"memorable\" để mô tả một trải nghiệm đáng ghi nhớ."
  },
  {
    "id": 417,
    "question": "Peter: \"Can I watch a cartoon, Mum?\" Peter’s Mum: ______",
    "options": {
      "A": "No, dear, you can’t",
      "B": "Sure",
      "C": "That’s a good idea",
      "D": "I’d love to"
    },
    "key": "A",
    "explanation": "Đây là cách trả lời từ chối một yêu cầu một cách nhẹ nhàng."
  },
  {
    "id": 418,
    "question": "Hoa: \"Would you like some chocolate?\" Minh: ______",
    "options": {
      "A": "Yes, I'd love some. Thank you!",
      "B": "No, I not like.",
      "C": "Cookie is good.",
      "D": "I will like now."
    },
    "key": "A",
    "explanation": "Đây là cách nhận lời lịch sự cho một lời mời ăn uống."
  },
  {
    "id": 419,
    "question": "Find the error: The faster you drive, more dangerous it becomes.",
    "options": {
      "A": "faster",
      "B": "more dangerous",
      "C": "it",
      "D": "becomes"
    },
    "key": "B",
    "explanation": "Cấu trúc so sánh kép phải là \"the + comparative\", thiếu \"the\" ở vế sau."
  },
  {
    "id": 420,
    "question": "Find the error: She recommended that he goes to the zoo.",
    "options": {
      "A": "recommended",
      "B": "goes",
      "C": "the zoo",
      "D": "to"
    },
    "key": "B",
    "explanation": "Sau cấu trúc \"recommended that\", động từ phải ở dạng nguyên mẫu."
  },
  {
    "id": 421,
    "question": "You should use a dictionary to ______ unfamiliar words.",
    "options": {
      "A": "look for",
      "B": "look into",
      "C": "look up",
      "D": "look after"
    },
    "key": "C",
    "explanation": "Cụm động từ \"look up\" có nghĩa là tra cứu nghĩa của từ trong từ điển."
  },
  {
    "id": 422,
    "question": "If you don’t study harder, you ______ repeat the course next year.",
    "options": {
      "A": "ought to",
      "B": "will have to",
      "C": "could",
      "D": "should"
    },
    "key": "B",
    "explanation": "Dùng \"will have to\" để diễn tả một hậu quả tất yếu trong tương lai."
  },
  {
    "id": 423,
    "question": "I suggest ______ our listening skill by listening to podcasts.",
    "options": {
      "A": "improving",
      "B": "improve",
      "C": "to improving",
      "D": "to improve"
    },
    "key": "A",
    "explanation": "Sau động từ \"suggest\" ta sử dụng danh động từ (V-ing)."
  },
  {
    "id": 424,
    "question": "It’s important to ______ in touch with your family.",
    "options": {
      "A": "make",
      "B": "come",
      "C": "lose",
      "D": "keep"
    },
    "key": "D",
    "explanation": "Cụm từ cố định \"keep in touch\" có nghĩa là giữ liên lạc với ai đó."
  },
  {
    "id": 425,
    "question": "The Internet has many benefits, but it also has some ____..",
    "options": {
      "A": "incomes",
      "B": "advantages",
      "C": "drawbacks",
      "D": "profits"
    },
    "key": "C",
    "explanation": "Từ \"drawbacks\" có nghĩa là nhược điểm, đối lập với lợi ích (benefits)."
  },
  {
    "id": 426,
    "question": "Rapid social changes have widened the ______ in many families.",
    "options": {
      "A": "experiences",
      "B": "family values",
      "C": "generation gap",
      "D": "family relation"
    },
    "key": "C",
    "explanation": "Cụm từ \"generation gap\" dùng để chỉ khoảng cách giữa các thế hệ."
  },
  {
    "id": 427,
    "question": "Jack asked me where ______ my holiday the following summer.",
    "options": {
      "A": "would I have",
      "B": "I would have",
      "C": "I will have",
      "D": "I had"
    },
    "key": "B",
    "explanation": "Trong câu tường thuật dạng Wh-question, ta giữ trật tự S + V và lùi thì."
  },
  {
    "id": 428,
    "question": "My sister is trying to ______ sweet food to stay healthy.",
    "options": {
      "A": "carry out",
      "B": "come down with",
      "C": "hand down",
      "D": "cut down on"
    },
    "key": "D",
    "explanation": "Cụm động từ \"cut down on\" có nghĩa là cắt giảm tiêu thụ thứ gì đó."
  },
  {
    "id": 429,
    "question": "John makes people laugh because he has a great sense of ______.",
    "options": {
      "A": "taste",
      "B": "direction",
      "C": "humour",
      "D": "achievement"
    },
    "key": "C",
    "explanation": "Cụm từ cố định \"sense of humour\" có nghĩa là khiếu hài hước."
  },
  {
    "id": 430,
    "question": "The bus stops here to ______ passengers to the museum.",
    "options": {
      "A": "get off",
      "B": "pick up",
      "C": "get on",
      "D": "take off"
    },
    "key": "B",
    "explanation": "Cụm động từ \"pick up\" có nghĩa là đón khách tại một địa điểm."
  },
  {
    "id": 431,
    "question": "__________ there is much pollution in this city, it is an ideal place to live.",
    "options": {
      "A": "In spite of",
      "B": "Despite",
      "C": "Although",
      "D": "Since"
    },
    "key": "C",
    "explanation": "Although nối hai mệnh đề trái nghĩa, dùng đúng cấu trúc nhượng bộ."
  },
  {
    "id": 432,
    "question": "People in that village don't know how __________ the natural beauty of their region.",
    "options": {
      "A": "preserve",
      "B": "preserving",
      "C": "to preserve",
      "D": "preserved"
    },
    "key": "C",
    "explanation": "Know how to V diễn tả biết cách làm gì, cần dùng to preserve."
  },
  {
    "id": 433,
    "question": "The city council announced a ________ to residents about the upcoming drought.",
    "options": {
      "A": "celebration",
      "B": "complaint",
      "C": "schedule",
      "D": "warning"
    },
    "key": "D",
    "explanation": "Warning nghĩa là cảnh báo, phù hợp với hạn hán sắp xảy ra."
  },
  {
    "id": 434,
    "question": "Could you recommend me a local tour guide __________ has good knowledge about the attractions in Da Lat?",
    "options": {
      "A": "which",
      "B": "who",
      "C": "where",
      "D": "whose"
    },
    "key": "B",
    "explanation": "Who dùng cho người làm chủ ngữ trong mệnh đề quan hệ."
  },
  {
    "id": 435,
    "question": "I must congratulate you _______ your very impressive show.",
    "options": {
      "A": "in",
      "B": "for",
      "C": "at",
      "D": "on"
    },
    "key": "D",
    "explanation": "Congratulate someone on something là cụm cố định cần nhớ."
  },
  {
    "id": 436,
    "question": "My father hates living in the city centre because there is always ________ traffic at rush hour.",
    "options": {
      "A": "full",
      "B": "heavy",
      "C": "plenty",
      "D": "crowded"
    },
    "key": "B",
    "explanation": "Heavy traffic là cụm cố định chỉ giao thông đông đúc."
  },
  {
    "id": 437,
    "question": "The longer the talk about the matter is, *******.",
    "options": {
      "A": "the worse the situation seems",
      "B": "the worse seems the situation",
      "C": "the situation seems worse",
      "D": "the situation seems the worse"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh kép the more..., the more... cần đảo đúng."
  },
  {
    "id": 438,
    "question": "******* Sun, which is one of millions of stars in the universe, provides us with heat and light.",
    "options": {
      "A": "An",
      "B": "A",
      "C": "The",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "The Sun là danh từ riêng nên luôn dùng mạo từ the."
  },
  {
    "id": 439,
    "question": "When I came in, the television was on, but nobody __________.",
    "options": {
      "A": "was watching",
      "B": "had watched",
      "C": "is watching",
      "D": "watched"
    },
    "key": "A",
    "explanation": "Hành động đang diễn ra trong quá khứ dùng thì quá khứ tiếp diễn."
  },
  {
    "id": 440,
    "question": "The stadium has __________ that the music can be heard clearly from every corner.",
    "options": {
      "A": "such a powerful sound system",
      "B": "so a powerful sound system",
      "C": "so powerful a sound system",
      "D": "such powerful sound system"
    },
    "key": "A",
    "explanation": "Such + a/an + adj + noun là cấu trúc chuẩn cần dùng."
  },
  {
    "id": 441,
    "question": "My father has promised _________ us on a three-day trip to some historical places in Hue.",
    "options": {
      "A": "taking",
      "B": "take",
      "C": "to take",
      "D": "taken"
    },
    "key": "C",
    "explanation": "Promise + to V diễn tả lời hứa sẽ làm gì."
  },
  {
    "id": 442,
    "question": "Ha Noi, __________ is the capital of Viet Nam, is famous for its culture and traditions.",
    "options": {
      "A": "who",
      "B": "where",
      "C": "that",
      "D": "which"
    },
    "key": "D",
    "explanation": "Which thay cho địa điểm trong mệnh đề quan hệ không xác định."
  },
  {
    "id": 443,
    "question": "Before you ask someone for help, wait until he or she is in a good _______.",
    "options": {
      "A": "emotion",
      "B": "mood",
      "C": "feeling",
      "D": "opinion"
    },
    "key": "B",
    "explanation": "In a good mood là cụm cố định chỉ tâm trạng tốt."
  },
  {
    "id": 444,
    "question": "We have prepared for the test carefully, so now we feel _______.",
    "options": {
      "A": "friendly",
      "B": "confident",
      "C": "nervous",
      "D": "confused"
    },
    "key": "B",
    "explanation": "Chuẩn bị tốt dẫn đến cảm giác tự tin, chọn confident."
  },
  {
    "id": 445,
    "question": "David finished _________ his homework and then he went to the party with George and Bill.",
    "options": {
      "A": "do",
      "B": "doing",
      "C": "to do",
      "D": "to be done"
    },
    "key": "B",
    "explanation": "Finish + V-ing là cấu trúc bắt buộc trong ngữ pháp."
  },
  {
    "id": 446,
    "question": "I met a man __________ first language is Arabic at the conference in Paris yesterday.",
    "options": {
      "A": "who",
      "B": "which",
      "C": "whose",
      "D": "that"
    },
    "key": "C",
    "explanation": "Whose dùng để chỉ sở hữu, ở đây là ngôn ngữ của người."
  },
  {
    "id": 447,
    "question": "He put on a large hat and glasses as a disguise and hoped no one would _________ him.",
    "options": {
      "A": "see",
      "B": "watch",
      "C": "realize",
      "D": "recognize"
    },
    "key": "D",
    "explanation": "Recognize nghĩa là nhận ra, phù hợp với ngữ cảnh cải trang."
  },
  {
    "id": 448,
    "question": "I wish I ___________ an electric bike. I'm tired of catching the bus to the school every day.",
    "options": {
      "A": "will have",
      "B": "had",
      "C": "have",
      "D": "have had"
    },
    "key": "B",
    "explanation": "Wish + past simple diễn tả mong muốn trái với hiện tại."
  },
  {
    "id": 449,
    "question": "He ________ hard for the exam when his friends invited him out.",
    "options": {
      "A": "is studying",
      "B": "was studying",
      "C": "will study",
      "D": "studies"
    },
    "key": "B",
    "explanation": "Hành động đang diễn ra bị gián đoạn trong quá khứ."
  },
  {
    "id": 450,
    "question": "My students decided ________ a field trip after the final test.",
    "options": {
      "A": "taking",
      "B": "take",
      "C": "to take",
      "D": "took"
    },
    "key": "C",
    "explanation": "Decide + to V là cấu trúc đúng cần ghi nhớ."
  },
  {
    "id": 451,
    "question": "I always go to the gym three times __________ week.",
    "options": {
      "A": "a",
      "B": "the",
      "C": "an",
      "D": "Ø"
    },
    "key": "A",
    "explanation": "Three times a week là cụm chỉ tần suất quen thuộc."
  },
  {
    "id": 452,
    "question": "If the weather is fine tomorrow, we __________ to the beach.",
    "options": {
      "A": "go",
      "B": "went",
      "C": "will go",
      "D": "would go"
    },
    "key": "C",
    "explanation": "Câu điều kiện loại một dùng will ở mệnh đề chính."
  },
  {
    "id": 453,
    "question": "\"Is this their new house?\" – \"Yes, it's __________.\"",
    "options": {
      "A": "they",
      "B": "theirs",
      "C": "their",
      "D": "them"
    },
    "key": "B",
    "explanation": "Theirs là đại từ sở hữu thay thế cho danh từ phía sau."
  },
  {
    "id": 454,
    "question": "She didn't buy the dress ___________ it was too expensive.",
    "options": {
      "A": "because",
      "B": "because of",
      "C": "although",
      "D": "despite"
    },
    "key": "A",
    "explanation": "Because nối mệnh đề nguyên nhân đầy đủ phía sau."
  },
  {
    "id": 455,
    "question": "The children are really fond ________ learning art and music classes.",
    "options": {
      "A": "to",
      "B": "of",
      "C": "on",
      "D": "in"
    },
    "key": "B",
    "explanation": "Be fond of + V-ing là cấu trúc cố định."
  },
  {
    "id": 456,
    "question": "The instructions were quite _*******, making it hard for everyone to follow.",
    "options": {
      "A": "legible",
      "B": "apparent",
      "C": "coherent",
      "D": "vague"
    },
    "key": "D",
    "explanation": "Vague nghĩa là mơ hồ, làm người đọc khó hiểu."
  },
  {
    "id": 457,
    "question": "We can help to ________ the environment by reducing plastic waste.",
    "options": {
      "A": "protect",
      "B": "pollute",
      "C": "limit",
      "D": "destroy"
    },
    "key": "A",
    "explanation": "Protect the environment là hành động tích cực cần thiết."
  },
  {
    "id": 458,
    "question": "You should ________ early and do more exercise because it is good for your health.",
    "options": {
      "A": "look for",
      "B": "get up",
      "C": "turn on",
      "D": "put off"
    },
    "key": "B",
    "explanation": "Get up early là thói quen tốt cho sức khỏe."
  },
  {
    "id": 459,
    "question": "My sister ________ shopping with her friends every Sunday.",
    "options": {
      "A": "plays",
      "B": "has",
      "C": "goes",
      "D": "makes"
    },
    "key": "C",
    "explanation": "Go shopping là cụm động từ cố định."
  },
  {
    "id": 460,
    "question": "Don't go near the canal! It is very ********.",
    "options": {
      "A": "danger",
      "B": "dangerous",
      "C": "endanger",
      "D": "dangerously"
    },
    "key": "B",
    "explanation": "Cần tính từ để bổ nghĩa cho chủ ngữ it."
  },
  {
    "id": 461,
    "question": "Mary: \"I think students should know how to use AI properly to assist their studying.\" Peter: \"***********. It's a useful tool for them.\"",
    "options": {
      "A": "That's not true",
      "B": "I don't agree",
      "C": "I totally agree",
      "D": "I have no idea"
    },
    "key": "C",
    "explanation": "Câu sau thể hiện đồng ý nên chọn I totally agree."
  },
  {
    "id": 462,
    "question": "Nam: \"Thank you very much for your nice gift.\" Minh: “****________.”",
    "options": {
      "A": "You're welcome",
      "B": "Good idea",
      "C": "No, thanks",
      "D": "Yes, let's"
    },
    "key": "A",
    "explanation": "Đáp lại lời cảm ơn lịch sự dùng You're welcome."
  },
  {
    "id": 463,
    "question": "Doctors suggest ___________ fish and green vegetables to have strong bones.",
    "options": {
      "A": "eating",
      "B": "to eat",
      "C": "to eating",
      "D": "eat"
    },
    "key": "A",
    "explanation": "Suggest + V-ing là cấu trúc bắt buộc."
  },
  {
    "id": 464,
    "question": "Every day, they __________ Facebook Messenger to discuss their schoolwork.",
    "options": {
      "A": "use",
      "B": "used",
      "C": "will use",
      "D": "are using"
    },
    "key": "A",
    "explanation": "Every day dùng thì hiện tại đơn."
  },
  {
    "id": 465,
    "question": "I'm tired. I want to have ___________ time to get my energy back.",
    "options": {
      "A": "many",
      "B": "a lot of",
      "C": "few",
      "D": "a few"
    },
    "key": "B",
    "explanation": "Time không đếm được nên dùng a lot of."
  },
  {
    "id": 466,
    "question": "Robots and machines will soon ___________ the role of humans in space exploration.",
    "options": {
      "A": "pass down",
      "B": "take over",
      "C": "look up",
      "D": "come across"
    },
    "key": "B",
    "explanation": "Take over nghĩa là thay thế, đảm nhận vai trò."
  },
  {
    "id": 467,
    "question": "Our flats are great for the people _________ have small children.",
    "options": {
      "A": "which",
      "B": "whose",
      "C": "what",
      "D": "who"
    },
    "key": "D",
    "explanation": "Who thay cho people làm chủ ngữ mệnh đề quan hệ."
  },
  {
    "id": 468,
    "question": "I always like to _________ my own decisions because I want to be independent of my parents.",
    "options": {
      "A": "get",
      "B": "do",
      "C": "put",
      "D": "make"
    },
    "key": "D",
    "explanation": "Make decisions là cụm cố định cần nhớ."
  },
  {
    "id": 469,
    "question": "He tried so hard to ____________ the five-kilometer running route and he won the gold medal.",
    "options": {
      "A": "delay",
      "B": "accomplish",
      "C": "observe",
      "D": "sponsor"
    },
    "key": "B",
    "explanation": "Accomplish nghĩa là hoàn thành nhiệm vụ khó."
  },
  {
    "id": 470,
    "question": "The new plants in the garden will die if we don't water them _*********.",
    "options": {
      "A": "regularly",
      "B": "regularity",
      "C": "regular",
      "D": "regularize"
    },
    "key": "A",
    "explanation": "Cần trạng từ bổ nghĩa cho động từ water."
  },
  {
    "id": 471,
    "question": "The school was founded in the 1990s and was the _________ in the country at that time.",
    "options": {
      "A": "more famous",
      "B": "as famous",
      "C": "famous as",
      "D": "most famous"
    },
    "key": "D",
    "explanation": "So sánh nhất cần dùng the most famous."
  },
  {
    "id": 472,
    "question": "In the future, people __________ to other planets for holidays.",
    "options": {
      "A": "travelled",
      "B": "travel",
      "C": "will travel",
      "D": "have travelled"
    },
    "key": "C",
    "explanation": "In the future dùng thì tương lai đơn."
  },
  {
    "id": 473,
    "question": "Trang: ________ are you getting home? – An: On Sunday morning.",
    "options": {
      "A": "When",
      "B": "Why",
      "C": "How",
      "D": "Where"
    },
    "key": "A",
    "explanation": "Hỏi thời gian nên dùng When."
  },
  {
    "id": 474,
    "question": "After living in the quiet suburb for years, they moved back to the ________ of the city centre.",
    "options": {
      "A": "excited",
      "B": "excitedly",
      "C": "excitement",
      "D": "excite"
    },
    "key": "C",
    "explanation": "Sau the cần danh từ nên chọn excitement."
  },
  {
    "id": 475,
    "question": "Last weekend, my school __________ a trip to a famous historical place.",
    "options": {
      "A": "organises",
      "B": "is organising",
      "C": "will organise",
      "D": "organised"
    },
    "key": "D",
    "explanation": "Last weekend là dấu hiệu quá khứ đơn."
  },
  {
    "id": 476,
    "question": "Lisa wishes she __________ near a park and a supermarket.",
    "options": {
      "A": "will live",
      "B": "lived",
      "C": "lives",
      "D": "has lived"
    },
    "key": "B",
    "explanation": "Wish + past simple cho điều trái hiện tại."
  },
  {
    "id": 477,
    "question": "The city council planned ________ the residential areas safe and liveable.",
    "options": {
      "A": "to make",
      "B": "to making",
      "C": "make",
      "D": "making"
    },
    "key": "A",
    "explanation": "Plan + to V là cấu trúc chuẩn."
  },
  {
    "id": 478,
    "question": "He said that he _________ a three-day trip to Phu Quoc island the next week.",
    "options": {
      "A": "will take",
      "B": "takes",
      "C": "would take",
      "D": "took"
    },
    "key": "C",
    "explanation": "Câu tường thuật lùi thì tương lai thành would."
  },
  {
    "id": 479,
    "question": "Nam plays tennis with his friends __________ Sundays.",
    "options": {
      "A": "on",
      "B": "to",
      "C": "at",
      "D": "in"
    },
    "key": "A",
    "explanation": "On dùng với ngày trong tuần."
  },
  {
    "id": 480,
    "question": "********* it rained heavily, they went for a hike in the mountain.",
    "options": {
      "A": "But",
      "B": "Although",
      "C": "Because",
      "D": "However"
    },
    "key": "B",
    "explanation": "Although nối hai mệnh đề trái nghĩa."
  },
  {
    "id": 481,
    "question": "She gave me ______ orange yesterday.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "B",
    "explanation": "Từ \"Orange\" bắt đầu bằng nguyên âm nên ta sử dụng mạo từ \"an\"."
  },
  {
    "id": 482,
    "question": "She has a meeting ______ Monday, but I'm not sure.",
    "options": {
      "A": "at",
      "B": "in",
      "C": "on",
      "D": "by"
    },
    "key": "C",
    "explanation": "Sử dụng giới từ \"on\" trước các ngày trong tuần."
  },
  {
    "id": 483,
    "question": "The new film is about a poor little girl ______ can speak several languages.",
    "options": {
      "A": "who",
      "B": "whose",
      "C": "whom",
      "D": "which"
    },
    "key": "A",
    "explanation": "Đại từ quan hệ \"who\" thay thế cho danh từ chỉ người làm chủ ngữ."
  },
  {
    "id": 484,
    "question": "Mai drives ______ than her brother.",
    "options": {
      "A": "more carefully",
      "B": "as careful",
      "C": "carefully",
      "D": "careful"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh hơn với trạng từ dài là \"more + adverb + than\"."
  },
  {
    "id": 485,
    "question": "Mr. Brown, a foreign tourist, is talking to the tour guide. Mr. Brown: \"Thank you for showing us around the Temple of Literature.\" The tour guide: \"______.\"",
    "options": {
      "A": "That's a good idea",
      "B": "Yes, I'd love to",
      "C": "Of course",
      "D": "You are welcome"
    },
    "key": "D",
    "explanation": "Cụm từ \"You are welcome\" dùng để đáp lại lời cảm ơn một cách lịch sự."
  },
  {
    "id": 486,
    "question": "My grandmother doesn't know ______ to use the washing machine.",
    "options": {
      "A": "whom",
      "B": "what",
      "C": "how",
      "D": "which"
    },
    "key": "C",
    "explanation": "Cấu trúc \"know how to do something\" nghĩa là biết cách làm việc gì đó."
  },
  {
    "id": 487,
    "question": "We missed the bus this morning ______ we got up late.",
    "options": {
      "A": "despite",
      "B": "although",
      "C": "because",
      "D": "because of"
    },
    "key": "C",
    "explanation": "Dùng \"because\" trước một mệnh đề để chỉ nguyên nhân."
  },
  {
    "id": 488,
    "question": "My uncle ______ his living by selling bread on the streets.",
    "options": {
      "A": "does",
      "B": "has",
      "C": "takes",
      "D": "earns"
    },
    "key": "D",
    "explanation": "Cụm từ cố định \"earn one's living\" có nghĩa là kiếm sống."
  },
  {
    "id": 489,
    "question": "The government is ______ a plan to solve the traffic problem in big cities.",
    "options": {
      "A": "carrying out",
      "B": "looking up",
      "C": "looking after",
      "D": "turning off"
    },
    "key": "A",
    "explanation": "Cụm động từ \"carry out\" có nghĩa là tiến hành hoặc thực hiện kế hoạch."
  },
  {
    "id": 490,
    "question": "Extended families with three or four ______ living under one roof still remain in this region.",
    "options": {
      "A": "customs",
      "B": "generations",
      "C": "traditions",
      "D": "relatives"
    },
    "key": "B",
    "explanation": "Từ \"generations\" (thế hệ) phù hợp với ngữ cảnh gia đình nhiều thế hệ."
  },
  {
    "id": 491,
    "question": "Find the error: Not only Mr. Lam but also his wife were present at the scene where the accident happened this morning.",
    "options": {
      "A": "the accident",
      "B": "at",
      "C": "were",
      "D": "happened"
    },
    "key": "C",
    "explanation": "Cấu trúc \"Not only... but also\" chia động từ theo chủ ngữ gần nhất (his wife)."
  },
  {
    "id": 492,
    "question": "Find the error: A Sun, which is a source of solar energy, powers many things on Earth.",
    "options": {
      "A": "is",
      "B": "A",
      "C": "on",
      "D": "many"
    },
    "key": "B",
    "explanation": "Mặt trời là vật duy nhất nên phải dùng mạo từ xác định \"The Sun\"."
  },
  {
    "id": 493,
    "question": "My mother had to cancel her plans for the weekend because she ______ the flu.",
    "options": {
      "A": "ran out of",
      "B": "cut down on",
      "C": "got on with",
      "D": "came down with"
    },
    "key": "D",
    "explanation": "Cụm động từ \"come down with\" có nghĩa là mắc bệnh hoặc bị ốm."
  },
  {
    "id": 494,
    "question": "A travel ______ is a business that arranges accommodation, tickets and other services for people's holidays and journeys.",
    "options": {
      "A": "agency",
      "B": "guide",
      "C": "lover",
      "D": "blogger"
    },
    "key": "A",
    "explanation": "Cụm từ \"travel agency\" có nghĩa là đại lý hoặc công ty du lịch."
  },
  {
    "id": 495,
    "question": "I'm looking for a souvenir shop ______ sells a variety of handicrafts.",
    "options": {
      "A": "whose",
      "B": "which",
      "C": "where",
      "D": "who"
    },
    "key": "B",
    "explanation": "Dùng đại từ quan hệ \"which\" để thay thế cho danh từ chỉ vật (shop)."
  },
  {
    "id": 496,
    "question": "Alex and Mike are talking about Mike's entrance exam next week. Alex: \"I've heard that you're taking the high school entrance exam next week. Good luck with your exam!\" Mike: \"______\"",
    "options": {
      "A": "Thank you. I'll try my best.",
      "B": "I'm sorry, it is.",
      "C": "It's difficult for me to answer.",
      "D": "You're so lucky."
    },
    "key": "A",
    "explanation": "Đáp lại lời chúc may mắn bằng lời cảm ơn và hứa sẽ cố gắng."
  },
  {
    "id": 497,
    "question": "The IT expert recommended that we ______ in good antivirus software to protect our computers.",
    "options": {
      "A": "investing",
      "B": "invested",
      "C": "to invest",
      "D": "invest"
    },
    "key": "D",
    "explanation": "Cấu trúc giả định với \"recommend that\" yêu cầu động từ ở dạng nguyên thể."
  },
  {
    "id": 498,
    "question": "Traditional festivals in Vietnam create ______ experiences that help connect generations.",
    "options": {
      "A": "memory",
      "B": "memorable",
      "C": "memorise",
      "D": "memorably"
    },
    "key": "B",
    "explanation": "Cần một tính từ (memorable - đáng nhớ) để bổ nghĩa cho danh từ \"experiences\"."
  },
  {
    "id": 499,
    "question": "Trang is at the school library. Trang: \"May I borrow a book about natural wonders of the world?\" Librarian: \"______\"",
    "options": {
      "A": "Yes, I like reading about cultures, too.",
      "B": "Sure. I'll find it for you.",
      "C": "What a pity! I don't know.",
      "D": "No, not at all."
    },
    "key": "B",
    "explanation": "Lời đáp phù hợp khi đồng ý cho mượn sách trong thư viện."
  },
  {
    "id": 500,
    "question": "Jason is a civil engineer. It is a ______ job as it needs a lot of time, efforts, and skills.",
    "options": {
      "A": "basic",
      "B": "regular",
      "C": "repetitive",
      "D": "demanding"
    },
    "key": "D",
    "explanation": "Tính từ \"demanding\" dùng để chỉ công việc đòi hỏi nhiều công sức và kỹ năng."
  },
  {
    "id": 501,
    "question": "I study in the library as there are too many ______ at home.",
    "options": {
      "A": "distracting",
      "B": "distract",
      "C": "distractions",
      "D": "distractedly"
    },
    "key": "C",
    "explanation": "Sau \"too many\" cần một danh từ đếm được số nhiều (distractions)."
  },
  {
    "id": 502,
    "question": "Can you help me translate this sentence ______ English?",
    "options": {
      "A": "by",
      "B": "into",
      "C": "over",
      "D": "with"
    },
    "key": "B",
    "explanation": "Cấu trúc \"translate something into another language\" (dịch cái gì sang ngôn ngữ khác)."
  },
  {
    "id": 503,
    "question": "The atmosphere was very peaceful in Sa Pa, ______ I had a relaxing time there.",
    "options": {
      "A": "since",
      "B": "but",
      "C": "so",
      "D": "or"
    },
    "key": "C",
    "explanation": "Liên từ \"so\" dùng để nối hai mệnh đề chỉ kết quả."
  },
  {
    "id": 504,
    "question": "What ______ the students ______ when the teacher came in?",
    "options": {
      "A": "did – do",
      "B": "are – doing",
      "C": "do – do",
      "D": "were – doing"
    },
    "key": "D",
    "explanation": "Thì Quá khứ tiếp diễn diễn tả hành động đang xảy ra thì hành động khác xen vào."
  },
  {
    "id": 505,
    "question": "The song \"Viet tiep cau chuyen hoa binh\", ______ was performed in the 50th anniversary of the national unification in Ho Chi Minh City, has received millions of views on the Internet.",
    "options": {
      "A": "whom",
      "B": "whose",
      "C": "that",
      "D": "which"
    },
    "key": "D",
    "explanation": "Sử dụng \"which\" trong mệnh đề quan hệ không xác định để bổ nghĩa cho bài hát."
  },
  {
    "id": 506,
    "question": "The old folktales have been passed down through many ______ of Vietnamese people.",
    "options": {
      "A": "industries",
      "B": "customers",
      "C": "generations",
      "D": "destinations"
    },
    "key": "C",
    "explanation": "Từ \"generations\" (thế hệ) phù hợp với ngữ cảnh truyền lại qua nhiều đời."
  },
  {
    "id": 507,
    "question": "If it ______ rainy tomorrow, we will have to put off the match until Sunday.",
    "options": {
      "A": "is",
      "B": "was",
      "C": "are",
      "D": "were"
    },
    "key": "A",
    "explanation": "Câu điều kiện loại 1 dùng thì Hiện tại đơn ở mệnh đề IF."
  },
  {
    "id": 508,
    "question": "I often ______ the washing-up after breakfast and my sister dries the dishes.",
    "options": {
      "A": "make",
      "B": "work",
      "C": "plant",
      "D": "do"
    },
    "key": "D",
    "explanation": "Cụm từ cố định \"do the washing-up\" có nghĩa là rửa bát đĩa."
  },
  {
    "id": 509,
    "question": "The teacher said that I ______ a report after taking an eco-tour in Ba Vi National Park.",
    "options": {
      "A": "write",
      "B": "can write",
      "C": "could write",
      "D": "will write"
    },
    "key": "C",
    "explanation": "Trong câu tường thuật, động từ thiếu \"can\" phải lùi thì thành \"could\"."
  },
  {
    "id": 510,
    "question": "My friends and I ______ the blockbuster named \"Lat mat 7\" in Lotte cinema at the moment.",
    "options": {
      "A": "will watch",
      "B": "are watching",
      "C": "watched",
      "D": "watch"
    },
    "key": "B",
    "explanation": "Dấu hiệu \"at the moment\" yêu cầu sử dụng thì Hiện tại tiếp diễn."
  },
  {
    "id": 511,
    "question": "Exercising regularly is ______ than sitting for long periods of time in front of a screen.",
    "options": {
      "A": "more beneficial",
      "B": "most beneficial",
      "C": "the most beneficial",
      "D": "as beneficial"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh hơn với tính từ dài là \"more + adjective + than\"."
  },
  {
    "id": 512,
    "question": "May 19th is the birthday of Uncle Ho, who is ______ by people all over the world.",
    "options": {
      "A": "put up with",
      "B": "come up to",
      "C": "caught up with",
      "D": "looked up to"
    },
    "key": "D",
    "explanation": "Cụm động từ \"look up to\" có nghĩa là ngưỡng mộ hoặc kính trọng."
  },
  {
    "id": 513,
    "question": "I live in a/an ______ street which is full of people and vehicles moving around all day.",
    "options": {
      "A": "calm",
      "B": "empty",
      "C": "crowded",
      "D": "quiet"
    },
    "key": "C",
    "explanation": "Tính từ \"crowded\" (đông đúc) phù hợp để mô tả đường phố nhiều người và xe."
  },
  {
    "id": 514,
    "question": "We suggest ______ funds to help the disadvantaged children in the local community.",
    "options": {
      "A": "to raise",
      "B": "raising",
      "C": "raise",
      "D": "to raising"
    },
    "key": "B",
    "explanation": "Sau động từ \"suggest\" ta sử dụng danh động từ V-ing."
  },
  {
    "id": 515,
    "question": "Please turn off all personal ______ when you are in the meeting room.",
    "options": {
      "A": "electronic devices",
      "B": "shopping lists",
      "C": "modern sports",
      "D": "traditional games"
    },
    "key": "A",
    "explanation": "Cụm danh từ \"electronic devices\" (thiết bị điện tử) phù hợp với hành động tắt máy."
  },
  {
    "id": 516,
    "question": "The villagers ______ when the earthquake occurred last week.",
    "options": {
      "A": "are sleeping",
      "B": "sleep",
      "C": "slept",
      "D": "were sleeping"
    },
    "key": "D",
    "explanation": "Dùng thì Quá khứ tiếp diễn để diễn tả hành động đang xảy ra trong quá khứ."
  },
  {
    "id": 517,
    "question": "Your advice was very ______, saving me a lot of time.",
    "options": {
      "A": "use",
      "B": "useful",
      "C": "usefully",
      "D": "user"
    },
    "key": "B",
    "explanation": "Cần một tính từ (useful - hữu ích) đứng sau trạng từ \"very\" để bổ nghĩa danh từ."
  },
  {
    "id": 518,
    "question": "I just want to make enough money to ______ care of my family.",
    "options": {
      "A": "take",
      "B": "do",
      "C": "make",
      "D": "pay"
    },
    "key": "A",
    "explanation": "Cụm động từ cố định \"take care of\" có nghĩa là chăm sóc."
  },
  {
    "id": 519,
    "question": "An Giang, along with Can Tho, is among the most popular tourist ______ in the Mekong River Delta.",
    "options": {
      "A": "boards",
      "B": "agencies",
      "C": "destinations",
      "D": "seasons"
    },
    "key": "C",
    "explanation": "Cụm từ \"tourist destinations\" có nghĩa là các địa điểm tham quan du lịch."
  },
  {
    "id": 520,
    "question": "Fresh fruit and vegetables are an essential component of a healthy ______.",
    "options": {
      "A": "diet",
      "B": "practice",
      "C": "habit",
      "D": "exercise"
    },
    "key": "A",
    "explanation": "Cụm từ \"healthy diet\" có nghĩa là một chế độ ăn uống lành mạnh."
  },
  {
    "id": 521,
    "question": "At 9 a.m yesterday, I ______ \"Tom and Jerry\" with my family.",
    "options": {
      "A": "am watching",
      "B": "have watched",
      "C": "will watch",
      "D": "was watching"
    },
    "key": "D",
    "explanation": "Hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ chia Quá khứ tiếp diễn."
  },
  {
    "id": 522,
    "question": "I have no idea when ______ this information.",
    "options": {
      "A": "getting",
      "B": "to get",
      "C": "get",
      "D": "got"
    },
    "key": "B",
    "explanation": "Cấu trúc \"wh-word + to V\" dùng làm tân ngữ sau một số cụm từ nhất định."
  },
  {
    "id": 523,
    "question": "Lan didn't attend the party ______ she had to finish her homework.",
    "options": {
      "A": "although",
      "B": "while",
      "C": "because",
      "D": "unless"
    },
    "key": "C",
    "explanation": "Sử dụng \"because\" để giải thích lý do cho mệnh đề trước đó."
  },
  {
    "id": 524,
    "question": "She is trying to ______ a good job after school.",
    "options": {
      "A": "look after",
      "B": "look at",
      "C": "look up",
      "D": "look for"
    },
    "key": "D",
    "explanation": "Cụm động từ \"look for\" có nghĩa là tìm kiếm cái gì đó."
  },
  {
    "id": 525,
    "question": "She ______ pickleball with her friends at the moment.",
    "options": {
      "A": "played",
      "B": "plays",
      "C": "is playing",
      "D": "was playing"
    },
    "key": "C",
    "explanation": "Dấu hiệu \"at the moment\" yêu cầu chia động từ ở thì Hiện tại tiếp diễn."
  },
  {
    "id": 526,
    "question": "John often reads books ______ the school library.",
    "options": {
      "A": "in",
      "B": "for",
      "C": "of",
      "D": "between"
    },
    "key": "A",
    "explanation": "Sử dụng giới từ \"in\" để chỉ vị trí bên trong thư viện."
  },
  {
    "id": 527,
    "question": "Mr. Minh grows vegetables and raises cattle on a farm. He is a ____..",
    "options": {
      "A": "teacher",
      "B": "worker",
      "C": "writer",
      "D": "farmer"
    },
    "key": "D",
    "explanation": "Người làm việc trên nông trang, trồng trọt và chăn nuôi được gọi là nông dân."
  },
  {
    "id": 528,
    "question": "If he gets the afternoon off, he ______ me at the station.",
    "options": {
      "A": "would meet",
      "B": "met",
      "C": "will meet",
      "D": "meets"
    },
    "key": "C",
    "explanation": "Câu điều kiện loại 1 dùng thì Tương lai đơn ở mệnh đề chính."
  },
  {
    "id": 529,
    "question": "Osaka has become one of ______ most livable city in Asia.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Mạo từ \"the\" luôn đi kèm với cấu trúc so sánh nhất \"most + adjective\"."
  },
  {
    "id": 530,
    "question": "The doctor ______ is talking to my sister is my next-door neighbor.",
    "options": {
      "A": "who",
      "B": "whose",
      "C": "when",
      "D": "which"
    },
    "key": "A",
    "explanation": "Sử dụng đại từ quan hệ \"who\" để bổ nghĩa cho danh từ chỉ người làm chủ ngữ."
  },
  {
    "id": 531,
    "question": "Water pollution, deforestation, and garbage dump are main ______ problems in our country.",
    "options": {
      "A": "educational",
      "B": "economic",
      "C": "environmental",
      "D": "politic"
    },
    "key": "C",
    "explanation": "Dùng \"environmental\" vì ô nhiễm và phá rừng là các vấn đề về môi trường."
  },
  {
    "id": 532,
    "question": "Bluegrass music is different ______ other types of country music.",
    "options": {
      "A": "in",
      "B": "from",
      "C": "by",
      "D": "to"
    },
    "key": "B",
    "explanation": "Cấu trúc \"be different from\" có nghĩa là khác biệt so với cái gì."
  },
  {
    "id": 533,
    "question": "While they ______ their ideas, they found an interesting solution.",
    "options": {
      "A": "are discussing",
      "B": "discussed",
      "C": "were discussing",
      "D": "discuss"
    },
    "key": "C",
    "explanation": "Dùng thì Quá khứ tiếp diễn cho hành động đang xảy ra trong quá khứ."
  },
  {
    "id": 534,
    "question": "Jason was very tired. ______, he went to bed earlier than usual.",
    "options": {
      "A": "Because",
      "B": "Since",
      "C": "Although",
      "D": "Therefore"
    },
    "key": "D",
    "explanation": "Dùng \"Therefore\" (do đó) để chỉ kết quả của việc bị mệt mỏi."
  },
  {
    "id": 535,
    "question": "We wish we ______ more confident when speaking in public.",
    "options": {
      "A": "were",
      "B": "be",
      "C": "are",
      "D": "will be"
    },
    "key": "A",
    "explanation": "Câu ước ở hiện tại lùi thì về quá khứ, to be dùng \"were\" cho mọi chủ ngữ."
  },
  {
    "id": 536,
    "question": "Don't put too ______ sugar in the orange juice. It's not good for your health.",
    "options": {
      "A": "much",
      "B": "many",
      "C": "a little",
      "D": "few"
    },
    "key": "A",
    "explanation": "Dùng \"much\" vì \"sugar\" là danh từ không đếm được."
  },
  {
    "id": 537,
    "question": "Jane plans ______ her family in New York next week.",
    "options": {
      "A": "visiting",
      "B": "to visit",
      "C": "visited",
      "D": "visit"
    },
    "key": "B",
    "explanation": "Sau động từ \"plan\" ta sử dụng động từ nguyên mẫu có \"to\"."
  },
  {
    "id": 538,
    "question": "Food in Northern Vietnam is not ______ spicy as that in Central and Southern Vietnam.",
    "options": {
      "A": "more",
      "B": "much",
      "C": "less",
      "D": "as"
    },
    "key": "D",
    "explanation": "Cấu trúc so sánh bằng (hoặc không bằng) là \"(not) as + adj + as\"."
  },
  {
    "id": 539,
    "question": "Teenagers like this new shopping mall ______ it is modern and fun.",
    "options": {
      "A": "because",
      "B": "although",
      "C": "so",
      "D": "but"
    },
    "key": "A",
    "explanation": "Dùng \"because\" để nối một mệnh đề chỉ nguyên nhân."
  },
  {
    "id": 540,
    "question": "You should ______ electric devices when not in use to save electricity.",
    "options": {
      "A": "turn down",
      "B": "turn on",
      "C": "turn off",
      "D": "turn up"
    },
    "key": "C",
    "explanation": "Cụm động từ \"turn off\" nghĩa là tắt thiết bị để tiết kiệm điện."
  },
  {
    "id": 541,
    "question": "His parents won't let him play ice hockey because they think it is too ______.",
    "options": {
      "A": "dangerous",
      "B": "danger",
      "C": "endanger",
      "D": "dangerously"
    },
    "key": "A",
    "explanation": "Cần một tính từ đứng sau \"is too\" để chỉ đặc điểm của môn thể thao."
  },
  {
    "id": 542,
    "question": "The doctor suggested ______ that type of soda from his diet because it is high in calories.",
    "options": {
      "A": "to remove",
      "B": "removes",
      "C": "removed",
      "D": "removing"
    },
    "key": "D",
    "explanation": "Theo sau động từ \"suggest\" là danh động từ V-ing."
  },
  {
    "id": 543,
    "question": "Are you staying at home or hanging out with your friends ______ Christmas Day?",
    "options": {
      "A": "in",
      "B": "at",
      "C": "for",
      "D": "on"
    },
    "key": "D",
    "explanation": "Dùng giới từ \"on\" cho các ngày cụ thể (có chữ Day)."
  },
  {
    "id": 544,
    "question": "Get up early tomorrow morning so that you ______ catch the first bus.",
    "options": {
      "A": "can",
      "B": "should",
      "C": "must",
      "D": "need"
    },
    "key": "A",
    "explanation": "Cấu trúc \"so that + can\" dùng để diễn đạt mục đích."
  },
  {
    "id": 545,
    "question": "Cathy ______ me since she moved to Edinburgh.",
    "options": {
      "A": "didn't phone",
      "B": "isn't phoning",
      "C": "has hasn't phoned",
      "D": "doesn’t phone"
    },
    "key": "C",
    "explanation": "Với \"since\", mệnh đề chính chia ở thì Hiện tại hoàn thành."
  },
  {
    "id": 546,
    "question": "This restaurant is ______ for its excellent dishes and service.",
    "options": {
      "A": "proud",
      "B": "certain",
      "C": "keen",
      "D": "famous"
    },
    "key": "D",
    "explanation": "Cụm từ \"be famous for\" có nghĩa là nổi tiếng về cái gì."
  },
  {
    "id": 547,
    "question": "Dave congratulates Hannah on her performance in the music competition. Dave: \"Congratulations! You've given a great performance.\" Hannah: \"______\"",
    "options": {
      "A": "I'm sorry to hear that.",
      "B": "Me neither.",
      "C": "It's nice of you to say so.",
      "D": "Don’t worry."
    },
    "key": "C",
    "explanation": "Dùng \"It's nice of you to say so\" để đáp lại lời khen ngợi."
  },
  {
    "id": 548,
    "question": "Mary is talking to a teacher in front of a classroom. Mary: \"Excuse me. Is this the Math class?\" Teacher: \"______\"",
    "options": {
      "A": "Yes, it is. And I'm the teacher.",
      "B": "Yes, they are your Math teachers.",
      "C": "Not really. He’s the man over there.",
      "D": "No, he isn't here."
    },
    "key": "A",
    "explanation": "Lời đáp lịch sự để xác nhận thông tin lớp học."
  },
  {
    "id": 549,
    "question": "Doris has just taken Emily to the station. Emily: \"Thank you for giving me a ride to the station.\" Doris: \"______\"",
    "options": {
      "A": "You're welcome.",
      "B": "Never mind.",
      "C": "It doesn't matter",
      "D": "Yeah, OK."
    },
    "key": "A",
    "explanation": "Dùng \"You're welcome\" để đáp lại lời cảm ơn một cách phổ biến."
  },
  {
    "id": 550,
    "question": "Find the error: In Joe's class, he is intelligent than all the other boys.",
    "options": {
      "A": "Joe’s",
      "B": "is",
      "C": "intelligent",
      "D": "other"
    },
    "key": "C",
    "explanation": "Câu so sánh hơn với tính từ dài phải có \"more intelligent than\"."
  },
  {
    "id": 551,
    "question": "Find the error: Her children feel exciting about the picnic in the botanical garden.",
    "options": {
      "A": "exciting",
      "B": "about",
      "C": "in",
      "D": "botanical"
    },
    "key": "A",
    "explanation": "Dùng tính từ đuôi -ed (excited) để diễn tả cảm xúc của con người."
  },
  {
    "id": 552,
    "question": "Find the error: My mother said that she would buy some snack for the field trip tomorrow.",
    "options": {
      "A": "said",
      "B": "buy",
      "C": "snack",
      "D": "tomorrow"
    },
    "key": "C",
    "explanation": "Sau \"some\" cần danh từ số nhiều, sửa \"snack\" thành \"snacks\"."
  },
  {
    "id": 553,
    "question": "Find the error: Taking part in outdoor activities are good for our physical health.",
    "options": {
      "A": "Taking",
      "B": "are",
      "C": "for",
      "D": "physical"
    },
    "key": "B",
    "explanation": "Chủ ngữ là V-ing thì động từ phải chia ở số ít (is)."
  },
  {
    "id": 554,
    "question": "Find the error: When Mary was a little girl, she used to living with her grandparents in the countryside.",
    "options": {
      "A": "was",
      "B": "living",
      "C": "her",
      "D": "in"
    },
    "key": "B",
    "explanation": "Cấu trúc \"used to\" cộng với động từ nguyên mẫu (live)."
  },
  {
    "id": 555,
    "question": "After discussing with her mother, Laura ______ a decision to enroll in a cookery course.",
    "options": {
      "A": "did",
      "B": "gave",
      "C": "made",
      "D": "took"
    },
    "key": "C",
    "explanation": "Cụm từ cố định \"make a decision\" có nghĩa là đưa ra quyết định."
  },
  {
    "id": 556,
    "question": "Mike and Alice ______ in New York since they got married twenty years ago.",
    "options": {
      "A": "lived",
      "B": "have lived",
      "C": "were living",
      "D": "live"
    },
    "key": "B",
    "explanation": "Có \"since\" nên mệnh đề chính chia ở thì Hiện tại hoàn thành."
  },
  {
    "id": 557,
    "question": "My cousin and I really get on well with each other.",
    "options": {
      "A": "look after",
      "B": "put off",
      "C": "get on",
      "D": "give up"
    },
    "key": "C",
    "explanation": "Cụm từ \"get on with\" có nghĩa là có quan hệ tốt với ai."
  },
  {
    "id": 558,
    "question": "I'm studying English ______ I want to work overseas in the future.",
    "options": {
      "A": "in spite of",
      "B": "although",
      "C": "because",
      "D": "because of"
    },
    "key": "C",
    "explanation": "Dùng \"because\" trước một mệnh đề để giải thích lý do học tiếng Anh."
  },
  {
    "id": 559,
    "question": "The little girl really enjoys ______ cartoons in her free time.",
    "options": {
      "A": "watched",
      "B": "watch",
      "C": "to watch",
      "D": "watching"
    },
    "key": "D",
    "explanation": "Sau động từ \"enjoy\" ta luôn sử dụng danh động từ V-ing."
  },
  {
    "id": 560,
    "question": "The sky is very ______ today. I think it is going to rain soon.",
    "options": {
      "A": "cloudy",
      "B": "sunny",
      "C": "bright",
      "D": "clear"
    },
    "key": "A",
    "explanation": "Trời có nhiều mây (cloudy) là dấu hiệu sắp có mưa."
  },
  {
    "id": 561,
    "question": "Your brother doesn't often go online, ______?",
    "options": {
      "A": "does he",
      "B": "doesn't he",
      "C": "did he",
      "D": "isn't he"
    },
    "key": "A",
    "explanation": "Câu hỏi đuôi: phía trước phủ định thì phía sau dùng khẳng định."
  },
  {
    "id": 562,
    "question": "I get a lot of ______ from reading adventure stories.",
    "options": {
      "A": "excite",
      "B": "excitement",
      "C": "exciting",
      "D": "excited"
    },
    "key": "B",
    "explanation": "Cần một danh từ đứng sau \"a lot of\" để chỉ sự hứng thú."
  },
  {
    "id": 563,
    "question": "She likes watching videos on ______ to make cakes in her free time.",
    "options": {
      "A": "what",
      "B": "which",
      "C": "when",
      "D": "how"
    },
    "key": "D",
    "explanation": "Dùng \"how\" để hỏi về cách thức thực hiện một việc gì đó."
  },
  {
    "id": 564,
    "question": "The flat is too small for the whole family, so they wish they ______ a big house.",
    "options": {
      "A": "have",
      "B": "had",
      "C": "are having",
      "D": "will have"
    },
    "key": "B",
    "explanation": "Câu ước cho điều không thật ở hiện tại chia thì Quá khứ đơn."
  },
  {
    "id": 565,
    "question": "The earliest fish and chip shop opened ______ London in the 19th century.",
    "options": {
      "A": "of",
      "B": "on",
      "C": "at",
      "D": "in"
    },
    "key": "D",
    "explanation": "Sử dụng giới từ \"in\" trước tên các thành phố lớn như London."
  },
  {
    "id": 566,
    "question": "This tropical island is a popular tourist destination for its natural ______.",
    "options": {
      "A": "beautifully",
      "B": "beautify",
      "C": "beautiful",
      "D": "beauty"
    },
    "key": "D",
    "explanation": "Cần một danh từ (beauty) sau tính từ sở hữu \"its\"."
  },
  {
    "id": 567,
    "question": "Tom told Linda that he ______ to her birthday party the following week.",
    "options": {
      "A": "go",
      "B": "was going",
      "C": "has gone",
      "D": "goes"
    },
    "key": "B",
    "explanation": "Trong câu tường thuật, thì tương lai gần lùi về quá khứ tiếp diễn."
  },
  {
    "id": 568,
    "question": "My brother is studying medicine to become ______ doctor.",
    "options": {
      "A": "Ø",
      "B": "the",
      "C": "an",
      "D": "a"
    },
    "key": "D",
    "explanation": "Dùng mạo từ \"a\" trước danh từ chỉ nghề nghiệp bắt đầu bằng phụ âm."
  },
  {
    "id": 569,
    "question": "Sarah's brother was booking plane tickets while she ______ a travel blog.",
    "options": {
      "A": "was reading",
      "B": "is reading",
      "C": "will read",
      "D": "has read"
    },
    "key": "A",
    "explanation": "Dùng thì Quá khứ tiếp diễn cho hai hành động xảy ra song song."
  },
  {
    "id": 570,
    "question": "Many parents want to pass ______ values like respect and kindness to their children.",
    "options": {
      "A": "for",
      "B": "through",
      "C": "back",
      "D": "down"
    },
    "key": "D",
    "explanation": "Cụm động từ \"pass down\" có nghĩa là truyền lại cho thế hệ sau."
  },
  {
    "id": 571,
    "question": "The brighter the streets are, the ______ it is for people to get around at night.",
    "options": {
      "A": "safest",
      "B": "safe",
      "C": "safer",
      "D": "safety"
    },
    "key": "C",
    "explanation": "Cấu trúc so sánh kép: \"The + so sánh hơn..., the + so sánh hơn...\"."
  },
  {
    "id": 572,
    "question": "Mrs. Lam earns a ______ by cooking meals at a primary school.",
    "options": {
      "A": "life",
      "B": "money",
      "C": "living",
      "D": "pay"
    },
    "key": "C",
    "explanation": "Cụm từ \"earn a living\" có nghĩa là kiếm tiền để sinh sống."
  },
  {
    "id": 573,
    "question": "A smartwatch is ______ and keeps you connected without checking your phone.",
    "options": {
      "A": "traditional",
      "B": "urgent",
      "C": "heavy",
      "D": "portable"
    },
    "key": "D",
    "explanation": "Dùng tính từ \"portable\" (có thể mang theo) phù hợp với đồng hồ thông minh."
  },
  {
    "id": 574,
    "question": "If the weather ______ fine tomorrow, they will clean up their neighbourhood.",
    "options": {
      "A": "will be",
      "B": "was",
      "C": "is",
      "D": "would be"
    },
    "key": "C",
    "explanation": "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại."
  },
  {
    "id": 575,
    "question": "Would you like ______ a cup of tea?",
    "options": {
      "A": "drink",
      "B": "drinking",
      "C": "to drink",
      "D": "to drinking"
    },
    "key": "C",
    "explanation": "Cấu trúc mời mọc lịch sự: \"Would you like + to V?\""
  },
  {
    "id": 576,
    "question": "The teacher ______ teaches us English lives near our school.",
    "options": {
      "A": "which",
      "B": "where",
      "C": "what",
      "D": "who"
    },
    "key": "D",
    "explanation": "Dùng đại từ quan hệ \"who\" để thay thế cho danh từ chỉ người."
  },
  {
    "id": 577,
    "question": "I ______ my grandmother last week.",
    "options": {
      "A": "visit",
      "B": "visited",
      "C": "was visiting",
      "D": "has visited"
    },
    "key": "B",
    "explanation": "Dùng thì Quá khứ đơn vì có trạng ngữ thời gian \"last week\"."
  },
  {
    "id": 578,
    "question": "If you ______ hard, you will pass the exam.",
    "options": {
      "A": "worked",
      "B": "work",
      "C": "is working",
      "D": "has worked"
    },
    "key": "B",
    "explanation": "Mệnh đề If của câu điều kiện loại 1 chia ở thì Hiện tại đơn."
  },
  {
    "id": 579,
    "question": "She wishes she ______ enough money to travel around the world.",
    "options": {
      "A": "has",
      "B": "have",
      "C": "had",
      "D": "having"
    },
    "key": "C",
    "explanation": "Câu ước ở hiện tại lùi thì về Quá khứ đơn (had)."
  },
  {
    "id": 580,
    "question": "She didn't tell me ______ to meet, in the lab or in the library.",
    "options": {
      "A": "where",
      "B": "why",
      "C": "when",
      "D": "what"
    },
    "key": "A",
    "explanation": "Dùng \"where\" vì câu hỏi đề cập đến các địa điểm học tập."
  },
  {
    "id": 581,
    "question": "The microphone stopped working while I ________ a presentation in front of 500 people.",
    "options": {
      "A": "make",
      "B": "made",
      "C": "am making",
      "D": "was making"
    },
    "key": "D",
    "explanation": "Hành động đang xảy ra thì bị gián đoạn (quá khứ) → thì quá khứ tiếp diễn: was making."
  },
  {
    "id": 582,
    "question": "Katherine is _________ than the other students in her action group.",
    "options": {
      "A": "the most confident",
      "B": "more confident",
      "C": "as confident",
      "D": "the more confident"
    },
    "key": "B",
    "explanation": "So sánh hơn với tính từ dài (confident) → more confident."
  },
  {
    "id": 583,
    "question": "He was in good ___________ when he got home from school.",
    "options": {
      "A": "mind",
      "B": "feeling",
      "C": "attitude",
      "D": "mood"
    },
    "key": "D",
    "explanation": "Cụm cố định \"in a good mood\" nghĩa là tâm trạng tốt."
  },
  {
    "id": 584,
    "question": "My father has agreed _______ our old house in the village.",
    "options": {
      "A": "selling",
      "B": "to sell",
      "C": "sold",
      "D": "be selling"
    },
    "key": "B",
    "explanation": "Động từ agree theo sau bởi to V → agreed to sell."
  },
  {
    "id": 585,
    "question": "When I came home yesterday, my parents _______.",
    "options": {
      "A": "have slept",
      "B": "would sleep",
      "C": "were sleeping",
      "D": "will sleep"
    },
    "key": "C",
    "explanation": "Hành động đang xảy ra tại thời điểm quá khứ (khi về nhà) → were sleeping."
  },
  {
    "id": 586,
    "question": "Everybody was _______ that he passed the exam.",
    "options": {
      "A": "surprising",
      "B": "surprise",
      "C": "surprised",
      "D": "surprisingly"
    },
    "key": "C",
    "explanation": "Cảm xúc của người khác → dùng tính từ surprised (bị bất ngờ)."
  },
  {
    "id": 587,
    "question": "David _______ some trees in the garden at the moment.",
    "options": {
      "A": "plants",
      "B": "is planting",
      "C": "planted",
      "D": "has planted"
    },
    "key": "B",
    "explanation": "At the moment → thì hiện tại tiếp diễn → is planting."
  },
  {
    "id": 588,
    "question": "Tom is reading a book _______ the library.",
    "options": {
      "A": "in",
      "B": "for",
      "C": "on",
      "D": "up"
    },
    "key": "A",
    "explanation": "Ở trong thư viện → giới từ in the library."
  },
  {
    "id": 589,
    "question": "You should pay more _______ in class.",
    "options": {
      "A": "part",
      "B": "attention",
      "C": "care",
      "D": "notice"
    },
    "key": "B",
    "explanation": "Cụm cố định \"pay attention\" = chú ý trong lớp."
  },
  {
    "id": 590,
    "question": "Ann wasn't wearing a coat _______ it was quite cold.",
    "options": {
      "A": "in spite of",
      "B": "because",
      "C": "because of",
      "D": "although"
    },
    "key": "D",
    "explanation": "Mệnh đề nhượng bộ đầy đủ sau dấu phẩy → although."
  },
  {
    "id": 591,
    "question": "Her mother is cooking dinner in _______ kitchen.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "The kitchen = nhà bếp (duy nhất trong nhà) → mạo từ xác định."
  },
  {
    "id": 592,
    "question": "I bought a computer _______ was made in the US.",
    "options": {
      "A": "which",
      "B": "who",
      "C": "whose",
      "D": "where"
    },
    "key": "A",
    "explanation": "Which thay cho \"computer\" (vật, làm chủ ngữ) trong mệnh đề quan hệ."
  },
  {
    "id": 593,
    "question": "Nam usually _______ football with his friends on Saturday afternoons.",
    "options": {
      "A": "plays",
      "B": "was playing",
      "C": "played",
      "D": "will play"
    },
    "key": "A",
    "explanation": "Usually → thì hiện tại đơn → plays."
  },
  {
    "id": 594,
    "question": "If it rains tomorrow, we _______ swimming.",
    "options": {
      "A": "didn't go",
      "B": "wouldn't go",
      "C": "haven't gone",
      "D": "won't go"
    },
    "key": "D",
    "explanation": "Câu điều kiện loại 1 → If + hiện tại đơn, will + V (phủ định: won't go)."
  },
  {
    "id": 595,
    "question": "Miss Lan _______ English in this school since 2020.",
    "options": {
      "A": "is teaching",
      "B": "has taught",
      "C": "taught",
      "D": "teaches"
    },
    "key": "B",
    "explanation": "Since 2020 → thì hiện tại hoàn thành → has taught."
  },
  {
    "id": 596,
    "question": "Can you _______ flights? It's getting dark in here.",
    "options": {
      "A": "hike away",
      "B": "turn on",
      "C": "take off",
      "D": "look after"
    },
    "key": "B",
    "explanation": "Turn on the lights = bật đèn → phù hợp ngữ cảnh trời tối."
  },
  {
    "id": 597,
    "question": "Find the error: Mary always rides her bike to work, but today she catches the bus.",
    "options": {
      "A": "always",
      "B": "rides",
      "C": "catches",
      "D": "to"
    },
    "key": "C",
    "explanation": "\"Today\" → thì hiện tại đơn, nhưng \"catches\" sai vì cần quá khứ đơn \"caught\" để đối lập với \"always rides\"."
  },
  {
    "id": 598,
    "question": "Find the error: Doctors often suggest to quit smoking for better health.",
    "options": {
      "A": "to quit",
      "B": "often",
      "C": "health",
      "D": "for"
    },
    "key": "A",
    "explanation": "Suggest + V-ing, không dùng to quit → sửa thành quitting."
  },
  {
    "id": 599,
    "question": "Find the error: I think she is enough well now to make the trip.",
    "options": {
      "A": "think",
      "B": "trip",
      "C": "enough well",
      "D": "to make"
    },
    "key": "C",
    "explanation": "Trật tự đúng là \"well enough\", không phải \"enough well\"."
  },
  {
    "id": 600,
    "question": "Peter felt _________ and happy after winning the English speaking contest.",
    "options": {
      "A": "bored",
      "B": "tired",
      "C": "excited",
      "D": "confused"
    },
    "key": "C",
    "explanation": "Cảm xúc tích cực sau khi thắng cuộc thi → excited."
  },
  {
    "id": 601,
    "question": "Whenever I visit a new place, I use _________ to get directions.",
    "options": {
      "A": "trip itineraries",
      "B": "Google Maps",
      "C": "guided tours",
      "D": "package holidays"
    },
    "key": "B",
    "explanation": "Google Maps là công cụ phổ biến để tra đường."
  },
  {
    "id": 602,
    "question": "The car stopped in the middle of the road because it _________ fuel.",
    "options": {
      "A": "ran out of",
      "B": "passed down",
      "C": "cut down on",
      "D": "got on with"
    },
    "key": "A",
    "explanation": "Ran out of fuel = hết nhiên liệu → cụm động từ đúng."
  },
  {
    "id": 603,
    "question": "Planet Earth, _________ is also called the Blue Planet, is covered with water and land.",
    "options": {
      "A": "which",
      "B": "who",
      "C": "whose",
      "D": "whom"
    },
    "key": "A",
    "explanation": "Which thay cho \"Planet Earth\" (vật) trong mệnh đề quan hệ không xác định."
  },
  {
    "id": 604,
    "question": "My friends like playing _________ guitar.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "no article"
    },
    "key": "C",
    "explanation": "Với nhạc cụ → dùng the guitar."
  },
  {
    "id": 605,
    "question": "I often receive __________ beautiful gifts on my birthday party.",
    "options": {
      "A": "any",
      "B": "many",
      "C": "little",
      "D": "much"
    },
    "key": "B",
    "explanation": "Gifts là danh từ đếm được số nhiều → many."
  },
  {
    "id": 606,
    "question": "Mary and Jolie are at their friend's birthday party. Mary: \"That's a very nice skirt you're wearing.\" Jolie: \"_____________\"",
    "options": {
      "A": "You're welcome.",
      "B": "That's all right.",
      "C": "Don't mention it.",
      "D": "Thank you."
    },
    "key": "D",
    "explanation": "Đáp lại lời khen → Thank you."
  },
  {
    "id": 607,
    "question": "Jim and his classmates, Ha and Mai are discussing some meaningful community activities. Jim: \"What about collecting used paper, bottles and plastic bags every day?\" Ha and Mai: \"____________\"",
    "options": {
      "A": "Because they can pollute the environment.",
      "B": "How come? Who can do that?",
      "C": "That's a very good idea. Let's do that.",
      "D": "What about this weekend?"
    },
    "key": "C",
    "explanation": "Đồng tình với đề xuất hoạt động cộng đồng → That's a very good idea."
  },
  {
    "id": 608,
    "question": "Children in rural areas often play __________ than city children because they have more open space.",
    "options": {
      "A": "most freely",
      "B": "more freely",
      "C": "as free as",
      "D": "freely"
    },
    "key": "B",
    "explanation": "So sánh hơn của trạng từ dài (freely) → more freely."
  },
  {
    "id": 609,
    "question": "She __________ TV when I called her last night.",
    "options": {
      "A": "watched",
      "B": "was watching",
      "C": "has watched",
      "D": "is watching"
    },
    "key": "B",
    "explanation": "Hành động đang xảy ra thì bị gọi điện (quá khứ) → was watching."
  },
  {
    "id": 610,
    "question": "In __________ modern world, technology has greatly changed the way we communicate.",
    "options": {
      "A": "a",
      "B": "the",
      "C": "Ø",
      "D": "an"
    },
    "key": "B",
    "explanation": "Cụm cố định \"in the modern world\" = trong thế giới hiện đại."
  },
  {
    "id": 611,
    "question": "A: \"Can you __________ the lights? It's getting dark.\" B: \"OK.\"",
    "options": {
      "A": "look after",
      "B": "turn on",
      "C": "run out",
      "D": "give up"
    },
    "key": "B",
    "explanation": "Turn on the lights = bật đèn → phù hợp ngữ cảnh trời tối."
  },
  {
    "id": 612,
    "question": "They should __________ a good impression at job interviews.",
    "options": {
      "A": "make",
      "B": "take",
      "C": "open",
      "D": "do"
    },
    "key": "A",
    "explanation": "Make a good impression = tạo ấn tượng tốt → cụm chuẩn."
  },
  {
    "id": 613,
    "question": "In the past, Vietnamese farmers were heavily _________ on rice farming to survive.",
    "options": {
      "A": "dependently",
      "B": "depending",
      "C": "depend",
      "D": "dependent"
    },
    "key": "D",
    "explanation": "Be dependent on = phụ thuộc vào → cần tính từ."
  },
  {
    "id": 614,
    "question": "They __________ their grandparents next weekend.",
    "options": {
      "A": "will visit",
      "B": "visited",
      "C": "have visited",
      "D": "were visiting"
    },
    "key": "A",
    "explanation": "Next weekend → thì tương lai đơn → will visit."
  },
  {
    "id": 615,
    "question": "English is often called a _________ language because it is used for international communication.",
    "options": {
      "A": "usual",
      "B": "foreign",
      "C": "global",
      "D": "native"
    },
    "key": "C",
    "explanation": "Global language = ngôn ngữ toàn cầu → phù hợp ngữ cảnh quốc tế."
  },
  {
    "id": 616,
    "question": "If we _________ English well, we can communicate with people worldwide.",
    "options": {
      "A": "spoke",
      "B": "will speak",
      "C": "speak",
      "D": "speaking"
    },
    "key": "C",
    "explanation": "Câu điều kiện loại 1 → If + hiện tại đơn → speak."
  },
  {
    "id": 617,
    "question": "I wish I _________ more time to relax every day.",
    "options": {
      "A": "will have",
      "B": "had",
      "C": "can have",
      "D": "having"
    },
    "key": "B",
    "explanation": "Câu ước trái với hiện tại → wish + past simple → had."
  },
  {
    "id": 618,
    "question": "Cities offer more job ________ than rural areas where work is often limited to farming.",
    "options": {
      "A": "risks",
      "B": "problems",
      "C": "spaces",
      "D": "opportunities"
    },
    "key": "D",
    "explanation": "Job opportunities = cơ hội việc làm → cụm phổ biến."
  },
  {
    "id": 619,
    "question": "He practices yoga _________ Sundays to reduce stress.",
    "options": {
      "A": "on",
      "B": "at",
      "C": "in",
      "D": "to"
    },
    "key": "A",
    "explanation": "Ngày trong tuần → giới từ on."
  },
  {
    "id": 620,
    "question": "I enjoy _______ about natural wonders like Ha Long Bay.",
    "options": {
      "A": "learned",
      "B": "to learn",
      "C": "learning",
      "D": "learn"
    },
    "key": "C",
    "explanation": "Enjoy + V-ing → learning."
  },
  {
    "id": 621,
    "question": "Traveling to natural wonders like Son Doong Cave can _________ our mind by letting us escape the hustle and bustle of daily life.",
    "options": {
      "A": "tire",
      "B": "stress",
      "C": "relax",
      "D": "bore"
    },
    "key": "C",
    "explanation": "Du lịch giúp thư giãn tâm trí → relax."
  },
  {
    "id": 622,
    "question": "My teacher said that learning English _______ me find a good job in the future.",
    "options": {
      "A": "has helped",
      "B": "will help",
      "C": "would help",
      "D": "helps"
    },
    "key": "C",
    "explanation": "Câu tường thuật thì tương lai → lùi thì → would help."
  },
  {
    "id": 623,
    "question": "Some people in big cities often walk to work to __________ traffic jams.",
    "options": {
      "A": "join",
      "B": "avoid",
      "C": "create",
      "D": "increase"
    },
    "key": "B",
    "explanation": "Avoid traffic jams = tránh kẹt xe → hành động hợp lý."
  },
  {
    "id": 624,
    "question": "Does your mother often work late _________ night?",
    "options": {
      "A": "of",
      "B": "on",
      "C": "at",
      "D": "in"
    },
    "key": "C",
    "explanation": "At night = vào ban đêm → giới từ cố định."
  },
  {
    "id": 625,
    "question": "Where are the books _________ we bought yesterday?",
    "options": {
      "A": "whom",
      "B": "which",
      "C": "who",
      "D": "whose"
    },
    "key": "B",
    "explanation": "Which thay cho \"books\" (vật, làm tân ngữ) trong mệnh đề quan hệ."
  },
  {
    "id": 626,
    "question": "You should avoid _________ and stay focused on your tasks.",
    "options": {
      "A": "delaying",
      "B": "to delay",
      "C": "to delaying",
      "D": "delayed"
    },
    "key": "A",
    "explanation": "Avoid + V-ing → delaying."
  },
  {
    "id": 627,
    "question": "My sister's dream is to become ________ teacher.",
    "options": {
      "A": "an",
      "B": "the",
      "C": "Ø",
      "D": "a"
    },
    "key": "D",
    "explanation": "Nghề nghiệp lần đầu đề cập → mạo từ a."
  },
  {
    "id": 628,
    "question": "________ the car is, the more comfortable it is.",
    "options": {
      "A": "More expensive",
      "B": "The more expensive",
      "C": "The most expensive",
      "D": "Most expensive"
    },
    "key": "B",
    "explanation": "Cấu trúc so sánh kép → The more expensive… the more comfortable…"
  },
  {
    "id": 629,
    "question": "Cốm Làng Vòng is well known in Viet Nam as a__________ of Ha Noi autumn.",
    "options": {
      "A": "special",
      "B": "speciality",
      "C": "specially",
      "D": "specialise"
    },
    "key": "B",
    "explanation": "Speciality = đặc sản → danh từ phù hợp."
  },
  {
    "id": 630,
    "question": "Huy is talking to Lucy after school. Huy: \"Thank you for helping me with my science project, Lucy.\" Lucy: \"___________\"",
    "options": {
      "A": "It's my pleasure.",
      "B": "Yes, I'd love to.",
      "C": "Congratulations!",
      "D": "That's a good idea."
    },
    "key": "A",
    "explanation": "Đáp lại lời cảm ơn lịch sự → It's my pleasure."
  },
  {
    "id": 631,
    "question": "Tim: \"John, ______ do you visit your grandparents?\"\nJohn: \"Twice a week.\"",
    "options": {
      "A": "how often",
      "B": "how far",
      "C": "how long",
      "D": "how much"
    },
    "key": "A",
    "explanation": "\"Twice a week\" → hỏi tần suất → how often."
  },
  {
    "id": 632,
    "question": "She wishes her friends ______ to the club meeting with her.",
    "options": {
      "A": "go",
      "B": "will go",
      "C": "went",
      "D": "have gone"
    },
    "key": "C",
    "explanation": "Câu ước ở hiện tại → động từ lùi thì → went."
  },
  {
    "id": 633,
    "question": "______ students find it easy to design posters on Canva.",
    "options": {
      "A": "Much",
      "B": "A little",
      "C": "Many",
      "D": "Little"
    },
    "key": "C",
    "explanation": "\"Students\" là danh từ đếm được số nhiều → dùng Many."
  },
  {
    "id": 634,
    "question": "My favorite show is *Anh Trai Say Hi*; ______ is *Anh Trai Vuot Ngan Chong Gai*.",
    "options": {
      "A": "she's",
      "B": "her",
      "C": "she",
      "D": "hers"
    },
    "key": "D",
    "explanation": "\"Hers\" = của cô ấy → đại từ sở hữu thay cho \"her favorite show\"."
  },
  {
    "id": 635,
    "question": "He wanted to visit the museum with his family, ______ he was too busy.",
    "options": {
      "A": "but",
      "B": "or",
      "C": "nor",
      "D": "and"
    },
    "key": "A",
    "explanation": "Hai mệnh đề trái ngược → dùng but."
  },
  {
    "id": 636,
    "question": "\"Rhythm\" is a ______ English word without a true vowel (a, e, i, o, or u).",
    "options": {
      "A": "longer",
      "B": "the longest",
      "C": "as long as",
      "D": "long"
    },
    "key": "D",
    "explanation": "\"Rhythm\" là một từ cụ thể → không so sánh → long (tính từ thuần)."
  },
  {
    "id": 637,
    "question": "Children should ______ bad eating habits to stay healthy.",
    "options": {
      "A": "give up",
      "B": "go on",
      "C": "turn down",
      "D": "set up"
    },
    "key": "A",
    "explanation": "\"Give up bad habits\" = từ bỏ thói quen xấu → cụm đúng."
  },
  {
    "id": 638,
    "question": "The teachers ______ are teaching us got professional training overseas.",
    "options": {
      "A": "who",
      "B": "which",
      "C": "whom",
      "D": "whose"
    },
    "key": "A",
    "explanation": "Đại từ quan hệ thay cho \"teachers\" (người, làm chủ ngữ) → who."
  },
  {
    "id": 639,
    "question": "Sam has learned Vietnamese for 5 years; however, he now ______ speak only a few words.",
    "options": {
      "A": "ought",
      "B": "should",
      "C": "must",
      "D": "can"
    },
    "key": "D",
    "explanation": "\"Can\" = có khả năng → phù hợp ngữ cảnh nói tiếng Việt."
  },
  {
    "id": 640,
    "question": "Minh is talking to Anna.\nMinh: \"I am going to take my high school entrance exam tomorrow.\"\nAnna: \"______\"",
    "options": {
      "A": "Good job!",
      "B": "Good luck!",
      "C": "Yes, please!",
      "D": "You're welcome!"
    },
    "key": "B",
    "explanation": "Đáp lại lời thông báo về kỳ thi → Good luck!."
  },
  {
    "id": 641,
    "question": "I think that Tom's car is not ______ this car.",
    "options": {
      "A": "expensive",
      "B": "more expensive",
      "C": "most expensive",
      "D": "as expensive as"
    },
    "key": "D",
    "explanation": "So sánh bằng → not as expensive as."
  },
  {
    "id": 642,
    "question": "I can't go out with you this afternoon because I have to ______ my room.",
    "options": {
      "A": "tidy",
      "B": "tidied",
      "C": "tidies",
      "D": "tidying"
    },
    "key": "A",
    "explanation": "\"Tidy my room\" = dọn phòng → động từ nguyên mẫu sau \"have to\"."
  },
  {
    "id": 643,
    "question": "The term \"World Englishes\" refers to the fact that English has become a(n) ______ means of communication.",
    "options": {
      "A": "local",
      "B": "annual",
      "C": "global",
      "D": "total"
    },
    "key": "C",
    "explanation": "\"Global means of communication\" = phương tiện giao tiếp toàn cầu → phù hợp định nghĩa."
  },
  {
    "id": 644,
    "question": "\"Tom tries to complete his homework before the deadline.\" The word \"complete\" is CLOSEST in meaning to ______.",
    "options": {
      "A": "review",
      "B": "protect",
      "C": "finish",
      "D": "postpone"
    },
    "key": "C",
    "explanation": "\"Complete\" = hoàn thành → đồng nghĩa với finish."
  },
  {
    "id": 645,
    "question": "\"It is essential for young people to learn about their country's history.\" The word \"essential\" is OPPOSITE in meaning to ______.",
    "options": {
      "A": "pleasant",
      "B": "unimportant",
      "C": "exciting",
      "D": "convenient"
    },
    "key": "B",
    "explanation": "\"Essential\" = thiết yếu → trái nghĩa là unimportant."
  },
  {
    "id": 646,
    "question": "Mount Fansipan is ______ than any other mountains in Vietnam.",
    "options": {
      "A": "as high",
      "B": "so high",
      "C": "the highest",
      "D": "higher"
    },
    "key": "D",
    "explanation": "So sánh hơn với \"than any other\" → higher."
  },
  {
    "id": 647,
    "question": "I wanted to go out with my friends, ______ I had so much homework to do.",
    "options": {
      "A": "so",
      "B": "but",
      "C": "or",
      "D": "and"
    },
    "key": "B",
    "explanation": "Mệnh đề sau trái ngược với mong muốn → but."
  },
  {
    "id": 648,
    "question": "Students should ______ a plan for future careers according to their interests and skills.",
    "options": {
      "A": "come",
      "B": "take",
      "C": "make",
      "D": "do"
    },
    "key": "C",
    "explanation": "\"Make a plan\" = lập kế hoạch → cụm động từ chuẩn."
  },
  {
    "id": 649,
    "question": "I think people ______ electric vehicles instead of petrol cars in the future.",
    "options": {
      "A": "used",
      "B": "will use",
      "C": "use",
      "D": "were using"
    },
    "key": "B",
    "explanation": "\"In the future\" → thì tương lai đơn → will use."
  },
  {
    "id": 650,
    "question": "The sign says you ______ pick up the litter before leaving the campsite.",
    "options": {
      "A": "must",
      "B": "will",
      "C": "might",
      "D": "has to"
    },
    "key": "A",
    "explanation": "\"Must\" = bắt buộc → phù hợp biển báo quy định."
  },
  {
    "id": 651,
    "question": "Recycling helps protect our ______ by reducing waste.",
    "options": {
      "A": "language",
      "B": "environment",
      "C": "experience",
      "D": "technology"
    },
    "key": "B",
    "explanation": "\"Protect the environment\" = bảo vệ môi trường → hành động tái chế."
  },
  {
    "id": 652,
    "question": "Jane wishes she ______ enough time for her busy schedule.",
    "options": {
      "A": "has",
      "B": "is having",
      "C": "will have",
      "D": "had"
    },
    "key": "D",
    "explanation": "Câu ước ở hiện tại → had."
  },
  {
    "id": 653,
    "question": "You should try to avoid ______ in the rush hour.",
    "options": {
      "A": "travelled",
      "B": "travel",
      "C": "travelling",
      "D": "to travel"
    },
    "key": "C",
    "explanation": "\"Avoid + V-ing\" → travelling."
  },
  {
    "id": 654,
    "question": "If people ______ the traffic rules, there will be fewer accidents on the road.",
    "options": {
      "A": "will obey",
      "B": "obeys",
      "C": "obeyed",
      "D": "obey"
    },
    "key": "D",
    "explanation": "Câu điều kiện loại 1 → mệnh đề if chia hiện tại đơn → obey."
  },
  {
    "id": 655,
    "question": "Because it was too cold outside, John ______ his warm clothes and left for the station.",
    "options": {
      "A": "turned on",
      "B": "took off",
      "C": "put on",
      "D": "looked up"
    },
    "key": "C",
    "explanation": "\"Put on warm clothes\" = mặc quần áo ấm → cụm đúng."
  },
  {
    "id": 656,
    "question": "The government was successful in the ______ of the disease.",
    "options": {
      "A": "prevention",
      "B": "prevent",
      "C": "preventive",
      "D": "preventable"
    },
    "key": "A",
    "explanation": "Cần danh từ → prevention (sự ngăn ngừa)."
  },
  {
    "id": 657,
    "question": "English is one of the native languages in ______ Australia.",
    "options": {
      "A": "Ø",
      "B": "the",
      "C": "a",
      "D": "an"
    },
    "key": "A",
    "explanation": "Tên quốc gia không cần mạo từ → Ø."
  },
  {
    "id": 658,
    "question": "Lan and her grandfather are talking about her school project called \"Vietnam in the past\".\nLan: \"Thank you for your useful information, Grandpa.\"\nGrandpa: \"______\"",
    "options": {
      "A": "Well done!",
      "B": "That's a great idea!",
      "C": "You're right.",
      "D": "You're welcome."
    },
    "key": "D",
    "explanation": "Đáp lại lời cảm ơn → You're welcome."
  },
  {
    "id": 659,
    "question": "My friends always support me when I feel sad.\nThe word \"support\" is CLOSEST in meaning to ______.",
    "options": {
      "A": "control",
      "B": "help",
      "C": "upset",
      "D": "remember"
    },
    "key": "B",
    "explanation": "\"Support\" = hỗ trợ → gần nghĩa nhất với help."
  },
  {
    "id": 660,
    "question": "We should preserve nature by not littering. (OPPOSITE)",
    "options": {
      "A": "destroy",
      "B": "maintain",
      "C": "improve",
      "D": "save"
    },
    "key": "A",
    "explanation": "\"Preserve\" = bảo tồn → trái nghĩa là destroy."
  },
  {
    "id": 661,
    "question": "An interesting ______ of the city is the old market.",
    "options": {
      "A": "look",
      "B": "appearance",
      "C": "face",
      "D": "feature"
    },
    "key": "D",
    "explanation": "\"Feature\" = đặc điểm nổi bật → phù hợp mô tả thành phố."
  },
  {
    "id": 662,
    "question": "Pollution can ______ marine life.",
    "options": {
      "A": "orbit",
      "B": "remove",
      "C": "harm",
      "D": "help"
    },
    "key": "C",
    "explanation": "\"Harm marine life\" = gây hại cho sinh vật biển → logic môi trường."
  },
  {
    "id": 663,
    "question": "I ______ here since seven o'clock.",
    "options": {
      "A": "was",
      "B": "have been",
      "C": "will be",
      "D": "am"
    },
    "key": "B",
    "explanation": "\"Since seven o'clock\" → thì hiện tại hoàn thành → have been."
  },
  {
    "id": 664,
    "question": "He drove all the way without ______.",
    "options": {
      "A": "stop",
      "B": "to stop",
      "C": "stopped",
      "D": "stopping"
    },
    "key": "D",
    "explanation": "\"Without + V-ing\" → stopping."
  },
  {
    "id": 665,
    "question": "Are you interested ______ reading books?",
    "options": {
      "A": "in",
      "B": "on",
      "C": "at",
      "D": "of"
    },
    "key": "A",
    "explanation": "\"Be interested in + V-ing\" → giới từ in."
  },
  {
    "id": 666,
    "question": "My car broke down on the way. ______, when I got to the stadium, the match had started.",
    "options": {
      "A": "However",
      "B": "Because",
      "C": "Therefore",
      "D": "Moreover"
    },
    "key": "C",
    "explanation": "Kết quả của việc xe hỏng → dùng Therefore."
  },
  {
    "id": 667,
    "question": "The factory ______ is not far from his house was closed down.",
    "options": {
      "A": "who",
      "B": "whose",
      "C": "whom",
      "D": "which"
    },
    "key": "D",
    "explanation": "Đại từ quan hệ thay cho \"factory\" (vật, làm chủ ngữ) → which."
  },
  {
    "id": 668,
    "question": "Your English will be improved ______ you practise it every day.",
    "options": {
      "A": "if",
      "B": "although",
      "C": "unless",
      "D": "if only"
    },
    "key": "A",
    "explanation": "Điều kiện để cải thiện tiếng Anh → if."
  },
  {
    "id": 669,
    "question": "You should cut ______ on the amount of salt in your daily meals.",
    "options": {
      "A": "of",
      "B": "out",
      "C": "down",
      "D": "with"
    },
    "key": "C",
    "explanation": "\"Cut down on\" = giảm bớt → cụm cố định."
  },
  {
    "id": 670,
    "question": "My mom ______ in the kitchen while my father was watering the flowers in the garden.",
    "options": {
      "A": "cooked",
      "B": "cooks",
      "C": "has cooked",
      "D": "was cooking"
    },
    "key": "D",
    "explanation": "Hai hành động đồng thời trong quá khứ → cả hai đều ở thì quá khứ tiếp diễn → was cooking."
  },
  {
    "id": 671,
    "question": "Daisy is talking to Mary after work.\nDaisy: \"Let's eat out tonight.\"\nMary: \"______.\"",
    "options": {
      "A": "Yes, it's true",
      "B": "That's a great idea",
      "C": "The same to you",
      "D": "Me too"
    },
    "key": "B",
    "explanation": "Đồng ý với lời rủ → That's a great idea."
  },
  {
    "id": 672,
    "question": "Tom is thanking Peter for fixing his computer.\nTom: \"It's very kind of you to help me. Thank you.\"\nPeter: \"______.\"",
    "options": {
      "A": "Yes, please",
      "B": "So do I",
      "C": "You're welcome",
      "D": "My bad"
    },
    "key": "C",
    "explanation": "Đáp lại lời cảm ơn → You're welcome."
  },
  {
    "id": 673,
    "question": "Find the error: There are too much mistakes in this essay.",
    "options": {
      "A": "There",
      "B": "much",
      "C": "in",
      "D": "essay"
    },
    "key": "B",
    "explanation": "\"Mistakes\" là danh từ đếm được số nhiều → không dùng much → sửa thành many."
  },
  {
    "id": 674,
    "question": "Find the error: His brother was driving at 40 miles a hour.",
    "options": {
      "A": "His",
      "B": "was",
      "C": "at",
      "D": "a"
    },
    "key": "D",
    "explanation": "\"Hour\" bắt đầu bằng nguyên âm → mạo từ phải là an, không phải a."
  },
  {
    "id": 675,
    "question": "The teacher ______ is teaching us English is very experienced.",
    "options": {
      "A": "which",
      "B": "whose",
      "C": "whom",
      "D": "who"
    },
    "key": "D",
    "explanation": "Đại từ quan hệ thay cho \"teacher\" (người, làm chủ ngữ) → who."
  },
  {
    "id": 676,
    "question": "This charity ______ free meals for old people.",
    "options": {
      "A": "presents",
      "B": "gives",
      "C": "sends",
      "D": "provides"
    },
    "key": "D",
    "explanation": "\"Provide free meals\" = cung cấp bữa ăn miễn phí → cụm chuẩn."
  },
  {
    "id": 677,
    "question": "If you get enough sleep, you ______ better.",
    "options": {
      "A": "will feel",
      "B": "felt",
      "C": "have felt",
      "D": "would feel"
    },
    "key": "A",
    "explanation": "Câu điều kiện loại 1 → will feel."
  },
  {
    "id": 678,
    "question": "Our class plans to have the school-year-end party ______ Thursday.",
    "options": {
      "A": "at",
      "B": "for",
      "C": "on",
      "D": "in"
    },
    "key": "C",
    "explanation": "Ngày trong tuần → giới từ on."
  },
  {
    "id": 679,
    "question": "Ha Long Bay is considered a famous tourist ______ in Quang Ninh Province.",
    "options": {
      "A": "boat",
      "B": "destination",
      "C": "office",
      "D": "company"
    },
    "key": "B",
    "explanation": "\"Tourist destination\" = điểm đến du lịch → cụm phổ biến."
  },
  {
    "id": 680,
    "question": "______ she doesn't have free time, she still cooks big meals for her family.",
    "options": {
      "A": "Because",
      "B": "So",
      "C": "However",
      "D": "Although"
    },
    "key": "D",
    "explanation": "Mệnh đề nhượng bộ → Although."
  },
  {
    "id": 681,
    "question": "If you study harder for the final exam, you ______ a higher score than last time.",
    "options": {
      "A": "get",
      "B": "will get",
      "C": "got",
      "D": "would get"
    },
    "key": "B",
    "explanation": "Sử dụng câu điều kiện loại 1 diễn tả một hành động có thể xảy ra ở hiện tại."
  },
  {
    "id": 682,
    "question": "She decided to buy a ______ bag to use for her long trip abroad next month.",
    "options": {
      "A": "leather small brown",
      "B": "small brown leather",
      "C": "brown leather small",
      "D": "small leather brown"
    },
    "key": "B",
    "explanation": "Sắp xếp tính từ theo thứ tự: kích thước (small), màu sắc (brown) và chất liệu (leather)."
  },
  {
    "id": 683,
    "question": "This bag is much ______ than the one I used to carry to school.",
    "options": {
      "A": "more light",
      "B": "lightest",
      "C": "as light as",
      "D": "lighter"
    },
    "key": "D",
    "explanation": "Dùng hình thức so sánh hơn \"lighter\" vì có từ nhận biết \"than\" trong câu."
  },
  {
    "id": 684,
    "question": "Every morning, my father ______ the newspaper before going to work.",
    "options": {
      "A": "read",
      "B": "reads",
      "C": "is reading",
      "D": "has read"
    },
    "key": "B",
    "explanation": "Thì hiện tại đơn diễn tả thói quen lặp đi lặp lại hàng ngày của chủ ngữ số ít."
  },
  {
    "id": 685,
    "question": "My parents encouraged me ______ English regularly so that I could improve my English skills quickly.",
    "options": {
      "A": "practice",
      "B": "to practice",
      "C": "practicing",
      "D": "practiced"
    },
    "key": "B",
    "explanation": "Cấu trúc encourage someone to do something có nghĩa là khuyến khích ai đó làm việc gì."
  },
  {
    "id": 686,
    "question": "You ______ wear a helmet when you ride a motorbike in this area for your own safety.",
    "options": {
      "A": "may",
      "B": "have to",
      "C": "could",
      "D": "might"
    },
    "key": "B",
    "explanation": "Dùng \"have to\" để diễn tả một việc bắt buộc phải làm theo quy định hoặc luật lệ."
  },
  {
    "id": 687,
    "question": "I wish I ______ more free time to relax and read my favorite books after finishing work.",
    "options": {
      "A": "have",
      "B": "had",
      "C": "will have",
      "D": "has"
    },
    "key": "B",
    "explanation": "Câu ước cho hiện tại sử dụng thì quá khứ đơn để diễn tả điều không có thật."
  },
  {
    "id": 688,
    "question": "The old stories about our village heroes were carefully ______ from generation to generation.",
    "options": {
      "A": "passed down",
      "B": "looked after",
      "C": "cleaned up",
      "D": "taken off"
    },
    "key": "A",
    "explanation": "Cụm động từ \"passed down\" có nghĩa là truyền lại kiến thức hoặc truyền thống cho đời sau."
  },
  {
    "id": 689,
    "question": "My brother wants to become ______ engineer in the future because he loves building machines.",
    "options": {
      "A": "a",
      "B": "the",
      "C": "an",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Dùng mạo từ \"an\" trước danh từ bắt đầu bằng một nguyên âm như từ \"engineer\"."
  },
  {
    "id": 690,
    "question": "A dog ______ loyal to its owner if it is well treated.",
    "options": {
      "A": "are",
      "B": "were",
      "C": "is",
      "D": "be"
    },
    "key": "C",
    "explanation": "Chủ ngữ số ít \"A dog\" đi kèm với động từ tobe ở dạng \"is\"."
  },
  {
    "id": 691,
    "question": "She decided to go to school early in the morning ______ she was feeling very tired after staying up late to finish her homework.",
    "options": {
      "A": "because",
      "B": "therefore",
      "C": "so",
      "D": "although"
    },
    "key": "D",
    "explanation": "Dùng liên từ \"although\" để nối hai vế câu có ý nghĩa tương phản, đối lập nhau."
  },
  {
    "id": 692,
    "question": "She always ______ her homework carefully before going to bed.",
    "options": {
      "A": "does",
      "B": "makes",
      "C": "takes",
      "D": "gives"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"do homework\" có nghĩa là làm bài tập về nhà."
  },
  {
    "id": 693,
    "question": "The local ______ works very hard to help poor families and elderly people in the area.",
    "options": {
      "A": "artisan",
      "B": "community helper",
      "C": "delivery person",
      "D": "garbage collector"
    },
    "key": "B",
    "explanation": "Cụm từ \"community helper\" chỉ những người làm công việc giúp đỡ mọi người trong cộng đồng."
  },
  {
    "id": 694,
    "question": "If she ______ enough money, she will buy a new laptop for her studies.",
    "options": {
      "A": "save",
      "B": "saves",
      "C": "saved",
      "D": "will save"
    },
    "key": "B",
    "explanation": "Trong câu điều kiện loại 1, mệnh đề If sử dụng thì hiện tại đơn với chủ ngữ số ít."
  },
  {
    "id": 695,
    "question": "They are living in a ______ house near a quiet river outside the town.",
    "options": {
      "A": "beautiful old French",
      "B": "old beautiful French",
      "C": "French beautiful old",
      "D": "beautiful French old"
    },
    "key": "A",
    "explanation": "Thứ tự tính từ đúng là: ý kiến (beautiful), tuổi tác (old) và nguồn gốc (French)."
  },
  {
    "id": 696,
    "question": "Of all the students in the class, Mai speaks English ______. ",
    "options": {
      "A": "fluently",
      "B": "more fluently",
      "C": "the most fluently",
      "D": "as fluently"
    },
    "key": "C",
    "explanation": "Sử dụng cấu trúc so sánh nhất với trạng từ dài khi so sánh Mai với tất cả học sinh."
  },
  {
    "id": 697,
    "question": "Look! The children ______ happily together in the playground.",
    "options": {
      "A": "play",
      "B": "played",
      "C": "are playing",
      "D": "have played"
    },
    "key": "C",
    "explanation": "Thì hiện tại tiếp diễn dùng để diễn tả một hành động đang xảy ra ngay tại thời điểm nói."
  },
  {
    "id": 698,
    "question": "The teacher reminded us ______ our assignments before the deadline to avoid losing marks.",
    "options": {
      "A": "submit",
      "B": "to submit",
      "C": "submitting",
      "D": "submitted"
    },
    "key": "B",
    "explanation": "Cấu trúc remind someone to do something được dùng để nhắc nhở ai đó làm việc gì."
  },
  {
    "id": 699,
    "question": "She looks very tired, so she ______ take a short break before continuing her work.",
    "options": {
      "A": "mustn't",
      "B": "can",
      "C": "will",
      "D": "should"
    },
    "key": "D",
    "explanation": "Dùng động từ khuyết thiếu \"should\" để đưa ra lời khuyên phù hợp với tình huống."
  },
  {
    "id": 700,
    "question": "She wishes she ______ closer to her grandparents so she could visit them often.",
    "options": {
      "A": "live",
      "B": "lives",
      "C": "lived",
      "D": "living"
    },
    "key": "C",
    "explanation": "Câu ước cho hiện tại dùng thì quá khứ đơn để thể hiện mong muốn trái với thực tế."
  },
  {
    "id": 701,
    "question": "You should not ______ those important documents because you may need them later.",
    "options": {
      "A": "throw away",
      "B": "put on",
      "C": "take off",
      "D": "look for"
    },
    "key": "A",
    "explanation": "Cụm động từ \"throw away\" có nghĩa là vứt bỏ một thứ gì đó đi."
  },
  {
    "id": 702,
    "question": "We went to ______ supermarket near our house to buy some food and drinks.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Dùng mạo từ \"the\" vì đối tượng siêu thị đã được xác định cụ thể là gần nhà."
  },
  {
    "id": 703,
    "question": "The list of names ______ on the teacher's desk.",
    "options": {
      "A": "are",
      "B": "were",
      "C": "have been",
      "D": "is"
    },
    "key": "D",
    "explanation": "Động từ chia theo danh từ chính là \"The list\" nên phải ở dạng số ít \"is\"."
  },
  {
    "id": 704,
    "question": "We stayed at home all day ______ the heavy rain and strong wind that made the roads very dangerous.",
    "options": {
      "A": "because",
      "B": "although",
      "C": "because of",
      "D": "however"
    },
    "key": "C",
    "explanation": "Dùng \"because of\" đứng trước một cụm danh từ để chỉ nguyên nhân của sự việc."
  },
  {
    "id": 705,
    "question": "He finally ______ a decision after thinking about the problem for a long time.",
    "options": {
      "A": "made",
      "B": "did",
      "C": "took",
      "D": "gave"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"make a decision\" có nghĩa là đưa ra một quyết định."
  },
  {
    "id": 706,
    "question": "This village is well-known for its traditional ______ made from clay by skilled workers.",
    "options": {
      "A": "pottery",
      "B": "facility",
      "C": "suburb",
      "D": "fragrance"
    },
    "key": "A",
    "explanation": "Từ \"pottery\" có nghĩa là đồ gốm, được làm từ đất sét bởi các nghệ nhân."
  },
  {
    "id": 707,
    "question": "If they don't leave now, they ______ the last train home.",
    "options": {
      "A": "miss",
      "B": "will miss",
      "C": "missed",
      "D": "would miss"
    },
    "key": "B",
    "explanation": "Câu điều kiện loại 1 dùng \"will + V\" ở mệnh đề chính để chỉ kết quả có thể xảy ra."
  },
  {
    "id": 708,
    "question": "My brother wants a ______ car for his first job in the city.",
    "options": {
      "A": "black small modern",
      "B": "small modern black",
      "C": "modern small black",
      "D": "small black modern"
    },
    "key": "B",
    "explanation": "Trật tự tính từ đúng là: kích thước (small), tính chất (modern) và màu sắc (black)."
  },
  {
    "id": 709,
    "question": "This is ______ movie I have ever seen in my whole life.",
    "options": {
      "A": "more interesting",
      "B": "interesting",
      "C": "the most interesting",
      "D": "so interesting"
    },
    "key": "C",
    "explanation": "Dùng cấu trúc so sánh nhất với tính từ dài để nhấn mạnh trải nghiệm từ trước tới nay."
  },
  {
    "id": 710,
    "question": "Yesterday evening, we ______ a very interesting documentary about wild animals on television together.",
    "options": {
      "A": "watch",
      "B": "watched",
      "C": "are watching",
      "D": "have watched"
    },
    "key": "B",
    "explanation": "Dùng thì quá khứ đơn vì có trạng ngữ chỉ thời gian xác định là \"Yesterday evening\"."
  },
  {
    "id": 711,
    "question": "They decided ______ a new language in order to communicate better with foreign customers.",
    "options": {
      "A": "learn",
      "B": "learned",
      "C": "learning",
      "D": "to learn"
    },
    "key": "D",
    "explanation": "Sau động từ \"decide\" chúng ta luôn sử dụng dạng động từ nguyên mẫu có \"to\"."
  },
  {
    "id": 712,
    "question": "______ you help me carry these heavy boxes upstairs, please?",
    "options": {
      "A": "Must",
      "B": "Should",
      "C": "Could",
      "D": "May"
    },
    "key": "C",
    "explanation": "Sử dụng \"Could\" để đưa ra một lời yêu cầu giúp đỡ một cách lịch sự."
  },
  {
    "id": 713,
    "question": "He wishes he ______ work so late every night because it makes him very tired.",
    "options": {
      "A": "doesn't have to",
      "B": "won't have to",
      "C": "had hadn't to",
      "D": "didn't have to"
    },
    "key": "D",
    "explanation": "Câu ước cho thói quen ở hiện tại dùng phủ định của quá khứ đơn \"didn't have to\"."
  },
  {
    "id": 714,
    "question": "He couldn't go to school today because he has ______ a bad cold.",
    "options": {
      "A": "come down with",
      "B": "carried out",
      "C": "got around",
      "D": "cut down on"
    },
    "key": "A",
    "explanation": "Cụm động từ \"come down with\" có nghĩa là bị mắc một căn bệnh nhẹ nào đó."
  },
  {
    "id": 715,
    "question": "I saw ______ interesting film on TV last night and told my friends about it.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "B",
    "explanation": "Dùng mạo từ \"an\" trước từ bắt đầu bằng nguyên âm khi nhắc đến vật lần đầu."
  },
  {
    "id": 716,
    "question": "My best friend and I ______ English together every weekend.",
    "options": {
      "A": "practices",
      "B": "practice",
      "C": "am practicing",
      "D": "practiced"
    },
    "key": "B",
    "explanation": "Chủ ngữ số nhiều \"My best friend and I\" đi với động từ nguyên mẫu ở hiện tại đơn."
  },
  {
    "id": 717,
    "question": "He studied very hard for many weeks, ______ he still failed the important test last Friday.",
    "options": {
      "A": "therefore",
      "B": "so",
      "C": "because",
      "D": "but"
    },
    "key": "D",
    "explanation": "Dùng liên từ \"but\" để kết nối hai mệnh đề mang ý nghĩa trái ngược nhau."
  },
  {
    "id": 718,
    "question": "Please ______ a photo of us in front of the famous building.",
    "options": {
      "A": "take",
      "B": "make",
      "C": "do",
      "D": "give"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"take a photo\" có nghĩa là chụp một bức ảnh."
  },
  {
    "id": 719,
    "question": "The city center is very ______, especially during rush hours when everyone is going to work.",
    "options": {
      "A": "quiet",
      "B": "crowded",
      "C": "original",
      "D": "special"
    },
    "key": "B",
    "explanation": "Tính từ \"crowded\" diễn tả sự đông đúc, nhộn nhịp của trung tâm thành phố."
  },
  {
    "id": 720,
    "question": "You will fail the test if you ______ attention in class.",
    "options": {
      "A": "don't pay",
      "B": "won't pay",
      "C": "didn't pay",
      "D": "would pay"
    },
    "key": "A",
    "explanation": "Mệnh đề If trong câu điều kiện loại 1 chia ở thì hiện tại đơn dạng phủ định."
  },
  {
    "id": 721,
    "question": "She wore a ______ dress to the important school ceremony yesterday.",
    "options": {
      "A": "lovely long white",
      "B": "long lovely white",
      "C": "white lovely long",
      "D": "lovely white long"
    },
    "key": "A",
    "explanation": "Thứ tự tính từ: ý kiến (lovely), kích thước (long) và màu sắc (white)."
  },
  {
    "id": 722,
    "question": "My house is ______ from the city centre than yours.",
    "options": {
      "A": "more far",
      "B": "farther",
      "C": "farthest",
      "D": "the farthest"
    },
    "key": "B",
    "explanation": "Dùng dạng so sánh hơn đặc biệt \"farther\" của tính từ \"far\" để chỉ khoảng cách."
  },
  {
    "id": 723,
    "question": "At 8 p.m. last night, she ______ her homework when the power suddenly went out.",
    "options": {
      "A": "did",
      "B": "was doing",
      "C": "has done",
      "D": "is doing"
    },
    "key": "B",
    "explanation": "Thì quá khứ tiếp diễn diễn tả hành động đang xảy ra tại một thời điểm cụ thể."
  },
  {
    "id": 724,
    "question": "I can't stand ______ in long lines when I go shopping at busy supermarkets.",
    "options": {
      "A": "wait",
      "B": "to wait",
      "C": "waiting",
      "D": "waited"
    },
    "key": "C",
    "explanation": "Cấu trúc can't stand cộng với động từ thêm -ing có nghĩa là không chịu đựng được việc gì."
  },
  {
    "id": 725,
    "question": "We ______ finish this report today because the manager needs it tomorrow morning.",
    "options": {
      "A": "might",
      "B": "must",
      "C": "could",
      "D": "would"
    },
    "key": "B",
    "explanation": "Dùng động từ khuyết thiếu \"must\" để chỉ sự bắt buộc cần thiết phải hoàn thành."
  },
  {
    "id": 726,
    "question": "I wish it ______ too hot today so we could go for a walk comfortably.",
    "options": {
      "A": "isn't",
      "B": "has hasn't been",
      "C": "won't be",
      "D": "weren't"
    },
    "key": "D",
    "explanation": "Trong câu ước hiện tại, động từ tobe được chia là \"weren't\" cho tất cả các ngôi."
  },
  {
    "id": 727,
    "question": "The manager decided to ______ a careful investigation into the cause of the accident.",
    "options": {
      "A": "carry out",
      "B": "pass down",
      "C": "come across",
      "D": "put off"
    },
    "key": "A",
    "explanation": "Cụm động từ \"carry out\" mang ý nghĩa là thực hiện hoặc tiến hành một nhiệm vụ."
  },
  {
    "id": 728,
    "question": "______ Sun rises in the east and sets in the west every day.",
    "options": {
      "A": "A",
      "B": "An",
      "C": "The",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Dùng mạo từ \"the\" trước các danh từ chỉ vật thể duy nhất như mặt trời (Sun)."
  },
  {
    "id": 729,
    "question": "Every student ______ required to wear the school uniform.",
    "options": {
      "A": "are",
      "B": "were",
      "C": "is",
      "D": "have"
    },
    "key": "C",
    "explanation": "Cấu trúc Every + danh từ số ít luôn đi kèm với động từ số ít."
  },
  {
    "id": 730,
    "question": "The weather was extremely cold and windy; ______, many people went swimming at the beach.",
    "options": {
      "A": "because",
      "B": "so",
      "C": "however",
      "D": "despite"
    },
    "key": "C",
    "explanation": "Liên từ \"however\" dùng để nối hai câu có ý nghĩa tương phản về mặt nội dung."
  },
  {
    "id": 731,
    "question": "You should ______ a rest if you feel tired after studying for hours.",
    "options": {
      "A": "take",
      "B": "make",
      "C": "do",
      "D": "break"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"take a rest\" được dùng phổ biến để chỉ việc nghỉ ngơi."
  },
  {
    "id": 732,
    "question": "It is necessary to protect the biological ______ of our rainforests.",
    "options": {
      "A": "feature",
      "B": "function",
      "C": "beauty",
      "D": "diversity"
    },
    "key": "D",
    "explanation": "Cụm từ \"biological diversity\" có nghĩa là sự đa dạng sinh học trong thiên nhiên."
  },
  {
    "id": 733,
    "question": "If the weather ______ better tomorrow, we will go on a picnic.",
    "options": {
      "A": "is",
      "B": "was",
      "C": "will be",
      "D": "would be"
    },
    "key": "A",
    "explanation": "Thì hiện tại đơn được dùng trong mệnh đề If của câu điều kiện loại 1."
  },
  {
    "id": 734,
    "question": "He bought a ______ chair to put in his reading corner at home.",
    "options": {
      "A": "wooden comfortable brown",
      "B": "comfortable brown wooden",
      "C": "brown wooden comfortable",
      "D": "comfortable wooden brown"
    },
    "key": "B",
    "explanation": "Trật tự tính từ đúng: ý kiến (comfortable), màu sắc (brown) và chất liệu (wooden)."
  },
  {
    "id": 735,
    "question": "This exercise is ______ than the one we did in class yesterday.",
    "options": {
      "A": "the most difficult",
      "B": "more difficult",
      "C": "as difficult",
      "D": "difficulter"
    },
    "key": "B",
    "explanation": "Sử dụng cấu trúc so sánh hơn với tính từ dài \"more difficult\" khi có từ \"than\"."
  },
  {
    "id": 736,
    "question": "We have bought all the ingredients, so we ______ a special dinner for our guests this evening.",
    "options": {
      "A": "cook",
      "B": "cooked",
      "C": "are going to cook",
      "D": "will cook"
    },
    "key": "C",
    "explanation": "Dùng cấu trúc \"be going to\" để chỉ một kế hoạch đã được chuẩn bị sẵn."
  },
  {
    "id": 737,
    "question": "______ regularly helps students stay healthy and reduce stress after long hours of studying at school.",
    "options": {
      "A": "Exercise",
      "B": "To exercise",
      "C": "Exercising",
      "D": "Exercised"
    },
    "key": "C",
    "explanation": "Danh động từ (V-ing) đóng vai trò làm chủ ngữ chỉ hành động tập thể dục."
  },
  {
    "id": 738,
    "question": "Students ______ use their phones during the exam, according to school rules.",
    "options": {
      "A": "don't have to",
      "B": "must not",
      "C": "shouldn't",
      "D": "may not"
    },
    "key": "B",
    "explanation": "Dùng \"must not\" để diễn tả một lệnh cấm tuyệt đối theo quy định nhà trường."
  },
  {
    "id": 739,
    "question": "They wish they ______ the answer to this difficult question to finish their homework quickly.",
    "options": {
      "A": "know",
      "B": "knew",
      "C": "will know",
      "D": "knows"
    },
    "key": "B",
    "explanation": "Động từ sau wish ở hiện tại lùi về thì quá khứ đơn (knew)."
  },
  {
    "id": 740,
    "question": "We need to ______ sugar if we want to stay healthier and avoid gaining weight.",
    "options": {
      "A": "cut down on",
      "B": "run out of",
      "C": "put on",
      "D": "get around"
    },
    "key": "A",
    "explanation": "Cụm động từ \"cut down on\" có nghĩa là cắt giảm lượng tiêu thụ thứ gì đó."
  },
  {
    "id": 741,
    "question": "She is ______ only student in our class who can speak fluent French.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Sử dụng mạo từ xác định \"the\" khi đi kèm với từ chỉ sự duy nhất \"only\"."
  },
  {
    "id": 742,
    "question": "My parents ______ very proud of my achievements.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "was",
      "D": "has been"
    },
    "key": "B",
    "explanation": "Chủ ngữ số nhiều \"My parents\" cần đi kèm với động từ tobe số nhiều \"are\"."
  },
  {
    "id": 743,
    "question": "They couldn't join the school trip ______ they had no money to pay for the bus and entrance tickets.",
    "options": {
      "A": "because",
      "B": "although",
      "C": "however",
      "D": "but"
    },
    "key": "A",
    "explanation": "Liên từ \"because\" dùng để giải thích lý do tại sao họ không thể đi dã ngoại."
  },
  {
    "id": 744,
    "question": "He failed to ______ the bus and arrived late for the meeting.",
    "options": {
      "A": "hold",
      "B": "get",
      "C": "have",
      "D": "catch"
    },
    "key": "D",
    "explanation": "Cụm từ \"catch the bus\" có nghĩa là bắt kịp hoặc đón được xe buýt."
  },
  {
    "id": 745,
    "question": "The museum is a popular ______ for both local people and foreign tourists.",
    "options": {
      "A": "tourist attraction",
      "B": "suburb",
      "C": "facility",
      "D": "community"
    },
    "key": "A",
    "explanation": "Cụm từ \"tourist attraction\" chỉ những địa điểm thu hút khách du lịch đến tham quan."
  },
  {
    "id": 746,
    "question": "If he doesn't apologize, she ______ forgive him.",
    "options": {
      "A": "doesn't",
      "B": "won't",
      "C": "didn't",
      "D": "wouldly"
    },
    "key": "B",
    "explanation": "Câu điều kiện loại 1 dùng \"won't\" (will not) để chỉ kết quả không xảy ra."
  },
  {
    "id": 747,
    "question": "We stayed in a ______ hotel during our short holiday in Da Nang.",
    "options": {
      "A": "new big seaside",
      "B": "big new seaside",
      "C": "seaside big new",
      "D": "big seaside new"
    },
    "key": "B",
    "explanation": "Thứ tự tính từ đúng: kích thước (big), tuổi tác (new) và mục đích (seaside)."
  },
  {
    "id": 748,
    "question": "She chose ______ dress for the important meeting.",
    "options": {
      "A": "the elegantest",
      "B": "more elegant",
      "C": "the most elegant",
      "D": "as elegant"
    },
    "key": "C",
    "explanation": "Sử dụng cấu trúc so sánh nhất với tính từ dài để chỉ sự lựa chọn tốt nhất."
  },
  {
    "id": 749,
    "question": "I ______ this best-selling novel twice because the story is very meaningful and inspiring.",
    "options": {
      "A": "read",
      "B": "am reading",
      "C": "will read",
      "D": "have read"
    },
    "key": "D",
    "explanation": "Thì hiện tại hoàn thành diễn tả trải nghiệm đã từng làm gì đó tính đến hiện tại."
  },
  {
    "id": 750,
    "question": "She went to the library early this morning ______ more information for her important science project.",
    "options": {
      "A": "get",
      "B": "to get",
      "C": "getting",
      "D": "got"
    },
    "key": "B",
    "explanation": "Dùng dạng To-V để chỉ mục đích của hành động đi đến thư viện."
  },
  {
    "id": 751,
    "question": "You ______ eat so much fast food if you want to stay healthy.",
    "options": {
      "A": "shouldn't",
      "B": "can't",
      "C": "oughtn't",
      "D": "needn't"
    },
    "key": "A",
    "explanation": "Dùng \"shouldn't\" để đưa ra một lời khuyên phủ định về sức khỏe."
  },
  {
    "id": 752,
    "question": "My brother wishes he ______ taller so he could reach the top shelf easily.",
    "options": {
      "A": "is",
      "B": "were",
      "C": "be",
      "D": "will be"
    },
    "key": "B",
    "explanation": "Trong câu ước hiện tại, động từ \"to be\" luôn dùng dạng \"were\" cho mọi chủ ngữ."
  },
  {
    "id": 753,
    "question": "My parents asked me to ______ my little brother while they were away for the weekend.",
    "options": {
      "A": "look out",
      "B": "look for",
      "C": "look up",
      "D": "look after"
    },
    "key": "D",
    "explanation": "Cụm động từ \"look after\" có nghĩa là chăm sóc hoặc trông nom một ai đó."
  },
  {
    "id": 754,
    "question": "My father bought me ______ new bicycle for my birthday.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "A",
    "explanation": "Dùng mạo từ \"a\" khi nhắc đến một danh từ đếm được số ít lần đầu tiên."
  },
  {
    "id": 755,
    "question": "The news John told us ______ very shocking to all of us.",
    "options": {
      "A": "are",
      "B": "were",
      "C": "was",
      "D": "have"
    },
    "key": "C",
    "explanation": "Danh từ \"The news\" (tin tức) luôn được coi là danh từ số ít không đếm được."
  },
  {
    "id": 756,
    "question": "She was late for the meeting ______ the terrible traffic jam on the main road this morning.",
    "options": {
      "A": "because",
      "B": "although",
      "C": "because of",
      "D": "despite"
    },
    "key": "C",
    "explanation": "Dùng \"because of\" đứng trước một cụm danh từ để chỉ nguyên nhân gây trễ giờ."
  },
  {
    "id": 757,
    "question": "She promised not to ______ the school rules again.",
    "options": {
      "A": "break",
      "B": "do",
      "C": "make",
      "D": "take"
    },
    "key": "A",
    "explanation": "Cụm từ \"break the rules\" có nghĩa là vi phạm các quy tắc hoặc luật lệ."
  },
  {
    "id": 758,
    "question": "Climate ______ is one of the biggest problems facing the world today.",
    "options": {
      "A": "change",
      "B": "balance",
      "C": "chain",
      "D": "habitat"
    },
    "key": "A",
    "explanation": "Cụm từ \"climate change\" chỉ hiện tượng biến đổi khí hậu đang diễn ra toàn cầu."
  },
  {
    "id": 759,
    "question": "If we ______ more carefully, we will avoid making mistakes.",
    "options": {
      "A": "work",
      "B": "will work",
      "C": "worked",
      "D": "would work"
    },
    "key": "A",
    "explanation": "Trong câu điều kiện loại 1, mệnh đề If chia ở thì hiện tại đơn với chủ ngữ số nhiều."
  },
  {
    "id": 760,
    "question": "He gave me a ______ watch as a birthday present.",
    "options": {
      "A": "small silver beautiful",
      "B": "beautiful small silver",
      "C": "silver beautiful small",
      "D": "beautiful silver small"
    },
    "key": "B",
    "explanation": "Trật tự tính từ đúng: ý kiến (beautiful), kích thước (small) và chất liệu (silver)."
  },
  {
    "id": 761,
    "question": "He completed the task ______ than his classmates.",
    "options": {
      "A": "the most carefully",
      "B": "more carefully",
      "C": "most carefully",
      "D": "as carefully"
    },
    "key": "B",
    "explanation": "Sử dụng so sánh hơn với trạng từ dài khi so sánh cách làm việc của hai đối tượng."
  },
  {
    "id": 762,
    "question": "Usually, our English teacher ______ us simple tips to improve our pronunciation in class.",
    "options": {
      "A": "give",
      "B": "gives",
      "C": "is giving",
      "D": "gave"
    },
    "key": "B",
    "explanation": "Thì hiện tại đơn diễn tả một hành động thường xuyên diễn ra, đi kèm trạng từ \"usually\"."
  },
  {
    "id": 763,
    "question": "It is very important ______ enough water every day, especially during hot summer days.",
    "options": {
      "A": "drink",
      "B": "to drink",
      "C": "drinking",
      "D": "drank"
    },
    "key": "B",
    "explanation": "Cấu trúc tính từ đi kèm với động từ nguyên mẫu có to: It is + adj + to V."
  },
  {
    "id": 764,
    "question": "My little brother is only five, but he ______ already read simple English books.",
    "options": {
      "A": "must",
      "B": "might",
      "C": "should",
      "D": "can"
    },
    "key": "D",
    "explanation": "Dùng động từ khuyết thiếu \"can\" để chỉ khả năng làm được việc gì của một người."
  },
  {
    "id": 765,
    "question": "She wishes she ______ a better computer because her current one is very slow.",
    "options": {
      "A": "have",
      "B": "had",
      "C": "has",
      "D": "having"
    },
    "key": "B",
    "explanation": "Câu ước hiện tại dùng thì quá khứ đơn để chỉ mong muốn trái với thực tế hiện tại."
  },
  {
    "id": 766,
    "question": "He promised that he would ______ the meeting until everyone was fully prepared.",
    "options": {
      "A": "put off",
      "B": "take off",
      "C": "come back",
      "D": "clean up"
    },
    "key": "A",
    "explanation": "Cụm động từ \"put off\" có nghĩa là trì hoãn một sự kiện hoặc cuộc hẹn nào đó."
  },
  {
    "id": 767,
    "question": "Can you pass me ______ salt on the table, please?",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Dùng mạo từ \"the\" vì cả người nói và người nghe đều biết lọ muối cụ thể nào."
  },
  {
    "id": 768,
    "question": "Neither my brother nor my parents ______ at home right now.",
    "options": {
      "A": "is",
      "B": "was",
      "C": "are",
      "D": "has"
    },
    "key": "C",
    "explanation": "Trong cấu trúc neither...nor, động từ chia theo chủ ngữ gần nhất là \"my parents\"."
  },
  {
    "id": 769,
    "question": "The movie was boring and too long; ______, we decided to leave the cinema before it ended.",
    "options": {
      "A": "however",
      "B": "because",
      "C": "therefore",
      "D": "although"
    },
    "key": "C",
    "explanation": "Liên từ \"therefore\" dùng để chỉ kết quả dẫn đến từ sự việc đã nêu phía trước."
  },
  {
    "id": 770,
    "question": "We need to ______ a plan for our class picnic this weekend.",
    "options": {
      "A": "get",
      "B": "do",
      "C": "take",
      "D": "make"
    },
    "key": "D",
    "explanation": "Cụm từ cố định \"make a plan\" có nghĩa là lập ra một kế hoạch."
  },
  {
    "id": 771,
    "question": "Many animals lose their ______ because forests are being destroyed.",
    "options": {
      "A": "habitat",
      "B": "grassland",
      "C": "landform",
      "D": "pole"
    },
    "key": "A",
    "explanation": "Từ \"habitat\" chỉ môi trường sống tự nhiên của các loài động thực vật."
  },
  {
    "id": 772,
    "question": "She won't pass the interview if she ______ nervous all the time.",
    "options": {
      "A": "stays",
      "B": "will stay",
      "C": "stayed",
      "D": "would stay"
    },
    "key": "A",
    "explanation": "Mệnh đề If của câu điều kiện loại 1 chia ở thì hiện tại đơn với chủ ngữ số ít."
  },
  {
    "id": 773,
    "question": "They live in a ______ apartment in the center of a busy city.",
    "options": {
      "A": "modern small Japanese",
      "B": "small modern Japanese",
      "C": "Japanese small modern",
      "D": "modern Japanese small"
    },
    "key": "B",
    "explanation": "Thứ tự tính từ: kích thước (small), tính chất (modern) và nguồn gốc (Japanese)."
  },
  {
    "id": 774,
    "question": "The film wasn't ______ we had expected.",
    "options": {
      "A": "better",
      "B": "as good as",
      "C": "the best",
      "D": "more better"
    },
    "key": "B",
    "explanation": "Cấu trúc so sánh bằng ở dạng phủ định được dùng để so sánh phim với kỳ vọng."
  },
  {
    "id": 775,
    "question": "At the moment, she ______ for a new job because she wants a better working environment.",
    "options": {
      "A": "looks",
      "B": "looked",
      "C": "is looking",
      "D": "has looked"
    },
    "key": "C",
    "explanation": "Dùng thì hiện tại tiếp diễn vì có trạng từ chỉ thời gian \"at the moment\"."
  },
  {
    "id": 776,
    "question": "______ too much fast food can cause serious health problems in the long run.",
    "options": {
      "A": "Eat",
      "B": "To eat",
      "C": "Eating",
      "D": "Eaten"
    },
    "key": "C",
    "explanation": "Danh động từ đứng đầu câu làm chủ ngữ để chỉ hành động ăn uống."
  },
  {
    "id": 777,
    "question": "We ______ leave early tomorrow to avoid the heavy traffic in the city center.",
    "options": {
      "A": "ought to",
      "B": "can",
      "C": "may",
      "D": "would"
    },
    "key": "A",
    "explanation": "Dùng \"ought to\" để đưa ra lời khuyên nên thực hiện hành động nào đó."
  },
  {
    "id": 778,
    "question": "I wish I ______ so anxious before exams so that I can answer questions more correctly.",
    "options": {
      "A": "don't feel",
      "B": "didn't feel",
      "C": "had hadn't felt",
      "D": "won't feel"
    },
    "key": "B",
    "explanation": "Câu ước hiện tại dùng dạng phủ định của thì quá khứ đơn \"didn't feel\"."
  },
  {
    "id": 779,
    "question": "While walking in the forest, we ______ an old wooden house hidden behind the trees.",
    "options": {
      "A": "put on",
      "B": "ran out of",
      "C": "carried out",
      "D": "came across"
    },
    "key": "D",
    "explanation": "Cụm động từ \"came across\" có nghĩa là tình cờ bắt gặp hoặc tìm thấy thứ gì."
  },
  {
    "id": 780,
    "question": "My mother is cooking ______ dinner for the whole family.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "D",
    "explanation": "Thông thường không dùng mạo từ trước các danh từ chỉ bữa ăn như dinner, lunch."
  },
  {
    "id": 781,
    "question": "The quality of these products ______ improved a lot recently.",
    "options": {
      "A": "have",
      "B": "has",
      "C": "are",
      "D": "were"
    },
    "key": "B",
    "explanation": "Chủ ngữ là \"The quality\" (số ít) nên động từ trợ phải dùng là \"has\"."
  },
  {
    "id": 782,
    "question": "______ her young age and little experience, she speaks English very clearly and confidently.",
    "options": {
      "A": "Although",
      "B": "Because",
      "C": "Despite",
      "D": "So"
    },
    "key": "C",
    "explanation": "Dùng \"Despite\" đứng trước cụm danh từ để chỉ sự nhượng bộ, trái ngược."
  },
  {
    "id": 783,
    "question": "He often ______ mistakes when he is in a hurry.",
    "options": {
      "A": "makes",
      "B": "does",
      "C": "gives",
      "D": "takes"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"make mistakes\" có nghĩa là mắc lỗi hoặc làm sai điều gì."
  },
  {
    "id": 784,
    "question": "Climate change can seriously ______ the balance of nature.",
    "options": {
      "A": "help",
      "B": "observe",
      "C": "preserve",
      "D": "affect"
    },
    "key": "D",
    "explanation": "Động từ \"affect\" có nghĩa là tác động hoặc gây ảnh hưởng đến sự cân bằng tự nhiên."
  },
  {
    "id": 785,
    "question": "If you don't hurry, you ______ late for the meeting.",
    "options": {
      "A": "are",
      "B": "will be",
      "C": "were",
      "D": "would be"
    },
    "key": "B",
    "explanation": "Cấu trúc câu điều kiện loại 1 với will be ở mệnh đề chính chỉ kết quả tương lai."
  },
  {
    "id": 786,
    "question": "I like your ______ shoes; they are perfect for walking every day.",
    "options": {
      "A": "black comfortable leather",
      "B": "comfortable black leather",
      "C": "leather comfortable black",
      "D": "black leather comfortable"
    },
    "key": "B",
    "explanation": "Thứ tự tính từ đúng: ý kiến (comfortable), màu sắc (black) và chất liệu (leather)."
  },
  {
    "id": 787,
    "question": "My brother drives ______ now than he did last year.",
    "options": {
      "A": "as safely",
      "B": "safer",
      "C": "more safely",
      "D": "the safest"
    },
    "key": "C",
    "explanation": "Dùng so sánh hơn với trạng từ dài \"more safely\" để chỉ cách thức hành động."
  },
  {
    "id": 788,
    "question": "Last weekend, they ______ their grandparents who live in a small peaceful village.",
    "options": {
      "A": "visit",
      "B": "visited",
      "C": "are visiting",
      "D": "have visited"
    },
    "key": "B",
    "explanation": "Dùng thì quá khứ đơn để diễn tả hành động đã xảy ra và kết thúc vào tuần trước."
  },
  {
    "id": 789,
    "question": "He saved money for several months ______ a new laptop for his online classes.",
    "options": {
      "A": "to buy",
      "B": "buy",
      "C": "buying",
      "D": "bought"
    },
    "key": "A",
    "explanation": "Cấu trúc To-V dùng để chỉ mục đích của việc tiết kiệm tiền."
  },
  {
    "id": 790,
    "question": "I'm not sure, but it ______ be snowy later in the afternoon.",
    "options": {
      "A": "must",
      "B": "should",
      "C": "might",
      "D": "can"
    },
    "key": "C",
    "explanation": "Dùng \"might\" để chỉ khả năng có thể xảy ra nhưng không chắc chắn 100%."
  },
  {
    "id": 791,
    "question": "We wish our classroom ______ bigger and brighter to study more comfortably.",
    "options": {
      "A": "were",
      "B": "was",
      "C": "is",
      "D": "be"
    },
    "key": "A",
    "explanation": "Trong câu ước cho hiện tại, động từ tobe luôn là \"were\" cho tất cả các ngôi."
  },
  {
    "id": 792,
    "question": "I am still ______ my keys, which I lost somewhere on the way home.",
    "options": {
      "A": "putting on",
      "B": "coming across",
      "C": "taking care of",
      "D": "looking for"
    },
    "key": "D",
    "explanation": "Cụm động từ \"looking for\" dùng khi bạn đang cố gắng tìm kiếm một vật bị mất."
  },
  {
    "id": 793,
    "question": "I need to buy ______ umbrella because it looks like it will rain soon.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "B",
    "explanation": "Sử dụng mạo từ \"an\" trước từ \"umbrella\" vì nó bắt đầu bằng âm nguyên âm."
  },
  {
    "id": 794,
    "question": "One of my classmates ______ very good at solving math problems.",
    "options": {
      "A": "are",
      "B": "were",
      "C": "is",
      "D": "have"
    },
    "key": "C",
    "explanation": "Cấu trúc \"One of + N số nhiều\" đi với động từ số ít \"is\"."
  },
  {
    "id": 795,
    "question": "I really enjoy listening to music in the evening, ______ my brother prefers watching TV instead.",
    "options": {
      "A": "therefore",
      "B": "so",
      "C": "but",
      "D": "because of"
    },
    "key": "C",
    "explanation": "Liên từ \"but\" dùng để nối hai mệnh đề diễn tả sở thích trái ngược nhau."
  },
  {
    "id": 796,
    "question": "They decided to ______ a party for her birthday.",
    "options": {
      "A": "hold",
      "B": "do",
      "C": "make",
      "D": "take"
    },
    "key": "A",
    "explanation": "Cụm động từ \"hold a party\" có nghĩa là đứng ra tổ chức một buổi tiệc."
  },
  {
    "id": 797,
    "question": "It is ______ to save endangered animals from extinction.",
    "options": {
      "A": "vital",
      "B": "fascinating",
      "C": "repetitive",
      "D": "unnecessary"
    },
    "key": "A",
    "explanation": "Tính từ \"vital\" có nghĩa là cực kỳ quan trọng và cần thiết."
  },
  {
    "id": 798,
    "question": "We will cancel the trip if it ______ heavily this afternoon.",
    "options": {
      "A": "rain",
      "B": "rains",
      "C": "rained",
      "D": "will rain"
    },
    "key": "B",
    "explanation": "Mệnh đề điều kiện If loại 1 chia ở thì hiện tại đơn với chủ ngữ It."
  },
  {
    "id": 799,
    "question": "She is looking for a ______ coat to wear in winter.",
    "options": {
      "A": "cheap long wool",
      "B": "long cheap wool",
      "C": "wool cheap long",
      "D": "cheap wool long"
    },
    "key": "A",
    "explanation": "Thứ tự tính từ: chất lượng/giá cả (cheap), kích thước (long) và chất liệu (wool)."
  },
  {
    "id": 800,
    "question": "Of the three options, this one seems ______ to understand.",
    "options": {
      "A": "as easy",
      "B": "easier",
      "C": "the easiest",
      "D": "the most easy"
    },
    "key": "C",
    "explanation": "Dùng so sánh nhất khi so sánh giữa ba lựa chọn với nhau."
  },
  {
    "id": 801,
    "question": "Next year, my brother ______ high school and apply for a university in the city.",
    "options": {
      "A": "finishes",
      "B": "will finish",
      "C": "finished",
      "D": "has finished"
    },
    "key": "B",
    "explanation": "Thì tương lai đơn diễn tả một sự việc sẽ diễn ra vào năm sau."
  },
  {
    "id": 802,
    "question": "Peter denied ______ his mobile phone during the final exam.",
    "options": {
      "A": "using",
      "B": "to use",
      "C": "uses",
      "D": "used"
    },
    "key": "A",
    "explanation": "Sau động từ \"deny\" (phủ nhận), động từ theo sau luôn chia ở dạng thêm -ing."
  },
  {
    "id": 803,
    "question": "You ______ bring an umbrella because the weather forecast says it will be sunny.",
    "options": {
      "A": "mustn't",
      "B": "needn't",
      "C": "shouldn't",
      "D": "can't"
    },
    "key": "B",
    "explanation": "Dùng \"needn't\" để chỉ sự không cần thiết phải làm gì đó."
  },
  {
    "id": 804,
    "question": "He wishes he ______ a car like his friends to go to work more conveniently.",
    "options": {
      "A": "can drive",
      "B": "could drive",
      "C": "drives",
      "D": "drove"
    },
    "key": "B",
    "explanation": "Cấu trúc ước ở hiện tại dùng could + V để chỉ khả năng không có thật."
  },
  {
    "id": 805,
    "question": "The children helped their parents ______ the messy living room after the party.",
    "options": {
      "A": "get around",
      "B": "come down",
      "C": "hand down",
      "D": "clean up"
    },
    "key": "D",
    "explanation": "Cụm động từ \"clean up\" có nghĩa là dọn dẹp cho sạch sẽ và ngăn nắp."
  },
  {
    "id": 806,
    "question": "My sister went to ______ USA to learn English.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Mạo từ \"the\" luôn đứng trước tên quốc gia có chứa từ \"USA\"."
  },
  {
    "id": 807,
    "question": "Singing English songs every day ______ a fun and effective way to improve pronunciation.",
    "options": {
      "A": "are",
      "B": "were",
      "C": "is",
      "D": "have been"
    },
    "key": "C",
    "explanation": "Chủ ngữ bắt đầu bằng danh động từ (V-ing) được tính là số ít."
  },
  {
    "id": 808,
    "question": "He didn't feel well after lunch; ______, he went to work to finish his tasks.",
    "options": {
      "A": "Therefore",
      "B": "However",
      "C": "Because",
      "D": "So"
    },
    "key": "B",
    "explanation": "Dùng \"However\" để chỉ sự nhượng bộ, dù mệt nhưng vẫn đi làm."
  },
  {
    "id": 809,
    "question": "My father always ______ me a lift to school when it rains.",
    "options": {
      "A": "gives",
      "B": "makes",
      "C": "does",
      "D": "takes"
    },
    "key": "A",
    "explanation": "Cụm từ \"give someone a lift\" có nghĩa là cho ai đó đi nhờ xe."
  },
  {
    "id": 810,
    "question": "The teacher asked her students to ______ a new idea for the project.",
    "options": {
      "A": "listen",
      "B": "copy",
      "C": "observe",
      "D": "propose"
    },
    "key": "D",
    "explanation": "Động từ \"propose\" có nghĩa là đề xuất hoặc đưa ra một ý tưởng mới."
  },
  {
    "id": 811,
    "question": "I will wash the dishes if you ______ the cooking.",
    "options": {
      "A": "will do",
      "B": "do",
      "C": "would do",
      "D": "did"
    },
    "key": "B",
    "explanation": "Mệnh đề If loại 1 chia ở thì hiện tại đơn với chủ ngữ là \"you\"."
  },
  {
    "id": 812,
    "question": "The museum is famous for ______ that show the history of the city.",
    "options": {
      "A": "beautiful buildings its",
      "B": "its buildings beautiful",
      "C": "its beautiful buildings",
      "D": "beautiful its buildings"
    },
    "key": "C",
    "explanation": "Cấu trúc cụm danh từ: Tính từ sở hữu + Tính từ + Danh từ."
  },
  {
    "id": 813,
    "question": "The more you practice speaking English, ______ you will become.",
    "options": {
      "A": "more confident",
      "B": "the most confident",
      "C": "most confident",
      "D": "the more confident"
    },
    "key": "D",
    "explanation": "Sử dụng cấu trúc so sánh kép \"the more... the more...\" để chỉ sự biến đổi tương ứng."
  },
  {
    "id": 814,
    "question": "My friends and I ______ the new shopping mall this weekend as planned.",
    "options": {
      "A": "will visit",
      "B": "visit",
      "C": "are going to visit",
      "D": "have visited"
    },
    "key": "C",
    "explanation": "Dùng \"be going to\" để diễn tả một dự định đã được lên kế hoạch trước."
  },
  {
    "id": 815,
    "question": "You can improve your mental and physical health by ______ regular exercise.",
    "options": {
      "A": "taking",
      "B": "take",
      "C": "to take",
      "D": "taken"
    },
    "key": "A",
    "explanation": "Sau giới từ \"by\", động từ theo sau phải được chia ở dạng V-ing."
  },
  {
    "id": 816,
    "question": "You look tired. You ______ take a break and relax for a while.",
    "options": {
      "A": "should",
      "B": "will",
      "C": "shouldn't",
      "D": "mustn't"
    },
    "key": "A",
    "explanation": "Sử dụng \"should\" để đưa ra lời khuyên hữu ích cho người đang mệt mỏi."
  },
  {
    "id": 817,
    "question": "I wish I ______ more time to finish my project.",
    "options": {
      "A": "have",
      "B": "had",
      "C": "will have",
      "D": "am having"
    },
    "key": "B",
    "explanation": "Câu ước cho điều không có thật ở hiện tại lùi động từ về quá khứ đơn."
  },
  {
    "id": 818,
    "question": "Can you ______ the fan? It's very hot in here.",
    "options": {
      "A": "look for",
      "B": "take off",
      "C": "turn on",
      "D": "put down"
    },
    "key": "C",
    "explanation": "Cụm động từ \"turn on\" có nghĩa là khởi động hoặc bật một thiết bị điện."
  },
  {
    "id": 819,
    "question": "Mrs. Green often buys ______ vegetable at this supermarket.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "D",
    "explanation": "Thông thường không dùng mạo từ trước danh từ không đếm được hoặc số nhiều chung chung."
  },
  {
    "id": 820,
    "question": "There ______ many people waiting to buy the tickets now.",
    "options": {
      "A": "are",
      "B": "is",
      "C": "were",
      "D": "was"
    },
    "key": "A",
    "explanation": "Động từ tobe chia ở số nhiều \"are\" để phù hợp với chủ ngữ \"many people\"."
  },
  {
    "id": 821,
    "question": "______ the test was not very difficult, my students didn't do it well.",
    "options": {
      "A": "Because",
      "B": "Despite",
      "C": "Although",
      "D": "In spite of"
    },
    "key": "C",
    "explanation": "Dùng \"Although\" đứng trước một mệnh đề để chỉ sự đối lập về kết quả."
  },
  {
    "id": 822,
    "question": "You should ______ advantage of free online courses to improve your English skills.",
    "options": {
      "A": "make",
      "B": "take",
      "C": "use",
      "D": "have"
    },
    "key": "B",
    "explanation": "Cụm từ cố định \"take advantage of\" có nghĩa là tận dụng cơ hội tốt nào đó."
  },
  {
    "id": 823,
    "question": "Vietnam is home to many different ______, each with its own traditions, clothing styles, and festivals.",
    "options": {
      "A": "local foods",
      "B": "ethnic groups",
      "C": "city markets",
      "D": "travel plans"
    },
    "key": "B",
    "explanation": "Cụm từ \"ethnic groups\" chỉ các nhóm dân tộc anh em cùng sinh sống tại Việt Nam."
  },
  {
    "id": 824,
    "question": "Unless Tina ______ the ticket in advance, she won't be able to get a good seat.",
    "options": {
      "A": "books",
      "B": "doesn't book",
      "C": "booked",
      "D": "book"
    },
    "key": "A",
    "explanation": "Cấu trúc Unless tương đương với If...not, động từ vế này dùng ở dạng khẳng định."
  },
  {
    "id": 825,
    "question": "Sheila said she would show us around ______ when we visited her.",
    "options": {
      "A": "her city beautiful",
      "B": "beautiful her city",
      "C": "city beautiful her",
      "D": "her beautiful city"
    },
    "key": "D",
    "explanation": "Sắp xếp theo thứ tự: Tính từ sở hữu (her) + Tính từ miêu tả (beautiful) + Danh từ (city)."
  },
  {
    "id": 826,
    "question": "\"Red Rain\" is one of ______ movie I've ever seen.",
    "options": {
      "A": "the more moving",
      "B": "the most moving",
      "C": "most moving",
      "D": "more moving"
    },
    "key": "B",
    "explanation": "Cấu trúc so sánh nhất với tính từ dài dùng để chỉ bộ phim cảm động nhất."
  },
  {
    "id": 827,
    "question": "We ______ in the park when it started to rain heavily.",
    "options": {
      "A": "danced",
      "B": "are dancing",
      "C": "were dancing",
      "D": "dance"
    },
    "key": "C",
    "explanation": "Thì quá khứ tiếp diễn diễn tả hành động đang xảy ra thì một hành động khác xen vào."
  },
  {
    "id": 828,
    "question": "The teacher encouraged the students ______ part in the English debate contest.",
    "options": {
      "A": "to take",
      "B": "take",
      "C": "taking",
      "D": "taken"
    },
    "key": "A",
    "explanation": "Cấu trúc encourage someone to do something có nghĩa là khuyến khích ai đó tham gia."
  },
  {
    "id": 829,
    "question": "Billy was so worried about the test that he ______ sleep last night.",
    "options": {
      "A": "wouldn't",
      "B": "mustn't",
      "C": "couldn't",
      "D": "shouldn't"
    },
    "key": "C",
    "explanation": "Dùng \"couldn't\" để chỉ sự bất lực, không thể làm gì trong quá khứ."
  },
  {
    "id": 830,
    "question": "The poor couple wish they ______ a house to live in.",
    "options": {
      "A": "have",
      "B": "would have",
      "C": "will have",
      "D": "had"
    },
    "key": "D",
    "explanation": "Câu ước cho hiện tại lùi thì về quá khứ đơn để chỉ một ước muốn chưa thực hiện được."
  },
  {
    "id": 831,
    "question": "The mother told her children to ______ their toys and get ready for dinner.",
    "options": {
      "A": "look for",
      "B": "put away",
      "C": "turn off",
      "D": "take up"
    },
    "key": "B",
    "explanation": "Cụm động từ \"put away\" có nghĩa là cất dọn đồ vật vào đúng nơi quy định."
  },
  {
    "id": 832,
    "question": "Playing ______ musical instrument is a good way to spend your free time.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "B",
    "explanation": "Dùng mạo từ \"an\" trước từ bắt đầu bằng nguyên âm khi nói về một loại nhạc cụ."
  },
  {
    "id": 833,
    "question": "Neither John nor his cousins ______ interested in the film, so they left early.",
    "options": {
      "A": "was",
      "B": "are",
      "C": "were",
      "D": "is"
    },
    "key": "C",
    "explanation": "Động từ chia theo chủ ngữ gần nhất là \"his cousins\" nên dùng dạng số nhiều \"were\"."
  },
  {
    "id": 834,
    "question": "It was ______ bad weather that they decided to cancel their picnic.",
    "options": {
      "A": "so",
      "B": "very",
      "C": "too",
      "D": "such"
    },
    "key": "D",
    "explanation": "Cấu trúc Such + (adj) + Danh từ dùng để nhấn mạnh tính chất dẫn đến kết quả."
  },
  {
    "id": 835,
    "question": "The boy she's tutoring is ______ significant progress in his English speaking skills.",
    "options": {
      "A": "doing",
      "B": "making",
      "C": "getting",
      "D": "taking"
    },
    "key": "B",
    "explanation": "Cụm từ cố định \"make progress\" có nghĩa là đạt được sự tiến bộ trong học tập."
  },
  {
    "id": 836,
    "question": "The rise in plastic waste can ______ many sea animals that accidentally eat it.",
    "options": {
      "A": "endanger",
      "B": "protect",
      "C": "improve",
      "D": "support"
    },
    "key": "A",
    "explanation": "Động từ \"endanger\" có nghĩa là gây nguy hiểm hoặc đe dọa đến sự sống của động vật."
  },
  {
    "id": 837,
    "question": "She'll be late for work if she ______ the bus.",
    "options": {
      "A": "miss",
      "B": "misses",
      "C": "will miss",
      "D": "would miss"
    },
    "key": "B",
    "explanation": "Mệnh đề If của câu điều kiện loại 1 dùng thì hiện tại đơn với chủ ngữ số ít."
  },
  {
    "id": 838,
    "question": "Tony live in ______ in the city center because it's near his office.",
    "options": {
      "A": "house small a",
      "B": "a house small",
      "C": "small a house",
      "D": "a small house"
    },
    "key": "D",
    "explanation": "Thứ tự từ trong cụm danh từ: Mạo từ (a) + Tính từ (small) + Danh từ (house)."
  },
  {
    "id": 839,
    "question": "The more you practice speaking in public, ______ you become.",
    "options": {
      "A": "the more confident",
      "B": "the most confident",
      "C": "more confident",
      "D": "most confident"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh kép \"the more... the more...\" chỉ sự phát triển của lòng tự tin."
  },
  {
    "id": 840,
    "question": "This is the most fascinating movie Julie ______. ",
    "options": {
      "A": "sees",
      "B": "saw",
      "C": "has seen",
      "D": "had seen"
    },
    "key": "C",
    "explanation": "Thì hiện tại hoàn thành dùng kèm với cấu trúc so sánh nhất để chỉ trải nghiệm."
  },
  {
    "id": 841,
    "question": "The tour guide offered ______ the tourists around the ancient temple before sunset so they could take photos peacefully.",
    "options": {
      "A": "showing",
      "B": "to show",
      "C": "show",
      "D": "shown"
    },
    "key": "B",
    "explanation": "Sau động từ \"offer\" (đề nghị), chúng ta sử dụng hình thức động từ To-V."
  },
  {
    "id": 842,
    "question": "Students ______ use their mobile phones during important examinations unless the teacher gives special permission.",
    "options": {
      "A": "must",
      "B": "mustn't",
      "C": "needn't",
      "D": "may"
    },
    "key": "B",
    "explanation": "Dùng \"mustn't\" để chỉ sự cấm đoán không được làm gì trong phòng thi."
  },
  {
    "id": 843,
    "question": "I wish my brother ______ so loudly when I am trying to study for important final examinations.",
    "options": {
      "A": "doesn't talk",
      "B": "has hasn't talked",
      "C": "didn't talk",
      "D": "won't talk"
    },
    "key": "C",
    "explanation": "Câu ước hiện tại diễn tả mong muốn thay đổi một thói quen gây khó chịu."
  },
  {
    "id": 844,
    "question": "The school promised to ______ the students' complaints carefully before making any changes to the current timetable.",
    "options": {
      "A": "look after",
      "B": "look for",
      "C": "look up",
      "D": "look into"
    },
    "key": "D",
    "explanation": "Cụm động từ \"look into\" có nghĩa là xem xét kỹ lưỡng hoặc điều tra một vấn đề."
  },
  {
    "id": 845,
    "question": "She bought ______ umbrella because it suddenly started raining on her way home from school.",
    "options": {
      "A": "a",
      "B": "the",
      "C": "Ø",
      "D": "an"
    },
    "key": "D",
    "explanation": "Dùng mạo từ \"an\" cho danh từ số ít bắt đầu bằng nguyên âm khi nhắc tới lần đầu."
  },
  {
    "id": 846,
    "question": "Every student in this class ______ required to submit the project before the final deadline.",
    "options": {
      "A": "are",
      "B": "were",
      "C": "is",
      "D": "have"
    },
    "key": "C",
    "explanation": "Chủ ngữ đi kèm với từ \"Every\" luôn chia động từ ở dạng số ít \"is\"."
  },
  {
    "id": 847,
    "question": "______ he was very tired after school, he still finished all his homework carefully.",
    "options": {
      "A": "Because",
      "B": "Although",
      "C": "Therefore",
      "D": "However"
    },
    "key": "B",
    "explanation": "Liên từ \"Although\" chỉ sự nhượng bộ giữa hai hành động trái ngược về tính chất."
  },
  {
    "id": 848,
    "question": "You should ______ a short break after studying for two hours to relax your eyes.",
    "options": {
      "A": "make",
      "B": "pay",
      "C": "take",
      "D": "give"
    },
    "key": "C",
    "explanation": "Cụm từ cố định \"take a break\" có nghĩa là tạm nghỉ ngơi trong chốc lát."
  },
  {
    "id": 849,
    "question": "During our holiday in the countryside, we decided to ______ through a narrow mountain road to reach a small local village.",
    "options": {
      "A": "drive a bus",
      "B": "take a taxi",
      "C": "ride a jeep",
      "D": "travel by train"
    },
    "key": "C",
    "explanation": "Việc lái xe jeep (ride a jeep) là phù hợp nhất khi đi trên đường núi gồ ghề và hẹp."
  },
  {
    "id": 850,
    "question": "She will feel healthier if she ______ enough water every day.",
    "options": {
      "A": "drink",
      "B": "drinks",
      "C": "will drink",
      "D": "drank"
    },
    "key": "B",
    "explanation": "Mệnh đề If loại 1 với chủ ngữ số ít She thì động từ phải thêm đuôi -s."
  },
  {
    "id": 851,
    "question": "My family is looking for ______ near the new shopping mall.",
    "options": {
      "A": "apartment modern a",
      "B": "a apartment modern",
      "C": "modern a apartment",
      "D": "a modern apartment"
    },
    "key": "D",
    "explanation": "Cấu trúc danh từ đúng: mạo từ \"a\" đứng trước tính từ và sau đó là danh từ."
  },
  {
    "id": 852,
    "question": "This exercise is not ______ difficult as the one we did yesterday in class.",
    "options": {
      "A": "so",
      "B": "more",
      "C": "most",
      "D": "too"
    },
    "key": "A",
    "explanation": "Cấu trúc so sánh không bằng: not so + tính từ + as."
  },
  {
    "id": 853,
    "question": "My father usually ______ to work by bus every morning.",
    "options": {
      "A": "go",
      "B": "goes",
      "C": "is going",
      "D": "went"
    },
    "key": "B",
    "explanation": "Thì hiện tại đơn diễn tả một thói quen được thực hiện thường xuyên mỗi sáng."
  },
  {
    "id": 854,
    "question": "She often has trouble ______ her homework on time because she spends many hours chatting with friends online.",
    "options": {
      "A": "to finish",
      "B": "finishing",
      "C": "finish",
      "D": "finished"
    },
    "key": "B",
    "explanation": "Cấu trúc have trouble doing something có nghĩa là gặp khó khăn khi làm việc gì."
  },
  {
    "id": 855,
    "question": "You ______ bring any food today because the school cafeteria will provide free lunch for all students.",
    "options": {
      "A": "must",
      "B": "can't",
      "C": "needn't",
      "D": "should"
    },
    "key": "C",
    "explanation": "Dùng \"needn't\" để chỉ một việc không bắt buộc hoặc không cần phải thực hiện."
  },
  {
    "id": 856,
    "question": "She wishes she ______ more free time to join after-school clubs and community volunteer activities.",
    "options": {
      "A": "has",
      "B": "will have",
      "C": "would have",
      "D": "had"
    },
    "key": "D",
    "explanation": "Trong câu ước cho hiện tại, động từ \"have\" được lùi về dạng quá khứ \"had\"."
  },
  {
    "id": 857,
    "question": "They decided to ______ the meeting until next week because several important members were absent today.",
    "options": {
      "A": "put off",
      "B": "put on",
      "C": "turn off",
      "D": "take off"
    },
    "key": "A",
    "explanation": "Cụm động từ \"put off\" dùng để chỉ việc hoãn lại một sự kiện sang thời điểm khác."
  },
  {
    "id": 858,
    "question": "There is ______ university near my house that offers many useful evening courses.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "A",
    "explanation": "Dùng \"a\" vì từ \"university\" bắt đầu bằng một phụ âm âm /j/ khi phát âm."
  },
  {
    "id": 859,
    "question": "Both of my brothers ______ interested in watching football matches on television.",
    "options": {
      "A": "were",
      "B": "are",
      "C": "is",
      "D": "has"
    },
    "key": "B",
    "explanation": "Cấu trúc \"Both of\" đi với danh từ số nhiều thì động từ cũng chia ở số nhiều."
  },
  {
    "id": 860,
    "question": "She stayed at home today ______ she had a bad headache in the morning.",
    "options": {
      "A": "although",
      "B": "because",
      "C": "so",
      "D": "however"
    },
    "key": "B",
    "explanation": "Sử dụng liên từ \"because\" để kết nối nguyên nhân gây ra việc ở nhà."
  },
  {
    "id": 861,
    "question": "My younger sister usually ______ her homework immediately after coming home from school.",
    "options": {
      "A": "takes",
      "B": "has",
      "C": "makes",
      "D": "does"
    },
    "key": "D",
    "explanation": "Cụm từ \"do homework\" là cách kết hợp từ cố định trong tiếng Anh."
  },
  {
    "id": 862,
    "question": "Many families choose to live on the ______ of the city because houses there are cheaper and the air is cleaner.",
    "options": {
      "A": "center",
      "B": "suburbs",
      "C": "outskirts",
      "D": "downtown"
    },
    "key": "B",
    "explanation": "Danh từ \"suburbs\" chỉ vùng ngoại ô nơi có môi trường yên tĩnh và giá rẻ hơn."
  },
  {
    "id": 863,
    "question": "If you study harder, you ______ better results in your final examinations.",
    "options": {
      "A": "will get",
      "B": "got",
      "C": "would get",
      "D": "won't get"
    },
    "key": "A",
    "explanation": "Câu điều kiện loại 1 dùng will + V để chỉ kết quả tốt đẹp có thể xảy ra."
  },
  {
    "id": 864,
    "question": "They are staying in ______ during their summer holiday in Da Nang.",
    "options": {
      "A": "hotel comfortable a",
      "B": "a comfortable hotel",
      "C": "comfortable a hotel",
      "D": "a hotel comfortable"
    },
    "key": "B",
    "explanation": "Thứ tự từ trong tiếng Anh: Mạo từ + Tính từ + Danh từ."
  },
  {
    "id": 865,
    "question": "______ the weather becomes, the more people stay indoors during winter days.",
    "options": {
      "A": "Cold",
      "B": "The coldest",
      "C": "The colder",
      "D": "Colder"
    },
    "key": "C",
    "explanation": "Cấu trúc so sánh kép \"The + so sánh hơn..., the + so sánh hơn...\"."
  },
  {
    "id": 866,
    "question": "She ______ TV when the phone rang suddenly last night.",
    "options": {
      "A": "watched",
      "B": "is watching",
      "C": "was watching",
      "D": "watches"
    },
    "key": "C",
    "explanation": "Thì quá khứ tiếp diễn dùng cho hành động đang xảy ra tại một thời điểm quá khứ."
  },
  {
    "id": 867,
    "question": "The company plans ______ a training course next month to improve communication skills among newly hired office workers.",
    "options": {
      "A": "organizing",
      "B": "organized",
      "C": "organize",
      "D": "to organize"
    },
    "key": "D",
    "explanation": "Động từ \"plan\" (lên kế hoạch) luôn đi kèm với hình thức động từ To-V."
  },
  {
    "id": 868,
    "question": "You ______ see a doctor if your headache continues for more than three days.",
    "options": {
      "A": "can",
      "B": "may",
      "C": "should",
      "D": "mustn't"
    },
    "key": "C",
    "explanation": "Dùng động từ khuyết thiếu \"should\" để khuyên ai đó đi khám bác sĩ."
  },
  {
    "id": 869,
    "question": "We wish our classroom ______ larger because it becomes very crowded during group discussion activities.",
    "options": {
      "A": "is",
      "B": "were",
      "C": "had been",
      "D": "will be"
    },
    "key": "B",
    "explanation": "Trong câu ước hiện tại, động từ \"to be\" luôn dùng \"were\" để chỉ sự không thật."
  },
  {
    "id": 870,
    "question": "The doctor advised him to ______ sugary drinks to improve his overall health and energy levels.",
    "options": {
      "A": "cut down on",
      "B": "keep up with",
      "C": "look up to",
      "D": "come down with"
    },
    "key": "A",
    "explanation": "Cụm động từ \"cut down on\" có nghĩa là giảm bớt lượng tiêu dùng một thứ gì đó."
  },
  {
    "id": 871,
    "question": "My father works as ______ engineer in a large construction company in the city center.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "B",
    "explanation": "Dùng mạo từ \"an\" trước danh từ chỉ nghề nghiệp bắt đầu bằng một nguyên âm."
  },
  {
    "id": 872,
    "question": "A number of students ______ joined the environmental club this semester.",
    "options": {
      "A": "has",
      "B": "is",
      "C": "was",
      "D": "have"
    },
    "key": "D",
    "explanation": "Cấu trúc \"A number of + N số nhiều\" luôn đi với động từ chia ở số nhiều \"have\"."
  },
  {
    "id": 873,
    "question": "The bus did not arrive on time; ______, many students were late for their first class.",
    "options": {
      "A": "but",
      "B": "however",
      "C": "therefore",
      "D": "although"
    },
    "key": "C",
    "explanation": "Từ nối \"therefore\" dùng để chỉ hậu quả tất yếu từ nguyên nhân xe buýt đến trễ."
  },
  {
    "id": 874,
    "question": "He prefers to ______ a shower in the evening rather than early in the morning.",
    "options": {
      "A": "do",
      "B": "have",
      "C": "make",
      "D": "get"
    },
    "key": "B",
    "explanation": "Cụm từ \"have a shower\" là cụm từ cố định có nghĩa là đi tắm vòi sen."
  },
  {
    "id": 875,
    "question": "Please take a travel ______ at the front desk to learn more about the tour and hotel services.",
    "options": {
      "A": "brochure",
      "B": "paper",
      "C": "notice",
      "D": "poster"
    },
    "key": "A",
    "explanation": "Từ \"brochure\" chỉ loại ấn phẩm quảng cáo cung cấp thông tin về du lịch và dịch vụ."
  },
  {
    "id": 876,
    "question": "You will miss the meeting if you ______ late again tomorrow morning.",
    "options": {
      "A": "arrive",
      "B": "will arrive",
      "C": "arrived",
      "D": "would arrive"
    },
    "key": "B",
    "explanation": "Sử dụng cấu trúc câu điều kiện loại 1 để nói về khả năng xảy ra."
  },
  {
    "id": 877,
    "question": "He wants to buy ______ to use for his online classes.",
    "options": {
      "A": "computer fast a",
      "B": "a computer fast",
      "C": "fast a computer",
      "D": "a fast computer"
    },
    "key": "D",
    "explanation": "Sắp xếp theo trật tự: mạo từ (a) + tính từ (fast) + danh từ (computer)."
  },
  {
    "id": 878,
    "question": "My sister is ______ tall as my cousin, so they often borrow each other's clothes.",
    "options": {
      "A": "same",
      "B": "so",
      "C": "as",
      "D": "more"
    },
    "key": "C",
    "explanation": "Sử dụng cấu trúc so sánh bằng \"as... as\" để so sánh hai đối tượng."
  },
  {
    "id": 879,
    "question": "The box looks heavy. I ______ help you carry it.",
    "options": {
      "A": "am going to",
      "B": "was going to",
      "C": "will",
      "D": "am helping"
    },
    "key": "A",
    "explanation": "Dùng \"be going to\" để đưa ra dự đoán dựa trên dấu hiệu hiện tại."
  },
  {
    "id": 880,
    "question": "We expect ______ the results of the entrance examination before the end of this stressful academic semester.",
    "options": {
      "A": "receiving",
      "B": "to receive",
      "C": "receive",
      "D": "received"
    },
    "key": "B",
    "explanation": "Sau động từ \"expect\", chúng ta sử dụng động từ ở dạng to-V nguyên mẫu."
  },
  {
    "id": 881,
    "question": "You ______ stay up too late if you want to feel energetic during your important presentation tomorrow morning.",
    "options": {
      "A": "shouldn't",
      "B": "won't",
      "C": "can",
      "D": "may"
    },
    "key": "A",
    "explanation": "Dùng \"shouldn't\" để đưa ra lời khuyên không nên làm một việc gì đó."
  },
  {
    "id": 882,
    "question": "He wishes he ______ closer to school so he would not spend so much time traveling daily.",
    "options": {
      "A": "lives",
      "B": "had lived",
      "C": "has lived",
      "D": "lived"
    },
    "key": "D",
    "explanation": "Câu ước cho hiện tại sử dụng thì quá khứ đơn cho động từ chính."
  },
  {
    "id": 883,
    "question": "My keys finally ______ in the kitchen drawer after I searched everywhere for almost two hours.",
    "options": {
      "A": "took off",
      "B": "cut down",
      "C": "turned up",
      "D": "went off"
    },
    "key": "C",
    "explanation": "Cụm động từ \"turned up\" có nghĩa là xuất hiện hoặc được tìm thấy."
  },
  {
    "id": 884,
    "question": "Children should not watch ______ television for too many hours every day.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "D",
    "explanation": "Không dùng mạo từ trước danh từ không đếm được như \"television\"."
  },
  {
    "id": 885,
    "question": "The number of cars in this city ______ increasing rapidly because more people can afford vehicles now.",
    "options": {
      "A": "are",
      "B": "have",
      "C": "is",
      "D": "were"
    },
    "key": "C",
    "explanation": "Cấu trúc \"The number of\" luôn đi với động từ chia ở số ít."
  },
  {
    "id": 886,
    "question": "______ the heavy rain, the football match continued until the final whistle.",
    "options": {
      "A": "Because",
      "B": "Despite",
      "C": "Although",
      "D": "Therefore"
    },
    "key": "B",
    "explanation": "Dùng \"Despite\" đứng trước cụm danh từ để diễn tả sự nhượng bộ."
  },
  {
    "id": 887,
    "question": "We need to ______ ready quickly because the bus will leave in ten minutes.",
    "options": {
      "A": "make",
      "B": "do",
      "C": "have",
      "D": "get"
    },
    "key": "D",
    "explanation": "Cụm từ \"get ready\" có nghĩa là chuẩn bị sẵn sàng để làm gì."
  },
  {
    "id": 888,
    "question": "The hotel is ______ near the beach, so guests can walk to the sea in only five minutes.",
    "options": {
      "A": "placed",
      "B": "found",
      "C": "built",
      "D": "located"
    },
    "key": "D",
    "explanation": "Từ \"located\" dùng để chỉ vị trí tọa lạc của một công trình, địa điểm."
  },
  {
    "id": 889,
    "question": "If we ______ early, we will catch the first bus to the city center.",
    "options": {
      "A": "leave",
      "B": "left",
      "C": "will leave",
      "D": "don't live"
    },
    "key": "A",
    "explanation": "Mệnh đề If của câu điều kiện loại 1 sử dụng thì hiện tại đơn."
  },
  {
    "id": 890,
    "question": "My sister is wearing ______ to the school festival tonight.",
    "options": {
      "A": "dress beautiful a",
      "B": "a dress beautiful",
      "C": "beautiful a dress",
      "D": "a beautiful dress"
    },
    "key": "D",
    "explanation": "Cấu trúc cụm danh từ: mạo từ + tính từ + danh từ."
  },
  {
    "id": 891,
    "question": "Traveling by train is ______ comfortable than traveling by bus on long journeys.",
    "options": {
      "A": "very",
      "B": "much",
      "C": "more",
      "D": "most"
    },
    "key": "C",
    "explanation": "Dùng \"more\" trong cấu trúc so sánh hơn với tính từ dài."
  },
  {
    "id": 892,
    "question": "The train ______ at six o'clock every morning.",
    "options": {
      "A": "leave",
      "B": "leaves",
      "C": "left",
      "D": "is leaving"
    },
    "key": "B",
    "explanation": "Thì hiện tại đơn diễn tả lịch trình tàu chạy cố định hàng ngày."
  },
  {
    "id": 893,
    "question": "Many students prefer ______ at home rather than in noisy cafés when preparing seriously for important final examinations.",
    "options": {
      "A": "studying",
      "B": "to studying",
      "C": "to study",
      "D": "study"
    },
    "key": "C",
    "explanation": "Cấu trúc \"prefer to do something\" diễn tả sự yêu thích làm việc gì hơn."
  },
  {
    "id": 894,
    "question": "You ______ wear your school uniform on Mondays because it is required by the school administration.",
    "options": {
      "A": "can",
      "B": "must",
      "C": "may",
      "D": "should"
    },
    "key": "B",
    "explanation": "Dùng \"must\" để diễn tả một sự bắt buộc theo nội quy, quy định."
  },
  {
    "id": 895,
    "question": "They wish their parents ______ more understanding when they make mistakes at home sometimes.",
    "options": {
      "A": "were",
      "B": "are",
      "C": "was",
      "D": "will be"
    },
    "key": "A",
    "explanation": "Câu ước cho hiện tại dùng động từ \"were\" cho tất cả các ngôi."
  },
  {
    "id": 896,
    "question": "She waited for over an hour, but her best friend did not ______ at the café as planned.",
    "options": {
      "A": "put down",
      "B": "look into",
      "C": "go off",
      "D": "turn up"
    },
    "key": "D",
    "explanation": "Cụm động từ \"turn up\" có nghĩa là đến một điểm hẹn nào đó."
  },
  {
    "id": 897,
    "question": "He usually travels to ______ work by bus because the office is far from his home.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "D",
    "explanation": "Cụm từ \"go to work\" (đi làm) không cần sử dụng mạo từ."
  },
  {
    "id": 898,
    "question": "There ______ several interesting books on the shelf near the classroom door.",
    "options": {
      "A": "is",
      "B": "was",
      "C": "are",
      "D": "has"
    },
    "key": "C",
    "explanation": "Động từ tobe chia ở số nhiều \"are\" để phù hợp với \"several books\"."
  },
  {
    "id": 899,
    "question": "They arrived late ______ an accident on the main road near the city center.",
    "options": {
      "A": "although",
      "B": "because of",
      "C": "because",
      "D": "so"
    },
    "key": "B",
    "explanation": "Dùng \"because of\" đứng trước cụm danh từ chỉ nguyên nhân sự việc."
  },
  {
    "id": 900,
    "question": "Please pay ______ to the teacher's instructions before starting the final exam.",
    "options": {
      "A": "attention",
      "B": "a fine",
      "C": "a visit",
      "D": "a price"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"pay attention to\" có nghĩa là chú ý vào điều gì."
  },
  {
    "id": 901,
    "question": "During the exam week, many students feel nervous, so teachers try to ______ them by giving extra practice and advice.",
    "options": {
      "A": "prevent",
      "B": "refuse",
      "C": "disturb",
      "D": "support"
    },
    "key": "D",
    "explanation": "Động từ \"support\" mang ý nghĩa hỗ trợ và khích lệ học sinh."
  },
  {
    "id": 902,
    "question": "They will not finish the project on time if they ______ carefully.",
    "options": {
      "A": "don't plan",
      "B": "didn't plan",
      "C": "won't plan",
      "D": "wouldly plan"
    },
    "key": "A",
    "explanation": "Mệnh đề If trong câu điều kiện loại 1 chia ở thì hiện tại đơn."
  },
  {
    "id": 903,
    "question": "They rented ______ near the railway station.",
    "options": {
      "A": "room cheap a",
      "B": "a room cheap",
      "C": "cheap a room",
      "D": "a cheap room"
    },
    "key": "D",
    "explanation": "Sắp xếp cụm danh từ: mạo từ (a) + tính từ (cheap) + danh từ (room)."
  },
  {
    "id": 904,
    "question": "The ______ you practice English, the better your pronunciation becomes.",
    "options": {
      "A": "many",
      "B": "much",
      "C": "more",
      "D": "most"
    },
    "key": "C",
    "explanation": "Cấu trúc so sánh kép \"The more... the better...\" chỉ sự thay đổi tương ứng."
  },
  {
    "id": 905,
    "question": "While we ______ dinner, the lights suddenly went out.",
    "options": {
      "A": "are having",
      "B": "have",
      "C": "were having",
      "D": "had"
    },
    "key": "C",
    "explanation": "Thì quá khứ tiếp diễn diễn tả hành động đang diễn ra trong quá khứ."
  },
  {
    "id": 906,
    "question": "She is confident enough ______ in front of hundreds of students during the annual school talent show.",
    "options": {
      "A": "speaking",
      "B": "speak",
      "C": "spoken",
      "D": "to speak"
    },
    "key": "D",
    "explanation": "Cấu trúc \"enough\" đi kèm với động từ nguyên mẫu có to (to V)."
  },
  {
    "id": 907,
    "question": "We ______ wear safety helmets when riding motorbikes on busy city roads.",
    "options": {
      "A": "may",
      "B": "have to",
      "C": "could",
      "D": "needn't"
    },
    "key": "B",
    "explanation": "Dùng \"have to\" để chỉ sự bắt buộc phải thực hiện vì lý do an toàn."
  },
  {
    "id": 908,
    "question": "I wish my best friend ______ more carefully before making important decisions that affect many people.",
    "options": {
      "A": "thought",
      "B": "think",
      "C": "has thought",
      "D": "will think"
    },
    "key": "A",
    "explanation": "Câu ước cho hiện tại sử dụng thì quá khứ đơn (thought)."
  },
  {
    "id": 909,
    "question": "The plane will ______ in ten minutes, so passengers are asked to fasten their seat belts now.",
    "options": {
      "A": "take off",
      "B": "go off",
      "C": "pick up",
      "D": "put off"
    },
    "key": "A",
    "explanation": "Cụm động từ \"take off\" được dùng khi máy bay bắt đầu rời mặt đất."
  },
  {
    "id": 910,
    "question": "Can you turn off ______ television please? I am trying to finish my assignment.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "Ø",
      "D": "the"
    },
    "key": "D",
    "explanation": "Dùng mạo từ \"the\" khi nói về một chiếc ti vi cụ thể đang bật."
  },
  {
    "id": 911,
    "question": "Each of the teachers ______ responsible for preparing materials for their own classes.",
    "options": {
      "A": "are",
      "B": "have",
      "C": "is",
      "D": "were"
    },
    "key": "C",
    "explanation": "Cấu trúc \"Each of + N số nhiều\" đi với động từ số ít \"is\"."
  },
  {
    "id": 912,
    "question": "It was raining heavily, ______ we decided to cancel the outdoor school picnic.",
    "options": {
      "A": "although",
      "B": "so",
      "C": "however",
      "D": "because"
    },
    "key": "B",
    "explanation": "Liên từ \"so\" dùng để chỉ kết quả dẫn đến từ sự việc trước đó."
  },
  {
    "id": 913,
    "question": "The manager promised to ______ responsibility for the mistake that caused the company serious losses.",
    "options": {
      "A": "take",
      "B": "do",
      "C": "make",
      "D": "get"
    },
    "key": "A",
    "explanation": "Cụm từ \"take responsibility\" có nghĩa là chịu trách nhiệm cho việc gì đó."
  },
  {
    "id": 914,
    "question": "Many ______ enjoy visiting the beach in summer to relax and spend time with their families.",
    "options": {
      "A": "travel plans",
      "B": "holiday makers",
      "C": "tourist attractions",
      "D": "local markets"
    },
    "key": "B",
    "explanation": "Cụm từ \"holiday makers\" chỉ những người đang đi nghỉ mát, du lịch."
  },
  {
    "id": 915,
    "question": "If you take this medicine after meals, you ______ better soon.",
    "options": {
      "A": "feel",
      "B": "felt",
      "C": "will feel",
      "D": "wouldly feel"
    },
    "key": "C",
    "explanation": "Trong câu điều kiện loại 1, mệnh đề chính sử dụng thì tương lai đơn."
  },
  {
    "id": 916,
    "question": "We sat under ______ to avoid the strong sunlight at noon.",
    "options": {
      "A": "tree big a",
      "B": "a big tree",
      "C": "big a tree",
      "D": "a tree big"
    },
    "key": "B",
    "explanation": "Cấu trúc danh từ đúng: mạo từ (a) + tính từ (big) + danh từ (tree)."
  },
  {
    "id": 917,
    "question": "This is the ______ movie I have ever watched with my family at home.",
    "options": {
      "A": "more interesting",
      "B": "interesting",
      "C": "most interesting",
      "D": "very interesting"
    },
    "key": "C",
    "explanation": "Dùng so sánh nhất với tính từ dài để chỉ sự vật nổi bật nhất."
  },
  {
    "id": 918,
    "question": "They ______ their grandparents this Saturday afternoon.",
    "options": {
      "A": "visited",
      "B": "visit",
      "C": "are visiting",
      "D": "will visiting"
    },
    "key": "C",
    "explanation": "Thì hiện tại tiếp diễn được dùng để nói về một kế hoạch chắc chắn."
  },
  {
    "id": 919,
    "question": "The little girl adores ______ bedtime stories because they make her feel safe and relaxed every night.",
    "options": {
      "A": "listening",
      "B": "to listen",
      "C": "listen",
      "D": "listened"
    },
    "key": "A",
    "explanation": "Sau động từ \"adore\" (yêu thích), chúng ta sử dụng động từ thêm đuôi -ing."
  },
  {
    "id": 920,
    "question": "You ______ leave early today if you finish all your assignments before the lunch break.",
    "options": {
      "A": "must",
      "B": "should",
      "C": "will",
      "D": "may"
    },
    "key": "D",
    "explanation": "Dùng \"may\" để đưa ra sự cho phép ai đó làm việc gì."
  },
  {
    "id": 921,
    "question": "We wish our teacher ______ less homework on Fridays so we could relax at home.",
    "options": {
      "A": "gives",
      "B": "gave",
      "C": "had given",
      "D": "will give"
    },
    "key": "B",
    "explanation": "Câu ước ở hiện tại dùng thì quá khứ đơn để thể hiện mong muốn."
  },
  {
    "id": 922,
    "question": "She couldn't attend school yesterday because she ______ a bad cold after staying out in the rain.",
    "options": {
      "A": "looked forward to",
      "B": "came down with",
      "C": "dropped out of",
      "D": "got along with"
    },
    "key": "B",
    "explanation": "Cụm động từ \"come down with\" có nghĩa là bị ốm hoặc mắc bệnh."
  },
  {
    "id": 923,
    "question": "Most of the students in our class find ______ Maths very difficult to learn.",
    "options": {
      "A": "Ø",
      "B": "a",
      "C": "an",
      "D": "the"
    },
    "key": "A",
    "explanation": "Thông thường không dùng mạo từ đứng trước tên các môn học (Maths)."
  },
  {
    "id": 924,
    "question": "Everyone in the classroom ______ asked to remain silent during the important school meeting.",
    "options": {
      "A": "were",
      "B": "have",
      "C": "was",
      "D": "are"
    },
    "key": "C",
    "explanation": "Đại từ bất định \"Everyone\" luôn đi kèm với động từ chia ở số ít."
  },
  {
    "id": 925,
    "question": "The hotel looked expensive; ______, it was actually quite affordable for many travelers.",
    "options": {
      "A": "So",
      "B": "However",
      "C": "Because",
      "D": "Therefore"
    },
    "key": "B",
    "explanation": "Dùng \"However\" để nối hai vế câu mang ý nghĩa tương phản nhau."
  },
  {
    "id": 926,
    "question": "She is trying to ______ an effort to improve her English speaking skills this semester.",
    "options": {
      "A": "do",
      "B": "make",
      "C": "take",
      "D": "have"
    },
    "key": "B",
    "explanation": "Cụm từ cố định \"make an effort\" có nghĩa là nỗ lực làm việc gì."
  },
  {
    "id": 927,
    "question": "Many students use ______ to practice English at home because they are easy to download and very useful.",
    "options": {
      "A": "online apps",
      "B": "local schools",
      "C": "paper books",
      "D": "free lessons"
    },
    "key": "A",
    "explanation": "Cụm từ \"online apps\" chỉ các ứng dụng trực tuyến hỗ trợ học tập."
  },
  {
    "id": 928,
    "question": "We will stay at home if the weather ______ too cold tonight.",
    "options": {
      "A": "become",
      "B": "becomes",
      "C": "became",
      "D": "will become"
    },
    "key": "B",
    "explanation": "Thì hiện tại đơn được dùng trong mệnh đề If của câu điều kiện loại 1."
  },
  {
    "id": 929,
    "question": "He is reading ______ about world natural wonders.",
    "options": {
      "A": "book interesting an",
      "B": "an book interesting",
      "C": "interesting an book",
      "D": "an interesting book"
    },
    "key": "D",
    "explanation": "Mạo từ \"an\" đứng trước tính từ bắt đầu bằng nguyên âm (interesting)."
  },
  {
    "id": 930,
    "question": "My brother cooks ______ well as my mother does on special family occasions.",
    "options": {
      "A": "too",
      "B": "as",
      "C": "more",
      "D": "most"
    },
    "key": "B",
    "explanation": "Sử dụng cấu trúc so sánh bằng \"as + adv + as\" với trạng từ \"well\"."
  },
  {
    "id": 931,
    "question": "This soup smells very good. My mother ______ it.",
    "options": {
      "A": "has cooked",
      "B": "cooked",
      "C": "was cooking",
      "D": "is going to cook"
    },
    "key": "D",
    "explanation": "Dùng \"is going to\" để chỉ một sự việc sắp xảy ra có dấu hiệu rõ ràng."
  },
  {
    "id": 932,
    "question": "He stopped ______ coffee in the evening because he wanted to sleep better before important morning meetings.",
    "options": {
      "A": "to drink",
      "B": "drink",
      "C": "drinking",
      "D": "drunk"
    },
    "key": "C",
    "explanation": "Cấu trúc \"stop + V-ing\" dùng để nói về việc chấm dứt hẳn một hành động."
  },
  {
    "id": 933,
    "question": "My younger brother ______ swim very well even though he is only seven years old.",
    "options": {
      "A": "must",
      "B": "can",
      "C": "should",
      "D": "might"
    },
    "key": "B",
    "explanation": "Động từ khuyết thiếu \"can\" dùng để diễn tả khả năng của một người."
  },
  {
    "id": 934,
    "question": "He wishes he ______ more confident when speaking English in front of foreign visitors at school.",
    "options": {
      "A": "is",
      "B": "had been",
      "C": "will be",
      "D": "were"
    },
    "key": "D",
    "explanation": "Dùng \"were\" sau câu ước để diễn tả mong muốn không có thật ở hiện tại."
  },
  {
    "id": 935,
    "question": "She had to ______ the invitation because she was already busy preparing for her final examinations.",
    "options": {
      "A": "turn down",
      "B": "put on",
      "C": "take off",
      "D": "bring up"
    },
    "key": "A",
    "explanation": "Cụm động từ \"turn down\" mang ý nghĩa là khước từ hoặc từ chối lời mời."
  },
  {
    "id": 936,
    "question": "There is a good film ______ cinema tonight. Would you like to go with me?",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Cụm từ \"at the cinema\" dùng để chỉ rạp chiếu phim nói chung."
  },
  {
    "id": 937,
    "question": "Neither the teacher nor the students ______ aware of the sudden change in the exam schedule.",
    "options": {
      "A": "is",
      "B": "was",
      "C": "are",
      "D": "has"
    },
    "key": "C",
    "explanation": "Động từ chia theo chủ ngữ gần nhất là số nhiều \"the students\"."
  },
  {
    "id": 938,
    "question": "It was ______ a difficult exercise the many students could not finish it on time.",
    "options": {
      "A": "too",
      "B": "so",
      "C": "very",
      "D": "such"
    },
    "key": "B",
    "explanation": "Cấu trúc \"so + adj + a/an + N + that\" dùng để nhấn mạnh tính chất sự vật."
  },
  {
    "id": 939,
    "question": "They plan to ______ a discussion about environmental protection in their next class meeting.",
    "options": {
      "A": "make",
      "B": "take",
      "C": "have",
      "D": "get"
    },
    "key": "C",
    "explanation": "Cụm từ cố định \"have a discussion\" có nghĩa là tiến hành một cuộc thảo luận."
  },
  {
    "id": 940,
    "question": "We decided to stay at a ______ near the lake so that we could sleep in tents and enjoy the fresh air.",
    "options": {
      "A": "campsite",
      "B": "museum",
      "C": "airport",
      "D": "factory"
    },
    "key": "A",
    "explanation": "Từ \"campsite\" chỉ địa điểm thích hợp để cắm trại và ngủ trong lều."
  },
  {
    "id": 941,
    "question": "If it ______ tomorrow, we will cancel the picnic to the mountains.",
    "options": {
      "A": "rained",
      "B": "has rained",
      "C": "rains",
      "D": "will rain"
    },
    "key": "C",
    "explanation": "Mệnh đề If loại 1 luôn sử dụng thì hiện tại đơn cho sự việc có thể xảy ra."
  },
  {
    "id": 942,
    "question": "She received a ______ bracelet from her grandmother.",
    "options": {
      "A": "silver beautiful old",
      "B": "old beautiful silver",
      "C": "beautiful old silver",
      "D": "silver old beautiful"
    },
    "key": "C",
    "explanation": "Trật tự tính từ: ý kiến (beautiful), tuổi tác (old) và chất liệu (silver)."
  },
  {
    "id": 943,
    "question": "This exercise is ______ than the one we did yesterday.",
    "options": {
      "A": "difficult",
      "B": "the most difficult",
      "C": "more difficult",
      "D": "as difficult"
    },
    "key": "C",
    "explanation": "Dùng \"more difficult\" trong so sánh hơn vì đây là tính từ dài."
  },
  {
    "id": 944,
    "question": "Look! The children ______ football in the schoolyard now.",
    "options": {
      "A": "play",
      "B": "played",
      "C": "are playing",
      "D": "have played"
    },
    "key": "C",
    "explanation": "Dấu hiệu \"now\" cho thấy hành động đang diễn ra nên dùng hiện tại tiếp diễn."
  },
  {
    "id": 945,
    "question": "She is keen on ______ English songs in her free time.",
    "options": {
      "A": "to listen",
      "B": "listened",
      "C": "listen",
      "D": "listening"
    },
    "key": "D",
    "explanation": "Cấu trúc \"be keen on\" luôn đi kèm với động từ thêm -ing."
  },
  {
    "id": 946,
    "question": "It's getting dark. You ______ turn on the lights now.",
    "options": {
      "A": "couldn't",
      "B": "shouldn't",
      "C": "should",
      "D": "could"
    },
    "key": "C",
    "explanation": "Dùng \"should\" để đưa ra một lời khuyên cần thiết trong tình huống này."
  },
  {
    "id": 947,
    "question": "He can't join the team because he's too short. He wishes he ______ taller.",
    "options": {
      "A": "is",
      "B": "will be",
      "C": "were",
      "D": "has been"
    },
    "key": "C",
    "explanation": "Câu ước ở hiện tại dùng \"were\" để chỉ mong muốn không thật hiện tại."
  },
  {
    "id": 948,
    "question": "The tour guide told the students to ______ the bus quickly because to start the journey.",
    "options": {
      "A": "take on",
      "B": "get on",
      "C": "get in",
      "D": "take over"
    },
    "key": "B",
    "explanation": "Cụm động từ \"get on\" có nghĩa là bước lên một phương tiện giao thông lớn."
  },
  {
    "id": 949,
    "question": "She wants to buy ______ new laptop because her old one is too slow.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "A",
    "explanation": "Dùng mạo từ \"a\" trước danh từ số ít bắt đầu bằng một phụ âm."
  },
  {
    "id": 950,
    "question": "The number of students in my class ______ increasing this year.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "were",
      "D": "have been"
    },
    "key": "A",
    "explanation": "Chủ ngữ là \"The number of\" nên động từ chia ở ngôi thứ ba số ít."
  },
  {
    "id": 951,
    "question": "It was raining heavily, ______ we decided to stay indoors.",
    "options": {
      "A": "although",
      "B": "because",
      "C": "but",
      "D": "so"
    },
    "key": "D",
    "explanation": "Dùng liên từ \"so\" để chỉ kết quả dẫn tới từ nguyên nhân mưa to."
  },
  {
    "id": 952,
    "question": "She always tries to ______ her best in every exam.",
    "options": {
      "A": "make",
      "B": "do",
      "C": "take",
      "D": "give"
    },
    "key": "B",
    "explanation": "Cụm từ \"do one's best\" có nghĩa là cố gắng hết sức mình làm việc gì."
  },
  {
    "id": 953,
    "question": "The Internet allows students to ______ information quickly and easily.",
    "options": {
      "A": "admit",
      "B": "invent",
      "C": "conduct",
      "D": "access"
    },
    "key": "D",
    "explanation": "Động từ \"access\" mang ý nghĩa là truy cập vào các nguồn thông tin."
  },
  {
    "id": 954,
    "question": "If it ______ tomorrow, we'll go on a field trip.",
    "options": {
      "A": "won't rain",
      "B": "has rained",
      "C": "doesn't rain",
      "D": "didn't rain"
    },
    "key": "C",
    "explanation": "Dùng hiện tại đơn phủ định \"doesn't rain\" trong mệnh đề If loại 1."
  },
  {
    "id": 955,
    "question": "She bought a ______ leather bag during her trip to Italy last summer.",
    "options": {
      "A": "stylish black large",
      "B": "stylish large black",
      "C": "black large stylish",
      "D": "stylish black large"
    },
    "key": "B",
    "explanation": "Trật tự tính từ: ý kiến (stylish), kích thước (large) và màu sắc (black)."
  },
  {
    "id": 956,
    "question": "Tokyo is one of ______ cities in the world.",
    "options": {
      "A": "more crowded",
      "B": "as crowded as",
      "C": "the most crowded",
      "D": "most crowded"
    },
    "key": "C",
    "explanation": "Dùng so sánh nhất với tính từ dài để chỉ thành phố đông đúc nhất."
  },
  {
    "id": 957,
    "question": "My sister usually goes to school by bike, but today she ______ a bus.",
    "options": {
      "A": "takes",
      "B": "is taking",
      "C": "took",
      "D": "has taken"
    },
    "key": "B",
    "explanation": "Dùng hiện tại tiếp diễn cho hành động tạm thời khác với thói quen hàng ngày."
  },
  {
    "id": 958,
    "question": "My father promised ______ me with my project this evening.",
    "options": {
      "A": "helping",
      "B": "to help",
      "C": "help",
      "D": "helped"
    },
    "key": "B",
    "explanation": "Sau động từ \"promise\", chúng ta sử dụng động từ ở dạng to-V nguyên mẫu."
  },
  {
    "id": 959,
    "question": "Students ______ wear uniforms according to school rules.",
    "options": {
      "A": "mightn't",
      "B": "might",
      "C": "mustn't",
      "D": "must"
    },
    "key": "D",
    "explanation": "Sử dụng \"must\" để diễn tả quy định bắt buộc của nhà trường."
  },
  {
    "id": 960,
    "question": "She can't talk with tourists because she doesn't speak French. She wishes she ______ French.",
    "options": {
      "A": "knows",
      "B": "knew",
      "C": "has known",
      "D": "will know"
    },
    "key": "B",
    "explanation": "Câu ước cho điều không có thật ở hiện tại lùi động từ về quá khứ đơn."
  },
  {
    "id": 961,
    "question": "The lights suddenly ______ during the storm, so we had to use candles.",
    "options": {
      "A": "got by",
      "B": "take off",
      "C": "went out",
      "D": "put away"
    },
    "key": "C",
    "explanation": "Cụm động từ \"went out\" được dùng khi đèn hoặc lửa bị tắt đi."
  },
  {
    "id": 962,
    "question": "______ Eiffel Tower is one of the most famous landmarks in the world.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Sử dụng mạo từ \"the\" trước tên các công trình kiến trúc nổi tiếng thế giới."
  },
  {
    "id": 963,
    "question": "A pair of gloves ______ on the table in the kitchen.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "were",
      "D": "have been"
    },
    "key": "A",
    "explanation": "Chủ ngữ là \"A pair of\" nên động từ được chia ở ngôi số ít."
  },
  {
    "id": 964,
    "question": "She studied very hard ______ she wanted to get a scholarship to Oxford University.",
    "options": {
      "A": "but",
      "B": "however",
      "C": "because",
      "D": "although"
    },
    "key": "B",
    "explanation": "Liên từ \"because\" được dùng để giải thích lý do cho hành động học tập."
  },
  {
    "id": 965,
    "question": "My father usually ______ a short rest after lunch.",
    "options": {
      "A": "does",
      "B": "takes",
      "C": "gives",
      "D": "makes"
    },
    "key": "B",
    "explanation": "Cụm từ cố định \"take a rest\" có nghĩa là nghỉ ngơi một chút."
  },
  {
    "id": 966,
    "question": "Many teenagers try to reduce plastic waste by choosing eco-friendly ____..",
    "options": {
      "A": "schedules",
      "B": "programs",
      "C": "packaging",
      "D": "itinerary"
    },
    "key": "C",
    "explanation": "Từ \"packaging\" chỉ các loại bao bì thân thiện với môi trường để giảm rác thải."
  },
  {
    "id": 967,
    "question": "If you study harder, you ______ better results.",
    "options": {
      "A": "got",
      "B": "will get",
      "C": "getting",
      "D": "had got"
    },
    "key": "B",
    "explanation": "Mệnh đề chính của câu điều kiện loại 1 chia ở thì tương lai đơn."
  },
  {
    "id": 968,
    "question": "They adopted a ______ puppy from the rescue center last weekend.",
    "options": {
      "A": "brown tiny lovely",
      "B": "lovely tiny brown",
      "C": "tiny lovely brown",
      "D": "tiny brown lovely"
    },
    "key": "B",
    "explanation": "Trật tự tính từ: ý kiến (lovely), kích thước (tiny) và màu sắc (brown)."
  },
  {
    "id": 969,
    "question": "My sister sings ______ than I do.",
    "options": {
      "A": "best",
      "B": "the best",
      "C": "better",
      "D": "well"
    },
    "key": "C",
    "explanation": "Dùng \"better\" trong so sánh hơn giữa hai người chị và tôi."
  },
  {
    "id": 970,
    "question": "I ______ this movie three times, so I don't want to watch it again.",
    "options": {
      "A": "watch",
      "B": "watched",
      "C": "am watching",
      "D": "have watched"
    },
    "key": "D",
    "explanation": "Thì hiện tại hoàn thành diễn tả trải nghiệm đã xem phim nhiều lần."
  },
  {
    "id": 971,
    "question": "They decided ______ to the countryside for the weekend.",
    "options": {
      "A": "to go",
      "B": "went",
      "C": "going",
      "D": "have gone"
    },
    "key": "A",
    "explanation": "Động từ \"decide\" luôn đi kèm với dạng nguyên mẫu có to (to V)."
  },
  {
    "id": 972,
    "question": "I'm not sure, but she ______ be at the library now.",
    "options": {
      "A": "could",
      "B": "might",
      "C": "should",
      "D": "must"
    },
    "key": "B",
    "explanation": "Dùng \"might\" để nói về khả năng có thể xảy ra nhưng không chắc chắn."
  },
  {
    "id": 973,
    "question": "I don't have enough money to buy that phone. I wish I ______ more money.",
    "options": {
      "A": "had",
      "B": "will have",
      "C": "am having",
      "D": "have"
    },
    "key": "A",
    "explanation": "Câu ước cho điều không có ở hiện tại dùng thì quá khứ đơn (had)."
  },
  {
    "id": 974,
    "question": "You should ______ this word in the dictionary if you don't understand it.",
    "options": {
      "A": "look for",
      "B": "look up",
      "C": "look after",
      "D": "look over"
    },
    "key": "B",
    "explanation": "Cụm động từ \"look up\" có nghĩa là tra cứu thông tin hoặc từ vựng."
  },
  {
    "id": 975,
    "question": "He is ______ honest man who always tells the truth.",
    "options": {
      "A": "a",
      "B": "the",
      "C": "an",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Dùng mạo từ \"an\" vì từ \"honest\" bắt đầu bằng một âm nguyên âm câm."
  },
  {
    "id": 976,
    "question": "Neither my friends nor my teacher ______ happy with the project.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "were",
      "D": "be"
    },
    "key": "A",
    "explanation": "Động từ chia theo chủ ngữ gần nhất là số ít \"my teacher\"."
  },
  {
    "id": 977,
    "question": "I wanted to join the trip, ______ I didn't have enough money.",
    "options": {
      "A": "although",
      "B": "because",
      "C": "but",
      "D": "so"
    },
    "key": "C",
    "explanation": "Liên từ \"but\" diễn tả sự trái ngược giữa mong muốn và thực tế."
  },
  {
    "id": 978,
    "question": "We need to ______ a decision soon because the deadline is tomorrow.",
    "options": {
      "A": "get",
      "B": "do",
      "C": "take",
      "D": "make"
    },
    "key": "D",
    "explanation": "Cụm từ cố định \"make a decision\" có nghĩa là đưa ra quyết định."
  },
  {
    "id": 979,
    "question": "The scientist made an important ______ about climate change.",
    "options": {
      "A": "invitation",
      "B": "discovery",
      "C": "decoration",
      "D": "direction"
    },
    "key": "B",
    "explanation": "Từ \"discovery\" mang nghĩa là một khám phá hoặc phát hiện quan trọng."
  },
  {
    "id": 980,
    "question": "If she ______ early, she won't miss the bus.",
    "options": {
      "A": "left",
      "B": "didn't leave",
      "C": "leaves",
      "D": "was leaving"
    },
    "key": "C",
    "explanation": "Thì hiện tại đơn được dùng trong mệnh đề If của câu điều kiện loại 1."
  },
  {
    "id": 981,
    "question": "My aunt lives in a ______ house near the riverbank.",
    "options": {
      "A": "wooden charming small",
      "B": "small charming wooden",
      "C": "charming small wooden",
      "D": "small wooden charming"
    },
    "key": "C",
    "explanation": "Trật tự tính từ: ý kiến (charming), kích thước (small) và chất liệu (wooden)."
  },
  {
    "id": 982,
    "question": "Today's weather is ______ than yesterday's.",
    "options": {
      "A": "as cold",
      "B": "the coldest",
      "C": "colder",
      "D": "the colder"
    },
    "key": "C",
    "explanation": "Sử dụng hình thức so sánh hơn \"colder\" của tính từ ngắn \"cold\"."
  },
  {
    "id": 983,
    "question": "When the power went out, we ______ dinner.",
    "options": {
      "A": "are cooking",
      "B": "were cooking",
      "C": "have cooked",
      "D": "cook"
    },
    "key": "B",
    "explanation": "Thì quá khứ tiếp diễn dùng để chỉ hành động đang diễn ra lúc mất điện."
  },
  {
    "id": 984,
    "question": "I'm looking forward to ______ you again soon.",
    "options": {
      "A": "see",
      "B": "to see",
      "C": "seen",
      "D": "seeing"
    },
    "key": "D",
    "explanation": "Cấu trúc \"look forward to\" luôn đi kèm với động từ thêm -ing."
  },
  {
    "id": 985,
    "question": "This sign says you ______ park here. It's a no-parking area.",
    "options": {
      "A": "can",
      "B": "mustn't",
      "C": "shouldn't",
      "D": "may"
    },
    "key": "B",
    "explanation": "Dùng \"mustn't\" để chỉ một sự cấm đoán tuyệt đối theo biển báo."
  },
  {
    "id": 986,
    "question": "They live far from school, so they wake up early every day. They wish they ______ closer.",
    "options": {
      "A": "live",
      "B": "lived",
      "C": "will live",
      "D": "are living"
    },
    "key": "B",
    "explanation": "Câu ước cho điều trái ngược với hiện tại dùng thì quá khứ đơn."
  },
  {
    "id": 987,
    "question": "My sister ______ her little brother when my parents are away.",
    "options": {
      "A": "looks after",
      "B": "looks at",
      "C": "looks around",
      "D": "looks into"
    },
    "key": "A",
    "explanation": "Cụm động từ \"looks after\" mang ý nghĩa chăm sóc một ai đó."
  },
  {
    "id": 988,
    "question": "We visited ______ museum that opened last month.",
    "options": {
      "A": "the",
      "B": "a",
      "C": "an",
      "D": "Ø"
    },
    "key": "A",
    "explanation": "Dùng mạo từ \"the\" cho bảo tàng cụ thể đã được xác định ở vế sau."
  },
  {
    "id": 989,
    "question": "Each of the boys ______ to wear a uniform.",
    "options": {
      "A": "have",
      "B": "have had",
      "C": "are having",
      "D": "has"
    },
    "key": "D",
    "explanation": "Cấu trúc \"Each of\" đi với danh từ số nhiều nhưng động từ chia số ít."
  },
  {
    "id": 990,
    "question": "______ he was sick, he still went to school.",
    "options": {
      "A": "Although",
      "B": "Because",
      "C": "So",
      "D": "Therefore"
    },
    "key": "A",
    "explanation": "Liên từ \"Although\" nối hai vế câu có sự tương phản về nội dung."
  },
  {
    "id": 991,
    "question": "You should ______ attention to the teacher during the lesson.",
    "options": {
      "A": "make",
      "B": "give",
      "C": "pay",
      "D": "do"
    },
    "key": "C",
    "explanation": "Cụm từ cố định \"pay attention\" có nghĩa là tập trung chú ý vào giáo viên."
  },
  {
    "id": 992,
    "question": "Tom worked very hard to ______ his dream.",
    "options": {
      "A": "destroy",
      "B": "forget",
      "C": "reduce",
      "D": "achieve"
    },
    "key": "D",
    "explanation": "Động từ \"achieve\" có nghĩa là đạt được mục tiêu hoặc ước mơ của mình."
  },
  {
    "id": 993,
    "question": "If we ______ enough money, we will buy new equipment.",
    "options": {
      "A": "will have",
      "B": "have",
      "C": "had",
      "D": "were having"
    },
    "key": "B",
    "explanation": "Dùng hiện tại đơn trong mệnh đề If của câu điều kiện loại 1."
  },
  {
    "id": 994,
    "question": "She bought a ______ handbag at the weekend market.",
    "options": {
      "A": "Italian red small",
      "B": "red small Italian",
      "C": "small red Italian",
      "D": "Italian small red"
    },
    "key": "C",
    "explanation": "Sắp xếp tính từ: kích thước (small), màu sắc (red) và nguồn gốc (Italian)."
  },
  {
    "id": 995,
    "question": "A smartphone is usually ______ than a basic mobile phone.",
    "options": {
      "A": "the most expensive",
      "B": "as expensive",
      "C": "more expensive",
      "D": "most expensive"
    },
    "key": "C",
    "explanation": "Dùng so sánh hơn với tính từ dài \"more expensive\" khi có từ \"than\"."
  },
  {
    "id": 996,
    "question": "Don't worry, I ______ you with your homework later.",
    "options": {
      "A": "help",
      "B": "am helping",
      "C": "helped",
      "D": "will help"
    },
    "key": "D",
    "explanation": "Thì tương lai đơn diễn tả một lời hứa sẽ giúp đỡ ai đó."
  },
  {
    "id": 997,
    "question": "The teacher encouraged us ______ part in the speaking contest.",
    "options": {
      "A": "taking",
      "B": "to take",
      "C": "take",
      "D": "taken"
    },
    "key": "B",
    "explanation": "Cấu trúc \"encourage someone to do something\" để khuyến khích ai làm gì."
  },
  {
    "id": 998,
    "question": "You look tired. You ______ take a short break.",
    "options": {
      "A": "mustn't",
      "B": "ought",
      "C": "should",
      "D": "may not"
    },
    "key": "C",
    "explanation": "Dùng \"should\" để đưa ra lời khuyên phù hợp với tình trạng mệt mỏi."
  },
  {
    "id": 999,
    "question": "She doesn't have time to join the picnic. She wishes she ______ more free time.",
    "options": {
      "A": "has",
      "B": "had",
      "C": "will have",
      "D": "wouldly have"
    },
    "key": "B",
    "explanation": "Câu ước cho điều không có thật hiện tại dùng thì quá khứ đơn (had)."
  },
  {
    "id": 1000,
    "question": "The students need to ______ their homework before the deadline.",
    "options": {
      "A": "hand out",
      "B": "hand in",
      "C": "hand up",
      "D": "hand over"
    },
    "key": "B",
    "explanation": "Cụm động từ \"hand in\" có nghĩa là nộp bài hoặc nộp báo cáo."
  },
  {
    "id": 1001,
    "question": "I usually drink ______ coffee before going to school.",
    "options": {
      "A": "the",
      "B": "a",
      "C": "an",
      "D": "Ø"
    },
    "key": "D",
    "explanation": "Không dùng mạo từ trước danh từ không đếm được mang nghĩa chung chung."
  },
  {
    "id": 1002,
    "question": "Either you or your sisters ______ to complete the form.",
    "options": {
      "A": "have",
      "B": "are",
      "C": "is",
      "D": "has"
    },
    "key": "A",
    "explanation": "Động từ chia theo chủ ngữ gần nhất là số nhiều \"your sisters\"."
  },
  {
    "id": 1003,
    "question": "She didn't join the competition ______ she didn't feel confident.",
    "options": {
      "A": "although",
      "B": "because",
      "C": "so",
      "D": "therefore"
    },
    "key": "B",
    "explanation": "Sử dụng liên từ \"because\" để giải thích lý do không tham gia cuộc thi."
  },
  {
    "id": 1004,
    "question": "You need to ______ exercise regularly to stay healthy.",
    "options": {
      "A": "take",
      "B": "make",
      "C": "do",
      "D": "give"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"take exercise\" có nghĩa là tập luyện thể dục."
  },
  {
    "id": 1005,
    "question": "She didn't buy the dress because it didn't ______ her style.",
    "options": {
      "A": "match",
      "B": "confuse",
      "C": "imagine",
      "D": "suit"
    },
    "key": "D",
    "explanation": "Động từ \"suit\" có nghĩa là phù hợp với phong cách hoặc sở thích."
  },
  {
    "id": 1006,
    "question": "If they don't hurry, they ______ the train.",
    "options": {
      "A": "missed",
      "B": "misses",
      "C": "will be missing",
      "D": "will miss"
    },
    "key": "D",
    "explanation": "Mệnh đề chính của câu điều kiện loại 1 chia ở thì tương lai đơn."
  },
  {
    "id": 1007,
    "question": "They stayed in a ______ hotel during their holiday in France.",
    "options": {
      "A": "modern luxurious tall",
      "B": "luxurious tall modern",
      "C": "tall modern luxurious",
      "D": "tall luxurious modern"
    },
    "key": "D",
    "explanation": "Trật tự tính từ: kích thước (tall), chất lượng (luxurious) và kiểu dáng (modern)."
  },
  {
    "id": 1008,
    "question": "That was ______ movie I have ever watched.",
    "options": {
      "A": "more exciting",
      "B": "exciting",
      "C": "as exciting as",
      "D": "the most exciting"
    },
    "key": "D",
    "explanation": "Cấu trúc so sánh nhất được dùng khi có dấu hiệu \"I have ever watched\"."
  },
  {
    "id": 1009,
    "question": "I think it ______ tomorrow because the sky is very cloudy.",
    "options": {
      "A": "rains",
      "B": "rained",
      "C": "is raining",
      "D": "is going to rain"
    },
    "key": "D",
    "explanation": "Dùng \"is going to\" để đưa ra dự đoán dựa trên bằng chứng hiện tại."
  },
  {
    "id": 1010,
    "question": "He stopped ______ junk food because he wanted to lose weight.",
    "options": {
      "A": "eat",
      "B": "eating",
      "C": "to eat",
      "D": "eaten"
    },
    "key": "B",
    "explanation": "Cấu trúc \"stop + V-ing\" dùng để nói về việc từ bỏ thói quen ăn đồ vặt."
  },
  {
    "id": 1011,
    "question": "He practices a lot, so he ______ play the guitar very well.",
    "options": {
      "A": "can't",
      "B": "should",
      "C": "can",
      "D": "shouldn't"
    },
    "key": "C",
    "explanation": "Động từ khuyết thiếu \"can\" diễn tả năng lực làm việc gì của một người."
  },
  {
    "id": 1012,
    "question": "He's not good at English speaking. He wishes he ______ more fluent.",
    "options": {
      "A": "is",
      "B": "were",
      "C": "will be",
      "D": "be"
    },
    "key": "B",
    "explanation": "Dùng \"were\" sau câu ước để diễn tả điều mong muốn không thật hiện tại."
  },
  {
    "id": 1013,
    "question": "He tried to ______ smoking because of health problems.",
    "options": {
      "A": "give up",
      "B": "give away",
      "C": "give off",
      "D": "give out"
    },
    "key": "A",
    "explanation": "Cụm động từ \"give up\" có nghĩa là bỏ hẳn một thói quen xấu nào đó."
  },
  {
    "id": 1014,
    "question": "Do you have ______ umbrella? It's raining outside.",
    "options": {
      "A": "the",
      "B": "a",
      "C": "an",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Mạo từ \"an\" được dùng trước danh từ đếm được bắt đầu bằng nguyên âm."
  },
  {
    "id": 1015,
    "question": "Ten kilometers ______ too far to walk.",
    "options": {
      "A": "have",
      "B": "are",
      "C": "is",
      "D": "has been"
    },
    "key": "C",
    "explanation": "Danh từ chỉ đơn vị đo khoảng cách luôn đi kèm với động từ số ít."
  },
  {
    "id": 1016,
    "question": "We must hurry ______ we will miss the bus.",
    "options": {
      "A": "or",
      "B": "because",
      "C": "so",
      "D": "but"
    },
    "key": "A",
    "explanation": "Dùng liên từ \"or\" với nghĩa là nếu không thì (cảnh báo kết quả)."
  },
  {
    "id": 1017,
    "question": "Her parents always ______ a hand when she faces difficulties.",
    "options": {
      "A": "pay",
      "B": "give",
      "C": "make",
      "D": "take"
    },
    "key": "B",
    "explanation": "Cụm từ \"give a hand\" có nghĩa là giúp đỡ ai đó vượt qua khó khăn."
  },
  {
    "id": 1018,
    "question": "The new policy aims to ______ pollution levels.",
    "options": {
      "A": "repeat",
      "B": "increase",
      "C": "reduce",
      "D": "collect"
    },
    "key": "C",
    "explanation": "Động từ \"reduce\" có nghĩa là cắt giảm bớt mức độ ô nhiễm môi trường."
  },
  {
    "id": 1019,
    "question": "If the weather is good, we ______ a barbecue this weekend.",
    "options": {
      "A": "have",
      "B": "will have",
      "C": "had",
      "D": "were having"
    },
    "key": "B",
    "explanation": "Câu điều kiện loại 1 dùng \"will\" ở mệnh đề chính chỉ khả năng xảy ra."
  },
  {
    "id": 1020,
    "question": "We stayed overnight in a ______ cabin deep in the forest.",
    "options": {
      "A": "cosy wooden small",
      "B": "small cosy wooden",
      "C": "wooden cosy small",
      "D": "cosy small wooden"
    },
    "key": "B",
    "explanation": "Trật tự tính từ đúng: kích thước (small), ý kiến (cosy) và chất liệu (wooden)."
  },
  {
    "id": 1021,
    "question": "This route is ______ way to get to the airport.",
    "options": {
      "A": "the quicker",
      "B": "quicker",
      "C": "the quickest",
      "D": "as quick"
    },
    "key": "C",
    "explanation": "Sử dụng cấu trúc so sánh nhất để chỉ con đường nhanh nhất."
  },
  {
    "id": 1022,
    "question": "She ______ in this company since 2020.",
    "options": {
      "A": "worked",
      "B": "is working",
      "C": "has worked",
      "D": "works"
    },
    "key": "C",
    "explanation": "Dùng thì hiện tại hoàn thành khi câu có từ nhận biết là \"since\"."
  },
  {
    "id": 1023,
    "question": "We suggested ______ a taxi because it was getting late.",
    "options": {
      "A": "take",
      "B": "taking",
      "C": "to take",
      "D": "taken"
    },
    "key": "B",
    "explanation": "Sau động từ \"suggest\", chúng ta luôn sử dụng động từ ở dạng thêm -ing."
  },
  {
    "id": 1024,
    "question": "We ______ finish the report today; the deadline is tomorrow morning.",
    "options": {
      "A": "must",
      "B": "may",
      "C": "could",
      "D": "might"
    },
    "key": "A",
    "explanation": "Sử dụng \"must\" để diễn tả một sự bắt buộc cần thiết phải thực hiện."
  },
  {
    "id": 1025,
    "question": "I can't cook well to help my mom. I wish I ______ how to cook.",
    "options": {
      "A": "know",
      "B": "knew",
      "C": "have known",
      "D": "knowing"
    },
    "key": "B",
    "explanation": "Câu ước ở hiện tại lùi động từ về thì quá khứ đơn (knew)."
  },
  {
    "id": 1026,
    "question": "The teacher asked us to ______ the form carefully before filling it in.",
    "options": {
      "A": "go through",
      "B": "go over",
      "C": "go off",
      "D": "go on"
    },
    "key": "A",
    "explanation": "Cụm động từ \"go through\" mang ý nghĩa xem xét hoặc kiểm tra kỹ lưỡng."
  },
  {
    "id": 1027,
    "question": "My brother wants to become ______ engineer in the future.",
    "options": {
      "A": "the",
      "B": "a",
      "C": "an",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Mạo từ \"an\" đứng trước danh từ bắt đầu bằng nguyên âm khi nói nghề nghiệp."
  },
  {
    "id": 1028,
    "question": "The news on TV ______ quite shocking.",
    "options": {
      "A": "be",
      "B": "are",
      "C": "is",
      "D": "has"
    },
    "key": "C",
    "explanation": "Danh từ \"news\" (tin tức) luôn đi kèm với động từ tobe ở dạng số ít."
  },
  {
    "id": 1029,
    "question": "He looked tired, ______ he had worked all night.",
    "options": {
      "A": "although",
      "B": "so",
      "C": "and",
      "D": "because"
    },
    "key": "D",
    "explanation": "Dùng liên từ \"because\" để giải thích nguyên nhân gây ra sự mệt mỏi."
  },
  {
    "id": 1030,
    "question": "My sister wants to ______ a course in graphic design.",
    "options": {
      "A": "take",
      "B": "make",
      "C": "get",
      "D": "do"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"take a course\" có nghĩa là đăng ký học một khóa học."
  },
  {
    "id": 1031,
    "question": "The campaign aims to raise public ______ about water conservation.",
    "options": {
      "A": "attention",
      "B": "discussion",
      "C": "awareness",
      "D": "permission"
    },
    "key": "C",
    "explanation": "Cụm từ \"raise awareness\" có nghĩa là nâng cao nhận thức của cộng đồng."
  },
  {
    "id": 1032,
    "question": "If we leave now, we ______ the beginning of the movie.",
    "options": {
      "A": "missed",
      "B": "were missing",
      "C": "won't miss",
      "D": "haven't missed"
    },
    "key": "C",
    "explanation": "Dùng \"won't miss\" ở mệnh đề chính của câu điều kiện loại 1."
  },
  {
    "id": 1033,
    "question": "She bought a ______ picture at the art contest.",
    "options": {
      "A": "nice French big",
      "B": "French nice big",
      "C": "nice big French",
      "D": "big nice French"
    },
    "key": "C",
    "explanation": "Trật tự tính từ: ý kiến (nice), kích thước (big) và nguồn gốc (French)."
  },
  {
    "id": 1034,
    "question": "This café is ______ one in the area.",
    "options": {
      "A": "more popular",
      "B": "as popular as",
      "C": "the most popular",
      "D": "most popular"
    },
    "key": "C",
    "explanation": "Sử dụng cấu trúc so sánh nhất để chỉ sự vật nổi tiếng nhất vùng."
  },
  {
    "id": 1035,
    "question": "My grandparents ______ in the countryside and love the peaceful life.",
    "options": {
      "A": "are living",
      "B": "live",
      "C": "lived",
      "D": "have lived"
    },
    "key": "B",
    "explanation": "Thì hiện tại đơn diễn tả một trạng thái sống lâu dài và ổn định."
  },
  {
    "id": 1036,
    "question": "The doctor told him ______ more often.",
    "options": {
      "A": "exercised",
      "B": "exercising",
      "C": "exercise",
      "D": "to exercise"
    },
    "key": "D",
    "explanation": "Cấu trúc \"tell someone to do something\" để truyền đạt một lời dặn dò."
  },
  {
    "id": 1037,
    "question": "You ______ try the new restaurant. The food is amazing.",
    "options": {
      "A": "mustn't",
      "B": "might",
      "C": "shouldn't",
      "D": "should"
    },
    "key": "D",
    "explanation": "Sử dụng \"should\" để đưa ra lời gợi ý hoặc lời khuyên hữu ích."
  },
  {
    "id": 1038,
    "question": "She lives far from her family and feels homesick. She wishes she ______ with them.",
    "options": {
      "A": "lives",
      "B": "lived",
      "C": "has lived",
      "D": "will live"
    },
    "key": "B",
    "explanation": "Câu ước ở hiện tại dùng thì quá khứ đơn để chỉ điều không thật hiện tại."
  },
  {
    "id": 1039,
    "question": "After hours of talking, they finally ______ a solution to the problem.",
    "options": {
      "A": "took care of",
      "B": "put up with",
      "C": "got along with",
      "D": "came up with"
    },
    "key": "D",
    "explanation": "Cụm động từ \"came up with\" có nghĩa là nảy ra hoặc nghĩ ra ý tưởng."
  },
  {
    "id": 1040,
    "question": "We had ______ wonderful time at the festival.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"have a wonderful time\" có nghĩa là tận hưởng thời gian vui vẻ."
  },
  {
    "id": 1041,
    "question": "The police ______ for the missing child.",
    "options": {
      "A": "has searched",
      "B": "searches",
      " Milford": "are searching",
      "D": "is searching"
    },
    "key": "C",
    "explanation": "Danh từ \"The police\" luôn được coi là danh từ tập hợp đi với số nhiều."
  },
  {
    "id": 1042,
    "question": "He was late for the meeting ______ his car broke down.",
    "options": {
      "A": "although",
      "B": "so",
      "C": "but",
      "D": "because"
    },
    "key": "D",
    "explanation": "Liên từ \"because\" giải thích lý do cụ thể khiến anh ấy bị trễ họp."
  },
  {
    "id": 1043,
    "question": "My aim is to ______ progress in speaking English.",
    "options": {
      "A": "do",
      "B": "make",
      "C": "take",
      "D": "get"
    },
    "key": "B",
    "explanation": "Cụm từ \"make progress\" có nghĩa là đạt được sự tiến bộ trong học tập."
  },
  {
    "id": 1044,
    "question": "Solar energy is a renewable ______ that comes from the Sun.",
    "options": {
      "A": "opinion",
      "B": "direction",
      "C": "source",
      "D": "signal"
    },
    "key": "C",
    "explanation": "Cụm từ \"renewable source\" chỉ nguồn năng lượng có thể tái tạo được."
  },
  {
    "id": 1045,
    "question": "If the company offers a discount, more customers ______.",
    "options": {
      "A": "will come",
      "B": "have come",
      "C": "came",
      "D": "were coming"
    },
    "key": "A",
    "explanation": "Mệnh đề chính của câu điều kiện loại 1 diễn tả kết quả trong tương lai."
  },
  {
    "id": 1046,
    "question": "They visited a ______ castle during their trip to Germany.",
    "options": {
      "A": "large famous German",
      "B": "large German famous",
      "C": "famous large German",
      "D": "famous German large"
    },
    "key": "C",
    "explanation": "Trật tự tính từ: ý kiến (famous), kích thước (large) và nguồn gốc (German)."
  },
  {
    "id": 1047,
    "question": "Linda is ______ at Math than English.",
    "options": {
      "A": "the better",
      "B": "the best",
      "C": "better",
      "D": "as good as"
    },
    "key": "C",
    "explanation": "Dùng dạng so sánh hơn đặc biệt \"better\" của tính từ \"good\"."
  },
  {
    "id": 1048,
    "question": "I ______ my best friend yesterday after months of being busy.",
    "options": {
      "A": "have seen",
      "B": "see",
      "C": "saw",
      "D": "were seeing"
    },
    "key": "C",
    "explanation": "Thì quá khứ đơn dùng cho hành động đã kết thúc trọn vẹn trong quá khứ."
  },
  {
    "id": 1049,
    "question": "She agreed ______ part in the charity event.",
    "options": {
      "A": "to taking",
      "B": "take",
      "C": "to take",
      "D": "taking"
    },
    "key": "C",
    "explanation": "Động từ \"agree\" luôn đi kèm với dạng nguyên mẫu có to (to V)."
  },
  {
    "id": 1050,
    "question": "It's optional; you ______ join the workshop if you want.",
    "options": {
      "A": "must",
      "B": "mustn't",
      "C": "can't",
      "D": "can"
    },
    "key": "D",
    "explanation": "Sử dụng \"can\" để diễn tả sự cho phép hoặc khả năng lựa chọn tự do."
  },
  {
    "id": 1051,
    "question": "He isn't confident when speaking English. He wishes he ______ more confident.",
    "options": {
      "A": "is",
      "B": "has been",
      "C": "were",
      "D": "will be"
    },
    "key": "C",
    "explanation": "Câu ước cho điều không có thật hiện tại dùng \"were\" cho tất cả các ngôi."
  },
  {
    "id": 1052,
    "question": "The students ______ the bus in front of the school.",
    "options": {
      "A": "get up",
      "B": "get off",
      "C": "take in",
      "D": "take over"
    },
    "key": "B",
    "explanation": "Cụm động từ \"get off\" có nghĩa là bước xuống khỏi xe buýt hoặc tàu."
  },
  {
    "id": 1053,
    "question": "My neighbour plays ______ piano very well.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "C",
    "explanation": "Dùng mạo từ \"the\" đứng trước tên các loại nhạc cụ khi chơi chúng."
  },
  {
    "id": 1054,
    "question": "Three hours ______ enough to finish the test.",
    "options": {
      "A": "isn't",
      "B": "aren't",
      "C": "weren't",
      "D": "haven't been"
    },
    "key": "A",
    "explanation": "Khoảng thời gian (Three hours) luôn được coi là một đơn vị số ít."
  },
  {
    "id": 1055,
    "question": "She overslept this morning, ______ she went to class late.",
    "options": {
      "A": "although",
      "B": "because",
      "C": "but",
      "D": "so"
    },
    "key": "D",
    "explanation": "Liên từ \"so\" dùng để chỉ kết quả dẫn đến từ việc ngủ quên."
  },
  {
    "id": 1056,
    "question": "They hope to ______ experience through part-time jobs.",
    "options": {
      "A": "make",
      "B": "gain",
      "C": "give",
      "D": "put"
    },
    "key": "B",
    "explanation": "Động từ \"gain\" thường đi với từ \"experience\" để chỉ việc tích lũy kinh nghiệm."
  },
  {
    "id": 1057,
    "question": "It is important to ______ all options before deciding.",
    "options": {
      "A": "cancel",
      "B": "separate",
      "C": "consider",
      "D": "deliver"
    },
    "key": "C",
    "explanation": "Động từ \"consider\" có nghĩa là xem xét hoặc cân nhắc kỹ mọi lựa chọn."
  },
  {
    "id": 1058,
    "question": "If you practice speaking every day, your English ______ quickly.",
    "options": {
      "A": "improved",
      "B": "has improved",
      "C": "will improve",
      "D": "is improving"
    },
    "key": "C",
    "explanation": "Mệnh đề chính của câu điều kiện loại 1 dùng thì tương lai đơn (will improve)."
  },
  {
    "id": 1059,
    "question": "He bought a ______ lamp for his study desk.",
    "options": {
      "A": "small nice Japanese",
      "B": "nice Japanese small",
      "C": "Japanese small nice",
      "D": "nice small Japanese"
    },
    "key": "D",
    "explanation": "Trật tự tính từ đúng: ý kiến (nice), kích thước (small) và nguồn gốc (Japanese)."
  },
  {
    "id": 1060,
    "question": "He arrived ______ of all the participants.",
    "options": {
      "A": "the earlier",
      "B": "earlier",
      "C": "as early as",
      "D": "the earliest"
    },
    "key": "D",
    "explanation": "Sử dụng hình thức so sánh nhất để chỉ người đến sớm nhất trong nhóm."
  },
  {
    "id": 1061,
    "question": "They ______ their project presentation yet.",
    "options": {
      "A": "didn't finish",
      "B": "haven't finished",
      "C": "don't finish",
      "D": "aren't finishing"
    },
    "key": "B",
    "explanation": "Thì hiện tại hoàn thành đi kèm với từ nhận biết là \"yet\" ở cuối câu."
  },
  {
    "id": 1062,
    "question": "My daughter tries to avoid ______ much time on social media.",
    "options": {
      "A": "to listen",
      "B": "listened",
      "C": "listen",
      "D": "wasting"
    },
    "key": "D",
    "explanation": "Sau động từ \"avoid\", chúng ta luôn sử dụng động từ ở dạng thêm đuôi -ing."
  },
  {
    "id": 1063,
    "question": "Because of the fog, drivers ______ drive more carefully.",
    "options": {
      "A": "mustn't",
      "B": "should",
      "C": "might",
      "D": "can't"
    },
    "key": "B",
    "explanation": "Dùng \"should\" để đưa ra lời khuyên lái xe an toàn khi trời có sương mù."
  },
  {
    "id": 1064,
    "question": "I don't have a bike to go to school. I wish I ______ a bike.",
    "options": {
      "A": "have",
      "B": "had",
      "C": "will have",
      "D": "am having"
    },
    "key": "B",
    "explanation": "Câu ước ở hiện tại dùng thì quá khứ đơn để chỉ mong muốn trái thực tế."
  },
  {
    "id": 1065,
    "question": "Please ______ the volume so I can concentrate on my homework.",
    "options": {
      "A": "get down",
      "B": "get off",
      "C": "turn round",
      "D": "turn down"
    },
    "key": "D",
    "explanation": "Cụm động từ \"turn down\" có nghĩa là vặn nhỏ âm lượng của thiết bị."
  },
  {
    "id": 1066,
    "question": "I don't usually eat ______ meat because I'm vegetarian.",
    "options": {
      "A": "a",
      "B": "an",
      "C": "the",
      "D": "Ø"
    },
    "key": "D",
    "explanation": "Không dùng mạo từ đứng trước danh từ không đếm được chỉ thực phẩm nói chung."
  },
  {
    "id": 1067,
    "question": "500 dollars ______ enough to cover the cost of the course.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "were",
      "D": "have been"
    },
    "key": "A",
    "explanation": "Số tiền (500 dollars) được xem là một đơn vị và đi với động từ số ít."
  },
  {
    "id": 1068,
    "question": "I will buy this jacket ______ it's expensive.",
    "options": {
      "A": "because",
      "B": "so",
      "C": "although",
      "D": "therefore"
    },
    "key": "C",
    "explanation": "Sử dụng liên từ \"although\" để chỉ sự đối lập giữa giá cả và hành động mua."
  },
  {
    "id": 1069,
    "question": "She is trying to ______ weight by eating healthier food.",
    "options": {
      "A": "lose",
      "B": "get",
      "C": "take",
      "D": "make"
    },
    "key": "A",
    "explanation": "Cụm từ cố định \"lose weight\" có nghĩa là giảm trọng lượng cơ thể."
  },
  {
    "id": 1070,
    "question": "The school organized a charity event to ______ money.",
    "options": {
      "A": "hide",
      "B": "waste",
      "C": "express",
      "D": "raise"
    },
    "key": "D",
    "explanation": "Cụm từ \"raise money\" có nghĩa là gây quỹ hoặc quyên góp tiền từ thiện."
  }
];