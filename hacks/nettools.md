# Net tools hacks

## Monitor incoming packets on a certain port and match against their data payload with a keyword:

ngrep -d any port **9052** | grep -i "**GET**"


## Listening on a specific port
tcpdump -n -i eth0 port PORT and '(tcp-syn|tcp-ack)!=0'
