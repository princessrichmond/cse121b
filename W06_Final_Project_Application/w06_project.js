    const quotesArray = [];
    
    const dropdown = document.getElementById("author-filter");

    const quote_text = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const nextBtn = document.querySelector('.next');

    function reset(){
        quote_text.innerText = "";
        author.innerText = "";
    }

    const getQuote = async () => {
        const res = await fetch("https://run.mocky.io/v3/ec02156a-a952-4866-8ab1-4f68b4491e6c");
        // const res = await fetch("https://run.mocky.io/v3/60544171-eaef-4fab-bd81-64812c8d1639");
        const quotes = await res.json();
        quotesArray.push(...quotes);
        const num = Math.floor(Math.random() * quotes.length);
        const item = quotes[num];
        const quote = `"${item.quote_text}"`;
        const authorName = item.author;
        quote_text.innerText = quote;
        author.innerText = authorName;

        populatedDropdown();
    }
        const populatedDropdown = () => {
            dropdown.innerHTML ="";
            let emptyoption = document.createElement("option");
            emptyoption.text = "Authors";
            emptyoption.disabled = true;
            emptyoption.selected = true;
            dropdown.add(emptyoption);
            const uniqueAuthors = [...new Set(quotesArray.map(quote => quote.author))];
            uniqueAuthors.forEach(authorName => {
                let option = document.createElement("option");
                option.text = authorName;
                dropdown.add(option);
            });
        }


       const filterAuthors = () => {
        // console.log("Filtering authors...");
        reset();
        let filter = dropdown.value;
        // let filter = document.getElementById("author-filter").addEventListener("change", filterAuthors);
        // console.log("Selected author:", filter);
        let filteredQuotes = quotesArray.filter(quote => quote.author === filter);
        // console.log("Filtered quotes:", filteredQuotes);

        if (filteredQuotes.length > 0){
            const num = Math.floor(Math.random() * filteredQuotes.length);
            const item = filteredQuotes[num];
            const quote = `"${item.quote_text}"`;
            const authorName = item.author;
            quote_text.innerText = quote;
            author.innerText = authorName;
        }
            else{
                quote_text.innerText = "No quote available";
                author.innerText = "Unknown author";
            }
        }
        dropdown.addEventListener("change", filterAuthors);
        
    nextBtn.addEventListener('click', getQuote)
        getQuote()


    
    
