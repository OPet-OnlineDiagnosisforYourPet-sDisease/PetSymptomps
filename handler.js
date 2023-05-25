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
            // Mengumpulkan nama gejala yang dipilih
            const gejala = selectedGejala.map((value, index) => {
                if (value === '1') {
                    return data.gejala[index].nama;
                }
            }).filter(Boolean);

            if (gejala.length > 0) {
                // Jika berhasil, kirim respons dengan status code 201 dan data gejala
                res.status(201).json({ success: true, message: 'Gejala berhasil dipost.', gejala: gejala });
            } else {
                // Jika tidak ada gejala yang dipilih, kirim respons dengan status code 400 dan pesan kesalahan
                res.status(400).json({ error: 'Tidak ada gejala yang dipilih.' });
            }
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
