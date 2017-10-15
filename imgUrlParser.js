// You are asked to extract the unique id and a type from an imgur link.
// The link could be pointing to:
// An album (e.g. http://imgur.com/a/cjh4E)
// A gallery (e.g. http://imgur.com/gallery/59npG)
// An image (e.g. http://imgur.com/OzZUNMM)
// An image (direct link) (e.g. http://i.imgur.com/altd8Ld.png)
// Possible types are:
// album
// gallery
// image
// Parameters

// A string containing the URL to parse.
// Return Value

// The return value should be an object containing the unique id, and a string indicating what type of link it is.
// Examples

// 'http://imgur.com/a/cjh4E' ➞ { id: 'cjh4E', type: 'album' }
const imgurUrlParser = url => {
  var urlArray = url.split('/');
  if(urlArray[3] === 'a'){
    return {id: urlArray[4], type: 'album'};
  }else if(urlArray[3] === 'gallery'){
    if(urlArray[4].includes('#')){
      var n = urlArray[4].indexOf('#');
      var newUrl = urlArray[4].substring(0, n);
      return {id: newUrl, type: 'gallery'};
    }else{
      return {id: urlArray[4], type: 'gallery'};
    }
  }else if(url.endsWith('.png')){
    var n = url.lastIndexOf('/');
    return {id: url.substring(n + 1, url.length - 4), type: 'image'};
  }else{
    return {id: urlArray[urlArray.length - 1], type: 'image'};
  }
}

