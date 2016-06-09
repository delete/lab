from django.apps import AppConfig


class ImagesConfig(AppConfig):
    # defines the full Python path to the application
    name = 'images'
    # human-readable name for this application
    verbose_name = 'Image bookmarks'

    def ready(self):
        # import signal handlers
        from . import signals
