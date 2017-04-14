# SSH hacks

## Sending file to remote server

To copy directory recursively use -rp: r(recursive) and p(preserves modifications)

`$ scp /path/to/file username@server:/path/to/destination`

## Copying file from remote server

`$ scp -P 22 -r username@server:/path/to/copy path/to/save/local`