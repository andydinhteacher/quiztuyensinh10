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
  }
];