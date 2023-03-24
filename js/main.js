console.log('hey it worked!');

var client = contentful.createClient({
    space: 'r9wenzghd52n',
    accessToken: 'ha6K24v5CNGZod80qpSUSLnhUlOoswD5ObDefKQqUP0',
  });

  var resourcesDiv = document.getElementById('resources');

  console.log('hey it worked!');

client.getEntries({
  content_type: '<happybarasParadise',
})
.then(function (entries) {
  console.log(JSON.stringify(entries));
  entries.items.forEach(function (entry) {
    console.log(JSON.stringify(entry.fields.companyName));
  });
});

client.getEntries().then(function (entries) {
  entries.items.forEach(function (entry) {
      console.log(entry.fields)

      var itemDiv = document.createElement('div');
      resourcesDiv.appendChild(itemDiv);
      itemDiv.classList.add('resource-item');

      var name = document.createElement('h2');
      name.innerHTML = entry.fields.name;
      itemDiv.appendChild(name);

      var desc = document.createElement('p');
      desc.innerHTML = entry.fields.description;
      itemDiv.appendChild(desc);

      var image = document.createElement('img');
      image.src = entry.fields.image.fields.file.url+"?w=300";
      itemDiv.appendChild(image);

      var link = document.createElement('a');
      link.innerHTML = "link to " + entry.fields.name;
      link.href = "details.html?id="+entry.sys.id
      itemDiv.appendChild(link);

      }
  );
});

/*get details*/
      var name = document.createElement('h2');
      name.innerHTML = entry.fields.name;
      resourceItem.append(name);

      var description = document.createElement('p');
      description.innerHTML = entry.fields.description;
      resourceItem.append(description);

      var cover = document.createElement('img');
      cover.src = "http:"+entry.fields.cover.fields.file.url;
      resourceItem.append(cover);
      
      var details = document.createElement('a');
      details.innerHTML = "Get Details";
      details.href = "details.html?id="+entry.sys.id;
      resourceItem.append(details);

/*
entries.items.forEach(function (entry) {
  var resourceItem = document.createElement('div');
  var name = document.createElement('h3');
  name.innerHTML = entry.fields.name;
  resourceItem.appendChild(name);
  */


