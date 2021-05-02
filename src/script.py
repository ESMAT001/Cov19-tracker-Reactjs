from os import system
import sys
from time import sleep
from random import randint
for _ in range(int(sys.argv[1])):
    rand=randint(int(sys.argv[2]),int(sys.argv[3]))
    with open('./temp.py','a') as f:
        for _ in range(rand):
            f.write("print('Hello world')\n")
        f.write('""" --IM_ES_N """\n')
    system('git add .')
    system('git commit -m "an commit"')
    sleep(3)