const testResults = [
    { name: "Anna", score: 85 },
    { name: "John", score: 92 },
    { name: "Sarah", score: 78 },
    { name: "Michael", score: 95 },
    { name: "Emily", score: 88 },
  ];
  
  const analyzeResults = results => {
    const scores = results.map(({ score }) => score);
    const average = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
  
    console.log(`Średnia ocen: ${average}`);
    console.log(`Najwyższy wynik: ${maxScore}`);
    console.log(`Najniższy wynik: ${minScore}`);
  
    results.forEach(({ name, score }) => {
      console.log(`Student: ${name}, Wynik: ${score}`);
    });
  };
  
analyzeResults(testResults);
  