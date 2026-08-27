@echo off
setlocal

cd /d "%~dp0"

if not exist package.json (
  echo [ERROR] No se encontro package.json en esta carpeta.
  echo Abre este archivo dentro de la raiz del proyecto.
  pause
  exit /b 1
)

where npm >nul 2>&1
if errorlevel 1 (
  echo [ERROR] npm no esta disponible en PATH.
  echo Instala Node.js desde https://nodejs.org/
  pause
  exit /b 1
)

if not exist node_modules (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo [ERROR] Fallo la instalacion de dependencias.
    pause
    exit /b 1
  )
)

echo Iniciando servidor de desarrollo y abriendo navegador...
echo URL esperada: http://localhost:5173/
call npm run dev -- --open

if errorlevel 1 (
  echo [ERROR] No se pudo iniciar el servidor.
  pause
  exit /b 1
)

endlocal
