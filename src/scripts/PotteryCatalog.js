const inventory = []

export const toSellOrNotToSell = (firedPiece) => {
    if (!firedPiece.cracked) {
        if (firedPiece.weight >= 6) {
            firedPiece.price = 40
        } else {
            firedPiece.price = 20
        }
        
        inventory.push(firedPiece)
    }
    
    return firedPiece;
}

export const usePottery = () => {
    return inventory;
    
}