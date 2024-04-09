function knightMoves(start, end) {
    const moves = isMoveValid(start, end)
    const shortPath = []
    
    let currentPos = end
    while (currentPos !== null) {
        shortPath.push(currentPos)
        currentPos = moves[currentPos]
    }
    shortPath.reverse()
    const pathLen = shortPath.length - 1
    console.log(`You made it in ${pathLen} moves! here is your path`);
    console.log(shortPath);
}

knightMoves([3,3],[4,3])
// You made it in 3 moves!  Here's your path
  [3,3]
  [4,5]
  [2,4]
  [4,3]
