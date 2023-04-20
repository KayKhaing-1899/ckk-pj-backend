import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"1234",
    database:'ckkelectronics'
})

app.get('/',(req,res) => {
    res.json('This is the backend.')
})

app.use(express.json())
app.use(cors())

app.get('/cameras',(req,res) => {
    const q = "SELECT * FROM cameras"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/cameras/:Name',(req,res) => {
    const name = req.params.Name
    const q = "DELETE FROM cameras WHERE Name = ? "
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted from cameras!")
    })
})

app.put('/cameras/:CamId',(req,res) => {
    const id = req.params.CamId
    const q = "UPDATE cameras SET `Url`=?,`Name`=?,`Af_mode`=?,`Built_in_flash`=?,`Iso`=?,`View_finder`=?,`Pixels`=?,`Weight`=?,`Price`=?,`Brand`=? WHERE CamId = ? "
    const values = [
        req.body.Url,
        req.body.Name,
        req.body.Af_mode,
        req.body.Built_in_flash,
        req.body.Iso,
        req.body.View_finder,
        req.body.Pixels,
        req.body.Weight,
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[...values,id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully updated to cameras!")
    })
})

app.post('/cameras',(req,res) => {
    const q = "INSERT INTO cameras (`CamId`,`Url`,`Name`,`Af_mode`,`Built_in_flash`,`Iso`,`View_finder`,`Pixels`,`Weight`,`Price`,`Brand`) VALUES (?)"
    const values = [
        req.body.CamId,
        req.body.Url,
        req.body.Name,
        req.body.Af_mode,
        req.body.Built_in_flash,
        req.body.Iso,
        req.body.View_finder,
        req.body.Pixels,
        req.body.Weight,
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/cameras/canon',(req,res)=>{
    const q = "SELECT * FROM cameras WHERE Brand = 'canon'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/canon/:CamId',(req,res)=>{
    const id = req.params.CamId
    const q = "SELECT * FROM cameras WHERE CamId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/sony',(req,res)=>{
    const q = "SELECT * FROM cameras WHERE Brand = 'sony'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/sony/:CamId',(req,res)=>{
    const id = req.params.CamId
    const q = "SELECT * FROM cameras WHERE CamId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/fujifilm',(req,res)=>{
    const q = "SELECT * FROM cameras WHERE Brand = 'fujifilm'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/cameras/fujifilm/:CamId',(req,res)=>{
    const id = req.params.CamId
    const q = "SELECT * FROM cameras WHERE CamId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers',(req,res) => {
    const q = "SELECT * FROM computers"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.delete('/computers/:Name',(req,res) => {
    const name = req.params.Name
    const q = "DELETE FROM computers WHERE Name = ? "
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted from computers!")
    })
})

app.put('/computers/:ComId',(req,res) => {
    const id = req.params.ComId
    const q = "UPDATE computers SET `Url`=?,`Name`=?,`Model`=?,`Ram`=?,`Cpu`=?,`Gpu`=?,`Display`=?,`Storage`=?,`Price`=?,`Brand`=? WHERE ComId = ? "
    const values = [
        req.body.Url,
        req.body.Name,
        req.body.Model,
        req.body.Ram,
        req.body.Cpu,
        req.body.Gpu,
        req.body.Display,
        req.body.Storage,
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[...values,id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully updated to computers!")
    })
})

app.post('/computers',(req,res) => {
    const q = "INSERT INTO computers (`ComId`,`Url`,`Name`,`Model`,`Ram`,`Cpu`,`Gpu`,`Display`,`Storage`,`Price`,`Brand`) VALUES (?)"
    const values = [
        req.body.ComId,
        req.body.Url,
        req.body.Name,
        req.body.Model,
        req.body.Ram,
        req.body.Cpu,
        req.body.Gpu,
        req.body.Display,
        req.body.Storage,
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/computers/dell',(req,res)=>{
    const q = "SELECT * FROM computers WHERE Brand = 'dell'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/dell/:ComId',(req,res)=>{
    const id = req.params.ComId
    const q = "SELECT * FROM computers WHERE ComId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/acer',(req,res)=>{
    const q = "SELECT * FROM computers WHERE Brand = 'acer'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/acer/:ComId',(req,res)=>{
    const id = req.params.ComId
    const q = "SELECT * FROM computers WHERE ComId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/asus',(req,res)=>{
    const q = "SELECT * FROM computers WHERE Brand = 'asus'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/asus/:ComId',(req,res)=>{
    const id = req.params.ComId
    const q = "SELECT * FROM computers WHERE ComId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/hp',(req,res)=>{
    const q = "SELECT * FROM computers WHERE Brand = 'hp'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/hp/:ComId',(req,res)=>{
    const id = req.params.ComId
    const q = "SELECT * FROM computers WHERE ComId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/msi',(req,res)=>{
    const q = "SELECT * FROM computers WHERE Brand = 'msi'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/computers/msi/:ComId',(req,res)=>{
    const id = req.params.ComId
    const q = "SELECT * FROM computers WHERE ComId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones',(req,res) => {
    const q = "SELECT * FROM phones"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/phones/:Name',(req,res) => {
    const name = req.params.Name
    const q = "DELETE FROM phones WHERE Name = ? "
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted from phones!")
    })
})

app.put('/phones/:PhId',(req,res) => {
    const id = req.params.PhId
    const q = "UPDATE phones SET `Url`=?,`Name`=?,`Front`=?,`Rear`=?,`Battery`=?,`Ram`=?,`Storage`=?,`Color`=?,`Cellular`=?,`Price`=?,`Brand`=? WHERE PhId = ? "
    const values = [
        req.body.Url,
        req.body.Name,
        req.body.Front,
        req.body.Rear,
        req.body.Battery,
        req.body.Ram,
        req.body.Storage,
        req.body.Color,
        req.body.Cellular,
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[...values,id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully updated to phones!")
    })
})

app.post('/phones',(req,res) => {
    const q = "INSERT INTO phones (`PhId`,`Url`,`Name`,`Front`,`Rear`,`Battery`,`Ram`,`Storage`,`Color`,`Cellular`,`Price`,`Brand`) VALUES (?)"
    const values = [
        req.body.PhId,
        req.body.Url,
        req.body.Name,
        req.body.Front,
        req.body.Rear,
        req.body.Battery,
        req.body.Ram,
        req.body.Storage,
        req.body.Color,
        req.body.Cellular,
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/phones/samsung',(req,res)=>{
    const q = "SELECT * FROM phones WHERE Brand = 'samsung'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/samsung/:PhId',(req,res)=>{
    const id = req.params.PhId
    const q = "SELECT * FROM phones WHERE PhId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/oppo',(req,res)=>{
    const q = "SELECT * FROM phones WHERE Brand = 'oppo'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/oppo/:PhId',(req,res)=>{
    const id = req.params.PhId
    const q = "SELECT * FROM phones WHERE PhId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/vivo',(req,res)=>{
    const q = "SELECT * FROM phones WHERE Brand = 'vivo'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/vivo/:PhId',(req,res)=>{
    const id = req.params.PhId
    const q = "SELECT * FROM phones WHERE PhId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/huawei',(req,res)=>{
    const q = "SELECT * FROM phones WHERE Brand = 'huawei'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/huawei/:PhId',(req,res)=>{
    const id = req.params.PhId
    const q = "SELECT * FROM phones WHERE PhId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/redmi',(req,res)=>{
    const q = "SELECT * FROM phones WHERE Brand = 'redmi'"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/phones/redmi/:PhId',(req,res)=>{
    const id = req.params.PhId
    const q = "SELECT * FROM phones WHERE PhId = ?"
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/tvs',(req,res) => {
    const q = "SELECT * FROM tvs"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/tvs/:Name',(req,res) => {
    const name = req.params.Name
    const q = "DELETE FROM tvs WHERE Name = ? "
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted from tvs!")
    })
})

app.put('/tvs/:TvId',(req,res) => {
    const id = req.params.TvId
    const q = "UPDATE tvs SET `Url`=?,`Name`=?,`Model`=?,`Size`=?,`Price`=?,`Brand`=? WHERE TvId = ? "
    const values = [
        req.body.Url,
        req.body.Name,
        req.body.Model,
        req.body.Size,
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[...values,id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully updated to phones!")
    })
})

app.post('/tvs',(req,res) => {
    const q = "INSERT INTO tvs (`TvId`,`Url`,`Name`,`Model`,`Size`,`Price`,`Brand`) VALUES (?)"
    const values = [
        req.body.TvId,
        req.body.Url,
        req.body.Name,
        req.body.Model,
        req.body.Size,
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/tvs/:TvId',(req,res)=>{
    const id = req.params.TvId
    const q = "SELECT *FROM tvs WHERE TvId = ?"
    db.query(q,[id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/products',(req,res) => {
    const q = "SELECT * FROM products ORDER BY Pid desc"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
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

app.get('/:Name',(req,res) => {
    const q = "SELECT * FROM products WHERE Name = ?"
    const name = req.params.Name
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/:Name',(req,res) => {
    const name = req.params.Name
    const q = "DELETE FROM products WHERE Name = ? "
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted from products!")
    })
})

app.get('/prods/:Brand',(req,res) => {
    const q = "SELECT * FROM products WHERE Brand = ?"
    const brandname = req.params.Brand
    db.query(q,[brandname],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put('/products/:Pid',(req,res) => {
    const q = "UPDATE products SET `Url`=?,`Name`=?,`Model`=?,`Ram`=?,`Cpu`=?,`Gpu`=?,`Display`=?,`Storage`=?,`Front`=?,`Rear`=?,`Battery`=?,`Color`=?,`Cellular`=?,`Af_mode`=?,`Built_in_flash`=?,`Iso`=?,`View_finder`=?,`Pixels`=?,`Weight`=?,`Size`=?,`Price`=?,`Brand`=? WHERE Pid = ?"
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
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[...values,id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully updated")
    })
})

app.post('/products',(req,res) => {
    const q = "INSERT INTO products (`Pid`,`Url`,`Name`,`Model`,`Ram`,`Cpu`,`Gpu`,`Display`,`Storage`,`Front`,`Rear`,`Battery`,`Color`,`Cellular`,`Af_mode`,`Built_in_flash`,`Iso`,`View_finder`,`Pixels`,`Weight`,`Size`,`Price`,`Brand`) VALUES (?)"
    const values = [
        req.body.Pid,
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
        req.body.Price,
        req.body.Brand
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/ms/cart',(req,res) => {
    db.query("SELECT * FROM cart",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/ms/cart',(req,res) => {
    const q = "INSERT INTO cart (`url`,`model`,`price`) VALUES (?)"
    const values = [
        req.body.url,
        req.body.model,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added to cart!")
    })
})

app.delete('/ms/cart/:id',(req,res) => {
    const cartId = req.params.id
    const q = "DELETE FROM cart WHERE id = ? "
    db.query(q,[cartId],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted from cart!")
    })
})

app.get('/orders/orderlists',(req,res) => {
    const q = "SELECT * FROM orders order by id desc"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/orders/orderlists/:id',(req,res) => {
    const q = "DELETE FROM orders WHERE id=?"
    const id = req.params.id
    db.query(q,[id],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted!")
    })
})

app.get('/orders/orderlists/:cusname',(req,res) => {
    const name = req.params.cusname
    const q = "SELECT * FROM orders WHERE cusname = ?"
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/orders/orderlists',(req,res) => {
    const q = "INSERT INTO orders (`date`,`cusname`,`email`,`phone`,`address`,`item`,`quantity`,`price`,`total`) VALUES (?)"
    const values = [
        req.body.date,
        req.body.cusname,
        req.body.email,
        req.body.phone,
        req.body.address,
        req.body.item,
        req.body.quantity,
        req.body.price,
        req.body.total
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get("/ms/delivered",(req,res)=>{
    db.query("SELECT * FROM deliver order by Did desc",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/ms/delivered',(req,res) => {
    const q = "INSERT INTO deliver (`date`,`cusname`,`email`,`phone`,`address`,`item`,`quantity`,`price`,`total`) VALUES (?)"
    const values = [
        req.body.date,
        req.body.cusname,
        req.body.email,
        req.body.phone,
        req.body.address,
        req.body.item,
        req.body.quantity,
        req.body.price,
        req.body.total
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get("/ms/delivered/:cusname",(req,res)=>{
    const q = "SELECT * FROM deliver WHERE cusname = ?"
    const name = req.params.cusname
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

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
    const q = "INSERT INTO user (`Name`,`Email`,`Address`,`Phone`,`Password`) VALUES (?)"
    const values = [
        req.body.Name,
        req.body.Email,
        req.body.Address,
        req.body.Phone,
        req.body.Password
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Sign up successful!")
    })
})

app.put('/ms/users/:Email',(req,res) => {
    const q = "UPDATE user SET `Password`=? WHERE Email = ?"
    const email = req.params.Email
    const values = [
        req.body.Password
    ]
    db.query(q,[...values,email],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully updated")
    })
})

app.get('/ms/feedbacks',(req,res) => {
    db.query("SELECT * FROM feedback order by id desc",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/ms/feedbacks',(req,res) => {
    const q = 'INSERT INTO feedback (`Uname`,`Email`,`Subject`,`Fback`) VALUES (?)'
    const values = [
        req.body.Uname,
        req.body.Email,
        req.body.Subject,
        req.body.Fback
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json('Successfully added.')
    })
})

app.get('/ms/count',(req,res)=>{
    const q = "SELECT * FROM count"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put('/ms/count',(req,res)=>{
    const q = "UPDATE count SET count = count+1 WHERE id = 1"
    db.query(q,(data,err)=>{
        if(err) return res.json(err)
        return res.json("successfully updated")
    })
})

app.listen('8800',() => {
    console.log('Connected to backend!')
})