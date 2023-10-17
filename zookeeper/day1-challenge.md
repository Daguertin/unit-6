```md
# Day 1

DB Name = zookeeper

## Bronze

BRONZE DESCRIPTION:
Design a '/user/create' endpoint that will let the user
send a new user object through the server to the database. If successful,
the server should store the user object sent in the database, and send
a response to the user with a 200 status code and the user
object just saved. If the operation fails, the
server should respond with a 500 status code and an error
message back.
Note :: You do not need to use bcrypt.

Database Fields:
username: String, required, unique
password: String, required
```