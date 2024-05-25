const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


//express app
const app = express();

//connect to mongo db
const dbURI = 'mongodb+srv://mahesh-user:Poongodi.123@cluster0.wugcehq.mongodb.net/note-tuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine','ejs');

//middleware and static files
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

app.use(morgan('dev'));
// app.use(morgan('tiny'));

//mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res) => {
//     const blog = new Blog({
//         title: 'new blog 4',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req,res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('66514af7b221687a2f0dd614')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });


//custom middleware
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ',req.hostname);
//     console.log('path: ',req.path);
//     console.log('method: ',req.method);
//     next();
// })

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// })


//routes
app.get('/',(req, res) => {
    // res.send('<p> Home Page </p>');
    // res.sendFile('./views/index.html',{root: __dirname});
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor amet consectetur'}
    // ]
    // res.render('index',{title: 'Home',blogs});
    res.redirect('/blogs');
});

app.get('/about',(req, res) => {
    // res.send('<p> About Page </p>');
    // res.sendFile('./views/about.html',{root: __dirname});
    res.render('about', {title: 'About'});

});

//redirect
// app.get('/about-us',(req,res) => {
//     res.redirect('/about');
// });

//blog routes
app.use('/blogs', blogRoutes);



//404 Page
app.use((req,res) => {
    // res.status(404).sendFile('./views/404.html',{root: __dirname});
    res.status(404).render('404',{title: '404'});
});