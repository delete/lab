# Net tools hacks

## Monitor incoming packets on a certain port and match against their data payload with a keyword:

ngrep -d any port **9052** | grep -i "**GET**"