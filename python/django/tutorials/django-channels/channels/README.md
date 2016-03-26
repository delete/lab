# Django Channels example

[Tutorial here](https://blog.heroku.com/archives/2016/3/17/in_deep_with_django_channels_the_future_of_real_time_apps_in_django)
[Oficial repo here](https://github.com/jacobian/channels-example)

## Installation

Install the requirements:

```sh
$ pip install -r requirements.txt
```

## Usage example

A Redis server is needed, a Docker container can be used.

```sh
$ docker run -it  -p 6379:6379 redis
```

To run locally:

```sh
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py collectstatic
$ python manage.py runserver
```
