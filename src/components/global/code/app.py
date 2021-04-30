from os import system
import sys
from time import sleep
from random import randint
i=0
for _ in range(int(sys.argv[1])):
    rand=randint(int(sys.argv[2]),int(sys.argv[3]))
    with open('./temp.py','a') as f:
        for _ in range(rand):
            f.write(f"elif x1=={i} and x2=={i+1}:\n\tprint(x1+x2)\n")
            i+=1
        f.write('""" --IM_ES_N """\n')
    system('git add .')
    system('git commit -m "an commit"')
    sleep(randint(0,3))