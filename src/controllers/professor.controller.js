class UsuarioController {
    async profissao_inserir(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async profissao_listar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async historico_buscar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async endereco_atualizar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

    async professor_remover(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = UsuarioController;