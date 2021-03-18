
import socket

class Client:
    def __init__(self) -> None:
        self.server = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        self.server.connect(("127.0.0.1",20213))

    def send_msg(self):
        msg = b"This is a test from python client"
        self.server.send(msg)

    def run(self):
        self.send_msg()
        while True:
            server = self.server
            message, addr = server.recvfrom(1024)
            print(message,addr)
            break;

client = Client()
client.run()