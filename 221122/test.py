import random
import math
# 파이썬은 다르게 해보기
# 클릭(여기서는 함수 실행 개수)할 때마다 게임이 한 번 진행
# 한 번 진행 할 때마다 배열이 변화
# 동일한 값이 있을 경우 배열의 해당 인덱스 열 삭제
# 해당 결과 출력
# 배열 값은 매개 변수로 사용
# 배열들의 배열로 매개 변수에 넣기


def bingo(array, coun, bing):
  
    count = coun
    bingo = bing
    def randomNumber(array):
      number = math.floor(random.random()*len(array))
      return number

    # print(len(array[0]))
    # print(range(len(array)-1))
    # print(range(len(array[0]-1)))

    for i in range(len(array)):
      array[i][randomNumber(array[0])] = 1


    for i in range(len(array[0])-1):
      if(array[0][i] == 1 and array[1][i] == 1 and array[2][i] == 1 and array[3][i] == 1 and array[4][i] == 1):
        print(array)
        del array[0][i]
        del array[1][i]
        del array[2][i]
        del array[3][i]
        del array[4][i]
        bingo += 1
        print(array)
    
    if(array[0][0] == 1 and array[1][0] == 1 and array[2][0] == 1 and array[3][0] == 1 and array[4][0] == 1 and len(array[0]) == 1 and len(array[1]) == 1 and len(array[2]) == 1 and len(array[3]) == 1 and len(array[4]) == 1):
      bingo += 1
      count += 1
    # print(array[0][0] == 0)
    # print(array[0])
    # print(array[1])
    # print(array[2])
    # print(array[3])
    # print(array[4])
    # print(array)
    count += 1
    # print(count, bingo)

    return array, count, bingo

lineOne = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
lineTwo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
lineThr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
lineFou = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
linefiv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

# print(bingo([lineOne, lineTwo, lineThr, lineFou, linefiv]))
# print(bingo(bingo([lineOne, lineTwo, lineThr, lineFou, linefiv])))
# print(bingo(bingo(bingo(bingo(bingo(bingo([lineOne, lineTwo, lineThr, lineFou, linefiv])))))))
# bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],0,0)
# bingo([lineOne, lineTwo, lineThr, lineFou, linefiv])
# bingo([lineOne, lineTwo, lineThr, lineFou, linefiv])
# bingo([lineOne, lineTwo, lineThr, lineFou, linefiv])
# bingo([lineOne, lineTwo, lineThr, lineFou, linefiv])
# bingo([lineOne, lineTwo, lineThr, lineFou, linefiv])
count = 0
bingoCount = 0
# print(bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount))
# count = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)[1]
# bingoCount = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)[2]


# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
# [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)



# def bingoClick():
#   return bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
  
while bingoCount < 10:
  [[lineOne, lineTwo, lineThr, lineFou, linefiv], count, bingoCount] = bingo([lineOne, lineTwo, lineThr, lineFou, linefiv],count,bingoCount)
  print(f'{count}번째에 {bingoCount} 빙고 완성')
  if(bingoCount == 10):
    print('승리')
#   print(bingoCount)


print(lineOne)
print(lineTwo)
print(lineThr)
print(lineFou)
print(linefiv)