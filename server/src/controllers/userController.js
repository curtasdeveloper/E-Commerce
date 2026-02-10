import * as userModel from '../models/userModel.js';

export const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await userModel.findByEmail(email);
        if (existingUser) {
            return res.status(409).json({
                error: 'Email Already exist'
            });
        }

        const user = await userModel.create({email, password});
        res.status(201).json(user);        
        
    } catch (error) {
        res.status(400).json({
            error: error.message,
            success: false
        })
    }
}
