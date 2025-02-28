let pieceId = 1

export const makePottery = (shape, weight, height) => {
    const piece = {
        id: pieceId,
        shape: shape,
        weight: weight,
        height, height
    }
    pieceId += 1

    return piece
}