### for running the backend

### clone the project
``` bash
git  clone https://github.com/Navaraj-Poudel/Blockchain_Based_RFID_Card.git
```

### create a virtual environment
``` bash
pip install virtualenv
virtualenv majorproject
source majorproject/bin/activate
```

### install django in the virtual environment
``` bash
pip install django
```

### install django rest framework for creating REST API
``` bash
pip install djangorestframework
```

### install mysql client for database
``` bash
pip install mysqlclient
```

### setup database in your device
go to the ```settings.py``` file and replace sqllite data base with mysql database
``` bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'USER': 'your user name',
        'PASSWORD': 'your sql password',
        'NAME': 'HospitalDatabase',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

### create a database with name HospitalDatabase
``` bash
mysql -u <your user name> -p <your sql password>
create database HospitalDatabase
```

### install cors header for frontend 
``` bash
pip install django-cors-headers
```

### install simple JWT for token generation
``` bash
pip install djangorestframework-simplejwt
```

### install pillow field
``` bash
pip install pillow 
```
