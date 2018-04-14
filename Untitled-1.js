

function showData(data) {
  console.log('ajax success handler called');
  const objects = data;
  for (let i = 0; i < objects.length; i++) {
    const currentObject = objects[i];
    for (const key of currentObject) {
      const p = document.createElement('p');
      const a = document.createElement('p');
      if (key.includes('Name') || key.includes('Price') || key.includes('Photo')) {
        p.innerHTML = currentObject[key];
        p.className = 'paragraph';
        article3.appendChild(p);
      } else {
        p.innerHTML = `${key}:${currentObject[key]}`;
        // p.className = 'paragraph';
        article3.appendChild(p);
        console.log(article3);
      }
    }
  }
}

$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/test.json',
  dataType: 'json',
  // async: false,

  success: showData,
});
console
console