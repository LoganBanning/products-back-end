const create = (req, res) => {
  const db = req.app.get('db');
  const { name, description, price, image_url } = req.body;

  db.create_product([name, description, price, image_url])
  .then(() => res.sendStatus(200))
  .catch((e) => {
    res.status(500).send({errorMessage: 'Something went wrong'})
    console.log(e)
  });
}

const getOne = (req, res) => {
  const db = req.app.get('db');
  const { id } = req.params;

  db.read_product( id )
  .then( product => res.status(200).send( product ))
  .catch((e) => {
    res.status(500).send({errorMessage: 'Something went wrong'})
    console.log(e)
  });
}

const getAll = (req, res) => {
  const db = req.app.get('db');

  db.read_products()
  .then( products => res.status(200).send( products ))
  .catch((e) => {
    res.status(500).send({errorMessage: 'Something went wrong'})
    console.log(e)
  });
}

const update = (req, res) => {
  const db = req.app.get('db');
  const { params, query } = req;

  db.update_product([ params.id, query.desc ])
  .then(() => res.sendStatus(200))
  .catch((e) => {
    res.status(500).send({errorMessage: 'Something went wrong'})
    console.log(e) 
  });
}

const deleteProduct = (req, res) => {
  const db = req.app.get('db');
  const { id } = req.params;

  db.delete_product( id )
  .then(() => res.sendStatus(200))
  .catch((e) => {
    res.status(500).send({errorMessage: 'Something went wrong'})
    console.log(e)
  });
}




module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleteProduct,
}
