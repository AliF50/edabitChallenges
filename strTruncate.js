// Write a one line function that returns a truncated string with
//given parameters: original string, truncated length limit, and optional
//suffix string parameter. Truncated returned string length should adjust to passed length in
//parameters regardless of length of suffix.
// This is a real world example, say your marketing dept needs product title to squeeze down to a
//limited space when returned in a search results grid. The grid size may be dependent on device type,
//so length passed will vary. They may they need it to truncate to '...', '(more)', or nothing, based on A/B testing.
function strTruncate(str, strLength, strSuffix) {
  return strSuffix ? str.substring(0, strLength - strSuffix.length) + strSuffix : str.substring(0, strLength);
}
