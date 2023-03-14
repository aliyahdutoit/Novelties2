const db = require('../Config');
const {hash, compare, hashSync} = require('bcrypt');
const {createToken} = require('../Middleware/AuthenticatedUser.js');

// ----- USER ------ //
class User {
    // ---LOGIN--- //
    login(req, res) {
        const {
            emailAdd,
            userPwd
        } = req.body;
        const Query = 
        `
        SELECT *
        FROM Users 
        WHERE emailAdd = '${emailAdd}';
        `;

        // DATABASE //
        db.query(Query, async (err, data) => {
            const userLog = data
            if(err) throw err, console.log(err);
            if ((!data) || (data == null)) {
                res.status(401).json({err: 'The wrong email address has been entered.'})
            } else {
                await compare(userPwd, data[0].userPwd,(cErr, cResult) => {
                    if(cErr) throw cErr, console.log(cErr);

                    const jwToken = createToken ({
                        emailAdd,
                        userPwd
                    });
                    if(cResult) {
                        res.status(200).json({
                            msg: 'Logged In', jwToken, result: data
                        })
                    }else {
                        res.status(401).json({
                            err: 'You have entered an invalid password or have not registered.'
                        });
                    };
                }); 
            };       
        });
    };
    fetchUsers(req, res) {
        // --- FETCHING ALL USERS --- // 
         //  DATABASE //
        const fetchAllUsersQuery =
            `
            SELECT *
            FROM Users;
            `;
            //  RESULTS //
            db.query(fetchAllUsersQuery, (err, data) => {
                 if(err) throw err, console.log(err);
               else res.status(200).json({results:data});
            });
    };
    // --- FETCH A SINGLE USER --- //
     //  DATABASE // 
    fetchUser(req, res) {
        const fetchUserQuery =
        `
        SELECT *
        FROM Users 
        WHERE userID = ?;
        `;
        //  RESULTS //
        db.query(fetchUserQuery, [req.params.id], (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({results:data});
        });
    };
    //  --- CREATE A NEW USER --- //
    async createUser(req, res) {
        const detail = req.body;
    detail.userPwd = await hash(detail.userPwd, 15);

    const user = {
        emailAdd: detail.emailAdd,
        userPwd: detail.userPwd
    }
     //  DATABASE //
    const createQuery = 
    `
    INSERT 
    INTO Users 
    SET ?;
    `;
    // RESULTS //
    db.query(createQuery, [detail], (err) => {
        if(err) {
            res.status(401).json({err});
        } else {
            const jwToken = createToken(user);

            res.cookie('Record Found', jwToken, {
                maxAge: 3600000,
                httpOnly: true
            });
            res.status(200).json({msg: 'A user record was saved.'});
        };
    });
    };
    // --- UPDATE A USER --- //
    updateUser(req, res) {
        const data = req.body;
        if(data.userPwd !== null || data.userPwd !== undefined)
        data.userPwd = hashSync(data.userPwd, 15);
         //  DATABASE //
        const Query = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        // RESULTS //
        db.query(Query, [data, req.params.id], (err) => {
            if (err) throw err, console.log(err);
            res.status(200).json({msg: 'A row was affected.'});
        });
    };
    // --- DELETE USER --- //
     //  DATABASE //
    deleteUser(req, res) {
        const Query =
        `
        DELETE FROM Users
        WHERE 
        userID =?;
        `;
        // RESULTS//
        db.query(Query, [req.params.id], (err) => {
            if(err) throw err, console.log(err);
            res.status(200).json({msg: 'A record was removed from a database'});
        });
    };
};

// ------------- PRODUCTS -------------- //
class Product {
    // --- FETCH ALL PRODUCT ITEMS --- //
    fetchItem(req, res) {
         //  DATABASE //
        const fetchAllItems = 
        `SELECT
        prodID, prodName, prodDescription, 
        category, price, prodQuantity, imgURL 
        FROM Products;
        `;
        //  RESULTS //
        db.query(fetchAllItems, (err, results) => {
            if(err) throw err, console.log(err);
            res.status(200).json({results: results});
        });
    };
    // --- FETCH A SINGLE PRODUCT ITEM --- //
    fetchItem(req, res) {
        // DATABASE
        const fetchItemQuery =
        `
        SELECT prodID, prodName, prodDescription, 
        category, price, prodQuantity, imgURL 
        FROM Products 
        WHERE prodID = ?;
        `;
        // RESULTS //
        db.query(fetchItemQuery, [req.params.id], (err, results) => {
            if(err) throw err, console.log(err);
            res.status(200).json({results: results});
        });
    };
    // --- ADD A NEW PRODUCT ITEM --- //
    addItem(req, res) {
         //  DATABASE //
        const Query = 
        `
        INSERT INTO 
        Products
        SET ?;
        `;
        // RESULTS //
        db.query(Query, [req.body], (err) => {
            if(err) {
                res.status(400).json({err: 'Unable to insert a new record.'});
            } else {
                res.status(200).json({msg: 'Product Saved'});
            };
        });
    };
    // --- UPDATE PRODUCT ITEM --- //
    updateItem(req, res) {
        // DATABASE //
        const Query =
        `
        UPDATE Products
        SET ?
        WHERE prodID =  ?;
        `;
        // RESULTS //
        db.query(Query, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({err: 'Unable to update a record.'});
            } else {
                res.status(200).json({msg: 'Product Updated'});
            };
        });
    }
    // --- DELETE A PRODUCT ITEM --- //
    deleteItem(req, res) {
        // DATABASE //
        const Query =
        `
        DELETE 
        FROM Products
        WHERE prodID = ?;
        `;
        // RESULTS //
        db.query(Query, [req.params.id], (err) => {
            if(err) res.status(400).json ({err: 'The record was not found.'});
            res.status(200).json({msg: 'A product was successfully deleted.'});
        });
    };
};

// ----------------- CART ------------- //

module.exports = {
    User,
    Product

};
