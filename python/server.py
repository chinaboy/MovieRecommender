#import daemon
import zmq
from time import sleep
from daemonize import Daemonize

pid = "/tmp/test.pid"


def listen_queue():
    ctx = zmq.Context.instance()
    s = ctx.socket(zmq.PULL)
    s.connect("tcp://127.0.0.1:3000")
    o = s.recv_json()
    print(o)

def main():
    while True:
        listen_queue()
        sleep(5)

if __name__ == "__main__":
    #daemon = Daemonize(app="test_app", pid=pid, action=main)
    #daemon.start()
    main()
