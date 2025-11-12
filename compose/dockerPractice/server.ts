import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();
const port = 3000;
const prisma = new PrismaClient()

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
    const user = await prisma.user.findMany()
    res.send(`Users are: ${user}`);

    console.log('Welcome to the home On Server 1');

});
app.post('/', async (req: Request, res: Response) => {
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
        },
    })
    res.send(`User created: ${user}`);
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
