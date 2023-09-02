import bcrypt from 'bcrypt'
import { PrismaClient, PrismaClientKnownRequestError } from '@prisma/client'

const prisma = new PrismaClient()
const register = async (req, res) => {
  if(req.method==="POST"){
    try {
        const {firstName, lastName, email, staffID, username, password, passwordAgain} = req.body
        if (password === passwordAgain) {
            const hashedPassword = hashPassword(password)
            const existingUser = await prisma.users.findFirst({
                where: {
                  OR: [{ email }, {staffID}, { username },]
                },
            })

            /** to do: check if staffID is a FK entity that points to `staffID` in table `employees`
             * and exists in table `users`
             * if yes: return 400 and error msg
             */

            if(existingUser){
            let errorMessage = ""
            if (existingUser.email === email) {
                errorMessage = 'Email already exists'
            } else if (existingUser.staffID === staffID) { //to remove
                errorMessage = 'You are already registered'
            } else if (existingUser.username === username) {
                errorMessage = 'Username already exists'
            }
        
            return res.status(400).json({ message: errorMessage })
            }

            const newUser = await prisma.users.create({
            data: {
                firstName,
                lastName,
                email,
                staffID,
                username,
                hashedPassword,
            }
            })
    
            console.log('newUser:', newUser)
            return res.status(200).json({ message: 'User created successfully' })
        } else {
            return res.status(400).json({ password: 'Passwords do not match' })
        }
        
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            // Handle Prisma error codes here
            console.log('Prisma error:', error.meta, error.message)
        }
    
        return res.status(400).json({ Prisma: 'failed to create user' })
    }
  } else {
    return res.status(405).end()
  }
}

const hashPassword = password => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt)
  
    return hashedPassword
}

export default register