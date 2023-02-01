export default function handler(req, res) {
    const { query } = req;
    const { id } = query;
    res.status(200).json({ name: 'John Wick', id })
  }
  