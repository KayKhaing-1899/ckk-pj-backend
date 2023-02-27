import express from 'express'
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

app.get('/products',(req,res) => {
    const q = "SELECT * FROM products"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/products/:name',(req,res) => {
    const q = "SELECT * FROM products WHERE name = ?"
    const name = req.params.name
    db.query(q,[name],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/products',(req,res) => {
    const q = "INSERT INTO products (`id`,`url`,`name`,`model`,`ram`,`cpu`,`gpu`,`display`,`storage`,`front`,`rear`,`battery`,`color`,`cellular`,`af_mode`,`built_in_flash`,`iso`,`view_finder`,`pixels`,`weight`,`size`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.model,
        req.body.ram,
        req.body.cpu,
        req.body.gpu,
        req.body.display,
        req.body.storage,
        req.body.front,
        req.body.rear,
        req.body.battery,
        req.body.color,
        req.body.cellular,
        req.body.af_mode,
        req.body.built_in_flash,
        req.body.iso,
        req.body.view_finder,
        req.body.pixels,
        req.body.weight,
        req.body.size,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/acer',(req,res) => {
    const q = "SELECT * FROM acer"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/acer/:id',(req,res) => {
    const acerId = req.params.id
    const q = "SELECT * FROM acer WHERE id = ?"
    db.query(q,[acerId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/acer',(req,res) => {
    const q = "INSERT INTO acer (`id`,`url`,`name`,`model`,`ram`,`cpu`,`gpu`,`display`,`storage`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.model,
        req.body.ram,
        req.body.cpu,
        req.body.gpu,
        req.body.display,
        req.body.storage,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/asus',(req,res) => {
    const q = "SELECT * FROM asus"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/asus/:id',(req,res) => {
    const asusId = req.params.id
    const q = "SELECT * FROM asus WHERE id = ?"
    db.query(q,[asusId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/asus',(req,res) => {
    const q = "INSERT INTO asus (`id`,`url`,`name`,`model`,`ram`,`cpu`,`gpu`,`display`,`storage`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.model,
        req.body.ram,
        req.body.cpu,
        req.body.gpu,
        req.body.display,
        req.body.storage,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/dell',(req,res) => {
    const q = "SELECT * FROM dell"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/dell/:id',(req,res) => {
    const dellId = req.params.id
    const q = "SELECT * FROM dell WHERE id = ?"
    db.query(q,[dellId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/dell',(req,res) => {
    const q = "INSERT INTO dell (`id`,`url`,`name`,`model`,`ram`,`cpu`,`gpu`,`display`,`storage`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.model,
        req.body.ram,
        req.body.cpu,
        req.body.gpu,
        req.body.display,
        req.body.storage,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/hp',(req,res) => {
    const q = "SELECT * FROM hp"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/hp/:id',(req,res) => {
    const hpId = req.params.id
    const q = "SELECT * FROM hp WHERE id = ?"
    db.query(q,[hpId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/hp',(req,res) => {
    const q = "INSERT INTO hp (`id`,`url`,`name`,`model`,`ram`,`cpu`,`gpu`,`display`,`storage`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.model,
        req.body.ram,
        req.body.cpu,
        req.body.gpu,
        req.body.display,
        req.body.storage,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/msi',(req,res) => {
    const q = "SELECT * FROM msi"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/msi/:id',(req,res) => {
    const msiId = req.params.id
    const q = "SELECT * FROM msi WHERE id = ?"
    db.query(q,[msiId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/msi',(req,res) => {
    const q = "INSERT INTO msi (`id`,`url`,`name`,`model`,`ram`,`cpu`,`gpu`,`display`,`storage`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.model,
        req.body.ram,
        req.body.cpu,
        req.body.gpu,
        req.body.display,
        req.body.storage,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/tv',(req,res) => {
    const q = "SELECT * FROM tv"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/tv/:id',(req,res) => {
    const tvId = req.params.id
    const q = "SELECT * FROM tv WHERE id = ?"
    db.query(q,[tvId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/tv',(req,res) => {
    const q = "INSERT INTO tv (`id`,`url`,`name`,`model`,`size`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.model,
        req.body.size,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/sony',(req,res) => {
    const q = "SELECT * FROM sony"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/sony/:id',(req,res) => {
    const sonyId = req.params.id
    const q = "SELECT * FROM sony WHERE id = ?"
    db.query(q,[sonyId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/sony',(req,res) => {
    const q = "INSERT INTO sony (`id`,`url`,`name`,`af_mode`,`built_in_flash`,`iso`,`view_finder`,`pixels`,`weight`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.af_mode,
        req.body.built_in_flash,
        req.body.iso,
        req.body.view_finder,
        req.body.pixels,
        req.body.weight,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/fuji',(req,res) => {
    const q = "SELECT * FROM fuji"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/fuji/:id',(req,res) => {
    const fujiId = req.params.id
    const q = "SELECT * FROM fuji WHERE id = ?"
    db.query(q,[fujiId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/fuji',(req,res) => {
    const q = "INSERT INTO fuji (`id`,`url`,`name`,`af_mode`,`built_in_flash`,`iso`,`view_finder`,`pixels`,`weight`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.af_mode,
        req.body.built_in_flash,
        req.body.iso,
        req.body.view_finder,
        req.body.pixels,
        req.body.weight,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/canon',(req,res) => {
    const q = "SELECT * FROM canon"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/canon/:id',(req,res) => {
    const canonId = req.params.id
    const q = "SELECT * FROM canon WHERE id = ?"
    db.query(q,[canonId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/canon',(req,res) => {
    const q = "INSERT INTO canon (`id`,`url`,`name`,`af_mode`,`built_in_flash`,`iso`,`view_finder`,`pixels`,`weight`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.af_mode,
        req.body.built_in_flash,
        req.body.iso,
        req.body.view_finder,
        req.body.pixels,
        req.body.weight,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/samsung',(req,res) => {
    const q = "SELECT * FROM samsung"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/samsung/:id',(req,res) => {
    const samsungId = req.params.id
    const q = "SELECT * FROM samsung WHERE id = ?"
    db.query(q,[samsungId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/samsung',(req,res) => {
    const q = "INSERT INTO samsung (`id`,`url`,`name`,`front`,`rear`,`battery`,`ram`,`storage`,`color`,`cellular`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.front,
        req.body.rear,
        req.body.battery,
        req.body.ram,
        req.body.storage,
        req.body.color,
        req.body.cellular,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/oppo',(req,res) => {
    const q = "SELECT * FROM oppo"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/oppo/:id',(req,res) => {
    const oppoId = req.params.id
    const q = "SELECT * FROM oppo WHERE id = ?"
    db.query(q,[oppoId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/oppo',(req,res) => {
    const q = "INSERT INTO oppo (`id`,`url`,`name`,`front`,`rear`,`battery`,`ram`,`storage`,`color`,`cellular`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.front,
        req.body.rear,
        req.body.battery,
        req.body.ram,
        req.body.storage,
        req.body.color,
        req.body.cellular,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/vivo',(req,res) => {
    const q = "SELECT * FROM vivo"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/vivo/:id',(req,res) => {
    const vivoId = req.params.id
    const q = "SELECT * FROM vivo WHERE id = ?"
    db.query(q,[vivoId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/vivo',(req,res) => {
    const q = "INSERT INTO vivo (`id`,`url`,`name`,`front`,`rear`,`battery`,`ram`,`storage`,`color`,`cellular`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.front,
        req.body.rear,
        req.body.battery,
        req.body.ram,
        req.body.storage,
        req.body.color,
        req.body.cellular,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/redmi',(req,res) => {
    const q = "SELECT * FROM redmi"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/redmi/:id',(req,res) => {
    const redmiId = req.params.id
    const q = "SELECT * FROM redmi WHERE id = ?"
    db.query(q,[redmiId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/redmi',(req,res) => {
    const q = "INSERT INTO redmi (`id`,`url`,`name`,`front`,`rear`,`battery`,`ram`,`storage`,`color`,`cellular`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.front,
        req.body.rear,
        req.body.battery,
        req.body.ram,
        req.body.storage,
        req.body.color,
        req.body.cellular,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})

app.get('/huawei',(req,res) => {
    const q = "SELECT * FROM huawei"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/huawei/:id',(req,res) => {
    const huaweiId = req.params.id
    const q = "SELECT * FROM huawei WHERE id = ?"
    db.query(q,[huaweiId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/huawei',(req,res) => {
    const q = "INSERT INTO huawei (`id`,`url`,`name`,`front`,`rear`,`battery`,`ram`,`storage`,`color`,`cellular`,`price`) VALUES (?)"
    const values = [
        req.body.id,
        req.body.url,
        req.body.name,
        req.body.front,
        req.body.rear,
        req.body.battery,
        req.body.ram,
        req.body.storage,
        req.body.color,
        req.body.cellular,
        req.body.price
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully added!")
    })
})



app.get('/cart',(req,res) => {
    db.query("SELECT * FROM cart",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/cart',(req,res) => {
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

app.delete('/cart/:id',(req,res) => {
    const cartId = req.params.id
    const q = "DELETE FROM cart WHERE id = ? "
    db.query(q,[cartId],(err,data) => {
        if(err) return res.json(err)
        return res.json("Successfully deleted from cart!")
    })
})

app.get('/orderlists',(req,res) => {
    db.query("SELECT * FROM orders",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/orderlists',(req,res) => {
    const q = "INSERT INTO orders (`cusname`,`email`,`phone`,`address`,`item`,`quantity`,`price`,`total`) VALUES (?)"
    const values = [
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

app.get('/admin',(req,res) => {
    db.query("SELECT * FROM admin",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/users',(req,res) => {
    db.query("SELECT * FROM user",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/users',(req,res) => {
    const q = "INSERT INTO user (`Name`,`Email`,`Address`,`Phone`,`Password`,`Cpassword`) VALUES (?)"
    const values = [
        req.body.Name,
        req.body.Email,
        req.body.Address,
        req.body.Phone,
        req.body.Password,
        req.body.Cpassword
    ]
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Sign up successful!")
    })
})

app.get('/feedbacks',(req,res) => {
    db.query("SELECT * FROM feedback",(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/feedbacks',(req,res) => {
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

app.listen('8800',() => {
    console.log('Connected to backend!')
})