document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
  
    fetch('/search/index.json')
      .then(response => response.json())
      .then(data => {
        const fuse = new Fuse(data, {
          keys: ['title', 'summary', 'content', 'tags'],
          threshold: 0.3,
        });
  
        searchInput.addEventListener('input', () => {
          const query = searchInput.value.trim();
          searchResults.innerHTML = '';
  
          if (query) {
            const results = fuse.search(query);
  
            if (results.length === 0) {
              searchResults.innerHTML = '<p class="text-muted">No results found.</p>';
            } else {
              results.forEach(({ item }) => {
                const resultDiv = document.createElement('div');
                resultDiv.classList.add('mb-4', 'pb-3', 'border-bottom');
                resultDiv.innerHTML = `
                  <h5 class="mb-1">
                    <a href="${item.permalink}" class="text-decoration-none" style="color: rgba(73, 31, 83, 1);">${item.title}</a>
                  </h5>
                `;
                searchResults.appendChild(resultDiv);
              });
            }
          }
        });
      });
  });
  