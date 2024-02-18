    const quote_text = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const nextBtn = document.querySelector('.next');
    const getQuote = async () => {
        const res = await fetch("https://run.mocky.io/v3/60544171-eaef-4fab-bd81-64812c8d1639");
        const quotes = await res.json();
        const num = Math.floor(Math.random() * quotes.length);
        const item = quotes[num];
        const quote = `"${item.quote_text}"`;
        const authorName = item.author;
        quote_text.innerText = quote;
        author.innerText = authorName;
        
    }
    nextBtn.addEventListener('click', getQuote)
        getQuote()
    