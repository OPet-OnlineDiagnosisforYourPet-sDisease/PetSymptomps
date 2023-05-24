const data = require('./data.json');

function getGejala(req, res) {
    try {
        res.status(200).json({ success: true, message: 'Data gejala berhasil diperoleh.', data: data.gejala });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Terjadi kesalahan dalam mendapatkan gejala.' });
    }
}

function postGejala(req, res) {
    try {
        const selectedGejala = req.body.gejala;
        if (selectedGejala) {
            const gejala = selectedGejala
                .map((value, index) => {
                    if (value === 1) {
                        return data.gejala[index];
                    }
                })
                .filter(Boolean);

            res.status(201).json({ success: true, message: 'Gejala berhasil dipost.', gejala: gejala });
        } else {
            res.status(400).json({ error: 'Gejala tidak ditemukan.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan dalam memposting gejala.' });
    }
}

module.exports = {
    getGejala,
    postGejala
};
