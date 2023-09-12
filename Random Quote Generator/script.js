const quoteContainer = document.querySelector('.quote');
const newQuoteBtn = document.getElementById('new-quote-btn');

async function fetchRandomQuote() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
   
    if (!response.ok) {
      throw new Error('Unable to fetch a random quote');
    }

    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex].text;

    quoteContainer.innerHTML = `<p>${randomQuote}</p>`;
  } catch (error) {
    console.error('Error:', error);
    quoteContainer.textContent = 'Failed to fetch a random quote.';
  }
}


newQuoteBtn.addEventListener('click', fetchRandomQuote);

fetchRandomQuote();
