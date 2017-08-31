var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
  title: 'Article-one | Prerna Kaler', 
  heading: 'article One',
  date: 'Aug-26-2017',
  Content: `
<p>           This is the first para of my first article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
</p>
<p>              This is the second para of my first article.
                 This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>
<p>             This is the third para of my first article.
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>`
                
    
};
function createTemplate (data) {
    
    var title =data.title;
    var date =data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
        ${title}
        
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
        
                <style>

        
            
        </style>
        
        </head>
        <body>
            <div class = "container">
            <div>
                <a href = "/">Home</a>
                
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
        </body>

</html>





`;

    return htmlTemplate;


}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req, res)
{
   res.send(createTemplate(articleOne)); 
});

app.get('/article-two',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});

app.get('/article-three',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
