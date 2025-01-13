document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  fetch('/search/index.json')
      .then(response => response.json())
      .then(data => {
          // Initialize Fuse.js with weighted keys and adjusted threshold
          const fuse = new Fuse(data, {
              keys: [
                  { name: 'title', weight: 0.5 },     // Highest priority
                  { name: 'permalink', weight: 0.3 }, // Second highest priority
                  { name: 'tags', weight: 0.1 },      // Lower priority
                  { name: 'summary', weight: 0.05 },  // Lesser priority
                  { name: 'content', weight: 0.05 }   // Lowest priority
              ],
              threshold: 0.6, // Broad search but not to include all possible matches
              useExtendedSearch: true, // Enable exact phrase matching
          });
          searchInput.addEventListener('input', () => {
              const query = searchInput.value.trim();
              searchResults.innerHTML = '';
              if (query) {
                  let results = fuse.search(query);
                  // console.log(results);
                  if (results.length === 0) {
                      searchResults.innerHTML = '<p class="text-muted">No results found.</p>';
                  } else {
                      // Sort results by field priority (manual sorting)
                      results = results.sort((a, b) => {
                          const aPriority = getPriority(a.item);
                          const bPriority = getPriority(b.item);
                          return aPriority - bPriority;
                      });
                      // Display all results
                      results.forEach(({ item }) => {
                          const resultDiv = document.createElement('div');
                          resultDiv.classList.add('mb-4', 'pb-3', 'border-bottom');
                          resultDiv.innerHTML = `
                          <span class="mb-1">
                            <a href="${item.permalink}">${item.title}</a>
                          </span>
                        `;
                          searchResults.appendChild(resultDiv);
                      });
                  }
                } else {
                  searchResults.innerHTML = '<p class="text-muted">Start typing to see results ...</p>';
              }
          });
          /**
           * Function to calculate priority based on field presence.
           * Higher priority = Lower numerical value.
           */
          function getPriority(item) {
              if (item.permalink && item.permalink.includes(searchInput.value)) return 1;
              if (item.title && item.title.includes(searchInput.value)) return 2;
              if (item.tags && item.tags.some(tag => tag.includes(searchInput.value))) return 3;
              if (item.summary && item.summary.includes(searchInput.value)) return 4;
              if (item.content && item.content.includes(searchInput.value)) return 5;
              return 6; // Lowest priority if no match
          }
      })
      .catch(error => {
          console.error('Error fetching search index:', error);
          searchResults.innerHTML = '<p class="text-danger">Failed to load search results. Please try again later.</p>';
      });
});
