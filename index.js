const express = require('express');
const{PrismaClient}=require('@prisma/client')

const app =express();
const prisma = new PrismaClient();

app.use(express.json())

// create
app.post('/additems', async (req, res) => {
    try {
        console.log('Request Body:', req.body); 
    const { name, price } = req.body;
    const newItem = await prisma.item.create({
      data: {
        name,
        price,
      },
    });
    res.json(newItem);
    } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
// read-all
app.get('/showall',async (req,res)=>{
    try {
        const items= await prisma.item.findMany();
    res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
})

// read by id
app.get('/item/:id',async(req,res)=>{
    try {
        const{id}=req.params;
    const itemx= await prisma.item.findUnique({
        where:{
            id:parseInt(id),
        },
    });
    res.json(itemx.name);  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
})



// delete
app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
    console.log('Deleting item with ID:', id);
  
    try {
      await prisma.item.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json({ message: 'Item deleted' });
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// update
  app.put('/update/:id',async(req,res)=>{
    try {
    const{id}=req.params;
    const{name,price}=req.body;
    console.log(`updating item with ${id}`);
    const updatedItem= await prisma.item.update({
        where:{
            id:parseInt(id),
        },
        data:{
            name,
            price,
        },
    })
    res.json(updatedItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
  })
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});