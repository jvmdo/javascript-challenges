//* My solution
function domainName(url) {
  return url.match(/(?:\/\/)?(?:www.)?(?<domain>[\w-]+)\./).groups.domain;
}

//* Clever solution [not mine]
/* function domainName(url){  
  return url.replace(/.+\/\/|www.|\..+/g, '')
} */

// const output = domainName("https://www.google.com")
const output = domainName("https://youtube-hyphens.com");
output;
