
 /**
   * Admin :: Abdul Wahab
   * App Version :: 0.10v
   * Sample JavaScript code for blogger.posts.insert
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */
  let fetchByPostId = document.getElementById('fetch-post-id');
  let generateBtn = document.getElementById('generate-btn');
  // All Data Variable for the Post
  let blogId = document.getElementById('blog-id');
  let clientApiKey = document.getElementById('api-key');
  let OAuthClientId = document.getElementById('oauth-id');
  let isDraft = document.getElementById('is-draft');
  let fetchBody =  document.getElementById('fetch-body');
  let fetchImages = document.getElementById('fetch-images');
  let alt = document.getElementById('alt');
  let prettyPrint = document.getElementById('pretty-print');
  let title = document.getElementById('book-title');
  let imageURL = document.getElementById('book-image-url');
  let bookAuthor = document.getElementById('book-author');
  let bookEdition = document.getElementById('book-edition');
  let bookPublisher = document.getElementById('book-publisher');
  let bookLanguage = document.getElementById('book-language');
  let bookLength = document.getElementById('book-length');
  let bookSize = document.getElementById('book-size');
  let label1 = document.getElementById('post-label1');
  let label2 = document.getElementById('post-label2');
  let label3 = document.getElementById('post-label3');
  let label4 = document.getElementById('post-label4');
  let label5 = document.getElementById('post-label5');
  let downloadLink1 = document.getElementById('post-btn-url1');
  let downloadLink2 = document.getElementById('post-btn-url2');
  let downloadLink3 = document.getElementById('post-btn-url3');
  let downloadLink4 = document.getElementById('post-btn-url4');
  let downloadLink5 = document.getElementById('post-btn-url5');
  let tOContents = document.getElementById('content');
  let labelLinkLanguage;
  let labelLinkPublisher;
  let content;
  let postData;
  alt.value = "json";
  clientApiKey.value = "";
  OAuthClientId.value = "";
  blogId.value = "";
  // Get Data Form Inputs

  const inputDataHandler = () => {
    alert("Generating the post...");
  let labels;
  // Fetching Data From Website
  let xhr = new XMLHttpRequest();
  xhr.open('GET',`https://cors-prox-in-use.herokuapp.com/https://libgen.is/json.php?ids=${fetchByPostId.value}&fields=*`);
  xhr.responseType = 'json';
  xhr.onload = function(){
    const getPost = xhr.response;
    let post;
    for(post of getPost){
      // Checking if the Tabel Of Content (toc) is Empty
      if(post.toc === "" || post.toc === null){
        tOContents.innerHTML = post.descr;
      }else{
        tOContents.innerHTML = post.toc;
      }
      // Important for Making Download Link
      // const regex = /(.+\w)\./gmi;
      // const text = `${post.coverurl}`;    
      // const result = text.match(regex); 	  	//Result 357000 / dad01b93934834aa35b9109de696af82-d.
  
      //Removing . from the End of String
      // regex2 = /.+\w|\?./gi; 
      // regexCoverURL = result[0].match(regex2);   //357000 / dad01b93934834aa35b9109de696af82-d
      // // If Book Series is Present
      // let regex3 = /^[a-zA-Z0-9]+\/[a-zA-Z0-9]+/gi;   //357000 / dad01b93934834aa35b9109de696af82
      // let newCoverURL = regexCoverURL[0].match(regex3);

      post.descr;
      if(post.edition === ""){
        title.value = `${post.title}, ${post.volumeinfo} by ${post.author}`;
      } else if(post.volumeinfo === ""){
        title.value = `${post.title}, ${post.edition} ed. by ${post.author}`;
      } else{
        title.value = `${post.title} by ${post.author}`;
      }
      bookAuthor.value = post.author;
      if(post.edition === "" || post.edition === null){
        bookEdition.value = "N/A";
      } else{
        bookEdition.value = post.edition;
      }
      if(post.publisher === "" || post.publisher === null){
        bookPublisher.value = "Unknown Publisher";
      } else{
        bookPublisher.value = post.publisher;
      }
      labelLinkPublisher = encodeURIComponent(bookPublisher.value);
      bookLanguage.value = post.language;
      labelLinkLanguage = encodeURIComponent(bookLanguage.value);
      bookLength.value = post.pages;
      bookSize.value = (parseInt((post.filesize))/1048576).toFixed(2);
  
  // Checking For Download Links

      // let updatedDownloadLink1;
      // if(post.series === "" || post.series === null){
      //   updatedDownloadLink1 = `${regexCoverURL[0]}/${encodeURIComponent(post.author)}-${encodeURIComponent(post.title)+"."+post.extension}`;
      // }
      //  else{
      //   updatedDownloadLink1 = `${newCoverURL[0]}/${encodeURIComponent("("+post.series+") "+post.author)}-${encodeURIComponent(post.title)+"."+ post.extension}`;
      // }
      let keyVal1 = Math.floor(Math.random()*10);
      let keyVal2 = Math.floor(Math.random()*10);
      let keyVal3 = Math.floor(Math.random()*10);
      let keyVal4 = Math.floor(Math.random()*10);
      downloadLink1.value = `http://93.174.95.29/main/${post.md5}`;
      downloadLink2.value = `https://libgen.is/book/index.php?md5=${post.md5}&oftorrent=`;
      downloadLink3.value = `magnet:?xt=urn:sha1:${post.sha1}&xl=${post.filesize}&dn=${post.md5}.${post.extension}`;
      downloadLink4.value = `magnet:?xt=urn:tree:tiger:${post.tth}&xl=${post.filesize}&dn=${post.md5}.${post.extension}`;
      downloadLink5.value = `http://80.82.78.13/get.php?md5=${post.md5}&key=${keyVal1}F${keyVal2}QO${keyVal3}EES${keyVal4}FWRSSB&mirr=1`;
      if(post.coverurl === "" || post.coverurl === null){
        imageURL.value = "https://1.bp.blogspot.com/-3xjYTZKK3mo/XtVALBxFJWI/AAAAAAAAFbs/ak5s986cA08svKJxhaYK0PBrvhsYSZARgCK4BGAsYHg/s320/bookz2_blank.png";
      } else{
        imageURL.value = `http://93.174.95.29/covers/${post.coverurl}`;
      }
      label1.value = bookPublisher.value;
      label2.value = post.language;
      let label3Regex = /;/gi;
      label3.value = (post.tags).replace(label3Regex,',');
      labels = [label1.value, label2.value, label3.value, label4.value, label5.value];
    }
    content = `<div class='separator' style='clear: both; text-align: center;'> <a href='${imageURL.value}' style='margin-left: 1em; margin-right: 1em;'><img border='0' data-original-height='300' data-original-width='290' height='380' src='${imageURL.value}' width='260'/></a></div> <div class='separator' style='clear: both; text-align: center;'> </div> <br /> <a name='more'></a><span style='font-family: verdana, sans-serif; font-size: large;'><b><u>Bibliographic Information</u>:</b></span> <br /> <table> <tbody> <tr> <td><b><span style='color: #444444;'>Title:</span></b></td> <td>${title.value}</td> </tr> <tr> <td><b><span style='color: #444444;'>Editor:</span></b></td> <td>${bookAuthor.value}</td> </tr> <tr> <td><b><span style='color: #444444;'>Edition:</span></b></td> <td>${bookEdition.value}</td> </tr> <tr> <td><b><span style='color: #444444;'>Publisher:</span></b></td> <td><a href='https://www.bookz2.com/search/label/${labelLinkPublisher}?&amp;max-results=60'>${bookPublisher.value}</a></td> </tr> <tr> <td><b><span style='color: #444444;'>Length:</span></b></td> <td>${bookLength.value} pages</td> </tr> <tr> <td><b><span style='color: #444444;'>Size:</span></b></td> <td>${bookSize.value} MB </td> </tr> <tr> <td><b><span style='color: #444444;'>Language:</span></b></td> <td><a href='https://www.bookz2.com/search/label/${labelLinkLanguage}?&amp;max-results=60'>${bookLanguage.value}</a></td> </tr> </tbody></table> <br />  
    <center><a href='${downloadLink1.value}' class='pdf-btn'>Link 1</a><a href='${downloadLink2.value}' class='torrent-btn'>Link 2</a><a href='${downloadLink3.value}' class='torrent-btn'>Link 3</a><a href='${downloadLink4.value}' class='torrent-btn'>Link 4</a><a href='${downloadLink5.value}' class='pdf-btn'>Link 5</a></center><br/><br /><span style='color: #444444;'><b>Table of Contents:</b></span><br /> ${tOContents.innerHTML}`;
    postData =  {
      "blogId":blogId.value,
      "fetchBody":fetchBody.value,
      "fetchImages":fetchImages.value,
      "isDraft":isDraft.value,
      "alt":alt.value,
      "prettyPrint":prettyPrint.value,
      "title":title.value,
      "content":content,
      "labels":labels
    } 
    console.log(postData);
  }
  xhr.send();
  };
  // Event Handler For Generat Button
  generateBtn.addEventListener('click', inputDataHandler);
  // Sending Data To Blogger
    function authenticate() {
     
      return gapi.auth2.getAuthInstance()
          .signIn({scope: "https://www.googleapis.com/auth/blogger"})
          .then(function() { console.log("Sign-in successful"); },
                function(err) { console.error("Error signing in", err); });
    }
    function loadClient() {
      gapi.client.setApiKey(clientApiKey.value);
      return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/blogger/v3/rest")
          .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
    }
    // Make sure the client is loaded and sign-in is complete before calling this method.
    function execute() {
       return gapi.client.blogger.posts.insert(postData) .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function(err) { console.error("Execute error", err); });
      }  
    gapi.load("client:auth2", function() {
      gapi.auth2.init({client_id:OAuthClientId.value});
    });
