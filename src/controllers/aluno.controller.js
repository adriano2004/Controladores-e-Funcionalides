class UsuarioController {
    async aluno_inserir(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async historico_listar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async cpf_buscar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async nota_atualizar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

    async aluno_remover(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = UsuarioController;