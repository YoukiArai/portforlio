from asyncore import write
import csv

f = open('dc_work_oiya_Arai_JavaScript/piano/gakuhu.txt','r',encoding='UTF-8')
data = f.read()

a = data.replace('(',',')
b = a.replace(')',',')
c = open('dc_work_oiya_Arai_JavaScript/piano/gakuhu.csv','w')
c.write(b)
f.close()
c.close()

print(b)
