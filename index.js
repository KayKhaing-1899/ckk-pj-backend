import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"1234",
    database:'oess'
})

app.listen('8800',() => {
    console.log('Connected to backend!')
})

app.get('/',(req,res) => {
    res.json('This is the backend.')
})

app.use(express.json())
app.use(cors())

app.get('/ms/admin',(req,res) => {
    db.query("SELECT * FROM admin",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/ms/users',(req,res) => {
    db.query("SELECT * FROM user",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/ms/users',(req,res) => {
    const q = "INSERT INTO user (`UserId`,`Name`,`Email`,`Address`,`Phone`,`Password`) VALUES (?)"
    const values = [
        req.body.UserId,
        req.body.Name,
        req.body.Email,
        req.body.Address,
        req.body.Phone,
        req.body.Password
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/products',(req,res) => {
    const q = "SELECT * FROM products ORDER BY Pid desc"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/products',(req,res) => {
    const q = "INSERT INTO products (`Pid`,`AdminId`,`BrandId`,`Url`,`Name`,`Model`,`Ram`,`Cpu`,`Gpu`,`Display`,`Storage`,`Front`,`Rear`,`Battery`,`Color`,`Cellular`,`Af_mode`,`Built_in_flash`,`Iso`,`View_finder`,`Pixels`,`Weight`,`Size`,`Price`) VALUES (?)"
    const values = [
        req.body.Pid,
        req.body.AdminId,
        req.body.BrandId,
        req.body.Url,
        req.body.Name,
        req.body.Model,
        req.body.Ram,
        req.body.Cpu,
        req.body.Gpu,
        req.body.Display,
        req.body.Storage,
        req.body.Front,
        req.body.Rear,
        req.body.Battery,
        req.body.Color,
        req.body.Cellular,
        req.body.Af_mode,
        req.body.Built_in_flash,
        req.body.Iso,
        req.body.View_finder,
        req.body.Pixels,
        req.body.Weight,
        req.body.Size,
        req.body.Price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.put('/products/:Pid',(req,res) => {
    const q = "UPDATE products SET `Url`=?,`Name`=?,`Model`=?,`Ram`=?,`Cpu`=?,`Gpu`=?,`Display`=?,`Storage`=?,`Front`=?,`Rear`=?,`Battery`=?,`Color`=?,`Cellular`=?,`Af_mode`=?,`Built_in_flash`=?,`Iso`=?,`View_finder`=?,`Pixels`=?,`Weight`=?,`Size`=?,`Price`=? WHERE Pid = ?"
    const id = req.params.Pid
    const values = [
        req.body.Url,
        req.body.Name,
        req.body.Model,
        req.body.Ram,
        req.body.Cpu,
        req.body.Gpu,
        req.body.Display,
        req.body.Storage,
        req.body.Front,
        req.body.Rear,
        req.body.Battery,
        req.body.Color,
        req.body.Cellular,
        req.body.Af_mode,
        req.body.Built_in_flash,
        req.body.Iso,
        req.body.View_finder,
        req.body.Pixels,
        req.body.Weight,
        req.body.Size,
        req.body.Price
    ]
    db.query(q,[...values,id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully updated")
    })
})

app.get('/products/:Pid',(req,res) => {
    const q = "SELECT * FROM products WHERE Pid = ?"
    const id = req.params.Pid
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/canon',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C2' and brand.Brandname='canon'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/sony',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C2' and brand.Brandname='sony'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/fujifilm',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C2' and brand.Brandname='fujifilm'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/dell',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C1' and brand.Brandname='dell'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/acer',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C1' and brand.Brandname='acer'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/asus',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C1' and brand.Brandname='asus'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/msi',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C1' and brand.Brandname='msi'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/hp',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C1' and brand.Brandname='hp'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/samsung',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C3' and brand.Brandname='samsung'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/oppo',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C3' and brand.Brandname='oppo'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/vivo',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C3' and brand.Brandname='vivo'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/huawei',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C3' and brand.Brandname='huawei'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/redmi',(req,res)=>{
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C3' and brand.Brandname='redmi'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/tvs',(req,res) => {
    const q = "select * from products,brand where products.BrandId=brand.BrandId and brand.CateId='C4'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/canon/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/sony/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/fujifilm/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/dell/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/acer/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/asus/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/hp/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/msi/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/samsung/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/oppo/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/vivo/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/huawei/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/redmi/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/tvs/:Pid',(req,res)=>{
    const id = req.params.Pid
    const q = "select * from products where Pid = ?"
    db.query(q,[id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/:Name',(req,res) => {
    const q = "SELECT * FROM products WHERE Name = ?"
    const name = req.params.Name
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/:Pid',(req,res) => {
    const id = req.params.Pid
    const q = "DELETE FROM products WHERE Pid = ? "
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted from products!")
    })
})

app.get('/ms/cart',(req,res) => {
    db.query("select * from cart,products where cart.Pid=products.Pid",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/ms/cart',(req,res) => {
    const q = "INSERT INTO cart (`CartId`,`Pid`) VALUES (?)"
    const values = [
        req.body.CartId,
        req.body.Pid
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added to cart!")
    })
})

app.delete('/ms/cart/:CartId',(req,res) => {
    const cartId = req.params.CartId
    const q = "DELETE FROM cart WHERE CartId = ? "
    db.query(q,[cartId],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted from cart!")
    })
})

app.get('/orders/orderlists',(req,res) => {
    const q = "select * from orders,products where orders.Pid=products.Pid order by OrderId desc"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/orders/orderlists/:cusname',(req,res) => {
    const name = req.params.cusname
    const q = "SELECT * FROM orders,products WHERE orders.Pid=products.Pid and cusname = ? order by OrderId desc"
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/orders/orderlists',(req,res) => {
    const q = "INSERT INTO orders (`OrderId`,`AdminId`,`Pid`,`date`,`cusname`,`email`,`phone`,`address`,`quantity`,`total`) VALUES (?)"
    const values = [
        req.body.OrderId,
        req.body.AdminId,
        req.body.Pid,
        req.body.date,
        req.body.cusname,
        req.body.email,
        req.body.phone,
        req.body.address,
        req.body.quantity,
        req.body.total
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.delete('/orders/orderlists/:OrderId',(req,res) => {
    const q = "DELETE FROM orders WHERE OrderId=?"
    const id = req.params.OrderId
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted!")
    })
})

app.get('/ms/brands',(req,res)=>{
    const q = "select * from brand"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/ms/feedbacks',(req,res) => {
    db.query("select * from feedback,user where feedback.UserId=user.UserId order by FeedId desc",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/ms/feedbacks',(req,res) => {
    const q = 'INSERT INTO feedback (`FeedId`,`AdminId`,`UserId`,`Subject`,`Fback`) VALUES (?)'
    const values = [
        req.body.FeedId,
        req.body.AdminId,
        req.body.UserId,
        req.body.Subject,
        req.body.Fback
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json('Successfully added.')
    })
})

app.get("/ms/orders/deliver",(req,res)=>{
    const q = "select * from delivered,orders,products where delivered.OrderId=orders.OrderId and products.Pid=orders.Pid"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/ms/orders/deliver',(req,res) => {
    const q = "INSERT INTO delivered (`DeliId`,`AdminId`,`OrderId`,`delidate`) VALUES (?)"
    const values = [
        req.body.DeliId,
        req.body.AdminId,
        req.body.OrderId,
        req.body.delidate
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get("/ms/orders/deliver/:delidate",(req,res)=>{
    const q = "SELECT * FROM delivered,orders,products WHERE delivered.OrderId=orders.OrderId and products.Pid=orders.Pid and delidate = ?"
    const date = req.params.delidate
    db.query(q,[date],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})