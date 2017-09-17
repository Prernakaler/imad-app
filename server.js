var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = required('pg').Pool;

var config = {
    user: 'ps00022',
    database: 'ps00022',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one':{title: 'Article-One | Prerna Kaler', 
  heading: 'article one',
  date: 'Aug-13-2017',
  content: `
<p>           This is the first para of my third article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
</p>
<p>              This is the second para of my third article.
                 This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>
<p>             This is the third para of my third article.
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>`},

    'article-two':{ title: 'Article-Two | Prerna Kaler', 
  heading: 'article two',
  date: 'Aug-20-2017',
  content: `
<p>           This is the first para of my second article.
                This is the content for my second article. This is the content for my first article. This is the content for my first article.This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
</p>
<p>              This is the second para of my second article.
                 This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>
<p>             This is the third para of my second article.
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>`},
    'article-three': { title: 'Article-Three | Prerna Kaler', 
  heading: 'article three',
  date: 'Aug-23-2017',
  content: `
<p>           This is the first para of my third article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
</p>
<p>              This is the second para of my third article.
                 This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>
<p>             This is the third para of my third article.
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>`},
};

var articleOne = {
  title: 'Article-one | Prerna Kaler', 
  heading: 'article one',
  date: 'Aug-16-2017',
  content: `
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

var counter = 0;
app.get('/counter', function(req,res){
    counter = counter+1;
    res.send(counter.toString());
});

var pool = new Pool(config);

app.get('/test-db', function(req,res ){
    //make a select request
    //return a response with result
    
    pool.query('SELECT * FROM test', function(err, result) {
        if(err){
         res.status(500).send(err.toString());   
        }
        else{
            res.send(JSON.stringify(result));
        }
        
    });
});

app.get('/:articleName',function(req, res)
{
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName])); 
});

/*app.get('/article-two',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});

app.get('/article-three',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});*/

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
