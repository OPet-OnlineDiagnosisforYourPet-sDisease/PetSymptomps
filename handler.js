const data = require('./data.json');

function getGejala(req, res) {
    try {
        // Jika berhasil, kirim respons dengan status code 200 dan pesan success
        res.status(200).json({ success: true, message: 'Data gejala berhasil diperoleh.', data: data.gejala });
    } catch (error) {
        // Jika terjadi kesalahan, kirim respons dengan status code 500 dan pesan error
        res.status(500).json({ success: false, error: 'Terjadi kesalahan dalam mendapatkan gejala.' });
    }
}


function postGejala(req, res) {
    try {
        const selectedGejala = req.body.gejala;
        if (selectedGejala) {
            // Jika berhasil, kirim respons dengan status code 201 dan data gejala
            res.status(201).json({ success: 'Gejala berhasil dipost.', gejala: selectedGejala });
        } else {
            // Jika gagal, kirim respons dengan status code 400 dan pesan kesalahan
            res.status(400).json({ error: 'Gejala tidak ditemukan.' });
        }
    } catch (error) {
        // Jika terjadi kesalahan, kirim respons dengan status code 500 dan pesan kesalahan
        res.status(500).json({ error: 'Terjadi kesalahan dalam memposting gejala.' });
    }
}


module.exports = {
    getGejala,
    postGejala
};