This is still WIP but is the framework for the update server.

3 main parts.
make_db.py creates the inital database for the app
scanner.py to be run on a timer and updates the server database with changes
crud.py extremely simple api that the app queries to retrieve updates

To run outside of a container, install requirements and then....
`python -m app.scanner`
`python -m app.make_db`
