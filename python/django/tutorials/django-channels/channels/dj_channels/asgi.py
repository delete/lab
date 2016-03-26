import os
import channels as c

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "dj_channels.settings")
channel_layer = c.asgi.get_channel_layer()
