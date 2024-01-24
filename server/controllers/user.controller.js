const { user } = require('../models/user.model')

const userController = {
    getAll: async (req, res) => {
        try {
            const orxan = await user.find()
            res.send(orxan)
        } catch (error) {
            res.send('error')
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const yusif = await user.findById(id)
            res.send(yusif)
        } catch (error) {
            res.send('error')
        }
    },
    post: async (req, res) => {
        try {
            const { name, price, image } = req.body
            const newUser = new user({ name, price, image })
            await newUser.save()
            res.send(newUser)
        } catch (error) {
            res.send('error')
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await user.findByIdAndDelete(id)
            res.send('silindi')
        } catch (error) {
            res.send('error')
        }
    }
}

module.exports = { userController }