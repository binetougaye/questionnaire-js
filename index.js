const questions = [
    {
      question:
        "A quel compositeur est consacré le film Amadeus?\n1.Beethoven\n2.Mozart",
      réponse: 2,
    },
    {
      question: "Quelle est la capitale de l'Autriche?\n1.Vienne\n2.Oslo",
      réponse: 1,
    },
    {
      question:
        "Quel organe est perturbé par les acouphènes?\n1.Les pieds\n2.La tete",
      réponse: 2,
    },
  ];
  for (let i = 0; i < questions.length; i++) {
    questions[i];
  }
  let question = prompt(questions[0].question);
  if (question == 2) {
    alert("Bonne réponse");
  } else {
    alert("Mauvaise réponse");
  }
  let question2 = prompt(questions[1].question);
  if (question2 == 1) {
    alert("Bonne réponse");
  } else {
    alert("Mauvaise réponse");
  }
  let question3 = prompt(questions[2].question);
  if (question3 == 2) {
    alert("Bonne réponse");
  } else {
    alert("Mauvaise réponse");
  }
  