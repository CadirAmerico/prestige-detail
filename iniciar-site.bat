@echo off
cd /d "%~dp0"
echo ============================================
echo  Prestige Detail - http://localhost:3000
echo  Rede local: http://prestige-detail.192.168.1.63.nip.io:3000
echo ============================================
call node_modules\.bin\next.cmd start -H 0.0.0.0 -p 3000
pause
