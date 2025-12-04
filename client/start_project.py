import subprocess
import os

# 1. Zum Verzeichnis wechseln
project_dir = r"C:\Users\Justin Koch\Desktop\Golden-Investments-main"
os.chdir(project_dir)
print(f"Aktuelles Verzeichnis: {os.getcwd()}")

# 2. Abhängigkeiten installieren
# subprocess.run("npm install", shell=True, check=True) # Optional, falls noch nicht installiert

# 3. Den Node.js-Server starten
# 'Popen' wird verwendet, um den Server im Hintergrund laufen zu lassen, da er blockieren würde.
print("\n--- Starte Node.js Server ---")
server_process = subprocess.Popen(["node", "server/server.js"], shell=True)

# 4. Den Client (npm start) starten
print("\n--- Starte Client (npm start) ---")
# Wechseln Sie in das Client-Verzeichnis
os.chdir(os.path.join(project_dir, "client"))
subprocess.run("npm start", shell=True, check=True)
# Hinweis: 'npm start' wird die Ausführung des Skripts blockieren, bis der Client beendet wird.

# 5. Wenn der Client beendet ist, den Server beenden
# server_process.terminate()