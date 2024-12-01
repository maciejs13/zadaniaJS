const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) => {

    if (removeSpecialChars) text = text.replace(/[^a-zA-Z0-9 ]/g, '')
    if (uppercase) text = text.toUpperCase()
    if (reverse) text = text.split('').reverse().join('')

    return text

  };
  
  const inputText = "Hello, World!"
  const options = { uppercase: true, reverse: false, removeSpecialChars: false }
  const processedText = processText(inputText, options)
  
  console.log(`Oryginalny tekst: "${inputText}"`)
  console.log(`Przetworzony tekst: "${processedText}"`)
  