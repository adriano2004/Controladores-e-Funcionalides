class UsuarioController {
    async materia_inserir(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async turma_listar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async professor_buscar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async professor_atualizar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

    async turma_remover(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = UsuarioController;