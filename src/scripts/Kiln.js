export const firePottery = (piece, temp) => {
    const kiln = {
        piece: piece,
        temp: temp,
        fired: true,
        cracked: false
    }

    if (kiln.temp > 2200) {
        kiln.cracked = true
    }

    return kiln;
}