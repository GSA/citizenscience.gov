#!/usr/bin/env python

with open('11-18-19.txt') as fo:
    op=''
    start=0
    cntr=502
    for x in fo.read().split("\n"):
        if(x=="-"):
            if (start==1):
                with open(str(cntr) + '.md', 'w') as opf:
                    opf.write(op)   
                    opf.close()
                    op=''
                    cntr+=1
            else:
                start=1
        else:
            op= op + x + '\n'
    fo.close()