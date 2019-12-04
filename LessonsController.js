const Lesson = require('./lesson')

class LessonsController {
	async all (req, res) {
		try {
			const lessons = await Lesson.find()
			res.send(lessons)
		} catch(e) {
				return res.send("Error");
		}
	}

	async getOne(req, res) {
		console.log(req.params.id)
		try {
			const lesson = Lesson.findById(req.params.id).exec()
			res.send(lesson)
		} catch(e) {
			res.send("Error");
		}
	}

	async create(req, res) {
		try {
			await Lesson.create(req.body)
			res.sendStatus(200)
		} catch(e) {
			res.send("Error");
		}
	}

	async update(req, res) {
		try {
			const lesson = Lesson.findByIdAndUpdate(req.params.id, req.body)
			res.sendStatus(200)
		} catch(e) {
			res.send("Error");
		}
	}

	async delete(req, res)  {
		try {
			await Lesson.findByIdAndDelete(req.params.id)
			res.sendStatus(200)
		} catch(e) {
			res.send("Error");
		}
	}
}


module.exports = new LessonsController()