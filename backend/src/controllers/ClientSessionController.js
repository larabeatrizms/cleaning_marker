// index(retorna listagem de sessões), show(listar uma unica sessão),
// store(criar uma sessão), update(alterar uma sessão), destroy(deletar uma sessão) 

const Client = require('../models/Client')

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let client = await Client.findOne({ email });

        if(!client) {
            client = await Client.create({ email });
        }

        return res.json(client);
    }
};