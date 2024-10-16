const formatMessage = (data) => {
    const {bookingCode, name, date, from, to} = data;

    const message = `
    Konfirmasi Pemesanan Tiket

    Kode Booking: ${bookingCode}
    Nama: ${name}
    Tanggal: ${date}
    Dari: ${from}
    Ke: ${to}

    Terima kasih telah memesan tiket di tiketq.com. Silakan simpan kode booking ini untuk referensi Anda.
    `

    return message;
}

module.exports = { formatMessage }