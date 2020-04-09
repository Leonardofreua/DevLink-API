import File from '../models/File';
import Dev from '../models/Dev';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }

  async delete(req, res) {
    const { id } = req.params;

    const dev = await Dev.findOne({ file: id });

    await File.deleteOne({ _id: id });

    dev.file = undefined;

    await dev.save();

    return res.json({ dev });
  }
}

export default new FileController();
