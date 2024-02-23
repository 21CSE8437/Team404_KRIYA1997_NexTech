var express = require('express')
var mysql = require('mysql2')
var cors = require('cors')

// var Libraryapp = require('./src/Library/LibraryManagement')
var db = mysql.createConnection({
    host:"db4free.net",
    user:"naveen1234",
    password:"mr.stark",
    database:"naveen1234"
})
const app = express()
db.connect((err) => {
    
     console.log("connected");
})
app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
    console.log("called /")
    db.query('SELECT * FROM books', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});
// app.delete('/deleteStaff/:id', (req, res) => {
//     const staffId = req.params.id;
//     db.query('DELETE FROM staffDetails WHERE id = ?', [staffId], (err, result) => {
//         if (err) {
//             console.error('Error deleting staff:', err);
//             res.status(500).send('Internal Server Error');
//         } else {
//             console.log('Staff deleted successfully');
//             res.send('Staff deleted successfully');
//         }
//     });
// });
// app.post('/login', (req, res) => {
//     const { name, pass } = req.body;

  
//     db.query('SELECT * FROM staffDetails WHERE name = ? AND password = ?', [name, pass], (err, results) => {
//         if (err) {
//             console.error('Error performing database query:', err);
//             res.status(500).json({ success: false, message: 'Internal Server Error' });
//             return;
//         }

//         if (results.length > 0) {
           
//             res.json({ success: true, message: 'Login successful', redirectUrl: '/editdetails.html' });
//         } else {
           
//             res.status(401).json({ success: false, message: 'Invalid credentials' });
//         }
//     });
// });
// app.get('/staff', (req, res) => {
//     console.log("called /staff")
//     db.query('SELECT * FROM staffDetails', (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('Internal Server Error');
//         } else {
//             res.json(result);
//         }
//     });
// });

app.post('/addStaff', (req, res) => {
    console.log("called /addStaff")
    console.log(req.body);
    const { name, dob,role, qualification, dept} = req.body
    console.log(req.body)
    db.query('insert into staffDetails(name,dob,role,qualification,dept) values(?,?,?,?,?)', [name, dob, role, qualification, dept],
     (err, db_res) => { if (err) throw err
    else{
        res.send('ok')
    }
    })

})

// app.post('/updateStaff', (req, res) => {
//     console.log(req.body)
//     const { name, pass, contact, address, role, qual, dept } = req.body;
//     console.log(name,pass)
    
//     db.query('UPDATE staffDetails SET contact=?, address=?, role=?, qual=?, dept=?, password=? WHERE name=? AND password=?', 
//         [contact, address, role, qual, dept, pass, name, pass], 
//         (err, result) => {
//             if (err) {
//                 console.error('Error updating staff details:', err);
//                 res.status(500).json({ success: false, message: 'Internal Server Error' });
//             } else {
//                 console.log(result)
//                 console.log('Staff details updated successfully');
//                 res.json({ success: true, message: 'Staff details updated successfully' });
//             }
//         }
//     );
// });



// app.post('/userDetails', (req, res) => {
//     console.log(req.body)
   
//     const user = req.body.user;
//     const pass = req.body.pass;
//     console.log(user)
//     console.log(pass)

//     db.query('SELECT * FROM staffDetails WHERE name = ? and password=?', [user,pass], (err, results) => {
//         try{
//             if (err) {
//                 console.error('Error fetching user details:', err);
//                 res.status(500).json({ success: false, message: 'Internal Server Error' });
//             } else {
//                 if (results.length > 0) {
                   
//                     const user = results[0]; 
//                     res.json({ success: true, user });
//                 } else {
                   
//                     res.status(404).json({ success: false, message: 'User not found' });
//                 }
//             }
//         }catch(err){
//             console.log(err);
//         }
//     });
// });
app.listen('2000', () => {
    console.log("Listening on port 2000");
})
