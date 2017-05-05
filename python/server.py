#import daemon

from time import sleep
from daemonize import Daemonize
import pika

pid = "/tmp/test.pid"

def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)


def listen_queue():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()
    channel.queue_declare(queue='hello')

    channel.basic_consume(callback, queue='hello', no_ack=True)
    channel.start_consuming()


def main():
    while True:
        listen_queue()
        sleep(5)

daemon = Daemonize(app="test_app", pid=pid, action=main)
daemon.start()

