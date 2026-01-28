import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 const postControllers = async (req, res) => {
  try {
    console.log(req)
    const { name, email, password } = req.body;

    console.log(name);
    console.log(email);
    console.log(password);

    if (!name || !email || !password) {
      return res.status(400).json({ error: "all require field must be" });
    }

    const postnewControllers = await prisma.User.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(201).json({
      message: "user add sucessful",
      postControllers: postnewControllers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export default postControllers





export const getuser = async (req ,res) => {
    try {
        const user = await prisma.User.findMany()
        console.log(user)
        res.status(200).json({ message:"user feched sucessfully", user})
        
    } catch (error) {
        console.error("error fecting" , error);
        res.status(500).json({error: "internal server error"})
        
    }
}
