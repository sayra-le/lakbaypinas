document.addEventListener("DOMContentLoaded", () => {
  
    let path = window.location.pathname.includes('luzon') ||
               window.location.pathname.includes('visayas') ||
               window.location.pathname.includes('mindanao')
               ? '../partials/footer.html'
               : 'partials/footer.html';
  
    fetch(path)
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      })
      .catch(err => {
        console.error("Failed to load footer:", err);
      });
  });
  
