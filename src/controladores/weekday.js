const calcularDia = async (req, res) => {

    try {

        const { startDay, amountOfDays } = req.query;

        const week = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]

        if(!startDay) {
            return res.status(400).json("Não foi informado o dia inicial.");
        }

        if(!amountOfDays) {
            return res.status(400).json("Não foi informada a quantidade de dias a contar.");
        }

        const indiceDiaDaSemana = week.indexOf(startDay) + Number(amountOfDays);

        const diaDaSemana = week[indiceDiaDaSemana % week.length];

        return res.status(200).json(diaDaSemana);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    calcularDia
};