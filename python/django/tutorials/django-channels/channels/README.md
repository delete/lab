# Django Channels example

One to two paragraph statement about your product and what it does.



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
