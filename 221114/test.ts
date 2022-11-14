const game_moneyTS = (OneHourLeather:number, time:number) => {
  const leatherGold = Math.floor(OneHourLeather / 2)
  const leatherCopper = (OneHourLeather % 2) * 16

  let totlaLeatehr = OneHourLeather * time
  let totalLeatherGold = Math.floor(totlaLeatehr / 2)
  let totalLeatherCopper = (totlaLeatehr % 2) * 16

  console.log(`이날 공미남 플레이어가 한 시간 동안 플레이로 얻은 gold의 개수는 ${leatherGold}개 입니다.`)
  console.log(`gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ${leatherCopper}개의 copper를 챙겼습니다`)
  console.log(`공미남 플레이어는 한 시간으로 게임을 끝내지 않고 장장 ${time}시간 플레이하여 총 "${totalLeatherGold}gold, ${totalLeatherCopper}copper"를 얻었습니다`)
}

game_moneyTS(45,8)
// ts-node 설치 : npx ts-node test.ts