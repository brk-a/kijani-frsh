import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const providers = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      username: { label: 'username', type: 'text' },
      password: { label: 'password', type: 'password' }
    },
    authorize: async credentials => {
      try {
        const username = credentials.username
        const providedPassword = credentials.password

        // // Validating phone number using regex (Kenyan phone numbers)
        // const kenyanPhoneNumberRegex = /^(?:\+254|07|254|01)\d{8,9}$/
        // if (!phoneNumber.match(kenyanPhoneNumberRegex)) {
        //   throw new Error('Invalid phone number. Please enter a valid Kenyan phone number.')
        // }

        // Fetch user data from the Prisma database based on the provided username
        const user = await prisma.users.findFirst({
          where: {
            username,
          }
        })

        if (user && user.hashedPassword) {
          const isPasswordValid = await bcrypt.compare(providedPassword, user.hashedPassword)
          if (isPasswordValid) {
            return {
              id: user.id,
              username: user.username,
            }
          }
        }

        // If user is not found or password doesn't match, return null
        return null
      } catch (error) {
        console.error('Error during authorisation:', error)

        return null
      }
    }
  })
]

export default NextAuth({
  providers,
  jwt: {
    secret: process.env.JWT_SECRET
  },
  session: {
    cookie: {
      name: 'session_cookie',
      maxAge: 24 * 60 * 60, // 24 hours
      sameSite: 'lax',
      httpOnly: true
    }
  },
  callbacks: {
    async session({ session, token }) {
      if (!token) {
        return null
      }

      if (Date.now() / 1000 > token.exp) {
        return null
      }

      session.user = token

      return session
    }
  }
})