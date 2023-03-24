var textInURL = window.location.search;
console.log(textInURL);

var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');
console.log("id is" + id);

var client = contentful.createClient({
    space: 'r9wenzghd52n',
    accessToken: 'ha6K24v5CNGZod80qpSUSLnhUlOoswD5ObDefKQqUP0',
  });

client.getEntry(id).then(function (entry) {
    // logs the entry metadata
    console.log(entry.sys);
    // logs the field with ID title
    console.log(entry.fields.name);
    var placeToPutContent = document.getElementById('div-to-place-content');
    var name = document.createElement('h1');
    name.innerHTML = entry.fields.name;
    placeToPutContent.append(name);

    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    placeToPutContent.append(description);

    var characteristics = document.createElement('p');
    characteristics.innerHTML = entry.fields.characteristics;
    placeToPutContent.append(characteristics);

    var image = document.createElement('img');
    image.innerHTML = entry.fields.image;
    placeToPutContent.append(image);



  });
