#!/bin/bash
echo ======================================================
echo creating $MONGO_INITDB_USERNAME in database $MONGO_INITDB_DATABASE
echo ======================================================

# https://www.mrnakumar.com/docker_mongo_security/

# dbUser is the userName used from applicatoin code to interact with databases and dbPwd is the password for this user.
# MONGO_INITDB_ROOT_USERNAME & MONGO_INITDB_ROOT_PASSWORD is the config for db admin.
# admin user is expected to be already created when this script executes. We use it here to authenticate as admin to create
# dbUser and databases.

echo ">>>>>>> trying to create database and users"
if [ -n "${MONGO_INITDB_ROOT_USERNAME:-}" ] && [ -n "${MONGO_INITDB_ROOT_PASSWORD:-}" ] && [ -n "${MONGO_INITDB_USERNAME:-}" ] && [ -n "${MONGO_INITDB_PASSWORD:-}" ]; then
mongo -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD"<<EOF
admin = db.getSiblingDB('admin');
admin.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD');

db=db.getSiblingDB('$MONGO_INITDB_DATABASE');

use $MONGO_INITDB_DATABASE;

db.$MONGO_INITDB_DATABASE.insert( { } )  
db.$MONGO_INITDB_DATABASE.remove( { } )

db.createUser({
  user:  '$MONGO_INITDB_USERNAME',
  pwd: '$MONGO_INITDB_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$MONGO_INITDB_DATABASE'
  }]
});

EOF
else
    echo "MONGO_INITDB_ROOT_USERNAME,MONGO_INITDB_ROOT_PASSWORD,MONGO_INITDB_USERNAME and MONGO_INITDB_PASSWORD must be provided. Some of these are missing, hence exiting database and user creation"
    exit 255
fi