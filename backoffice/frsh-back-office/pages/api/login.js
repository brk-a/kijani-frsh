import bcrypt from 'bcrypt'
import { PrismaClient, PrismaClientKnownRequestError } from '@prisma/client'
import { useRouter } from 'next/router'

const prisma = new PrismaClient()
const router = useRouter()
const login = async (req, res) => {
  if(req.method==="POST"){
    try {
        const {username, password} = req.body
            const hashedPassword = hashPassword(password)
            const existingUser = await prisma.users.findFirst({
                where: {
                    OR: [{
                            staffID: username,
                        },
                        { username },
                    ],
                    AND: [{hashedPassword}]
                },
            })

            if(!existingUser){
                const errorMessage = "User does not exist"
                router.push("/register")
                return res.status(400).json({ message: errorMessage })
            }
            return res.status(200).json({ message: 'User logged in successfully' })
        
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            // Handle Prisma error codes here
            console.log('Prisma error:', error.meta, error.message)
        }
    
        return res.status(400).json({ Prisma: 'failed to log in user' })
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

export default login