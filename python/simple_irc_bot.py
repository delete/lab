import socket

SERVER = ''
CHANNEL = ''
BOTNICK = 'Bot_'
PORT = 6667
PASS = ''


def sendmsg(msg):
	ircsock.send("PRIVMSG "+ CHANNEL +" :"+ msg +"\r\n")

def joinchannel():
	ircsock.send("JOIN %s %s\r\n" % (CHANNEL, PASS))

def identifying():
	ircsock.send("NICK %s\r\n" % BOTNICK)
	ircsock.send("USER %s %s any :%s\r\n" % (BOTNICK, SERVER, BOTNICK))

def quit():
	ircsock.send("QUIT :%s\r\n" %('T+'))
	ircsock.close()

ircsock = socket.socket()
ircsock.connect((SERVER, PORT))
identifying()
joinchannel()

while True:
	ircmsg = ircsock.recv(2048)
	ircmsg = ircmsg.strip('\n\r')

	if '!ping' in ircmsg:
		sendmsg('Pong!')

	if '!quit' in ircmsg:
		quit()
		break

	if ircmsg.find('PING') != -1:
	    n = ircmsg.split(':')[1]
	    ircsock.send('PONG :' + n)

	if '!commands' in ircmsg:
		sendmsg('Commads: !ping, !quit')
