import math

def game_money(OneHourLeather, time):
    silver = OneHourLeather*2
    OneHourGold = math.floor(silver/4)
    OneHourCopper = (silver%4)*8
    print(f'이날 공미남 플레이어가 한 시간 동안 플레이로 얻은 gold의 개수는 {OneHourGold}개 입니다.')
    print(f'gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 {OneHourCopper}개의 copper를 챙겼습니다.')

    totalLeather = OneHourLeather * time
    totalSilver = totalLeather * 2
    totalGold = math.floor(totalSilver/4)
    totalCopper = (totalSilver%4)*8
    print(f'공미남 플레이어는 한 시간으로 게임을 끝내지 않고 장장 {time}시간 플레이하여 총 "{totalGold}gold, {totalCopper}copper"를 얻었습니다')

game_money(45,8)