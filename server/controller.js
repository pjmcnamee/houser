module.exports = {
	getAllHouses: async (req,res) => {
		const db = req.app.get('db')
		let response = await db.getAllHouses()
		res.status(200).send(response)
	},

	createHouse: (req,res) => {
		const db = req.app.get('db')
		console.log(req.body)
		const { name, address, city, state, zipcode, imgUrl, mortgage, rent } = req.body

		db.addHouse(name, address, city, state, zipcode, imgUrl, mortgage, rent)

		res.status(200).send('Added House')
	},

	deleteHouse: async (req,res) => {
		const db = req.app.get('db')
		const { id } = req.params

		let response = await db.deleteHouse(id)
		
		res.status(200).send(response)
	}
}