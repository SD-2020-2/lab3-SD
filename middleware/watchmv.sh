#!/bin/bash

rm asd.txt
rm dfg.txt
"(date +TIME:%H:%M:%S;echo Servidor1;curl --connect-timeout 5 192.168.0.9:3000; echo '';) >> asd.txt"