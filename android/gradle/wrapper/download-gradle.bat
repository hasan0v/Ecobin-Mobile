@echo off
REM Download gradle-wrapper.jar if it doesn't exist
if not exist "%~dp0gradle-wrapper.jar" (
    echo Downloading gradle-wrapper.jar...
    powershell -NoProfile -NonInteractive -Command ^
        "$url='https://gradle.org/downloads'; " ^
        "try { " ^
        "  $response = [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; " ^
        "  Invoke-WebRequest -Uri 'https://services.gradle.org/distributions/gradle-7.6.2-all.zip' -OutFile '%~dp0gradle-7.6.2-all.zip' -TimeoutSec 300; " ^
        "  Add-Type -AssemblyName System.IO.Compression.FileSystem; " ^
        "  [System.IO.Compression.ZipFile]::ExtractToDirectory('%~dp0gradle-7.6.2-all.zip', '%~dp0..'); " ^
        "  Write-Host 'Gradle downloaded and extracted'; " ^
        "} catch { " ^
        "  Write-Host 'Download failed, please download manually'; " ^
        "}"
)

if exist "%~dp0gradle-wrapper.jar" (
    echo gradle-wrapper.jar found
) else (
    echo ERROR: gradle-wrapper.jar not found
    exit /b 1
)
